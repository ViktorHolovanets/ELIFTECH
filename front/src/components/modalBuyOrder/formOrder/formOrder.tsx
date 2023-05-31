import { useState } from 'react';
import {useTypedSelector} from "../../../hooks/useTypedSelector";

interface Props {
    handlerBack: Function;
}

function FormOrder({ handlerBack }: Props) {
    const user = useTypedSelector((state) => state.auth);
    const isAuth=user.tokenExists
    const [name, setName] = useState(isAuth?user.user?.UserName:'');
    const [email, setEmail] = useState(isAuth?user.user?.email:'');
    const [phone, setPhone] = useState(isAuth?user.user?.phone:'');
    const [address, setAddress] = useState('');

    const send = () => {

    };

    return (
        <div className="d-flex justify-content-center align-items-center h-100 w-100">
            <div className="col-12 col-md-6">
                <div className="form-group">
                    <label>Name of the customer</label>
                    <div className="input-group">
                        <input
                            name="last_name"
                            placeholder="Name of the customer"
                            className="form-control"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-md-4 control-label">E-Mail</label>
                    <div className="input-group">
                        <input
                            name="email"
                            placeholder="E-Mail Address"
                            className="form-control"
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-md-4 control-label">Phone</label>
                    <div className="input-group">
                        <input
                            name="phone"
                            placeholder="(845)555-1212"
                            className="form-control"
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-md-4 control-label">Address</label>
                    <div className="input-group">
                        <input
                            name="address"
                            placeholder="Address"
                            className="form-control"
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                </div>

                <div className="d-flex justify-content-center align-items-center">
                    <button className="btn btn-success col-3 col-lg-4 m-2" onClick={send}>
                        Send
                    </button>
                    <button className="btn btn-danger col-3 col-lg-4 m-2" onClick={() => handlerBack()}>
                        Back
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FormOrder;
