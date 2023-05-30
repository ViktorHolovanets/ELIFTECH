import React from "react";
import IProduct from "../../models/IProduct";
import { BsFillBasketFill } from "react-icons/bs";
import {useDispatch} from "react-redux";
import {addProductOrder} from "../../store/order/actions";

interface Props{
    product:IProduct
}

function ProductItem({product}:Props) {
    const dispatch = useDispatch();

    const handleAddProductOrder = () => {
        dispatch(addProductOrder({
            id:product.id,
            product,
            count:1
        }));
    };
return (
    <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-0 col-lg-4 mt-2 mb-2">
        <div className="card h-100">
            <img src={product.poster} className="card-img-top" alt={product.name}/>
                <div className="card-body d-flex flex-column justify-content-between">
                    <div className="card-title h5">{product.name}</div>
                    <div className=''>{`Price: ${product.price}`}</div>
                    <div className="btn btn-success m-2 w-50" onClick={handleAddProductOrder}><BsFillBasketFill /></div>
                </div>
        </div>
    </div>
);
}

export default ProductItem;