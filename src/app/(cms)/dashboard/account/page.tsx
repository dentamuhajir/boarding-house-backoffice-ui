'use client'
import { User } from "@models/User";
import { UserService } from "@services/userService"
import { useEffect, useState } from "react"

export default function account() {
    const [users, setUsers] = useState<User[]>([])
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
        <>
        <h1>
            List of account
        </h1>
        {
            error && <p className="text-danger">{ error }</p>
        }        
 
        <table className="table table-striped table-hover table-bordered">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Username</th>
              <th scope="col">Phone</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.phone}</td>
              <td>
                <button className="btn btn-sm btn-primary me-2">Edit</button>
                <button className="btn btn-sm btn-danger">Delete</button>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      
        </>
    )
}