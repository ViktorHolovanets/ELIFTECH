import {useState} from "react";
import axios from "axios";
import {fetchLogin, fetchRegister} from "../../services/httpRequestServices/httpRequest";
import {setToken} from "../../store/auth/actions";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

export default function Login() {
    const navigate =useNavigate ()
    const dispatch = useDispatch();
    const[email,setMail]=useState("");
    const[password,setPassword]=useState("");
    const submit=() => {
        if (!email || !password) {
            alert('Please fill in all fields');
            return;
        }

        fetchLogin({
            "email": email,
            "password": password,
        }).then(data => {
            dispatch(setToken(data.token));
        });
        navigate("/");
    }
    return (
        <div className="center-wrap">
            <div className="section text-center">
                <div className="form-group">
                    <input type="email" className="form-style"
                           placeholder="Your Email"
                           value={email} onChange={(event)=>setMail(event.target.value)}/>
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
