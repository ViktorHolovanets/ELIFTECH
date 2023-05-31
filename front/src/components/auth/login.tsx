import {useState} from "react";

export default function Login() {
    const[mail,setMail]=useState("");
    const[password,setPassword]=useState("");
    const submit=()=>{
        //to do
    }
    return (
        <div className="center-wrap">
            <div className="section text-center">
                <div className="form-group">
                    <input type="email" className="form-style"
                           placeholder="Your Email"
                           value={mail} onChange={(event)=>setMail(event.target.value)}/>
                </div>
                <div className="form-group mt-2">
                    <input type="password" className="form-style"
                           placeholder="Your Password"
                           value={password} onChange={(event)=>setPassword(event.target.value)}/>
                </div>
                <a className="btn m-4 btn-success"
                 onClick={submit}>Submit</a>
            </div>
        </div>
    );
}
