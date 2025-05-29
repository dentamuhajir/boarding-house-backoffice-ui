'use client'

import { useRef } from "react";
import { useForm } from "react-hook-form";

export default function add() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleIconClick = () => {
      fileInputRef.current?.click()
    }


    const onSubmit = (data: any) => {
        console.log(data)
    }
    return <>
    <form className="p-4 border rounded"  onSubmit={ handleSubmit(onSubmit) }>
        <div className="row">
            {/* Left Column */}
            <div className="col-md-8">
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className="form-control" id="username" placeholder="Enter Username" {...register('username',
                {
                    required: 'input name is mandatory', 
                    maxLength: {
                        value: 25,
                        message: 'Input maximal is  25 character'
                    },
                    pattern: {
                        value: /^\S+$/, // No whitespace allowed
                        message: 'Username must not contain spaces'
                    }, 
                }
            )} />
           {errors.username && <p className="pt-1 text-danger">{errors.username.message}</p>}
            </div>

            <div className="mb-3">
                <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                <input type="tel" className="form-control" id="phoneNumber" name="phoneNumber" placeholder="Enter your phone number" {...register('phoneNumber', {
                    required: 'Phone number is mandatory',
                    pattern: {
                        value: /^(^\+628\d{7,12}$|^08\d{7,12}$)/,
                        message: 'Invalid Indonesian phone number format',
                    },
                    maxLength: {
                        value: 15, 
                        message: 'Input maximal is 15 characters',
                    }
                })} />

                {errors.phoneNumber && <p className="pt-1 text-danger">{errors.phoneNumber.message}</p>}
            </div>

            <div className="mb-3">
                <label htmlFor="dateOfBirth" className="form-label">Date of Birth</label>
                <input type="date" className="form-control" id="dateOfBirth" name="dateOfBirth"  {...register('dateOfBirth', {
                    required: 'Date of birth is required',
                    validate: {
                        notFutureDate: (value) => {
                        const selectedDate = new Date(value);
                        const today = new Date();
                        return selectedDate <= today || 'Date of birth cannot be in the future';
                        },
                        minimumAge: (value) => {
                        const dob = new Date(value);
                        const today = new Date();
                        const age = today.getFullYear() - dob.getFullYear();
                        const monthDiff = today.getMonth() - dob.getMonth();
                        const dayDiff = today.getDate() - dob.getDate();
                        const isOldEnough = age > 17 || (age === 17 && (monthDiff > 0 || (monthDiff === 0 && dayDiff >= 0)));
                        return isOldEnough || 'You must be at least 17 years old';
                        }
                    }
                    })}
                />
                {errors.dateOfBirth && <p className="pt-1 text-danger">{errors.dateOfBirth.message}</p>}
            </div>

            <div className="mb-3">
                <label htmlFor="gender" className="form-label">Gender</label>
                <select className="form-select" id="gender" name="gender" 
                  {...register('gender', {
                    required: 'Please select your gender'
                  })}
                >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                </select>
                {errors.gender && <p className="pt-1 text-danger">{errors.gender.message}</p>}
            </div>

            <div className="mb-3">
                <label htmlFor="occupation" className="form-label">Occupation</label>
                <input type="text" className="form-control" id="occupation" name="occupation" />
            </div>
            </div>

            {/* Right Column */}
            <div className="col-md-4 text-center">
            <label className="form-label d-block">Profile Picture</label>
                        
                {/* Hidden file input */}
                <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    id="profilePicture"
                    name="profilePicture"
                />

                {/* Clickable icon */}
                <div
                    onClick={handleIconClick}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && handleIconClick()}
                    className="border rounded d-flex align-items-center justify-content-center mx-auto"
                    style={{ width: 150, height: 150, fontSize: 72, color: '#6c757d', cursor: 'pointer' }}
                    aria-label="Upload profile picture"
                >
                    <i className="bi bi-person-circle"></i>
                </div>
            </div>
        </div>

        <div className="mt-4 text-end">
            <button type="submit" className="btn btn-primary">Submit</button>
        </div>
        </form>

    </>
}