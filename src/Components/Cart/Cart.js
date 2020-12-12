import React, { useEffect, useState } from 'react';
import './Cart.css';

const Cart = () => {

    const [quantity, setQuantity] = useState()

    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('http://localhost:1234/mobile/RY57U6HJTY6U657TGYH76TYUTYUYTU6T76')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    return (
        <section className="cartMain">
            <div className="container">
                <h2 className="cartTitle">Your Shopping Cart</h2>
                <hr />
                <div className="div cartContent">
                    <div className="cartItems">
                        <div className="cart_item">
                            <img style={{ width: "200px", marginRight: "20px" }} src={product.img} alt="" className="cart_item_img" />
                            <div className="cart_item_content">
                                <a href={"./../../product/" + product.catagories + "/" + product.id}><h4 className="">{product.title}</h4></a><br />
                                <div className="cart_item_rating">
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
                                </div>
                                <div className="cart_quantity">
                                    <button className="btn btn-danger"><strong> - </strong></button>
                                    <input type="number" value={quantity} className="form-control" />
                                    <button className="btn btn-danger"><strong>+</strong></button>
                                    <button className="cart_item_remove_btn">Remove from cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cartCheckout">
                        <h5> Subtotal ({ } items): ${ }</h5><br />
                        <button style={{ marginLeft: "0" }} className="cart_item_remove_btn">Proceed to checkout</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cart;