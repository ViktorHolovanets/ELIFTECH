import React, { useState } from "react";
import'./style.css'
import Login from "./login";
import SingUp from "./signUp";

export default function FormAuth() {

    const [isRegistration, setRegistration]=useState(false)
    return (
        <div className="section">
            <div className="container">
                <div className="row full-height justify-content-center">
                    <div className="col-12 text-center align-self-center py-5">
                        <div className="section pb-5 pt-5 pt-sm-2 text-center">
                            <h6 className="mb-0 pb-3"><span
                                className={`${!isRegistration?'text-danger':'text-black'}`} >Log In </span><span
                                className={`${isRegistration?'text-danger':'text-black'}`}>Sign Up</span></h6>
                            <input className="checkbox visually-hidden" type="checkbox" id="reg-log" name="reg-log" onChange={()=>setRegistration(!isRegistration)}
                                   />
                            <label htmlFor="reg-log"></label>
                            <div className="card-3d-wrap mx-auto col-12  col-lg-6">
                                <div className="card-3d-wrapper">
                                    <div className="card-front">
                                        <Login/>
                                    </div>
                                    <div className="card-back">
                                        <SingUp/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
