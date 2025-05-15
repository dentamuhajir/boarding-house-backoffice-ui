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
    <form className="p-4 border rounded">
        <div className="row">
            {/* Left Column */}
            <div className="col-md-8">
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className="form-control" id="username" name="username" required />
            </div>

            <div className="mb-3">
                <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                <input type="tel" className="form-control" id="phoneNumber" name="phoneNumber" />
            </div>

            <div className="mb-3">
                <label htmlFor="dateOfBirth" className="form-label">Date of Birth</label>
                <input type="date" className="form-control" id="dateOfBirth" name="dateOfBirth" />
            </div>

            <div className="mb-3">
                <label htmlFor="gender" className="form-label">Gender</label>
                <select className="form-select" id="gender" name="gender">
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                </select>
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