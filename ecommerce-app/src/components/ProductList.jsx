import ProductItem from "./ProductItem";
import './ProductList.css'
import React from "react";
import { useState } from "react";


function ProductList( { products }) {
    
    const [selectedCategory, setSelectedCategory] = useState('All');

    function handleCategoryChange(event) {
        setSelectedCategory(event.target.value);
    }

    const ItemToFilter = products.filter((value)=>{
        if(selectedCategory === 'All'){
            return true;
        }else return value.category === selectedCategory         
        
    })
    
    
    
    
    return (
            <div >
                <div className="filter-container">
                <select name="filter" onChange={handleCategoryChange}>
                    <option value='All'>All</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Drama">Drama</option>
                    <option value="Thriller">Thriller</option>
                </select>
                </div>
                <hr />
                <div className="product-container">
                {ItemToFilter.map(product => (
                    <ProductItem key={product.id} product={product} />
                    
                ))}
                </div>
            </div>
                
    )
}

export default ProductList;