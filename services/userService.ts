import { User } from "@models/User"
import axiosInstance from "../lib/axios"

export class UserService {
    private baseUrl:string = "https://jsonplaceholder.typicode.com"

    async getUsers() : Promise<User[]> {
        const endpoint: string = this.baseUrl + '/users'
        const response = await axiosInstance.get<any>(endpoint)
        return response.data
    }
}