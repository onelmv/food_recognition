import React from 'react';
/* import './LinkForm.css'; */

const LinkForm =({onInputChange, onButtonClick})=>{
    return (
        <div>
            <div className='pa3 mh3 br2 ba mv4 w-100 w-70-m w-50-l br3 b--light-green center shadow-5 box center '>
                <input className='w-50 h2' type="text" onChange={onInputChange} />
                <button className='h2 grow bg-transparent  pointer' onClick={onButtonClick}>click me</button>
            </div>
        </div>
    )
}

export default LinkForm;