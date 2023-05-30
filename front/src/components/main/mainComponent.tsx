import React, {useEffect, useState} from 'react';
import data from '../../data'
import IProduct from "../../models/IProduct";
import ProductItem from "./productItemComponent";

const uniquePlacesOfPurchase = data
    .map(item => item.placeOfPurchase)
    .filter((place, index, array) => array.indexOf(place) === index).sort();

function Main() {
    const [viewProducts, setViewProducts] = useState<IProduct[]>([]);
    const [selectedPlace, setSelectedPlace] = useState<string>('');
    useEffect(() => {
        handleClick(uniquePlacesOfPurchase[0])
    }, [])

    function handleClick(place: string) {
        const filteredProducts = data.filter(product => product.placeOfPurchase === place);
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