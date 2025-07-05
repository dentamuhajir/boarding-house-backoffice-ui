import { APIResponse } from "../types/APIResponse";
import axiosInstance from "../lib/axios";
import { LoginCredentials } from "@/types/auth/LoginCredentials";

export class AuthService {
    private baseUrl:string|undefined = axiosInstance.defaults.baseURL

    async login(credentials: LoginCredentials): Promise<any> {
     
        const endpoint: string = this.baseUrl + '/api/login' 
        const response = (await axiosInstance.post<any>(endpoint, credentials))
        // console.log(response.data.token)
        // sessionStorage.setItem("token", response.data.token);
        // console.log(response)
        return response
    } 
}