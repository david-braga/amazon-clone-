import React from 'react'
import './Product.css'
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider';


export default function Product({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    console.log('This is the ...', basket)

    function addToBasket() {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        })
    }
    return (
        <div className='product'>
            <div className='product_info'>
                <p>{title}</p>
                <p className='product_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='product_rating'>
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>*</p>
                        ))}
                </div>
            </div>

            <img src={image} alt='' />

            <button onClick={addToBasket} ><Link to='/checkout'>Add to Basket</Link></button>
        </div>
    )
}
