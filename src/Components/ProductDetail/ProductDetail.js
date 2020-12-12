import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail = () => {

    const [product, setProduct] = useState([])

    const [imgForImages, setImgForImages] = useState([])

    const path = useParams()
    console.log(product)
    // useEffect(() => {
    fetch(`http://localhost:1234/${path.catagories}/${path.id}`)
        .then(res => res.json())
        .then(data => setProduct(data))
    // },[])
    useEffect(() => {
        setImgForImages(product.img)
    }, [])

    return (
        <section className="ProductDetailMain">
            <div className="container">
                <br />
                <div className="productDetails">
                    <div className="productsGallery">
                        <div className="productsImage">
                            <img src={imgForImages} alt="" />
                        </div><br />
                        <div className="imageChanger">
                            <Link onClick={() => setImgForImages(product.img)} className="imageSection">
                                <img src={product.img} alt={product.name} className="" />
                            </Link>
                            <Link onClick={() => setImgForImages(product.img2)} className="imageSection">
                                <img src={product.img2} alt={product.name} className="" />
                            </Link>
                            <Link onClick={() => setImgForImages(product.img3)} className="imageSection">
                                <img src={product.img3} alt={product.name} className="" />
                            </Link>
                            <Link onClick={() => setImgForImages(product.img4)} className="imageSection">
                                <img src={product.img4} alt={product.name} className="" />
                            </Link>
                            <Link onClick={() => setImgForImages(product.img5)} className="imageSection">
                                <img src={product.img5} alt={product.name} className="" />
                            </Link>
                        </div>
                    </div>
                    <div className="productsDetails">
                        <h2>{product.title}</h2>
                        <div className="reviewAndRating">
                            <span className="rating">
                                <i style={{
                                    color: ""
                                }} class={
                                    product.rating >= 1 ?
                                        "fas fa-star" : product.rating >= 0.2 ?
                                            "fas fa-star-half-alt" : "far fa-star"
                                }></i>
                                <i style={{
                                    color: ""
                                }} class={
                                    product.rating >= 2 ?
                                        "fas fa-star" : product.rating >= 1.2 ?
                                            "fas fa-star-half-alt" : "far fa-star"
                                }></i>
                                <i style={{
                                    color: ""
                                }} class={
                                    product.rating >= 3 ?
                                        "fas fa-star" : product.rating >= 2.2 ?
                                            "fas fa-star-half-alt" : "far fa-star"
                                }></i>
                                <i style={{
                                    color: ""
                                }} class={
                                    product.rating >= 4 ?
                                        "fas fa-star" : product.rating >= 3.2 ?
                                            "fas fa-star-half-alt" : "far fa-star"
                                }></i>
                                <i style={{
                                    color: ""
                                }} class={
                                    product.rating >= 5 ?
                                        "fas fa-star" : product.rating >= 4.2 ?
                                            "fas fa-star-half-alt" : "far fa-star"
                                }></i>
                            </span>
                            <span> {product.numOfReviews} Reviews</span>
                        </div>
                        <h4 className="">Features:</h4>
                        <div className="productsDetailsFeatures">
                            <div className="productsFeaturesRight">
                                {
                                    product.featuresTitle.map(pd =>
                                        <>
                                            <span>{pd} :</span>
                                            <br />
                                        </>
                                    )
                                }
                            </div>
                            <div className="productsFeaturesLeft">
                                {
                                    product.featuresValue.map(pd =>
                                        <>
                                            <span>{pd}</span>
                                            <br />
                                        </>
                                    )
                                }
                            </div>
                        </div>
                        <br />
                        <div className="priceAndBuy text-danger">
                            <h3 className="pdPrice">Price: {product.v1Price} $</h3>
                            <button className="buyNowBtn" disabled>
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-bag-plus-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M5.5 3.5a2.5 2.5 0 0 1 5 0V4h-5v-.5zm6 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5V8z" />
                                </svg>
                                Buy Now
                            </button>
                            <button className="AddToCartBtn">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                </svg>
                                Add To Cart
                                </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetail;