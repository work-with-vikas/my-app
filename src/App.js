import React from 'react';
 import './App.css';
   import Signin from './Signin';
   import Form from './Form';
   import Loginform from './Loginform';
   import Bankdash from './Bankdash';
   import Courses from './Courses';
   import { BrowserRouter,Routes,Route } from 'react-router-dom';
  import './Component/Special.css';
 
const App = () => {
  return (
     <div className='seperate'>
             <BrowserRouter>
           <Bankdash/>
           <Routes>
               <Route path="/" element={<h1>This is home page</h1>}></Route>
               <Route path="/login" element={<Loginform/>}></Route>
               <Route path="/Sign-up" element={<Form/>}></Route>
               <Route path='/sign-in now' element={<Signin/>}></Route> 
               <Route path='/create one now' element={<Form/>}></Route>
               <Route path='/courses' element={<Courses/>}></Route>
           </Routes>
           </BrowserRouter>  
           
            
    </div>
  );
}

export default App;

