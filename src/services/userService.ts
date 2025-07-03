import { EndUser, User } from "../types/User"
import axiosInstance from "../lib/axios"
import { APIResponse } from "../types/APIResponse"
import { Paginated } from "../types/Paginated"

export class UserService {
    private baseUrl:string|undefined = axiosInstance.defaults.baseURL

    //localhost:8081/users?page=0&size=10&sort=id,desc

    async getUsers(page: number = 0, size: number = 5) : Promise<Paginated<User[]>> {
        const endpoint: string = this.baseUrl + '/users?page=' + page + '&size=' + size;
        const response = (await axiosInstance.get<APIResponse<Paginated<User[]>>>(
            endpoint,
            {
                withCredentials: true // Accept and store the HttpOnly JWT cookie
            }
        )).data
        
        return response.data
    }

    async getUser(id: number) : Promise<EndUser> {
        const endpoint: string = this.baseUrl + '/users/' + id
        const response = (await axiosInstance.get<any>(endpoint)).data
        return response.data
    }

    async getTotalUser() : Promise<any> {
        const endpoint: string = this.baseUrl + '/users/total'
        const response = (await axiosInstance.get<any>(
            endpoint
        
        )).data
        return response.data
    }

    async deleteUser(id: number) : Promise<any> {
        const endpoint: string = this.baseUrl + '/users/' + id
        const response = (await axiosInstance.delete<any>(endpoint)).data
        return response.data
    }

}