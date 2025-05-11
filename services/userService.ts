import axios from "axios"

export class UserService {
    private baseUrl:string = "https://jsonplaceholder.typicode.com"

    async getUsers() : Promise<any[]> {
        const endpoint: string = this.baseUrl + '/users'
        const response = await axios.get<any[]>(endpoint)
        return response.data
    }
}