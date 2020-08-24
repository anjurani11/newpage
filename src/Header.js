import React from 'react';


const Header=()=>{
    return(
        <div >
            <div className="row" style={{backgroundColor:'black',color: 'white'}}>
                <div className="col-lg-6"> 
                <ul>
                <a href="mailto:prabhjotkaur@webmastershisar.com" style={{color:'white'}}>prabhjotkaur@webmastershisar.com</a>
                </ul>

                </div>
                <div  className="col-lg-6">
                <ul>
                <a className="btn btn-info" href="http://teensground.com/entrance/">Log In|Sign up</a>
                </ul>
                    
                </div>


            </div>
            <div className="text">

                <h1 className="comm">TeensGround</h1>
                <p style={{fontSize:'13px',lineHeight:'15px',color:'#8c8c8c'}}>Give wings to your Curiosity</p>
            </div>
            </div>


    )



}

export default Header




















































