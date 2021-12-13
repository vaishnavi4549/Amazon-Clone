import React from 'react';
import './Home.css';
import Product from './Product';
function Home() {
    
    return (
        <div className="home">
            <img
                className="home_image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt=""
            />
            {/* product id, title, price,rating, image */}
            <div className="home_row">
                <Product
                    id="1"
                    title="Lenovo IdeaPad 1 14 14.0"
                    price={11.96}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71IVTMa5JQL._AC_UY327_FMwebp_QL65_.jpg"
                />

                <Product
                    id="2"
                    title="OnePlus 8 Glacial Green,​ 5G Unlocked Android Smartphone "
                    price={345}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/51uEwkqjZTL._AC_UY327_FMwebp_QL65_.jpg"
                />
            </div>
            <div className="home_row">
                <Product
                    id="3"
                    title="Anker Soundcore Life U2 Bluetooth Neckband Headphones"
                    price={100}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/6160sJNaJKL._AC_UL480_FMwebp_QL65_.jpg"
                />

                <Product
                    id="4"
                    title="ATY Large Sectional Sofa, L-Shape Couch Set with with Reversible Chaise Storage Ottoman and 2 Cup Holders, Living Room Furniture (Brown)"
                    price={345}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/8135X8ZxXpL._AC_UL480_FMwebp_QL65_.jpg"
                />
                <Product
                    id="5"
                    title="Sony X80J 75 Inch TV: 4K Ultra HD LED Smart Google TV with Dolby Vision HDR and Alexa Compatibility KD75X80J- 2021 Model"
                    price={345}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/91RfzivKmwL._AC_UY327_FMwebp_QL65_.jpg"
                />
            </div>
            <div className="home_row">
                <Product
                    id="6"
                    title="The 7 Habits Of Highly Effective People"
                    price={20}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/817xk9KvJbL._AC_UY327_FMwebp_QL65_.jpg"
                />

                <Product
                    id="7"
                    title="DFG Smart Watch HRV Activity Tracker Blood Oxygen Meter Heart Rate Blood Pressure Monitor Waterproof Fitness Tracker Watch"
                    price={130}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71fukB0Yp-L.__AC_SX300_SY300_QL70_FMwebp_.jpg"
                />

                <Product
                    id="8"
                    title="Legendary Whitetails Men's Camp Night Berber Lined Hooded Flannel Shirt Jacket"
                    price={345}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/91cKn5IWy1S._AC_UL480_FMwebp_QL65_.jpg"
                />
            </div>
            <div className="home_row">
                <Product
                    id="9"
                    title="The Drop Women's Avery Square Toe Two Strap High Heeled Sandal"
                    price={240}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/51RxUn0alsL._AC_UL480_FMwebp_QL65_.jpg"
                />

                <Product
                    id="10"
                    title="MIHOLL Women’s Long Sleeve Tops Lace Casual Loose Blouses T Shirts"
                    price={130}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/618EWjDCSPL._MCnd_AC_UL480_FMwebp_QL65_.jpg"
                />

                <Product
                    id="11"
                    title="Handbags for Women Shoulder Bags Tote Satchel Hobo 3pcs Purse Set"
                    price={190}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/810xrTg3t-L._AC_UL480_FMwebp_QL65_.jpg"
                />
            </div>
            <div className="home_row">
                <Product
                    id="12"
                    title="Amazon Brand – Stone & Beam Blaine Modern Sectional Sofa"
                    price={300}
                    rating={5}
                    image=" https://m.media-amazon.com/images/I/71WsJB9zCPL._AC_SL1500_.jpg"
                />
            </div>
        </div>
    )
}

export default Home
