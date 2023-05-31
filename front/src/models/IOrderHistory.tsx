import IProductOrder from "./IProductOrder";
import IUser from "./IUser";

export default interface IOrderHistory {
    Id: string;
    User: IUser | null;
    Products: IProductOrder[];
    DateOrderTime: Date;
    IsBuy: boolean;
    Address:string;
}