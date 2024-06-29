import useSWR from 'swr';

// Configs
import axiosInstance from '@/configs/axiosInstance';

const useGetSpecialty = () => useSWR(`doctor/allSpecialtyList`, url => axiosInstance(url).then(res => res.data));

export default useGetSpecialty;
