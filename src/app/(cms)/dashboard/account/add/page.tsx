'use client'

import { useForm } from "react-hook-form";

export default function add() {

    const { register, handleSubmit, formState: { errors } } = useForm();


    const onSubmit = (data: any) => {
        console.log(data)
    }
    return <>
        <form onSubmit={ handleSubmit(onSubmit) }>
        <h3>Add Users </h3>
        
        <div className="mb-3">
            <label  className="form-label">Name</label>
            <input type="text" className="form-control" id="kostName" placeholder="Enter Name" {...register('name',
                {
                    required: 'input name is mandatory', 
                    maxLength: {
                        value: 10,
                        message: 'Input maximal is  10 character'
                    } 
                }
            )} />
           {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
        </div>

        <div className="mb-3">
            <label  className="form-label">Email</label>
            <input type="text" className="form-control" id="kostName" placeholder="Enter email" 
            {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Invalid email format',
                },
            })} 
              />
              {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
        </div>

        <div className="mb-3">
            <label  className="form-label">Password</label>
            <input type="password" className="form-control" id="kostName" placeholder="Enter password" {...register('password')} />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        </form>

    </>
}