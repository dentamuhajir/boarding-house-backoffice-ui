'use client'

import { UserService } from "@/services/userService";
import { useMemo } from "react"
import { useQuery } from '@tanstack/react-query';


const TOTAL_USERS_QUERY_KEY = ['totalUsers'];


export default function Dashboard() {

    // to avoid create an instance service multiple
    const userService = useMemo(() => new UserService(), []);

    const {
        data: data,
        error: errorTotalUser,
        isError: isErrorTotalUser,
        isPending, // v5: use `isPending` instead of `isLoading`
    } = useQuery({
        queryKey: TOTAL_USERS_QUERY_KEY,
        queryFn: () => userService.getTotalUser(),
    });

    // if (isError) return <p>Error: {error.message}</p>;

    
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
                                    <i className="bi bi-cash"></i>
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
                                { isPending ? ( 
                                    <span className="placeholder col-3 placeholder-sm rounded placeholder-wave"></span>
                                ) : isErrorTotalUser ? (
                                    <span className="badge bg-danger">Service not available</span> 
                                ) : (
                                    <span className="h3 font-bold mb-0">{data?.totalUsers}</span>
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