import React, { useEffect } from 'react';
import logo from './../../logo/amazon_2.png';
import searchImg from './../../icons/search1.png';
import './Header.css';

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
                        <select className="headerCatagoriesBtn">
                            <option class="headerCatagoriesItem" selected="selected" value="search-alias=aps">All Departments</option>
                            <option class="headerCatagoriesItem" value="search-alias=arts-crafts-intl-ship">Arts &amp; Crafts</option>
                            <option class="headerCatagoriesItem" value="search-alias=automotive-intl-ship">Automotive</option>
                            <option class="headerCatagoriesItem" value="search-alias=baby-products-intl-ship">Baby</option>
                            <option class="headerCatagoriesItem" value="search-alias=beauty-intl-ship">Beauty &amp; Personal Care</option>
                            <option class="headerCatagoriesItem" value="search-alias=stripbooks-intl-ship">Books</option>
                            <option class="headerCatagoriesItem" value="search-alias=computers-intl-ship">Computers</option>
                            <option class="headerCatagoriesItem" value="search-alias=digital-music">Digital Music</option>
                            <option class="headerCatagoriesItem" value="search-alias=electronics-intl-ship">Electronics</option>
                            <option class="headerCatagoriesItem" value="search-alias=digital-text">Kindle Store</option>
                            <option class="headerCatagoriesItem" value="search-alias=instant-video">Prime Video</option>
                            <option class="headerCatagoriesItem" value="search-alias=fashion-womens-intl-ship">Women's Fashion</option>
                            <option class="headerCatagoriesItem" value="search-alias=fashion-mens-intl-ship">Men's Fashion</option>
                            <option class="headerCatagoriesItem" value="search-alias=fashion-girls-intl-ship">Girls' Fashion</option>
                            <option class="headerCatagoriesItem" value="search-alias=fashion-boys-intl-ship">Boys' Fashion</option>
                            <option class="headerCatagoriesItem" value="search-alias=deals-intl-ship">Deals</option>
                            <option class="headerCatagoriesItem" value="search-alias=hpc-intl-ship">Health &amp; Household</option>
                            <option class="headerCatagoriesItem" value="search-alias=kitchen-intl-ship">Home &amp; Kitchen</option>
                            <option class="headerCatagoriesItem" value="search-alias=industrial-intl-ship">Industrial &amp; Scientific</option>
                            <option class="headerCatagoriesItem" value="search-alias=luggage-intl-ship">Luggage</option>
                            <option class="headerCatagoriesItem" value="search-alias=movies-tv-intl-ship">Movies &amp; TV</option>
                            <option class="headerCatagoriesItem" value="search-alias=music-intl-ship">Music, CDs &amp; Vinyl</option>
                            <option class="headerCatagoriesItem" value="search-alias=pets-intl-ship">Pet Supplies</option>
                            <option class="headerCatagoriesItem" value="search-alias=software-intl-ship">Software</option>
                            <option class="headerCatagoriesItem" value="search-alias=sporting-intl-ship">Sports &amp; Outdoors</option>
                            <option class="headerCatagoriesItem" value="search-alias=tools-intl-ship">Tools &amp; Home Improvement</option>
                            <option class="headerCatagoriesItem" value="search-alias=toys-and-games-intl-ship">Toys &amp; Games</option>
                            <option class="headerCatagoriesItem" value="search-alias=videogames-intl-ship">Video Games</option>
                        </select>
                    </div>
                    <input type="text" className="headerSearchInput" />
                    <button className="headerSearchBtn">
                        <img src={searchImg} alt="" />
                    </button>
                </form>
                <div className="headerSignIn">
                    <a style={{ textDecoration: "none"}} href="./../../login">Sign In</a>
                </div>
                <div className="headerCart">
                    <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-cart" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                    </svg>
                    <span className="cartItemsCount">0</span>
                </div>
            </div>
        </section>
    );
};

export default Header;