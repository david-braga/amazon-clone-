import React from 'react'
import './Checkout.css'

export default function Checkout() {
    return (
        <div className='checkout'>
            <div className='checkout_left'>
                <img
                    className='checkout_ad'
                    src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
                    alt=''
                />
                <div>
                    <h2 className='checkout_title'>
                        Your shooping Basket</h2>
                    {/* BasketItem
                        BasketItem
                        BasketItem
                        BasketItem
                        BasketItem
                        BasketItem
                        BasketItem */}
                </div>
            </div>
            <div className='checkout_right'>
                <h2>
                    The Checkout goes here
                </h2>
            </div>
        </div>
    )
}
