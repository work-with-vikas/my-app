import React from 'react';
import './Component/New.css';
import { RiLockPasswordLine } from "react-icons/ri";
import { CiUser } from "react-icons/ci";
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

function Loginform (){
    
    const [formData,setformData]=useState({studentId:'',password:''})
    const handleSubmit=async(e)=>{
        e.preventDefault()

        try{
            const response=await fetch('https://ecommerce-server-gxlx.onrender.com/api/login_student',{
           method:"POST",
           headers:{
            'Content-Type':'application/json'
        },
             body: JSON.stringify(formData)           
            })
            const data= await response.json()
            if (response.ok){
                toast.success('Successfully Login!')
            }else{
                toast.error(data.message||'Login failed.please try again.');

            }
        }catch(error){
            console.error('Error',error);
            toast.error('An Error occurred.Please try again later');
                }
                <img src={'c:\Users\satis\Downloads\abc.jpg.jpeg'}/>
    }
    return (

        <div className='main'>
            <form action='' onSubmit={handleSubmit}>
            
                <div className='first'>
                    <h2>Login Form</h2>
                </div>
                <div className='new'>
                    <div className='set' >
                        <label > <b>Student ID </b></label> </div>
                    <CiUser className="icon text-body-secondary" style={{ fontSize: "20px",marginTop: "13px" }} />
                    <input type='text'  name='studentId' placeholder='Student ID' value={formData.studentId} onChange={(e)=>{setformData({...formData, studentId:e.target.value})}}  id='' />
                </div>
                <div className='box'>
                    <div className='set'>
                        <label><b>Enter Password</b></label></div>
                    <RiLockPasswordLine className="icon text-body-secondary" style={{ fontSize: "20px",marginTop: "13px" }} />

                    <input type="text"  name='password' placeholder='Enter Password' value={formData.password} onChange={(e)=>{setformData({...formData, password:e.target.value})}} id='' />
                </div>
                <div className='for'>
                    <label for="">Forgot your Password?</label>

                </div>
                
                    <button class="btn btn-primary mt-3" type="submit" >Sign In</button>

            
    
                    
                
            </form>
            <Toaster />
          
        </div>

    )
}

export default Loginform;
