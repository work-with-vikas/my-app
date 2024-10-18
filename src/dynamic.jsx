import React from 'react';
import './dynamic.css'
// import data from  './Component/data'


const Dynamic = () => {
    return (
        <>
        <div>
            
            {data.map((item)=>{
                return(
    //                 <div className='box'>
    //                     <div className="container">
    //                         <div className="row">
    //                             <div className="col-md-6">
    //                             <img src={item.img} alt="" className='rounded-4' width={400}  />
    //                             </div>
                              
    //                             <div className="col-md-6">
                            
    //                                 <h3>{item.heading}</h3><br/> 
    //                                 <b>Special Discount Price</b> <br/>
    //                                 <b>{item.discount}</b>
    //                                 <span class ="badge rounded-pill text-bg-success">60% off</span>
    //                                <del> {item.price} </del>
    //                             </div> 
    //                             <div className="col-md-2">
                                
    
    // <button type="button" class="btn btn-success">Explore</button>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>,
           
           
           <div className='main'> 

                    <div className='new'>
                        <h1 className='mb-5'>{item.title}</h1>
                     
           
                      <div className='index1'>
    
                    
    <a class="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
   
    <div className='first'>
  
    <div className='img1'><img src={item.img1} alt=""  width={50} /> </div>
     <div className='text1'>  <b>{item.app}</b><br/> 
      <p>Data is Everything</p> </div>
    
    </div>
    </a> 
    
    
    <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
      <div className="first">
      <div className='img2'><img src={item.img2} alt='' width={50} /> </div>
     
        <div className='text2'><b>{item.second}</b><br/>
        <p>Improve Your Business</p></div>
      </div>
    </button>
    
   <a class="btn btn-primary" data-bs-toaggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
    <div className="first">

    <div className='img3'><img src={item.img3} alt='' width={50} /> </div>
      <div className='text2'><b>{item.third}</b><br/>
      <p>Fun & Challenging</p></div>


    </div>
    
    </a></div>
    
    <div className='index2'>
    <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
      <div className="first">
      <div className='img4'><img src={item.img4} alt=''width={50} /> </div>
    <div className='text2'><b>{item.fourth}</b><br/>
    
      <p>New Skills,New You</p>
      </div>
      </div>
      </button> 
      
      <a class="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
     <div className="first">
     <div className='img5'><img src={item.img5} alt='' width={50} /> </div>  
     <div className='text2'> <b>{item.fifth}</b><br/>
      <p>Improve Your Business</p></div>
     </div>
    
    </a>
    
    
    <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
    <div className="first">
    <div className='img6'> <img src={item.img6} alt='' width={50} /> </div>
      <div className='text2'><b>{item.six}</b><br/>
      <p>Fun & Challenging</p></div>
    </div>
    </button>
    </div>


    <div className='index3'>
    <a class="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
   <div className="first">
   <div  className='img7'> <img src={item.img7} alt='' width={50} /> </div> 
     <div className='text2'><b> {item.seven}</b><br/>
     <p>Invest to Your Body</p></div>
   </div>
    </a>
    
    <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
    <div className="first">
    <div className='img8'><img src={item.img8} alt='' width={50} /></div>
     <div className='text2'><b> {item.eight}</b><br/>
     <p>Major or Minor</p></div>
    </div>
      </button>

      <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
    <div className="first">
    <div className='img9'><img src={item.img9} alt='' width={50} /></div>
     <div className='text2'las><b> {item.nine}</b><br/>
     <p>High Education Level</p></div>
    </div>
      </button>
    </div> 
    </div>
    </div>
    
            )}
            
        )}    
            </div> </>
    )
}

export default Dynamic;
