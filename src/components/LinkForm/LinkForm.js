import React from 'react';
import './LinkForm.css';

const LinkForm =({onInputChange, onButtonClick})=>{
    return (
        <div>
            <div className='pa3 mh3 br3 shadow-4 box center '>
                <input className='w-50 h2' type="text" onChange={onInputChange}/>
                <button className='h2 grow bg-light-blue  pointer' onClick={onButtonClick}>click me</button>
            </div>
        </div>
    )
}

export default LinkForm;