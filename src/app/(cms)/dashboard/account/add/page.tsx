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
            <input type="text" className="form-control" id="kostName" placeholder="Enter Name" {...register('name', {required: true, maxLength: 10})} />
            { errors.name && <p>Input name is mandatory</p>}

        </div>

        <div className="mb-3">
            <label  className="form-label">Email</label>
            <input type="text" className="form-control" id="kostName" placeholder="Enter email" {...register('email')} />
        </div>

        <div className="mb-3">
            <label  className="form-label">Password</label>
            <input type="password" className="form-control" id="kostName" placeholder="Enter password" {...register('password')} />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        </form>

    </>
}