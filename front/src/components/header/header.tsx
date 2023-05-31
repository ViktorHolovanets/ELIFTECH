import "./Header.css";
import { useDispatch } from "react-redux";
import { viewOrder } from "../../store/order/actions";
import { GiBasket } from "react-icons/gi";
import { RiHome2Fill } from "react-icons/ri";
import {Link, useNavigate } from "react-router-dom";

import { useTypedSelector } from "../../hooks/useTypedSelector";

export default function Header() {
    const navigate =useNavigate ()
    const classesButton: string = "btn text-white";
    const dispatch = useDispatch();
    const count = useTypedSelector((state) => state.order.productOrders).length;
    const isActive = useTypedSelector((state) => state.auth.tokenExists);
    const handleAddProductOrder = () => {
        dispatch(viewOrder());
    };
    const handleAuth = () => {
        if(!isActive){
            navigate("/auth");
        }
    };

    return (
        <header className="Header mb-3 rounded rounded-3 mx-2 align-items-center">
            <nav className="Nav d-flex justify-content-end">
                <Link to="/" className={classesButton}>
                    <RiHome2Fill />
                    Home
                </Link>{" "}

                {isActive && <Link to="/history" className={classesButton}>History</Link>}
                <div
                    className={classesButton.concat(" position-relative")}
                    onClick={handleAddProductOrder}
                >
                    {count > 0 && (
                        <span className="position-absolute bottom-0 end-0 translate-middle text-danger rounded">
              {count}
            </span>
                    )}
                    <GiBasket />
                    Buy order
                </div>
                <button onClick={handleAuth}>{!isActive ? "Login" : "Logout"}</button>
            </nav>
        </header>
    );
}
