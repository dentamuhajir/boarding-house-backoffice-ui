'use client'

import { UserService } from "@services/userService";
import { useEffect, useState } from "react"

export default function Dashboard() {

    const [totalUsers, setTotalUsers] = useState<any>()
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<Boolean>(true);

    useEffect(() => {
        const userService = new UserService()
        const loadTotalUsers = async () => {
            try {
              const data = await userService.getTotalUser();
              setTotalUsers(data.totalUsers);
            } catch (err: any) {
              console.error('Error loading users:', err);
              setError('Failed to load users. Please try again later.');
            } finally {
                setLoading(false); 
            }
          };
          loadTotalUsers();

    }, [])

    console.log(totalUsers);
    
    return(
        <div className="row g-6 mb-6">
            <div className="col-xl-3 col-sm-6 col-12">
                <div className="card shadow border-0">
                    <div className="card-body">
                        <div className="row">
                            <div className="col">
                                <span className="h6 font-semibold text-muted text-sm d-block mb-2">Revenue</span>
                                <span className="h3 font-bold mb-0">Rp 200.000</span>
                            </div>
                            <div className="col-auto">
                                <div className="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                                    <i className="bi bi-currency-dollar"></i>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2 mb-0 text-sm">
                            <span className="badge badge-pill bg-soft-success text-success me-2">
                                <i className="bi bi-arrow-up me-1"></i>13%
                            </span>
                            <span className="text-nowrap text-xs text-muted">Since last month</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
                <div className="card shadow border-0">
                    <div className="card-body">
                        <div className="row">
                            <div className="col">
                                <span className="h6 font-semibold text-muted text-sm d-block mb-2">Total Users</span>
                                { loading ? ( 
                                    <span className="placeholder col-3 placeholder-sm rounded placeholder-wave"></span>
                                ) : 
                                (   
                                    <span className="h3 font-bold mb-0">{ totalUsers }</span> 
                                )}
                             
                             
                            </div>
                            <div className="col-auto">
                                <div className="icon icon-shape bg-primary text-white text-lg rounded-circle">
                                    <i className="bi bi-people"></i>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2 mb-0 text-sm">
                            <span className="badge badge-pill bg-soft-success text-success me-2">
                                <i className="bi bi-arrow-up me-1"></i>30%
                            </span>
                            <span className="text-nowrap text-xs text-muted">Since last month</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
                <div className="card shadow border-0">
                    <div className="card-body">
                        <div className="row">
                            <div className="col">
                                <span className="h6 font-semibold text-muted text-sm d-block mb-2">Total Kost</span>
                                <span className="h3 font-bold mb-0">37</span>
                            </div>
                            <div className="col-auto">
                                <div className="icon icon-shape bg-info text-white text-lg rounded-circle">
                                    <i className="bi bi-house"></i>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2 mb-0 text-sm">
                            <span className="badge badge-pill bg-soft-danger text-danger me-2">
                                <i className="bi bi-arrow-down me-1"></i>-5%
                            </span>
                            <span className="text-nowrap text-xs text-muted">Since last month</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
                <div className="card shadow border-0">
                    <div className="card-body">
                        <div className="row">
                            <div className="col">
                                <span className="h6 font-semibold text-muted text-sm d-block mb-2">Total Booking</span>
                                <span className="h3 font-bold mb-0">2</span>
                            </div>
                            <div className="col-auto">
                                <div className="icon icon-shape bg-warning text-white text-lg rounded-circle">
                                    <i className="bi bi-credit-card"></i>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2 mb-0 text-sm">
                            <span className="badge badge-pill bg-soft-success text-success me-2">
                                <i className="bi bi-arrow-up me-1"></i>10%
                            </span>
                            <span className="text-nowrap text-xs text-muted">Since last month</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}