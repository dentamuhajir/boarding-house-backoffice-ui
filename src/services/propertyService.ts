import { EndUser, User } from "../types/User"
import axiosInstance from "../lib/axios"
import { APIResponse } from "../types/APIResponse"
import { Paginated } from "../types/Paginated"

export class PropertyService {
    private baseUrl:string|undefined = axiosInstance.defaults.baseURL

    // async getUsers(page: number = 0, size: number = 5) : Promise<Paginated<User[]>> {
    //     const endpoint: string = this.baseUrl + '/users?page=' + page + '&size=' + size;
    //     const response = (await axiosInstance.get<APIResponse<Paginated<User[]>>>(
    //         endpoint,
    //         {
    //             withCredentials: true // Accept and store the HttpOnly JWT cookie
    //         }
    //     )).data
        
    //     return response.data
    // }

    async getTotalProperty() : Promise<any> {
        const endpoint: string = this.baseUrl + '/property/total'
        const response = (await axiosInstance.get<any>(
            endpoint
        
        )).data
        return response.data
    }

}