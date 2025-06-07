import { EndUser, User } from "@models/User"
import axiosInstance from "../lib/axios"
import { APIResponse } from "@models/APIResponse"
import { Paginated } from "@models/Paginated"

export class UserService {
    private baseUrl:string|undefined = axiosInstance.defaults.baseURL

    async getUsers() : Promise<Paginated<User[]>> {
        const endpoint: string = this.baseUrl + '/users'
        const response = (await axiosInstance.get<APIResponse<Paginated<User[]>>>(endpoint)).data
        return response.data
    }

    async getUser(id: number) : Promise<EndUser> {
        const endpoint: string = this.baseUrl + '/users/' + id
        const response = (await axiosInstance.get<any>(endpoint)).data
        return response.data
    }

    async getTotalUser() : Promise<any> {
        const endpoint: string = this.baseUrl + '/users/total'
        const response = (await axiosInstance.get<any>(endpoint)).data
        return response.data
    }

    async deleteUser(id: number) : Promise<any> {
        const endpoint: string = this.baseUrl + '/users/' + id
        const response = (await axiosInstance.delete<any>(endpoint)).data
        return response.data
    }

}