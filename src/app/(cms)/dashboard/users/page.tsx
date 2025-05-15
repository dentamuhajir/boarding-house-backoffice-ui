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

    console.log(users)

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
                        <th scope="col">Gender</th>
                        <th scope="col">Occupation</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img alt="..." src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-sm rounded-circle me-2"/>
                            <a className="text-heading font-semibold" href="#">
                                Robert Fox
                            </a>
                        </td>
                        <td>
                            Feb 15, 2021
                        </td>
                        <td>
                            <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-1.png" className="avatar avatar-xs rounded-circle me-2"/>
                            <a className="text-heading font-semibold" href="#">
                                Dribbble
                            </a>
                        </td>
                        <td>
                            $3.500
                        </td>
                        <td>
                            <span className="badge badge-lg badge-dot">
                                <i className="bg-success"></i>Scheduled
                            </span>
                        </td>
                        <td className="text-end">
                            <a href="#" className="btn btn-sm btn-neutral">View</a>
                            <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                                <i className="bi bi-trash"></i>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img alt="..." src="https://images.unsplash.com/photo-1610271340738-726e199f0258?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-sm rounded-circle me-2"/>
                            <a className="text-heading font-semibold" href="#">
                                Darlene Robertson
                            </a>
                        </td>
                        <td>
                            Apr 15, 2021
                        </td>
                        <td>
                            <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-2.png" className="avatar avatar-xs rounded-circle me-2"/>
                            <a className="text-heading font-semibold" href="#">
                                Netguru
                            </a>
                        </td>
                        <td>
                            $2.750
                        </td>
                        <td>
                            <span className="badge badge-lg badge-dot">
                                <i className="bg-warning"></i>Postponed
                            </span>
                        </td>
                        <td className="text-end">
                            <a href="#" className="btn btn-sm btn-neutral">View</a>
                            <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                                <i className="bi bi-trash"></i>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img alt="..." src="https://images.unsplash.com/photo-1610878722345-79c5eaf6a48c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-sm rounded-circle me-2"/>
                            <a className="text-heading font-semibold" href="#">
                                Theresa Webb
                            </a>
                        </td>
                        <td>
                            Mar 20, 2021
                        </td>
                        <td>
                            <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-3.png" className="avatar avatar-xs rounded-circle me-2"/>
                            <a className="text-heading font-semibold" href="#">
                                Figma
                            </a>
                        </td>
                        <td>
                            $4.200
                        </td>
                        <td>
                            <span className="badge badge-lg badge-dot">
                                <i className="bg-success"></i>Scheduled
                            </span>
                        </td>
                        <td className="text-end">
                            <a href="#" className="btn btn-sm btn-neutral">View</a>
                            <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                                <i className="bi bi-trash"></i>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img alt="..." src="https://images.unsplash.com/photo-1612422656768-d5e4ec31fac0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-sm rounded-circle me-2"/>
                            <a className="text-heading font-semibold" href="#">
                                Kristin Watson
                            </a>
                        </td>
                        <td>
                            Feb 15, 2021
                        </td>
                        <td>
                            <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-4.png" className="avatar avatar-xs rounded-circle me-2"/>
                            <a className="text-heading font-semibold" href="#">
                                Mailchimp
                            </a>
                        </td>
                        <td>
                            $3.500
                        </td>
                        <td>
                            <span className="badge badge-lg badge-dot">
                                <i className="bg-dark"></i>Not discussed
                            </span>
                        </td>
                        <td className="text-end">
                            <a href="#" className="btn btn-sm btn-neutral">View</a>
                            <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                                <i className="bi bi-trash"></i>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img alt="..." src="https://images.unsplash.com/photo-1608976328267-e673d3ec06ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-sm rounded-circle me-2"/>
                            <a className="text-heading font-semibold" href="#">
                                Cody Fisher
                            </a>
                        </td>
                        <td>
                            Apr 10, 2021
                        </td>
                        <td>
                            <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-5.png" className="avatar avatar-xs rounded-circle me-2"/>
                            <a className="text-heading font-semibold" href="#">
                                Webpixels
                            </a>
                        </td>
                        <td>
                            $1.500
                        </td>
                        <td>
                            <span className="badge badge-lg badge-dot">
                                <i className="bg-danger"></i>Canceled
                            </span>
                        </td>
                        <td className="text-end">
                            <a href="#" className="btn btn-sm btn-neutral">View</a>
                            <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                                <i className="bi bi-trash"></i>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img alt="..." src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-sm rounded-circle me-2"/>
                            <a className="text-heading font-semibold" href="#">
                                Robert Fox
                            </a>
                        </td>
                        <td>
                            Feb 15, 2021
                        </td>
                        <td>
                            <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-1.png" className="avatar avatar-xs rounded-circle me-2"/>
                            <a className="text-heading font-semibold" href="#">
                                Dribbble
                            </a>
                        </td>
                        <td>
                            $3.500
                        </td>
                        <td>
                            <span className="badge badge-lg badge-dot">
                                <i className="bg-success"></i>Scheduled
                            </span>
                        </td>
                        <td className="text-end">
                            <a href="#" className="btn btn-sm btn-neutral">View</a>
                            <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                                <i className="bi bi-trash"></i>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img alt="..." src="https://images.unsplash.com/photo-1610271340738-726e199f0258?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-sm rounded-circle me-2"/>
                            <a className="text-heading font-semibold" href="#">
                                Darlene Robertson
                            </a>
                        </td>
                        <td>
                            Apr 15, 2021
                        </td>
                        <td>
                            <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-2.png" className="avatar avatar-xs rounded-circle me-2"/>
                            <a className="text-heading font-semibold" href="#">
                                Netguru
                            </a>
                        </td>
                        <td>
                            $2.750
                        </td>
                        <td>
                            <span className="badge badge-lg badge-dot">
                                <i className="bg-warning"></i>Postponed
                            </span>
                        </td>
                        <td className="text-end">
                            <a href="#" className="btn btn-sm btn-neutral">View</a>
                            <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                                <i className="bi bi-trash"></i>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img alt="..." src="https://images.unsplash.com/photo-1610878722345-79c5eaf6a48c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-sm rounded-circle me-2"/>
                            <a className="text-heading font-semibold" href="#">
                                Theresa Webb
                            </a>
                        </td>
                        <td>
                            Mar 20, 2021
                        </td>
                        <td>
                            <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-3.png" className="avatar avatar-xs rounded-circle me-2"/>
                            <a className="text-heading font-semibold" href="#">
                                Figma
                            </a>
                        </td>
                        <td>
                            $4.200
                        </td>
                        <td>
                            <span className="badge badge-lg badge-dot">
                                <i className="bg-success"></i>Scheduled
                            </span>
                        </td>
                        <td className="text-end">
                            <a href="#" className="btn btn-sm btn-neutral">View</a>
                            <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                                <i className="bi bi-trash"></i>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img alt="..." src="https://images.unsplash.com/photo-1612422656768-d5e4ec31fac0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-sm rounded-circle me-2"/>
                            <a className="text-heading font-semibold" href="#">
                                Kristin Watson
                            </a>
                        </td>
                        <td>
                            Feb 15, 2021
                        </td>
                        <td>
                            <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-4.png" className="avatar avatar-xs rounded-circle me-2"/>
                            <a className="text-heading font-semibold" href="#">
                                Mailchimp
                            </a>
                        </td>
                        <td>
                            $3.500
                        </td>
                        <td>
                            <span className="badge badge-lg badge-dot">
                                <i className="bg-dark"></i>Not discussed
                            </span>
                        </td>
                        <td className="text-end">
                            <a href="#" className="btn btn-sm btn-neutral">View</a>
                            <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                                <i className="bi bi-trash"></i>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img alt="..." src="https://images.unsplash.com/photo-1608976328267-e673d3ec06ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-sm rounded-circle me-2"/>
                            <a className="text-heading font-semibold" href="#">
                                Cody Fisher
                            </a>
                        </td>
                        <td>
                            Apr 10, 2021
                        </td>
                        <td>
                            <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-5.png" className="avatar avatar-xs rounded-circle me-2"/>
                            <a className="text-heading font-semibold" href="#">
                                Webpixels
                            </a>
                        </td>
                        <td>
                            $1.500
                        </td>
                        <td>
                            <span className="badge badge-lg badge-dot">
                                <i className="bg-danger"></i>Canceled
                            </span>
                        </td>
                        <td className="text-end">
                            <a href="#" className="btn btn-sm btn-neutral">View</a>
                            <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                                <i className="bi bi-trash"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="card-footer border-0 py-5">
            
            <span className="text-muted text-sm">Showing 10 items out of 250 results found</span>
        </div>
    </div>
    )

    // return (
    //     <>
    //     <h1>
    //         List of account
    //     </h1>
    //     {
    //         error && <p className="text-danger">{ error }</p>
    //     }        
 
    //     <table className="table table-striped table-hover table-bordered">
    //       <thead className="table-dark">
    //         <tr>
    //           <th scope="col">#</th>
    //           <th scope="col">Name</th>
    //           <th scope="col">Email</th>
    //           <th scope="col">Username</th>
    //           <th scope="col">Phone</th>
    //           <th scope="col">Actions</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //       {users.map((user, index) => (
    //         <tr key={user.id}>
    //           <td>{index + 1}</td>
    //           <td>{user.name}</td>
    //           <td>{user.email}</td>
    //           <td>{user.username}</td>
    //           <td>{user.phone}</td>
    //           <td>
    //             <button className="btn btn-sm btn-primary me-2">Edit</button>
    //             <button className="btn btn-sm btn-danger">Delete</button>
    //           </td>
    //         </tr>
    //       ))}
    //       </tbody>
    //     </table>
      
    //     </>
    // )
}