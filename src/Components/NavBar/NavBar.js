import { Fragment } from "react";
import logo from "../../assets/logo.png"
import "./NavBar.css"
import CartWidget from"../CartWidget/CartWidget.js"

const NavBar=()=>{
    return(
        <header>
            <img src={logo} alt=""></img>
            <h1>Cafese</h1>
            <nav>
                <a href="">Categoria 1</a>
                <a href="">Categoria 2</a>
                <a href="">Categoria 3</a>
                <CartWidget/>
            </nav>
            
        </header>
    )
}



export default NavBar;