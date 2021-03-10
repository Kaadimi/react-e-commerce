import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import ProductCard from '../../components/ProductCard/ProductCard';
import "./Landing.css"
import Filters from '../../components/Filters/Filters';
import { getProducts } from '../../actions/productsActions';

const Landing = () => {
    const dispatch = useDispatch();
    const { products } = useSelector(state => state);

    useEffect(() => {
        dispatch(getProducts())
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="MainContainer">
            <Filters />
            <div id="productsContainer">
                {products.map((product, i) => <ProductCard key={i} product={product}/>)}
            </div>
        </div>
    );
}

export default Landing;
