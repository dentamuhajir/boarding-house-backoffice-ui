'use client'
import { User } from "@models/User";
import { UserService } from "@services/userService"
import Link from "next/link";
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

    //console.log(users)

    return (
      <div className="card shadow border-0 mb-7">
        <div className="card-header">
          <Link href='/dashboard/users/add'>
            <h5 className="mb-0">Users Management</h5>
          </Link>
        </div>
        <div className="table-responsive">
            <table className="table table-hover table-nowrap">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone Number</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                      <tr key={user.id}>
                          <td>
                              <img alt="..." src={ user.profilePicture } className="avatar avatar-sm rounded-circle me-2"/>
                              <a className="text-heading font-semibold" href="#">
                                  { user.name }
                              </a>
                          </td>
                          <td>
                              { user.email }
                          </td>
                          <td>
                              {/* <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-5.png" className="avatar avatar-xs rounded-circle me-2"/> */}
                              <a className="text-heading font-semibold" href="#">
                                  { user.phoneNumber }
                              </a>
                          </td>
                          <td className="text-end">
                              <a href="#" className="btn btn-sm btn-neutral">View</a>
                              <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                                  <i className="bi bi-trash"></i>
                              </button>
                          </td>
                      </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <div className="card-footer border-0 py-5">
            
            <span className="text-muted text-sm">Showing 10 items out of 250 results found</span>
        </div>
    </div>
    )
}