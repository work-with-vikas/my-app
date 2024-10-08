import React  from 'react';
import './Component/Signin.css';
import {Link} from "react-router-dom";
const Signin = () => {
    return (
        <div className='world'>
            <form>
            <h3>Sign In</h3><br/>
            <p>Don't have an account?<Link to="/create one now"> Create One Now!</Link> </p>
             <b className='tag'>Email address</b><br/>
            <input type='email' placeholder='' name='' id='' /><br/><br/>
             <b className='tag2'>Password</b><br/>
            <input type='password' plraceholder='' name='' id='' /><br/>
           < button class="btn btn-primary mt-3" type="submit" >Sign Up</button>
            </form>
        </div>
    );
}

export default Signin;
