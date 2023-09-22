'use client';

import {useState} from 'react';

export default  function Login () {

    const [googleSignIn, setGoogleSignIn] = useState(false);

    return (
        <div>
            <span onClick={()=>setGoogleSignIn(false)}>Sign In With Email</span>
            <span onClick={()=>setGoogleSignIn(true)}>Sign In With Google</span>
            {!googleSignIn ? <form onSubmit={()=>{}}>
                <div>
                    <label>Email</label>
                    <div></div>
                    <input type="email"/>
                </div>

                <div>
                    <label>Password</label>
                    <div></div>
                    <input type="password"/>
                </div>
                
                <div>
                    <button type="submit">Sign up</button>
                </div>
            </form> : 
                <div>
                 <button type="submit">Sign In With Google</button>
                </div>
            }

        </div>
        )
}