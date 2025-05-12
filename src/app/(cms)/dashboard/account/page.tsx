'use client'
import { UserService } from "@services/userService"
import { useEffect, useState } from "react"

export default function account() {
    const [users, setUsers] = useState<any[]>([])
    const [error, setError] = useState<string | null>(null);
    
    useEffect(() => {
        const userService = new UserService()
        const loadUsers = async () => {
            try {
              const data = await userService.getUsers();
              setUsers(data);
            } catch (err: any) {
              console.error('Error loading users:', err);
              setError('Failed to load users. Please try again later.');
            }
          };
          loadUsers();
    },[])

    console.log(users)

    return (
        <h1>
            List of account
        </h1>
    )
}