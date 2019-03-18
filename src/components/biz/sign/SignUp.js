import React from 'react';


const SignUp =({signUp,userId})=>{
    return(
        <form onSubmit={signUp}>
            <div className="form-row">
                <div className="col-12 col-md-9 mb-2 mb-md-0">
                    <input type="email" name={userId} value={userId} className="form-control form-control-lg" placeholder="Enter your email..."/>
                </div>
                <div className="col-12 col-md-3">
                    <button type="submit" className="btn btn-block btn-lg btn-primary">Sign up!</button>
                </div>
            </div>
        </form>
    )
};

export default SignUp;
