import React, { useState} from 'react';
import { IoHomeSharp } from "react-icons/io5";
import { TbTransactionDollar } from "react-icons/tb";
import { MdAccountBalance } from "react-icons/md";
import { TfiSave } from "react-icons/tfi";
import { AiFillCreditCard } from "react-icons/ai";
import { GiReceiveMoney } from "react-icons/gi";
import { MdDesignServices } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { RiLoginCircleLine } from "react-icons/ri";
import { FaUserClock } from "react-icons/fa";
import {Link} from "react-router-dom";
import './Component/Special.css';
import { HiMiniBars3BottomRight } from "react-icons/hi2";

const Bankdash = () => {
   const[open,setOpen]=useState(false)

   const handleopen = ()=>{
      setOpen(prevOpen => !prevOpen)
   }
     const[left,setLeft]=useState(false);
     const handleLeft=()=>{
        setLeft(preLeft=>!preLeft)
     } 
    return (
        <div className={`box1 ${open ? 'open' : 'closed'}`}>
           <button className='btnOpen' onClick={handleopen}>
                {open ? "": ""}
                <HiMiniBars3BottomRight  className='' fontSize={"25px" }margin={"5px auto"} onClick={handleLeft}/>
                {left ? "":""}
            </button>
            {open && (
                <div className='one'>
                    <Link to='/'>
                        <IoHomeSharp />
                        <b className='std'>Dashboard</b>
                    </Link>
                    <br/><br/>
                    <TbTransactionDollar  />
                    <b className='std'>Trans</b> 
                    <br/><br/>
                    <MdAccountBalance />
                    <b className='std'>info</b> 
                    <br/><br/>
                    <TfiSave />
                    <b className='std'>Intrest</b>
                    <br/><br/>
                    <Link to="/courses">
                    <AiFillCreditCard />
                    <b className='std'>Courses</b></Link>
                    <br/><br/>
                    <GiReceiveMoney />
                    <b className='std'>Loans</b>
                    <br/><br/>
                    <MdDesignServices />
                    <b className='std'>Service</b>
                    <br/><br/>
                    <IoMdSettings />
                    <b className='std'>Setting</b>
                    <br/><br/>
                    <Link to='/Login'>
                        <RiLoginCircleLine />
                        <b className='std'>Login</b>
                    </Link>
                    <br/><br/>
                    <Link to='/Sign-up'>
                        <FaUserClock />
                        <b className='std'>Sign-up</b>
                    </Link>
                </div>
            )} 
  
        </div>
            
               
            
        
    );
}

export default Bankdash;
