import React from 'react';
import "./Home.css";
import Product from "./Product"

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                src="https://shopjasmine.com/wp-content/uploads/2021/10/1634473394779.jpg"
                alt=""
                />
                <div className="home__row">
                <Product title='Chanderi Jacquard Embroidered Suit with Block Print Chanderi Jacquard Dupatta' 
                price={1999} 
                image="https://shopjasmine.com/wp-content/uploads/2021/11/20211105093952_IMG_0845-1-100x100.jpg" 
                rating={5}/>
                <Product title='Chanderi Jacquard Embroidered Suit with Block Print Chanderi Jacquard Dupatta' 
                price={1999} 
                image="https://shopjasmine.com/wp-content/uploads/2021/11/20211105093952_IMG_0845-1-100x100.jpg" 
                rating={5}
                />
                
                </div>

                <div className="home__row">
                <Product title='Chanderi Jacquard Embroidered Suit with Block Print Chanderi Jacquard Dupatta' 
                price={1999} 
                image="https://shopjasmine.com/wp-content/uploads/2021/11/20211105093952_IMG_0845-1-100x100.jpg" 
                rating={5}/>
                <Product title='Chanderi Jacquard Embroidered Suit with Block Print Chanderi Jacquard Dupatta' 
                price={1999} 
                image="https://shopjasmine.com/wp-content/uploads/2021/11/20211105093952_IMG_0845-1-100x100.jpg" 
                rating={5}/>
                <Product title='Chanderi Jacquard Embroidered Suit with Block Print Chanderi Jacquard Dupatta' 
                price={1999} 
                image="https://shopjasmine.com/wp-content/uploads/2021/11/20211105093952_IMG_0845-1-100x100.jpg" 
                rating={5}/>
                </div>

                <div className="home__row">
                <Product title='Chanderi Jacquard Embroidered Suit with Block Print Chanderi Jacquard Dupatta' 
                price={1999} 
                image="https://shopjasmine.com/wp-content/uploads/2021/11/20211105093952_IMG_0845-1-100x100.jpg" 
                rating={2}/>
                </div>
            </div>
        </div>
    )
}

export default Home;
