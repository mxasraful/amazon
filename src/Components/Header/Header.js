import React, { useEffect } from 'react';
import logo from './../../logo/amazon_2.png';
import searchImg from './../../icons/search1.png';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <section className="headerMain">
            <div className="containerMain">
                {/* <div className="headerRightMenu">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-list" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg>
                </div> */}
                <a href="/" className="headerLogo">
                    <img src={logo} alt="" />
                </a>
                <form action="" className="headerSearchBar">
                    <div className="headerCatagories">
                        
                    </div>
                    <input type="text" className="headerSearchInput" />
                    <button className="headerSearchBtn">
                        <img src={searchImg} alt="" />
                    </button>
                </form>
                <div className="headerSignIn">
                    <a style={{ textDecoration: "none"}} href="./../../login">Sign In</a>
                </div>
                <Link to="./../../Cart" className="headerCart">
                    <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-cart" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                    </svg>
                    <span className="cartItemsCount">0</span>
                </Link>
            </div>
        </section>
    );
};

export default Header;