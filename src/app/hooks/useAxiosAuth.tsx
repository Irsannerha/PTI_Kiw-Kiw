import { useRefreshToken } from "./useRefreshToken";
import { axiosInstance } from "../utils/axios";
import { useEffect } from "react";
import {useLocalStorage} from 'usehooks-ts'

export const useAxiosAuth = () => {
    const refresh = useRefreshToken();

    const [accessToken, setAccessToken] = useLocalStorage("accessToken", "");
    const [refreshToken, _] = useLocalStorage("refreshToken", "");
    
    
    useEffect(() => {
        const requestInterceptor = axiosInstance.interceptors.request.use(
          (config) => {
            // console.log(config.headers["Authorization"] = `Bearer ${accessToken}`);
            if (!config.headers["Authorization"]) {
              // console.log("sadasdasd");
              config.headers['Authorization'] = `Bearer ${accessToken}`;
            }
    
            return config;
          },
          (err) => Promise.reject(err),
        );
    
        const responseInterceptor = axiosInstance.interceptors.response.use(
          (res) => res,
          async (err) => {
            try {
              const originalRequest = err?.config;
              console.log(refreshToken);              
              if (err?.response.status === 401 && !originalRequest.sent) {
                console.log("refreshing token");
                originalRequest.sent = true;
                const accessToken = await refresh(refreshToken);
                setAccessToken(accessToken);
                originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;
                
                return axiosInstance(originalRequest);
              }
              return Promise.reject(err);
            } catch (error) {
              console.log(error);
              return Promise.reject(error);
            }
          },
        );
    
        return () => {
          axiosInstance.interceptors.request.eject(requestInterceptor);
          axiosInstance.interceptors.response.eject(responseInterceptor);
        };
      }, [accessToken, refresh]);
    
      return axiosInstance;
}