import React from 'react';

const Register =({onRouteChange})=>{
    return (
        <main className="pa4 black-80 br2 ba mv4 w-100 w-50-m w-25-l br3 b--light-green center shadow-5"> {/* br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center */}
            <form className="measure center">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f2 fw6 ph0 mh0 center">Register</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Name</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="text" 
                                name="name"  
                                id="name" 
                        />
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="email" 
                                name="email-address"  
                                id="email-address" 
                        />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="password" 
                                name="password"  
                                id="password" 
                        />
                    </div>
                    
                </fieldset>
                <div className="">
                    <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                            onClick={()=>onRouteChange('home')}
                            type="submit" 
                            value="Register" 
                    />
                </div>
                <div className="lh-copy mt3">
                    <a href="#0" onClick={()=>onRouteChange('signin')} className="f6 link dim black db">Sign in </a>
                    
                </div>
            </form>
        </main>

    )
}

export default Register;