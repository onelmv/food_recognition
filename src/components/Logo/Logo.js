import React from 'react';
import Tilt from 'react-tilt';
import chef from './icons8-chef-hat-100.png';
import './Logo.css';


const Logo =()=>{
    return (
        <Tilt className="Tilt ma4 br2 shadow-4 center" options={{ max : 25 }} style={{ height: 100, width: 100 }} >
            <div className="Tilt-inner"> 
                <img src={chef} alt="logo-chef-hat" className='w3 ma3'/>
            </div>
        </Tilt>
    )
}

export default Logo;