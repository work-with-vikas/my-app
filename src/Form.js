
import React,{useState} from 'react';
import './Component/Form.css'
import './Component/Special.css'
import toast, { Toaster } from 'react-hot-toast';
import {Link} from "react-router-dom";

const Form = () => {
        const [formData,setformData]=useState({Emailaddress:'',password:''})
        const handleSubmit=async(e)=>{
            e.preventDefault()
    
            try{
                const response=await fetch('https://ainwik-app-4.onrender.com/api/auth/register_admin',{
               method:"POST",
               headers:{
                'Content-Type':'application/json'
            },
                 body: JSON.stringify(formData)           
                })
                const data= await response.json()
                if (response.ok){
                    toast.success('Successfully Signup!')
                }else{
                    toast.error(data.message||'Signup failed.please try again.');
    
                }
            }catch(error){
                console.error('Error',error);
                toast.error('An Error occurred.Please try again later');
                    }
        }
    
    return (
        <div className='row' >
            <form action =""  onSubmit={handleSubmit}>
                <div className='head'> 
                <h2>Sign Up</h2>
                </div><br/>
                <p>Already have an account?<Link to="/sign-in now"> Sign In Now!</Link></p> 
                <div className='col' >
                <label><b className='dot'>Email address</b>
                </label>
                <input type='email' name='emailaddress' placeholder='' value={formData.Emailaddress} onChange={(e)=>{setformData({...formData, Emailaddress:e.target.value})}} id=""  />
                </div><br/>
                <div className='col'>
              <label><b className='spc'>Password</b></label><br/>
              <input type="password" name='Password' placeholder='' value={formData.password} onChange={(e)=>{setformData({...formData, password:e.target.value})}} id="" />
                </div><br/>
                <div className='col'>
                    <label><b className='ss'>Confirm Password</b></label>
                    <input type='password' placeholder='' name='' id='' />

                </div>
                 <button class="btn btn-primary mt-3" type="submit" >Sign Up</button><br/> 
 
            </form>
           <Toaster/> 
        </div>
        
    );
}

export default Form;
