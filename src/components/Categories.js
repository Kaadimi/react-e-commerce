import React from 'react';
import "../styles/Landing.css"

const Categories = ({categories, selected, setCategory}) => {
    return (
        <div id="categoriesContainer">
            {categories.map((category, i) => <button key={i} id={selected === category ? "selectedCategory" : null} onClick={e => setCategory(category)}>{category}</button>)}
        </div>
    );
}

export default Categories;
