import React, {ChangeEvent, useState} from 'react';
import axios from "axios";
import {fetchRegister, fetchUser} from "../../services/httpRequestServices/httpRequest";
import {useDispatch} from "react-redux";
import {setToken, setUser} from "../../store/auth/actions";
import {useNavigate} from "react-router-dom";

export default function SignUp() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPhone(event.target.value);
    };

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(event.target.value);
    };

    const handleSubmit = async () => {
        if (!name || !email || !phone || !password || !confirmPassword) {
            alert('Please fill in all fields');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        await fetchRegister({
            "userName": name,
            "email": email,
            "phone": phone,
            "password": password,
            "confirmPassword": confirmPassword
        });
        navigate("/");
    };

    return (
        <div className="center-wrap">
            <div className="section text-center">
                <div className="form-group">
                    <input
                        type="text"
                        className="form-style"
                        placeholder="Your Name"
                        value={name}
                        onChange={handleNameChange}
                    />
                </div>
                <div className="form-group mt-2">
                    <input
                        type="email"
                        className="form-style"
                        placeholder="Your Email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>
                <div className="form-group mt-2">
                    <input
                        type="phone"
                        className="form-style"
                        placeholder="Your Phone"
                        value={phone}
                        onChange={handlePhoneChange}
                    />
                </div>
                <div className="form-group mt-2">
                    <input
                        type="password"
                        name="logpass"
                        className="form-style"
                        placeholder="Your Password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <div className="form-group mt-2">
                    <input
                        type="password"
                        className="form-style"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                    />
                </div>
                <a className="btn m-4 btn-success" onClick={handleSubmit}>
                    Submit
                </a>
            </div>
        </div>
    );
}

