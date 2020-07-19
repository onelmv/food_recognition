import React from 'react';

const Nav =({onRouteChange, isSignedIn})=>{
    if(isSignedIn){

        return (
            <div className='flex flex-row justify-end'>
                <p onClick={()=>onRouteChange('signout')} className='f3 link underline pointer ph3 dim'>sign out</p>
            </div>
        )
    }else{
        return (
            <div className='flex flex-row justify-end'>
                <p onClick={()=>onRouteChange('signin')} className='f3 link underline pointer ph3 dim'>sign in</p>
                <p onClick={()=>onRouteChange('register')} className='f3 link underline pointer ph3 dim'>register</p>
            </div>
        )
    }
    
}

export default Nav;