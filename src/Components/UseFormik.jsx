import React from 'react';
import { useFormik } from "formik";
import * as yup from "yup";
const UseFormik = () => {

    const formik = useFormik({
        initialValues : {
            username : "",
            password : "",
            confirmPassword : ""
        },
        onSubmit : ({username,password,confirmPassword}) => {
            console.log(username,password,confirmPassword);
        },
        // validate : ({username,password}) => {
        //     if (username == "" && password == "") {
        //         return {
        //             username : "Please fill username.",
        //             password : "Please fill password."
        //         }
        //     }
        //     if (username == "") {
        //         return {username : "Please fill username."}
        //     }
        //     if (username.length < 3 || username.length > 10) {
        //         return {username : "Username must be more than 3 or less than 10 charecters long."}
        //     }
        //     if (password == "") {
        //         return {password : "Please fill password."}
        //     }
        //     if (password.length < 8 || password.length > 12) {
        //         return {password : "Password must be more than 8 or less than 12 charecters long."}
        //     }
        // },
        validationSchema : yup.object().shape({
            username : yup.string()
            .required("Please fill username.")
            .min(3, "Username must be more than 3 charecters long.")
            .max(10, "Username must be less than 10 charecters long."),

            password : yup.string()
            .required("Please fill password.")
            .min(8, "Password must be more than 8 charecters long.")
            .max(12, "Password must be less than 12 charecters long."),

            confirmPassword : yup.string()
            .required("Please fill password again.")
            .oneOf([yup.ref("password")],"password")
        })
    })

    return (
        <div className='bg-warning justify-content-center d-flex align-items-center w-100'  style={{height:'100vh'}}> 
            <form onSubmit={formik.handleSubmit} className='d-flex flex-column gap-3 w-50'>
                <input onChange={formik.handleChange} value={formik.values.username} type="text" name='username' placeholder='Enter Username' className='p-2' />
                <span className='text-danger'> {formik.errors.username} </span>
                <input onChange={formik.handleChange} value={formik.values.password} type="password" name='password' placeholder='Enter Password' className='p-2' />
                <span className='text-danger'> {formik.errors.password} </span>
                <input onChange={formik.handleChange} value={formik.values.confirmPassword} type="password" name='confirmPassword' placeholder='Repeat Password' className='p-2' />
                <span className='text-danger'> {formik.errors.confirmPassword} </span>
                <button type='submit' className='btn btn-outline-success btn-lg border-2 border-success' >Sign In</button>
            </form>
        </div>
    );
}

export default UseFormik;
