import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

// MUI
import { LoadingButton } from '@mui/lab';
import { Autocomplete, Dialog, FormHelperText, IconButton, TextField, useMediaQuery } from '@mui/material';
import { MuiOtpInput } from 'mui-one-time-password-input';

// Icons
import { GrFormClose } from 'react-icons/gr';

// Data
import countryPreCodes from '@/data/countries-preCodes';

// Components
import CountdownLogin from '../countdown-Login/countdown-Login';

// Apis
import useVerificationCode from '@/apis/login/useVerificationCode';
import useSendCode from '@/apis/login/useSendCode';

function LoginModal({ open, onClose }) {
   const [loginSteps, setLoginSteps] = useState(1);

   const { trigger: verificationCodeTrigger, isMutating: verificationCodeIsMutating } = useVerificationCode();
   const { trigger: sendCodeTrigger, isMutating: sendCodeIsMutating } = useSendCode();

   const isMobile = useMediaQuery('(max-width:900px)');

   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
      control,
      watch,
      getValues,
   } = useForm({
      defaultValues: {
         phoneNumber: '',
         preCodeNumber: '98',
         code: '',
      },
      mode: 'onSubmit',
   });

   const phoneNumberValue = watch('phoneNumber');

   const closeModalHandler = () => {
      onClose();
      reset();
      setLoginSteps(1);
   };

   const formSubmit = data => {
      const sanitizedPhoneNumber = data?.phoneNumber?.startsWith('0') ? data?.phoneNumber?.slice(1) : data?.phoneNumber;

      const fullPhoneNumber = `${data?.preCodeNumber}${sanitizedPhoneNumber}`;

      if (loginSteps === 1) {
         verificationCodeTrigger(
            { phone_number: fullPhoneNumber },
            {
               onSuccess: () => {
                  setLoginSteps(2);
               },
            }
         );
      } else if (loginSteps === 2) {
         const newData = {
            phone_number: fullPhoneNumber,
            otp: data?.code,
         };

         sendCodeTrigger(newData, {
            onSuccess: () => {
               closeModalHandler();
            },
         });
      }
   };

   const resendCode = () => {
      const phoneNumber = getValues('phoneNumber');
      const preCodeNumber = getValues('preCodeNumber');

      const sanitizedPhoneNumber = phoneNumber?.startsWith('0') ? phoneNumber?.slice(1) : phoneNumber;

      const fullPhoneNumber = `${preCodeNumber}${sanitizedPhoneNumber}`;

      verificationCodeTrigger(
         { phone_number: fullPhoneNumber },
         {
            onSuccess: () => {
               setLoginSteps(2);
            },
         }
      );
   };

   return (
      <Dialog
         open={open}
         onClose={closeModalHandler}
         fullWidth
         maxWidth="sm"
         sx={{ '& > div': { '& > div': { borderRadius: '15px' } } }}
      >
         <form className="p-[10px] customMd:p-[30px]" onSubmit={handleSubmit(formSubmit)}>
            <div className="flex items-center justify-between">
               <p className="font-kalamehSemiBold600 text-xs text-textColor1 customMd:text-[28px] customMd:leading-6">
                  {loginSteps === 1 ? 'ورود به حساب کاربری' : loginSteps === 2 ? 'کد فعالسازی را وارد کنید' : null}
               </p>
               <IconButton
                  sx={{ width: '25px', height: '25px', backgroundColor: '#2ED7FE80', padding: 0 }}
                  onClick={closeModalHandler}
               >
                  <GrFormClose size="20px" color="#000" />
               </IconButton>
            </div>

            <p className="mb-5 mt-15 font-kalamehRegular400 text-[11px] text-textColor3 customMd:mb-[60px] customMd:mt-[30px] customMd:text-2xl">
               {loginSteps === 1
                  ? 'لطفا شماره موبایل خود را برای ارسال کد فعال سازی وارد کنید'
                  : loginSteps === 2
                    ? `کد ۶ رقمی ارسال شدده به شماره ${phoneNumberValue} را وارد کنید`
                    : null}
            </p>

            {loginSteps === 1 ? (
               <div className="flex gap-[13px] customMd:gap-[30px]">
                  <div className="grow">
                     <TextField
                        fullWidth
                        variant="outlined"
                        placeholder="شماره موبایل"
                        size={isMobile ? 'small' : 'medium'}
                        sx={{ '& > div': { borderRadius: '10px', fontSize: isMobile && '12px' } }}
                        {...register('phoneNumber', {
                           required: {
                              value: true,
                              message: 'این فیلد اجباری است',
                           },
                           pattern: {
                              value: /^(09\d{9}|9\d{9})$/g,
                              message: 'لطفا یک شماره تلفن معتبر وارد کنید',
                           },
                        })}
                        error={!!errors?.phoneNumber}
                        helperText={errors?.phoneNumber?.message}
                        disabled={verificationCodeIsMutating}
                     />
                  </div>
                  <div className="w-[70px] customMd:w-[142px]">
                     <Controller
                        control={control}
                        name="preCodeNumber"
                        rules={{ required: 'این فیلد اجباری است' }}
                        render={({ field: { onChange, value }, fieldState }) => (
                           <>
                              <Autocomplete
                                 fullWidth
                                 options={countryPreCodes}
                                 disableClearable
                                 size={isMobile ? 'small' : 'medium'}
                                 value={value}
                                 onChange={(e, newValue) => onChange(newValue)}
                                 disabled={verificationCodeIsMutating}
                                 renderInput={params => (
                                    <TextField
                                       {...params}
                                       sx={{ '& > div': { borderRadius: '10px', fontSize: isMobile && '12px' } }}
                                    />
                                 )}
                              />

                              {fieldState.invalid
                                 ? errors?.preCodeNumber?.message && (
                                      <FormHelperText error>{errors?.preCodeNumber?.message}</FormHelperText>
                                   )
                                 : null}
                           </>
                        )}
                     />
                  </div>
               </div>
            ) : loginSteps === 2 ? (
               <>
                  <Controller
                     control={control}
                     name="code"
                     rules={{
                        required: 'لفطا کد را وارد کنید',
                        minLength: {
                           value: 6,
                           message: 'لفطا کد را وارد کنید',
                        },
                     }}
                     render={({ field: { onChange, value }, fieldState }) => (
                        <>
                           <MuiOtpInput
                              value={value}
                              onChange={onChange}
                              length={6}
                              dir="ltr"
                              gap={isMobile ? 1 : 2}
                              TextFieldsProps={{
                                 error: !!fieldState.invalid,
                                 type: 'number',
                                 size: isMobile ? 'small' : 'medium',
                                 sx: { '& > div': { borderRadius: '10px', fontSize: isMobile && '12px' } },
                              }}
                              sx={{
                                 input: {
                                    fontFamily: 'DanaFaNum',
                                    MozAppearance: 'textfield',
                                    appearance: 'textfield',
                                    '&::-webkit-inner-spin-button': {
                                       WebkitAppearance: 'none',
                                       appearance: 'none',
                                    },
                                 },
                              }}
                              onComplete={handleSubmit(formSubmit)}
                           />

                           {fieldState.invalid
                              ? errors?.code?.message && <FormHelperText error>{errors?.code?.message}</FormHelperText>
                              : null}
                        </>
                     )}
                  />

                  <CountdownLogin
                     initialCount={120}
                     onComplete={() => {}}
                     onResetClick={resendCode}
                     loading={verificationCodeIsMutating}
                  />
               </>
            ) : null}

            <div className="mt-3 customMd:mt-5">
               <LoadingButton
                  variant="contained"
                  fullWidth
                  type="submit"
                  sx={{
                     height: isMobile ? '35px' : '50px',
                     borderRadius: '10px',
                     fontFamily: 'kalamehSemiBold600',
                     fontSize: isMobile ? '13px' : '16px',
                     color: '#fff',
                  }}
                  loading={verificationCodeIsMutating || sendCodeIsMutating}
               >
                  {loginSteps === 1 ? 'ارسال کد' : loginSteps === 2 ? 'تایید کد' : null}
               </LoadingButton>
            </div>
         </form>
      </Dialog>
   );
}

export default LoginModal;
