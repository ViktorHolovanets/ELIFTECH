import './buyOrder.css'
import {removeProductOrder, updateProductOrderCount, viewOrder} from "../../store/order/actions";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import OrderItem from "./orderItem";
import {RiCloseCircleFill} from "react-icons/ri";

function BuyOrder() {
    const productOrders = useTypedSelector((state) => state.order.productOrders);
    const dispatch = useDispatch();

    const handleUpdateProductOrderCount = (orderId: string, count: number) => {
        dispatch(updateProductOrderCount(orderId, count));
    };
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
                className="content-filter bg-secondary rounded text-bg-danger col-12 col-sm-12 col-md-6 col-lg-4 h-75 w-75 position-relative">
                <div className="h3 text-center m-4">Order</div>
                <button className='btn  text-danger rounded rounded-circle position-absolute top-0 end-0 btn-lg'
                        onClick={() => dispatch(viewOrder())}>
                    <RiCloseCircleFill/>
                </button>

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
                <button className="btn btn-outline-success col-12 col-sm-12 col-md-6 col-lg-4 m-2"
                >Search
                </button>
            </div>
        </div>

    );
}

export default BuyOrder;