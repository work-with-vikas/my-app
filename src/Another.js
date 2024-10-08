import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
 import './Component/Another.css'



export default function App() {
  const [otp, setOtp] = useState()
 

  return (
    <div className='main'>
      <form>
    
      <h4><b>Sign in with OTP </b></h4>
      <b>Enter OTP</b>
   <div className='second'>
    <OtpInput 
      value={otp}
      onChange={setOtp}
      numInputs={4}
      renderSeparator= {<p>~</p>}
       renderInput={(props) => <input {...props} />}
     
    />
    </div>
    <button class="btn btn-primary %" type="submit" >Submit</button><br/>
   </form>
   </div>

  );
}
