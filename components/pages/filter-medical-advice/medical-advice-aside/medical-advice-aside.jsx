import { useState } from 'react';

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

const insuranceList = [
   { label: 'تامین اجتماعی' },
   { label: 'نیروهای مسلح' },
   { label: 'پارسیان' },
   { label: 'پاسارگاد' },
   { label: 'تکمیلی' },
   { label: 'سلامت' },
   { label: 'ورزشی' },
];

const expertiseList = [
   { label: 'زنان زایمان' },
   { label: 'داخلی' },
   { label: 'قلب و عروق' },
   { label: 'پوست و مو' },
   { label: 'جراح' },
   { label: 'دندانپزشک' },
   { label: 'تغذیه' },
];

const filterBtnSx = { backgroundColor: '#4040400D', height: '40px', paddingX: '10px', borderRadius: '5px' };
const autoCompleteSx = {
   backgroundColor: '#4040400D',
   fontSize: '15px',
   border: 'none !important',
   '*': { border: 'none !important', fontSize: '15px' },
};

function MedicalAdviceAside({ onClose }) {
   const [visitType, setVisitType] = useState('appointment');
   const [doctorSex, setDoctorSex] = useState('noMatter');
   const [insuranceValue, setInsuranceValue] = useState('');
   const [expertiseValue, setExpertiseValue] = useState('');
   const [provinceValue, setProvinceValue] = useState('');
   const [cityValue, setCityValue] = useState('');
   const [electronic, setElectronic] = useState(false);

   return (
      <div className="p-[30px]">
         <div className="flex items-center justify-between">
            <div className="flex items-center gap-[10px]">
               <BsSliders color="#2ED7FE" size="26px" className="rotate-180" />
               <p className="font-kalamehSemiBold600 text-xl leading-4 text-textColor1">فیلترها</p>
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
               <Button fullWidth sx={filterBtnSx} onClick={() => setVisitType('phone')}>
                  <div className="flex w-full items-center justify-between text-textColor2">
                     <div className="flex items-center gap-[10px] text-15">
                        <FiPhoneCall />
                        <p>مشاوره تلفنی</p>
                     </div>
                     <span
                        className={`size-[15px] rounded-full transition-all duration-200 ${visitType === 'phone' ? 'bg-primaryBlue' : 'bg-[#40404033]'}`}
                     />
                  </div>
               </Button>
               <Button fullWidth sx={filterBtnSx} onClick={() => setVisitType('text')}>
                  <div className="flex w-full items-center justify-between text-textColor2">
                     <div className="flex items-center gap-[10px] text-15">
                        <Edit className="w-[15px]" />
                        <p>مشاوره متنی</p>
                     </div>
                     <span
                        className={`size-[15px] rounded-full transition-all duration-200 ${visitType === 'text' ? 'bg-primaryBlue' : 'bg-[#40404033]'}`}
                     />
                  </div>
               </Button>
               <Button fullWidth sx={filterBtnSx} onClick={() => setVisitType('appointment')}>
                  <div className="flex w-full items-center justify-between text-textColor2">
                     <div className="flex items-center gap-[10px] text-15">
                        <BiHomeAlt />
                        <p>نوبت دهی مطب</p>
                     </div>
                     <span
                        className={`size-[15px] rounded-full transition-all duration-200 ${visitType === 'appointment' ? 'bg-primaryBlue' : 'bg-[#40404033]'}`}
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
               <Button fullWidth sx={filterBtnSx} onClick={() => setDoctorSex('noMatter')}>
                  <div className="flex w-full items-center justify-between text-textColor2">
                     <p className="text-15">آقا یا خانم</p>
                     <span
                        className={`size-[15px] rounded-full transition-all duration-200 ${doctorSex === 'noMatter' ? 'bg-primaryBlue' : 'bg-[#40404033]'}`}
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
                  options={expertiseList}
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
            >
               اعمال فیلتر
            </Button>
         </div>
      </div>
   );
}

export default MedicalAdviceAside;
