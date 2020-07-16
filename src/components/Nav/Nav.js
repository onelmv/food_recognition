import React from 'react';

const Nav =({onRouteChange})=>{
    return (
        <div>
            <p onClick={()=>onRouteChange('signin')} className='flex flex-row justify-end f3 link underline pointer ph3 dim' >sign out</p>
        </div>
    )
}

export default Nav;