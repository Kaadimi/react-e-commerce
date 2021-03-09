import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'

import Categories from '../../components/Categories/Categories';
import ProductCard from '../../components/ProductCard/ProductCard';
import "./Landing.css"
import Filters from '../../components/Filters/Filters';
import { getProducts } from '../../actions/productsActions';

const Landing = () => {
    const categories = ['all', 'monitor', 'keyboard', 'mouse', 'headset']
    const [category, setCategory] = useState('all')

    const dispatch = useDispatch();
    const { products } = useSelector(state => state);

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    return (
        <div className="MainContainer">
            <Categories categories={categories} selected={category} setCategory={setCategory}/>
            <div id="MainInnerContainer">
                <Filters />
                <div id="productsContainer">
                    {products.map((product, i) => <ProductCard key={i} product={product}/>)}
                </div>
            </div>
        </div>
    );
}

export default Landing;
