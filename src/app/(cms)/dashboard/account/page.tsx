'use client'
import { UserService } from "@services/userService"
import { useEffect, useState } from "react"

export default function account() {
    const [users, setUsers] = useState<any[]>([])
    
    useEffect(() => {
        const userService = new UserService()
        async function fetchUser(){
            const users = await userService.getUsers()
            setUsers(users)
        }

        fetchUser()
    },[])

    console.log(users)

    return (
        <h1>
            List of account
        </h1>
    )
}