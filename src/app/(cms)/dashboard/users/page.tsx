'use client'
import { EndUser, User } from "@models/User";
import { UserService } from "@services/userService"
import Link from "next/link";
import { useEffect, useState } from "react"
export default function account() {
    const [users, setUsers] = useState<User[]>([])
    const [userDetail, setUserDetail] = useState<EndUser>()
    const [error, setError] = useState<string | null>(null);
    const [showModal, setShowModal] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState<number>()
    const [loading, setLoading] = useState<Boolean>(true)

    function openModalDetailUser(userId: number) {
        const userService = new UserService();
        setLoading(true); 

        const loadUserDetail = async () => {
            try {
                const data = await userService.getUser(userId);
                setUserDetail(data);
                setShowModal(true);
            } catch (err: any) {
                console.error('Error loading user:', err);
                setError('Failed to load user.');
            } finally {
                setLoading(false); 
            }
        };

        loadUserDetail();
    }
    
    
    useEffect(() => {
        //setLoading(true);

        const userService = new UserService()
        const loadUsers = async () => {
            try {
              const data = await userService.getUsers();
              setUsers(data);
            } catch (err: any) {
              console.error('Error loading users:', err);
              setError('Failed to load users. Please try again later.');
            } finally {
                setLoading(false); 
            }
          };
          loadUsers();
    },[])

    //console.log(users)

    return (
        <>
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
                              {users.length === 0 && loading ? (
                                [...Array(10)].map((_, index) => (
                                <tr key={index}>
                                    <td>
                                    <span className="placeholder col-12 placeholder-sm rounded placeholder-wave"></span>
                                    </td>
                                    <td>
                                    <span className="placeholder col-12 placeholder-sm rounded placeholder-wave"></span>
                                    </td>
                                    <td>
                                    <span className="placeholder col-12 placeholder-sm rounded placeholder-wave"></span>
                                    </td>
                                    <td>
                                        <span className="placeholder col-12 placeholder-sm rounded placeholder-wave"></span>
                                    </td>
                                </tr>
                                ))
                            ) : (
                            users.map((user, index) => (
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
                                    <a href="#" className="btn btn-sm btn-neutral" onClick={() => openModalDetailUser(user.id)}>View</a>
                                    <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
                                        <i className="bi bi-trash"></i>
                                    </button>
                                </td>
                            </tr>
                            ))
                        
                        )}
                        </tbody>
                    </table>
                </div>
                <div className="card-footer border-0 py-5">
                    
                    <span className="text-muted text-sm">Showing 10 items out of 250 results found</span>
                </div>
            </div>
            <div
                className={`modal fade ${showModal ? "show d-block" : ""}`}
                tabIndex="-1"
                aria-labelledby="userInfoModalLabel"
                aria-modal={showModal ? "true" : undefined}
                role="dialog"
                style={showModal ? { backgroundColor: "rgba(0,0,0,0.5)" } : {}}
            >
                <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">

                    <div className="modal-header">
                    <h5 className="modal-title" id="userInfoModalLabel">User Info: { userDetail?.name }</h5>
                    <button type="button" className="btn-close" aria-label="Close" onClick={() => setShowModal(false)}></button>
                    </div>

                    <div className="modal-body">
                    <form>
                        <div className="text-center mb-4">
                        <img
                            src={ userDetail?.profilePicture }
                            alt="Profile"
                            className="rounded-circle border"
                        />
                        </div>

                        <div className="row mb-3">
                        <div className="col-md-6">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" value={ userDetail?.name } readOnly />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Username</label>
                            <input type="text" className="form-control" value={userDetail?.username} readOnly />
                        </div>
                        </div>

                        <div className="row mb-3">
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" value={userDetail?.email} readOnly />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Phone Number</label>
                            <input type="text" className="form-control" value={userDetail?.phoneNumber} readOnly />
                        </div>
                        </div>

                        <div className="row mb-3">
                        <div className="col-md-6">
                            <label className="form-label">Date of Birth</label>
                            <input type="date" className="form-control" value={userDetail?.dateOfBirth} readOnly />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Gender</label>
                            <input type="text" className="form-control" value={userDetail?.gender} readOnly />
                        </div>
                        </div>

                        <div className="mb-3">
                        <label className="form-label">Occupation</label>
                        <input type="text" className="form-control" value={userDetail?.occupation} readOnly />
                        </div>

                        <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="text" className="form-control" value={userDetail?.password} readOnly />
                        </div>
                    </form>
                    </div>

                    <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}