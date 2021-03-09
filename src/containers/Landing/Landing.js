import React, {useState, useEffect} from 'react';
import axios from 'axios'

import Categories from '../../components/Categories/Categories';
import ProductCard from '../../components/ProductCard/ProductCard';
import "./Landing.css"
import Filters from '../../components/Filters/Filters';

const Landing = () => {
    const categories = ['all', 'monitor', 'keyboard', 'mouse', 'headset']
    const [category, setCategory] = useState('all')
    const [products, setProducts] = useState([])

    const categoryProducts = () => products.filter(product => product.category === category)

    useEffect(() => {
        axios.get("http://localhost:3000/products")
        .then(res => {
            setProducts(res.data)
        })
        .catch(console.error)
    }, [])

    return (
        <div className="MainContainer">
            <Categories categories={categories} selected={category} setCategory={setCategory}/>
            <div id="MainInnerContainer">
                <Filters />
                <div id="productsContainer">
                    {category !== 'all' ? categoryProducts().map((product, i) => <ProductCard key={i} product={product}/>) : products.map((product, i) => <ProductCard key={i} product={product}/>)}
                </div>
            </div>
        </div>
    );
}

export default Landing;
