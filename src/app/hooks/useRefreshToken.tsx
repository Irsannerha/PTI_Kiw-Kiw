
import axios from "axios";
import { axiosInstance, axiosRefresh } from "../utils/axios";

export const useRefreshToken = () => {

    const refresh = async (refreshToken: string) => {
        console.log(refreshToken);
        const response = await axiosInstance.post("/auth/refreshToken", {
            refresh_token: refreshToken,
        });

        return response.data?.data.access_token;
    };

    return refresh;
};