import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import ProductCard from '../../components/ProductCard/ProductCard';
import "./Landing.css"
import Filters from '../../components/Filters/Filters';
import { getProducts } from '../../actions/LandingActions';
import SortProducts from '../../components/SortProducts/SortProducts';
import Loading from '../../components/Loading/Loading';

const Landing = () => {
    const dispatch = useDispatch();
    const { products, loading } = useSelector(state => state);

    useEffect(() => {
        dispatch(getProducts())
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="MainContainer">
            <Filters />
            <SortProducts />
            {!loading ? <div id="productsContainer">
                {products.map((product, i) => <ProductCard key={i} product={product}/>)}
            </div> : <Loading />}
        </div>
    );
}

export default Landing;
