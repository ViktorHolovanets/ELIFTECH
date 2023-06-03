import React from 'react';
import Main from "./components/main/mainComponent";
import 'bootstrap/dist/css/bootstrap.css';
import Header from "./components/header/header";
import BuyOrder from "./components/modalBuyOrder/buyOrder";
import {useTypedSelector} from "./hooks/useTypedSelector";
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import History from "./components/history/history";
import FormAuth from "./components/auth/formAuth";
import Background from "./components/background/Background";



function App() {
    const IS_VIEW = useTypedSelector((state) => state.order.isView);
    const isActive = useTypedSelector((state) => state.auth.tokenExists);
    return (

        <BrowserRouter>
            <div className='container'>
                <div className="row">
                    <Header />
                    {IS_VIEW && <BuyOrder />}
                    <Routes>
                        <Route path="*" element={<Main />} />
                        <Route path="/auth" element={<FormAuth />} />
                        {isActive && <Route path="/history" element={<History />} />}
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
