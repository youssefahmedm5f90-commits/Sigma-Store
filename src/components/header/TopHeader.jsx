import { Link } from "react-router-dom"
import Logo from '../../img/logo.jfif'

import { FaRegHeart } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import './header.css'
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import SearchBox from "./SearchBox";

const TopHeader = () => {

const {cartItems , favorites} = useContext(CartContext)
    
  return (
<div className="top-header">
    <div className="container">
        <Link className="logo" to='/'><img src={Logo} alt="logo" /></Link>

            <SearchBox/>
        <div className="header-icon">
            <div className="icon">
                <Link to={'/favorites'}>
                    <FaRegHeart />
                    <span className="count">{favorites.length}</span>
                </Link>
            </div>
            <div className="icon">
                <Link to={'/cart'}>
                    <BsCart4 />
                    <span className="count">{cartItems.length}</span>
                </Link>
            </div>
        </div>
    </div>
</div>
  )
}

export default TopHeader
