import React from 'react'
import './Product.css'

export default function Product() {
    return (
        <div className='product'>
            <div className='product_info'>
                <p>The lean startup</p>
                <p className='product_price'>
                    <small>$</small>
                    <strong>19.99</strong>
                </p>
                <div className='product_rating'>
                    <p>*****</p>

                </div>
            </div>
            <img
                src='https://cdn.shopify.com/s/files/1/0028/6493/9077/products/BK067_DEFAULT_PATAGONIA_1_800x.jpg?v=1631689853'
                alt=''
            />
            <button>Add to Basket</button>
        </div>
    )
}
