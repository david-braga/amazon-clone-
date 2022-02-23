import React from 'react'
import './Home.css'
import Product from './Product'

export default function Home() {
    return (
        <div className='home'>
            <div className='home_container'>
                <img
                    className='home_image'
                    src='amazons_banner.png'
                    alt=''
                />

                <div className='home_row'>
                    <Product />
                    <Product />
                    {/* product */}
                </div>
                <div className='home_row'>
                    {/* product */}
                    {/* product */}
                    {/* product */}
                </div>
                <div className='home_row'>
                    {/* product */}

                </div>
            </div>
        </div>
    )
}
