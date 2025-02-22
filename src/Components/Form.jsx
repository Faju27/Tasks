import React, { useState } from 'react';
import toast, {  } from "react-hot-toast";

const Form = () => {

    const [formData , setFormData] = useState({username: "", password: ""})

    const handleFormData = (Event) => {
        const {name , value}= Event.target 
        // console.log(Event.target.name,Event.target.value);
        setFormData({...formData, [name]:value})
        console.log(formData);
    }

    const handleSubmit = async (Event) => {
        Event.preventDefault()
        if (formData.username == "" && formData.password == "") {
            return toast.error("Please Fill All Fields..")
        }
        if (formData.username == "") {
            return toast.error("Please fill username field.")
        }
        if (formData.username.length < 3 || formData.username.length > 10) {
            return toast.error("Username must be more than 3 or less than 10 charecters long.")
        }
        if (formData.password == "") {
            return toast.error("Please fill password field.")
        }
        if (formData.password.length < 8 || formData.password.length > 12) {
            return toast.error("Password must be more than 8 or less than 12 charecters long.")
        }
        return toast.success("Sign In completed")
    }

    return (
        <div className='justify-content-center d-flex align-items-center w-100'  style={{height:'100vh'}}> 
            <form action="" className='d-flex flex-column gap-3 w-50' onSubmit={handleSubmit}>
                <input type="text" name='username' placeholder='Enter Username' className='p-2' onChange={handleFormData} value={formData.username}/>
                <input type="password" name='password' placeholder='Enter Password' className='p-2' onChange={handleFormData} value={formData.password}/>
                <button type='submit' className='btn btn-outline-success btn-lg border-2 border-success'>Sign In</button>
            </form>
        </div>
    );
}

export default Form;

