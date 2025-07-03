'use client'

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function useAuthRedirect() {
    //console.log("here")

    const router = useRouter()

    useEffect(() => {
        if (typeof window !== 'undefined') { 
        const token = sessionStorage.getItem('token');
        console.log(token)
        if (!token) {
            router.push('/login');
        }
        }
    }, [router]);
}

export default function dashboard() {
    useAuthRedirect()
    return (
        <>
            <h1>Pass to dashboard page</h1>
        </>
    )
}