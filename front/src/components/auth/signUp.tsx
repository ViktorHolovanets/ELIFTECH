import React, {ChangeEvent, useState} from 'react';

export default function SignUp() {
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

    const handleSubmit = () => {
        // Ваша логіка для обробки події submit
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

