import React from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import IProductOrder from "../../models/IProductOrder";

interface Props {
    product: IProductOrder;
    onUpdateCount: (productId: string, newCount: number) => void;
    onRemove: (productId: string) => void;
}

function OrderItem({ product, onUpdateCount, onRemove }: Props) {
    const handleCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newCount = parseInt(e.target.value);
        onUpdateCount(product.id, newCount);
    };

    const handleRemove = () => {
        onRemove(product.id);
    };

    return (
        <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-0 col-lg-4 mt-2 mb-2  p-1">
            <div className="card h-100 bg-info">
                <img src={product.product.poster} className="card-img-top" alt={product.product.name} />
                <div className="card-body d-flex flex-column justify-content-between">
                    <div className="card-title h5">{product.product.name}</div>
                    <div className="">{`Price: ${product.product.price * product.count}`}</div>
                    <div>
                        Count
                        <input type="number" value={product.count} min='1' onChange={handleCountChange} className='rounded rounded-4 py-2 w-25 text-center'/>
                    </div>
                    <div className="btn btn-success m-2 w-50" onClick={handleRemove}>
                        <RiDeleteBin5Fill />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderItem;
