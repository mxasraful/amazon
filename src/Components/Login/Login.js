import React, { useState } from 'react';
import logo from './../../logo/amazon_1.png';
import './Login.css'


const Login = () => {


    const [signUp, setSignUp] = useState(true)


    return (
        <section className="loginMain">
            <div className="container text-center">
                <div className="loginOrCreateAcSection">
                    <a href="./../../" className="loginHeaderLogo">
                        <img style={{ width: '130px', marginTop: '6px', cursor: "pointer" }} src={logo} alt="" />
                    </a>
                    {
                        signUp ?
                            <div className="singInForm forms">
                                <h4 className="text-left">Sign In</h4>
                                <form action="" className="text-left">
                                    <label className="text-left" htmlFor="sInEmail">Email </label><br />
                                    <input type="email" id="sInEmail" /><br />
                                    <label className="text-left" htmlFor="sInPassword">Password</label><br />
                                    <input type="password" id="sInPassword" /><br /><br />
                                    <button type="submit">Log In</button><br />
                                    <button type="button">
                                        <img style={{width: "25px", marginRight: "7px"}} src="https://img.icons8.com/fluent/344/google-logo.png" alt="" />
                                        <span>Log In With Google</span>
                                    </button>
                                </form>
                                <br />
                                <span>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</span><br />
                                <span className="fromChangerBtn" onClick={() => setSignUp(false)}>Create Account</span>
                            </div> :
                            <div className="singUpForm forms">
                                <h4 className="text-left">Create account</h4>
                                <form action="" className="text-left">
                                    <label className="text-left" htmlFor="sUpName">Name </label><br />
                                    <input type="email" id="sUpName" /><br />
                                    <label className="text-left" htmlFor="sUpEmail">Email </label><br />
                                    <input type="email" id="sUpEmail" /><br />
                                    <label className="text-left" htmlFor="sUpPassword">Password</label><br />
                                    <input type="password" id="sUpPassword" /><br />
                                    <label className="text-left" htmlFor="sUpRePassword">Re-enter password </label><br />
                                    <input type="password" id="sUpRePassword" /><br /><br />
                                    <button type="button">Create Your account</button>
                                </form>
                                <br />
                                <span>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</span><br />
                                <span onClick={() => setSignUp(true)} className="fromChangerBtn">Login</span>
                            </div>
                    }
                </div>
            </div>
        </section>
    );
};

export default Login;