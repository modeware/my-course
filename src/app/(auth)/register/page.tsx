'use client'

export default  function Register () {
    return (
        <div>
            <form onSubmit={()=>{}}>
                
                <div>
                    <label>Full Name</label>
                    <div></div>
                    <input type="text"/>
                </div>

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
            </form>

        </div>
        )
}