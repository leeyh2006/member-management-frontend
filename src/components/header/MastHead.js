import React from 'react'
import SignUp from "../biz/sign/SignUp";


const MastHead = () =>{
    return(
        <header className="masthead text-white text-center">
            <div className="overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-9 mx-auto">
                        <h1 className="mb-5">Sample Page</h1>
                    </div>
                    <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                        <SignUp/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default MastHead;
