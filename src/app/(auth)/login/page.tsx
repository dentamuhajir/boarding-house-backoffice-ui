'use client'

import { useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./login.module.css"
import { AuthService } from "@/services/authService";
import { LoginCredentials } from "@/types/auth/LoginCredentials";
import { redirect, useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";


export default function login() {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginCredentials>();
    const authService = useMemo(() => new AuthService(), []);
    const router = useRouter();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const onSubmit = async (credentials: LoginCredentials) => {
        //console.log(credentials)

        try {
            const result = await authService.login(credentials);
            //redirect('/dashboard/users')
            //console.log("success logging" + result)
            router.push('/dashboard/users')
            
            //console.log("Login success", result);
            // Redirect or update app state
        } catch (err: any) {
            // /console.log(err.response.data.message)
            setError(err?.response?.data?.message || "Login failed");
        } finally {
            setLoading(false);
        }
    }
    
    return (
        // Apply CSS Module classes
        <div className={`${styles.pageWrapper}`}>
            <div className={`${styles.loginContainer} rounded-md shadow-lg`}>
                <h2 className="text-center mb-4">Login</h2>
                {error && (
                        <div className="alert alert-danger" role="alert">
                            { error }
                        </div>
                )}
                <form onSubmit={ handleSubmit(onSubmit) }>
                    {/* Email input field */}
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input
                            type="email"
                            className={`form-control ${styles.formControl}`} // Apply Bootstrap and CSS Module class
                            id="email"
                            aria-describedby="emailHelp"
                            placeholder="Enter your email"
                            {...register('email',
                            {
                                required: 'Email is required',
                                validate: (value) => {
                                    // Basic email regex
                                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                                    return emailRegex.test(value) || 'Please enter a valid email';
                                }
                            }
                        )} />
                        {errors.email && <p className="pt-1 text-danger">{errors.email.message}</p>}
                    </div>
                    {/* Password input field */}
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            className={`form-control ${styles.formControl}`} // Apply Bootstrap and CSS Module class
                            id="password"
                            placeholder="Enter your password"
                            {...register('password', 
                                {
                                    required: 'Password is required'
                                }
                            )}
                        />
                        {errors.password && <p className="pt-1 text-danger">{errors.password?.message}</p>}
                    </div>
                    {/* Remember me checkbox and Forgot Password link */}
                    <div className="mb-3 form-check d-flex justify-content-between align-items-center">
                        <div>
                            <input type="checkbox" className="form-check-input" id="rememberMe" />
                            <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                        </div>
                        <a href="#" className="text-decoration-none">Forgot Password?</a>
                    </div>
                    {/* Login button */}
                    <div className="d-grid gap-2">
                        <button type="submit" className={`btn btn-primary btn-lg ${styles.btnPrimary}`}>Login</button>
                    </div>
                </form>

                {/* Divider for social login options */}
                <div className={styles.divider}>OR</div>

                {/* Social login buttons */}
                <div className="d-grid gap-2">
                    {/* Google login button */}
                    <button className={`btn btn-lg ${styles.socialBtnGoogle} mb-2`}>
                        <i className="bi bi-google"></i> Continue with Google
                    </button>
                    {/* Facebook login button */}
                    {/* <button className={`btn btn-lg ${styles.socialBtnFacebook}`}>
                        <i className="fab fa-facebook-f me-2"></i> Sign in with Facebook
                    </button> */}
                </div>

                {/* Sign up link */}
                <p className="text-center mt-3">
                    Don't have an account? <a href="#" className="text-decoration-none">Sign Up</a>
                </p>
            </div>
        </div>
    );
}