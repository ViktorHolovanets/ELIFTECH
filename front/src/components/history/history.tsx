import React from "react";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import Accordion from 'react-bootstrap/Accordion';
import IProductOrder from "../../models/IProductOrder";


export default function History() {

    const orders = useTypedSelector((state) => state.history);
    const getTotalPrice = (orders:IProductOrder[]): number => {
        let totalPrice = 0;
        orders.forEach((order) => {
            const {product, count} = order;
            const productPrice = product.price;
            totalPrice += productPrice * count;
        });
        return totalPrice;
    }
    return (
        <Accordion defaultActiveKey="0">
            {orders.map(ord =>
                <Accordion.Item eventKey={ord.id} key={ord.id}>
                    <Accordion.Header>{ord.dateOrderTime?.toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' })}</Accordion.Header>
                    <Accordion.Body>
                        {ord.products.map(pr => <div className='d-flex' key={pr.id}>
                            <div className='col-6'><span>{pr.product.name}</span>{": "} <span>{pr.count}</span></div>
                            <div className='col-6'>{` Price: ${pr.product.price}`}</div>
                        </div>)}
                        <hr/>
                        <div><strong>Total price :</strong> {getTotalPrice(ord.products).toFixed(2)}</div>
                    </Accordion.Body>
                </Accordion.Item>)}
        </Accordion>
    )
}