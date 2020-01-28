import React from 'react'
import {Link} from "react-router-dom"
import logo from "../logo.svg"
import styled from "styled-components"
import {ButtonContainer} from "./Button"

 const Navbar=()=> {
    return (
    <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">

        {/* icon finder policy is that if we use an icon from their library we have to start with a comment as below */}


        {/* https://www.iconfinder.com/icons/1243689/call_phone_icon
        Creative Commons (Attribution 3.0 Unported);
        https://www.iconfinder.com/Makoto_msk */}
        <Link to="/">
            <img src={logo} alt="Logo" className="navbar-brand"/>
        </Link>
        <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5">
                <Link to="/" className="nav-link">Products</Link>
            </li>
        </ul>
        <Link to ="/cart" className="ml-auto">
            <ButtonContainer> <span className="mr-2"><i className=" fas fa-cart-plus" /></span>My Cart</ButtonContainer>
        </Link>
    </NavWrapper>
    )
}

// styled component (see how to overwrite bootstrap classes using styled component==>navlink)
const NavWrapper= styled.nav`
background: var(--mainBlue);
.nav-link{
    color:var(--mainWhite)!important;
    font-size: 1.3rem;
    text-transform: capitalize;
}

`



export default Navbar