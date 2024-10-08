import React ,{useState}from 'react';
import { Toaster } from 'react-hot-toast';
import './Component/Option.css'
const Courses = () => {
    const[image,setImage]=useState(null)
    const [courseHeading,setCourseHeading]=useState("")
    const[courseDescription,setCourseDescription]=useState('')
        const handleSubmit=async(e)=>{
            e.preventDefault()
            const formData=new FormData();
             formData.append('courseHeading',courseHeading);
             formData.append('courseDescription',courseDescription);
             formData.append('image',image);
    try{
        const response=await fetch('https://ainwik-app-4.onrender.com/api/add_course',{
       method:"POST",
       body:formData,           
        })
       
        if (!response.ok){
            throw new Error('Network response was not ok')
        } 
        const data=await response.json();
        console.log(data);
      
    }catch(error){
        console.error('Error uploading course',error);
        
            }
}
    return (
        <div className='component'>
            <form  onSubmit={handleSubmit}>
                <h2>Signin</h2> <br/>
                <label><b className='black'>Image</b></label><br/>
                <input type='file' name='image' placeholder='' onChange={(e)=>setImage( e.target.files[0])} id='' /><br/>
                <label><b>Course Heading</b></label><br/>
                <input type='text' name='courseHeading'  placeholder=''  value={courseHeading} onChange={(e)=>setCourseHeading(e.target.value)} id='' /><br/>
                <label><b className='red'>Description</b></label><br/>
                <input type='text' name='courseDescription' placeholder='' value={courseDescription} onChange={(e)=>setCourseDescription(e.target.value)}  id="" /><br/>
                <button class="btn btn-primary mt-3" type="submit" >Add Course</button><br/>
            </form>
            <Toaster/>
        </div>
    );
}

export default Courses;
