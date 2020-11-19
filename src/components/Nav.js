import React from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'
const Nav = () => {
    return (
        <StyleNav>
            <h1 >
                <Link id="logo" to="/">Capture</Link>
            </h1>
            <ul>
                <li>
                    <Link to="/">1. About Us</Link>
                </li>
                <li>
                    <Link to="/work">2. Our Work</Link>
                </li>
                <li>
                    <Link to="/contact">3. Contact Us</Link>
                </li>
            </ul>

        </StyleNav>
    )
}
const StyleNav = styled.nav`
min-height:10vh;
display:flex;
margin:auto;
justify-content:space-between;
align-items:center;
padding:1rem 10rem;
background:#282828;
ul{
    list-style:none;
    display:flex;
}
#logo{
    font-size:2rem;
    font-family:"Lobster", cursive;
    font-weight:lighter;

}
li{
  padding-left:10rem;
  position:relative;
}
a{
    color: white;
    text-decoration:none;
}
`
export default Nav