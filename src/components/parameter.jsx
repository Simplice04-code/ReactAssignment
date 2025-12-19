/* Create a route for a product details page that accepts a product ID as a URL 
parameter.
 */
import React from 'react';
import { useParams } from 'react-router-dom';   
export default function ProductDetails() {
    const { productId } = useParams();  
    return (
        <div className='p-4 rounded shadow-md'>
            <h2>Product Details</h2>
            <p>Product ID: {productId}</p>  
        </div>
    );
}


