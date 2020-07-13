import React from 'react';
import './LinkForm.css';

const LinkForm =()=>{
    return (
        <div>
            <div className='pa3 mh3 br3 shadow-4 box center '>
                <input className='w-50 h2' type="text"/>
                <button className='h2 grow bg-light-blue  pointer'>click me</button>
            </div>
        </div>
    )
}

export default LinkForm;