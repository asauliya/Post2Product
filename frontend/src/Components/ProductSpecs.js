import React from 'react';
import './ProductSpecs.css';

const ProductSpecs = () => {
    const productDetails = [
        { label: 'Weight', value: 'NA' },
        { label: 'Brand', value: 'ITC Sanfi' },
        { label: 'Region', value: 'NA' },
        { label: 'Quantity', value: '1' },
        { label: 'Occasion', value: 'Diwali' },
        { label: 'Form', value: 'Truffles, Cake' },
        { label: 'Package Information', value: 'Box' },
        { label: 'Manufacturer', value: 'ITC sanfi' },
        { label: 'Additives', value: 'Mango, Coconut' },
        { label: 'Allergen Information', value: 'NA' },
        { label: 'Form', value: 'Truffles, Cake' },
        { label: 'Package Information', value: 'Box' },
        { label: 'Manufacturer', value: 'ITC sanfi' },
        { label: 'Additives', value: 'Mango, Coconut' },
        { label: 'Allergen Information', value: 'NA' },
        { label: 'Weight', value: 'NA' },
        { label: 'Brand', value: 'ITC Sanfi' },
        { label: 'Region', value: 'NA' },
        { label: 'Quantity', value: '1' },
        { label: 'Occasion', value: 'Diwali' },
    ];

    return (
        <div className="product-specification">
            <div className="specification-column">
                {productDetails.slice(0, productDetails.length/2).map((item, index) => (
                    <div className="specification-item" key={index}>
                        <span className="label">{item.label}</span>
                        <span className="value">{item.value}</span>
                    </div>
                ))}
            </div>
            <div className="specification-column">
                {productDetails.slice(productDetails.length/2).map((item, index) => (
                    <div className="specification-item" key={index}>
                        <span className="label">{item.label}</span>
                        <span className="value">{item.value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductSpecs;
