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
                    <Product
                        id='213547456'
                        title='Let my people go surfing'
                        price={29.99}
                        image='https://cdn.shopify.com/s/files/1/0028/6493/9077/products/BK067_DEFAULT_PATAGONIA_1_800x.jpg?v=1631689853'
                        rating={4}
                    />
                    < Product
                        id='253563789'
                        title='CYBERPOWERPC Gamer Xtreme VR Gaming PC, Intel Core i5-11600KF 3.9GHz, 16GB DDR4, GeForce RTX 3060 12GB, 500GB NVMe SSD, 1TB HDD, WiFi Ready & Win 11 Home (GXiVR8480A10)'
                        price={1409.99}
                        image='https://m.media-amazon.com/images/I/71FLsWWmE8L._AC_SL1500_.jpg'
                        rating={4}
                    />

                </div>
                <div className='home_row'>
                    <Product
                        id='236753951'
                        title="Fit Bit Smart Watch"
                        price={57.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'
                        rating={3}
                    />
                    <Product
                        id='753456321'
                        title='Sceptre 24" Professional Thin 75Hz 1080p LED Monitor 2x HDMI VGA Build-in Speakers, Machine Black (E248W-19203R Series)'
                        price={129.99}
                        image='https://m.media-amazon.com/images/I/71rXSVqET9L._AC_SL1257_.jpg'
                        rating={2}
                    />
                    <Product
                        id='856247852'
                        title='
                        Bose SoundLink Micro Bluetooth Speaker: Small Portable Waterproof Speaker with Microphone, Black'
                        price={99.97}
                        image='https://m.media-amazon.com/images/I/61v+-9dV4PL._AC_SL1500_.jpg'
                        rating={5}
                    />
                </div>
                <div className='home_row'>
                    <Product
                        id='496873413'
                        title='Samsung UN78KS9500 Curved 78-Inch 4K Ultra HD Smart LED TV (2016 Model)'
                        price={899.99}
                        image='https://m.media-amazon.com/images/I/91f2b+oH3YL._AC_SL1500_.jpg'
                        rating={4}
                    />

                </div>
            </div>
        </div>
    )
}
