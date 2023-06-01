import React, {useEffect, useState} from 'react';

import IProduct from "../../models/IProduct";
import ProductItem from "./productItemComponent";
import {fetchProducts} from "../../services/httpRequestServices/httpRequest";



function Main() {
    const [products, setProducts]=useState<IProduct[]>([])
    const [viewProducts, setViewProducts] = useState<IProduct[]>([]);
    const [selectedPlace, setSelectedPlace] = useState<string>('');
    const uniquePlacesOfPurchase = products
        .map(item => item.placeOfPurchase)
        .filter((place, index, array) => array.indexOf(place) === index).sort();

    useEffect(() => {
        (async () => {
            try {
                const data = await fetchProducts();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
                alert((error as Error).message) ;
            }
        })();

    }, []);
    useEffect(() => {
        if (products.length > 0) {
            handleClick(uniquePlacesOfPurchase[0]);
        }
    }, [products]);

    function handleClick(place: string) {
        const filteredProducts = products.filter(product => product.placeOfPurchase === place);
        setViewProducts(filteredProducts);
        setSelectedPlace(place);
    }

    return (
        <div className='align-items-start row d-flex'>
            <div className="col-12 col-md-3 d-flex flex-column align-items-center justify-content-start rounded mx-auto">
                {uniquePlacesOfPurchase.map(product =>
                    <button
                        onClick={() => handleClick(product)}
                        className={`btn btn-outline-info rounded-4 w-50 m-2 ${selectedPlace === product ? 'active' : ''}`}
                        key={product}>{product}
                    </button>)}
            </div>
            <div className='col-12 col-md-8 border border-secondary rounded'>
                <div className='row p-1'>
                    {viewProducts.map(pr => <ProductItem product={pr} key={pr.id}/>)}
                </div>
            </div>
        </div>
    );
}

export default Main;