'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState, useTransition } from 'react';

// MUI
import { Autocomplete, Button, IconButton, InputAdornment, OutlinedInput, Switch, TextField } from '@mui/material';

// Icons
import { GrFormClose } from 'react-icons/gr';
import { BsSliders } from 'react-icons/bs';
import { FiPhoneCall } from 'react-icons/fi';
import { Edit } from 'iconsax-react';
import { BiHomeAlt } from 'react-icons/bi';
import { CiSearch } from 'react-icons/ci';

// Data
import iranCities from '@/data/iran-cities';

// Components
import BackdropLoading from '@/components/template/backdrop-loading/backdrop-loading';

const insuranceList = [{ label: 'بیمه تامین اجتماعی' }, { label: 'بیمه سلامت' }, { label: 'خدمات درمانی' }];

const filterBtnSx = { backgroundColor: '#4040400D', height: '40px', paddingX: '10px', borderRadius: '5px' };
const autoCompleteSx = {
   backgroundColor: '#4040400D',
   fontSize: '14px !important',
   border: 'none !important',
   '*': { border: 'none !important', fontSize: '14px !important' },
};

function MedicalAdviceAside({ onClose, specialtyList, searchParams }) {
   const [visitType, setVisitType] = useState('');
   const [doctorSex, setDoctorSex] = useState('');
   const [insuranceValue, setInsuranceValue] = useState('');
   const [expertiseValue, setExpertiseValue] = useState('');
   const [doctorName, setDoctorName] = useState('');
   const [provinceValue, setProvinceValue] = useState('');
   const [cityValue, setCityValue] = useState('');
   const [electronic, setElectronic] = useState(false);

   const pathName = usePathname();
   const { push } = useRouter();
   const [isPending, startTransition] = useTransition();

   const applyFilters = () => {
      startTransition(() => {
         const filters = `${visitType ? `services_type=${visitType}&` : ''}${
            insuranceValue ? `insurance=${insuranceValue?.label}&` : ''
         }${provinceValue ? `state=${provinceValue?.label}&` : ''}${cityValue ? `city=${cityValue}&` : ''}${
            doctorSex ? `gender=${doctorSex}&` : ''
         }${doctorName?.trim() ? `name=${doctorName.trim()}&` : ''}${
            expertiseValue ? `specialty=${expertiseValue?.id}&` : ''
         }${electronic ? `online_prescription=${electronic}&` : ''}`;

         push(`${pathName}?${filters}`);
         if (onClose) {
            onClose();
         }
      });
   };

   useEffect(() => {
      setVisitType(searchParams?.services_type || '');
      setDoctorSex(searchParams?.gender || '');
      setDoctorName(searchParams?.name || '');
      setElectronic(!!searchParams?.online_prescription);

      const foundedExpertise = specialtyList?.find(item => Number(item?.id) === Number(searchParams?.specialty));
      setExpertiseValue(foundedExpertise || '');

      const foundedProvince = iranCities?.provinces?.find(item => item?.label === searchParams?.state);
      setProvinceValue(foundedProvince || '');

      const foundedCity = iranCities?.cities?.[foundedProvince?.label]?.find(item => item === searchParams?.city);
      setCityValue(foundedCity || '');

      const foundedInsurance = insuranceList?.find(item => item?.label === searchParams?.insurance);
      setInsuranceValue(foundedInsurance || '');
   }, [searchParams]);

   return (
      <div className="p-[30px]">
         <div className="flex items-center justify-between">
            <div className="flex items-center gap-[10px]">
               <BsSliders color="#2ED7FE" size="26px" className="rotate-180" />
               <p className="font-kalamehSemiBold600 text-xl leading-4 text-textColor1">فیلتر ها</p>
            </div>
            {onClose && (
               <IconButton
                  sx={{ width: '25px', height: '25px', backgroundColor: '#2ED7FE80', padding: 0 }}
                  onClick={onClose}
               >
                  <GrFormClose size="20px" color="#000" />
               </IconButton>
            )}
         </div>

         <div className="mt-[30px]">
            <p className="text-15 text-textColor1">فیلتر بر اساس</p>
            <div className="mt-[10px] space-y-[10px]">
               <Button fullWidth sx={filterBtnSx} onClick={() => setVisitType('مشاوره تلفنی')}>
                  <div className="flex w-full items-center justify-between text-textColor2">
                     <div className="flex items-center gap-[10px] text-15">
                        <FiPhoneCall />
                        <p>مشاوره تلفنی</p>
                     </div>
                     <span
                        className={`size-[15px] rounded-full transition-all duration-200 ${visitType === 'مشاوره تلفنی' ? 'bg-primaryBlue' : 'bg-[#40404033]'}`}
                     />
                  </div>
               </Button>
               <Button fullWidth sx={filterBtnSx} onClick={() => setVisitType('مشاوره متنی')}>
                  <div className="flex w-full items-center justify-between text-textColor2">
                     <div className="flex items-center gap-[10px] text-15">
                        <Edit className="w-[15px]" />
                        <p>مشاوره متنی</p>
                     </div>
                     <span
                        className={`size-[15px] rounded-full transition-all duration-200 ${visitType === 'مشاوره متنی' ? 'bg-primaryBlue' : 'bg-[#40404033]'}`}
                     />
                  </div>
               </Button>
               <Button fullWidth sx={filterBtnSx} onClick={() => setVisitType('نوبت دهی مطب')}>
                  <div className="flex w-full items-center justify-between text-textColor2">
                     <div className="flex items-center gap-[10px] text-15">
                        <BiHomeAlt />
                        <p>نوبت دهی مطب</p>
                     </div>
                     <span
                        className={`size-[15px] rounded-full transition-all duration-200 ${visitType === 'نوبت دهی مطب' ? 'bg-primaryBlue' : 'bg-[#40404033]'}`}
                     />
                  </div>
               </Button>
            </div>
         </div>

         <div className="mt-[30px]">
            <p className="text-15 text-textColor1">فیلتر بر اساس بیمه</p>
            <div className="mt-[10px]">
               <Autocomplete
                  size="small"
                  disablePortal
                  fullWidth
                  options={insuranceList}
                  value={insuranceValue}
                  onChange={(e, newValue) => setInsuranceValue(newValue)}
                  renderInput={params => <TextField {...params} placeholder="انتخاب بیمه" sx={autoCompleteSx} />}
               />
            </div>
         </div>

         <div className="mt-[30px]">
            <p className="text-15 text-textColor1">فیلتر بر اساس شهر</p>
            <div className="mt-[10px] flex flex-col gap-5">
               <Autocomplete
                  size="small"
                  disablePortal
                  fullWidth
                  options={iranCities?.provinces}
                  value={provinceValue}
                  onChange={(e, newValue) => {
                     setProvinceValue(newValue);
                     setCityValue('');
                  }}
                  renderInput={params => <TextField {...params} placeholder="استان" sx={autoCompleteSx} />}
               />
               <Autocomplete
                  size="small"
                  disablePortal
                  fullWidth
                  options={iranCities?.cities?.[provinceValue?.label] || []}
                  value={cityValue}
                  onChange={(e, newValue) => setCityValue(newValue)}
                  disabled={!provinceValue}
                  renderInput={params => (
                     <TextField
                        {...params}
                        placeholder={provinceValue ? 'شهر' : 'استان را انتخاب کنید'}
                        sx={autoCompleteSx}
                     />
                  )}
               />
            </div>
         </div>

         <div className="mt-[30px]">
            <p className="text-15 text-textColor1">جنسیت پزشک</p>
            <div className="mt-[10px] space-y-[10px]">
               <Button fullWidth sx={filterBtnSx} onClick={() => setDoctorSex('male')}>
                  <div className="flex w-full items-center justify-between text-textColor2">
                     <p className="text-15">آقا</p>
                     <span
                        className={`size-[15px] rounded-full transition-all duration-200 ${doctorSex === 'male' ? 'bg-primaryBlue' : 'bg-[#40404033]'}`}
                     />
                  </div>
               </Button>
               <Button fullWidth sx={filterBtnSx} onClick={() => setDoctorSex('female')}>
                  <div className="flex w-full items-center justify-between text-textColor2">
                     <p className="text-15">خانم</p>
                     <span
                        className={`size-[15px] rounded-full transition-all duration-200 ${doctorSex === 'female' ? 'bg-primaryBlue' : 'bg-[#40404033]'}`}
                     />
                  </div>
               </Button>
               <Button fullWidth sx={filterBtnSx} onClick={() => setDoctorSex('')}>
                  <div className="flex w-full items-center justify-between text-textColor2">
                     <p className="text-15">آقا یا خانم</p>
                     <span
                        className={`size-[15px] rounded-full transition-all duration-200 ${doctorSex === '' ? 'bg-primaryBlue' : 'bg-[#40404033]'}`}
                     />
                  </div>
               </Button>
            </div>
         </div>

         <div className="mt-[30px]">
            <p className="text-15 text-textColor1">نام پزشک</p>
            <div className="mt-[10px]">
               <OutlinedInput
                  size="small"
                  placeholder="جستجو نام پزشک"
                  value={doctorName}
                  onChange={e => setDoctorName(e.target.value)}
                  startAdornment={
                     <InputAdornment position="start">
                        <CiSearch size="25px" />
                     </InputAdornment>
                  }
                  sx={autoCompleteSx}
               />
            </div>
         </div>

         <div className="mt-[30px]">
            <p className="text-15 text-textColor1">تخصص</p>
            <div className="mt-[10px]">
               <Autocomplete
                  size="small"
                  disablePortal
                  fullWidth
                  options={specialtyList}
                  value={expertiseValue}
                  onChange={(e, newValue) => setExpertiseValue(newValue)}
                  renderInput={params => <TextField {...params} placeholder="جستجو تخصص" sx={autoCompleteSx} />}
               />
            </div>
         </div>

         <div className="mt-[30px] flex items-center justify-between">
            <p className="text-15 text-textColor1">صدور نسخه الکترونیکی‌</p>
            <Switch value={electronic} onChange={(e, newValue) => setElectronic(newValue)} checked={electronic} />
         </div>

         <div className="mt-[60px]">
            <Button
               fullWidth
               variant="contained"
               sx={{
                  borderRadius: '5px',
                  height: '40px',
                  color: 'white',
                  fontSize: '15px',
                  fontFamily: 'kalamehSemiBold600',
               }}
               onClick={applyFilters}
            >
               اعمال فیلتر
            </Button>
         </div>
         <BackdropLoading open={isPending} />
      </div>
   );
}

export default MedicalAdviceAside;
