import { User } from "@models/User"
import axiosInstance from "../lib/axios"

export class UserService {
    private baseUrl:string = "http://localhost:8081"

    async getUsers() : Promise<User[]> {
        const endpoint: string = this.baseUrl + '/users'
        const response = (await axiosInstance.get<any>(endpoint)).data
        return response.data
    }
}