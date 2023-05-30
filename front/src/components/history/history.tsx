import IOrderHistory from "../../models/IOrderHistory";
import React from "react";

const orders: IOrderHistory[] = [];
export default function History() {


    return (
        <div>
            <div className='h1'>My orders</div>
            <hr/>
            <div className="accordion accordion-flush">
                {orders.map(ord =>
                    <div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id={`flush-headingOne-${ord.Id}`}>
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseOne" aria-expanded="false"
                                        aria-controls="flush-collapseOne">
                                    {ord.DateOrderTime.toDateString()}
                                </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse"
                                 aria-labelledby={`flush-headingOne-${ord.Id}`} data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    {ord.Products.map(pr=><div>
                                        <span>{pr.product.name}</span>{" "} <span>{pr.count}</span>
                                    </div>)}
                                    <div>Total price : {}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}