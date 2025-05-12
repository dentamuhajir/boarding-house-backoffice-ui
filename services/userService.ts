import axiosInstance from "../lib/axios"

export class UserService {
    private baseUrl:string = "https://jsonplaceholder.typicode.com"

    async getUsers() : Promise<any[]> {
        const endpoint: string = this.baseUrl + '/users'
        const response = await axiosInstance.get<any[]>(endpoint)
        return response.data
    }
}