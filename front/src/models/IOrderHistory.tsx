import IProductOrder from "./IProductOrder";
import IUser from "./IUser";

export default interface IOrderHistory {
    id:string
    products: IProductOrder[];
    name:string;
    phone:string;
    address:string;
    dateOrderTime:Date|null
}