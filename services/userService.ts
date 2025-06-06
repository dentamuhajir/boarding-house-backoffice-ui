import { EndUser, User } from "@models/User"
import axiosInstance from "../lib/axios"

export class UserService {
    private baseUrl:string = "http://localhost:8081"

    async getUsers() : Promise<any> {
        const endpoint: string = this.baseUrl + '/users'
        const response = (await axiosInstance.get<any>(endpoint)).data
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