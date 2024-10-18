import React from 'react';
import './Component/New.css';
import { RiLockPasswordLine } from "react-icons/ri";
import { CiUser } from "react-icons/ci";
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import './Component/Special.css'


function Loginform (){
    
    const [formData,setformData]=useState({adminEmail:'',password:''})
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
    }
    return (
         
      <div className='container'>
        <div className='main'>
            <form action='' onSubmit={handleSubmit}>
                <div className='first'>
                    <h2>Login Form</h2>
                </div>
                <div className='new'>
                    <div className='set' >
                        <label><b>Admin Email</b></label> </div>
                    <CiUser className="icon text-body-secondary" style={{ fontSize: "30px", marginTop : "13px"}} />
                    <input type='text'  name='adminEmail' placeholder='Admin Email' value={formData.adminEmail} onChange={(e)=>{setformData({...formData, adminEmail:e.target.value})}}  id='' />
                </div>
                <div className='box'>
                    <div className='set2'>
                        <label><b>Admin Password</b></label></div>
                    <RiLockPasswordLine className="icon text-body-secondary" style={{ fontSize: "30px",marginTop: "13px" }} />

                    <input type="password"  name='password' placeholder='Enter Password' value={formData.password} onChange={(e)=>{setformData({...formData, password:e.target.value})}} id='' />
                </div>
                
                    <p className='for'>Forgot your Password?</p>

                
                
                    <button class="btn btn-primary mt-1" type="submit" >Login</button>
    
            </form>
            <Toaster />
          
        </div>
      </div>

    )
}

export default Loginform;
