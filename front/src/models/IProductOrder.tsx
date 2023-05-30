import IProduct from "./IProduct";

export default interface IProductOrder {
    id: string;
    product: IProduct;
    count: number;
}