import { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { FaCheck } from "react-icons/fa";
import toast from "react-hot-toast";

const Products = ({ item }) => {
  const { cartItems, addToCart ,addToFavorites ,favorites,removeFromFavorites} = useContext(CartContext);

  const navigat = useNavigate();

  const isInCart = cartItems.some((i) => i.id === item.id);
  

  const handelAddToCart = () => {
    addToCart(item);
    
    toast.success(
      <div className="toast-wrapper">
        <img src={item.images[0]} alt="" className="toast-img" />

        <div className="toast-content">
          <strong>{item.title}</strong>
          Added To Cart
        </div>

        <div>
          <button className="btn" onClick={() => navigat("/cart")}>
            View Cart
          </button>
        </div>
      </div>,
      { duration: 3500 },
    );
  };

  const isInFav = favorites.some((i) => i.id === item.id);

const handelAddToFav = ()=>{

  if(isInFav){
    removeFromFavorites(item.id)
    toast.error(`${item.title} Removed To Favorites`)
  }else{

    addToFavorites(item)
    toast.success(`${item.title} Added To Favorites`)
  }

}


  return (
    <div className={`product ${isInCart ? "in-cart" : ""}`}>
      <Link to={`/products/${item.id}`}>
        <span className="status_cart">
          <FaCheck /> In Cart
        </span>

        <div className="img-product">
          <img src={item.images[0]} alt="" />
        </div>
        <p className="name-product">{item.title}</p>
        <div className="stars">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
        </div>
        <p className="price">
          <span>${item.price}</span>
        </p>
      </Link>
      <div className="icons">
        <span className="btn_addtocart" onClick={handelAddToCart}>
          <FaCartArrowDown />
        </span>
        <span className={`${isInFav ? 'in-fav' : ''}`} onClick={handelAddToFav}>
          <FaRegHeart />
        </span>
        <span>
          <FaShare />
        </span>
      </div>
    </div>
  );
};

export default Products;
