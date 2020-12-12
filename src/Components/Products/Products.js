import React, { useEffect, useState } from 'react';
import './Products.css'

const Products = () => {

    const [productz , setProductz] = useState([])

    useEffect(() => {
        fetch('http://localhost:1234/products')
            .then(res => res.json())
            .then(data => setProductz(data))
    },[])

    return (
        <section className="productsMain">
            <div className="containerMain">
                <div className="card-deck">
                    {
                        productz.map(pd =>
                            <div className="productItems">
                                <div class="card">
                                    <h5 class="card-title">{pd.title}</h5>
                                    <a href={"/product/"+pd.catagories+"/"+pd.id} class="card-body">
                                        <img src={pd.img} class="card-img-top" alt={pd.title} />
                                    </a>
                                    <span className="text-center text-dark">$ {pd.v1Price}.99</span>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default Products;