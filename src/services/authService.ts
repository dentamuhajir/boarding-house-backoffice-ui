import { APIResponse } from "../types/APIResponse";
import axiosInstance from "../lib/axios";
import { LoginCredentials } from "@/types/auth/LoginCredentials";

export class AuthService {
    private baseUrl:string|undefined = axiosInstance.defaults.baseURL

    async login(credentials: LoginCredentials): Promise<any> {
     
        const endpoint: string = this.baseUrl + '/api/login' 
        const response = (await axiosInstance.post<any>(
            endpoint, 
            credentials,
            {
                withCredentials: true // Accept and store the HttpOnly JWT cookie
            }
        )).data
        //sessionStorage.setItem("token", response.data.token);
        console.log(response)
        return response
    } 
}