import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getProduct } from '../../actions/productsActions';
import PageNotFound from '../../components/PageNotFound/PageNotFound';
import ProductInfo from '../../components/ProductInfo/ProductInfo';
import Suggestions from '../../components/Suggestions/Suggestions'

import './Product.css'

const Product = (props) => {
    const dispatch = useDispatch();
    const { loading, product, products } = useSelector(state => state);


    useEffect(() => {
        if (props.match.params.category && props.match.params.id)
            dispatch(getProduct(props.match.params.category, props.match.params.id))
             // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.match.params.category, props.match.params.id])

    return (
        <div>
            {!loading ?
            <div>
                {product && products.length ? 
                <div  id="productPageContainer">
                    <ProductInfo product={product}/>
                    <Suggestions suggestions={products.filter(suggestion => suggestion.category === product.category)}/>
                </div> : <PageNotFound />}
            </div> : null} 
        </div>
    );
}

export default Product;
