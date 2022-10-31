import axios, { AxiosResponse, AxiosError } from 'axios';

import baseURL from '../constants/urls';

export const axiosInstance = axios.create({ baseURL });

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    return await Promise.reject(error);
  }
);
export default axiosInstance;
