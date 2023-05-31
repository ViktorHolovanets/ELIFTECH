import './buyOrder.css'
import {removeProductOrder, updateProductOrderCount, viewOrder} from "../../store/order/actions";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import OrderItem from "./orderItem";
import {RiCloseCircleFill} from "react-icons/ri";
import {useState} from "react";
import FormOrder from "./formOrder/formOrder";

function BuyOrder() {
    const productOrders = useTypedSelector((state) => state.order.productOrders);
    const dispatch = useDispatch();

    const handleUpdateProductOrderCount = (orderId: string, count: number) => {
        dispatch(updateProductOrderCount(orderId, count));
    };
    const [isSend, setSend] = useState(false);
    const handleSend = () => setSend(!isSend);
    const getTotalPrice = (): number => {
        let totalPrice = 0;

        productOrders.forEach((order) => {
            const {product, count} = order;
            const productPrice = product.price;
            totalPrice += productPrice * count;
        });
        return totalPrice;
    }
    const handleRemoveProductOrder = (orderId: string) => {
        dispatch(removeProductOrder(orderId));
    };
    return (
        <div className='modal-bg'>
            <div
                className="bg-secondary rounded text-bg-danger col-12 col-sm-12 col-md-6 col-lg-4 h-75 w-75 position-relative p-1">
                <button className='btn  text-danger rounded rounded-circle position-absolute top-0 end-0 btn-lg'
                        onClick={() => dispatch(viewOrder())}>
                    <RiCloseCircleFill/>
                </button>
                {
                    !isSend ?
                        <div
                            className="position-relative h-100">
                            <div className="h3 text-center m-4">Order</div>
                            <hr/>
                            <div className='overflow-auto h-75 d-flex flex-wrap'>
                                {productOrders.map((product) => (
                                    <OrderItem
                                        key={product.id}
                                        product={product}
                                        onUpdateCount={handleUpdateProductOrderCount}
                                        onRemove={handleRemoveProductOrder}
                                    />
                                ))}
                            </div>
                            <div className='h5 mx-2 text-warning'>Total Price: {getTotalPrice().toFixed(2)}</div>
                            <div className="d-flex justify-content-center align-items-center">
                                <button className="btn btn-success col-12 col-sm-12 col-md-3 col-lg-4 m-2" onClick={handleSend}>
                                    Send
                                </button>
                            </div>
                        </div> :
                        <FormOrder handlerBack={handleSend}/>
                }
            </div>
        </div>

    );
}

export default BuyOrder;