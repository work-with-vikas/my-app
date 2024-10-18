import React, { useState,useEffect } from 'react';
import './Component/Attendence.css';
import { MdDelete } from "react-icons/md";
import toast, { Toaster } from 'react-hot-toast';

function Attendance() {
    const [studentName, setStudentName] = useState('')
   
    const handlePunchIn = async()=>{
        try {
            const response = await fetch ('https://ainwik-app-4.onrender.com/api/punchin', {
                method : "POST",
                headers : {
                    'Content-Type' : 'application/json',
                },
                body : JSON.stringify({studentName})
            })
            if (response.ok){
                toast.success('Successfully Punch In!')
            }else{
                toast.error('Punch In failed.please try again.');

            }
            
            const data = await response.json()
            console.log(data)
        } catch (error) {    
        }
    }

    const handlePunchOut = async ()=>{
        try {
            const response = await fetch ('https://ainwik-app-4.onrender.com/api/punchout', {
                method : "POST",
                headers : {
                    'Content-Type' : 'application/json',
                },
                body : JSON.stringify({studentName})
            })
            if (response.ok){
                toast.success('Successfully Punch Out!')
            }else{
                toast.error('Punch Out failed.please try again.');

            }
             
              console.log()
            } catch (error){
                

            }
              
         }

         const [canPunchIn, setCanPunchIn] = useState(false);
  const [canPunchOut, setCanPunchOut] = useState(false);

     useEffect(() => {
         const checkTime = () => {
            const now = new Date();
            const hours = now.getHours();
             const minutes = now.getMinutes();

           
             setCanPunchIn(hours === 10 && minutes >= 0 && minutes <= 20);

    
             setCanPunchOut(hours === 18 && minutes >= 0 && minutes <= 20);
       }
       checkTime();
             const intervalId = setInterval(checkTime, 60000); 
       
               return () => clearInterval(intervalId);
         }, []);

    return (
        <div className='fit'>
            <h2><b>Attendence</b></h2><br/> <br/> 
            <input type='text' name='' id='' value={studentName} onChange={(e)=>setStudentName(e.target.value)}/><br/><br/> 
           <button class="btn btn-primary  "   onClick={handlePunchIn} disabled={!canPunchIn}>Punch In</button> <br/>
           <button class="btn btn-primary  " onClick={handlePunchOut} disabled={!canPunchOut}>Punch Out</button><br/>
           <MdDelete fontSize={"40px"} className='it'/>
           <Toaster/>
           
        </div>
    
    );
}

export default Attendance;
