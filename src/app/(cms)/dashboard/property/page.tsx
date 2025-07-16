"use client"
import { PropertyService } from "@/services/propertyService";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useMemo } from "react";

const PROPERTY_QUERY_KEY = ['property'];
export default function PropertyPage() {
    const propertyService = useMemo(() => new PropertyService(), []);
    const {
        data: property,
        error: errorProperty,
        isError: isErrorProperty,
        isPending: isPendingProperty
    } = useQuery({
        queryKey: PROPERTY_QUERY_KEY,
        queryFn: () => propertyService.geProperty(),
    })

    console.log(property)
    
    return (
    
         <>
            <div className="card shadow border-0 mb-7">
                <div className="card-header">
                <Link href='/dashboard/users/add'>
                    <h5 className="mb-0">Property Management</h5>
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
                          
                        </tbody>
                    </table>
                </div>
                </div>
                </>
       
    )
}