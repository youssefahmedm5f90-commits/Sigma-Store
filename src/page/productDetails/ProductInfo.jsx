import { useContext } from "react";
import {
  FaCartArrowDown,
  FaRegHeart,
  FaShare,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";
import { CartContext } from "../../components/context/CartContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const ProductInfo = ({ product }) => {

const {cartItems,addToCart , addToFavorites ,favorites,removeFromFavorites} = useContext(CartContext)

  const navigat = useNavigate();

    const isInCart = cartItems.some((i) => i.id === product.id);

  const handelAddToCart = () => {
    addToCart(product);

    toast.success(
      <div className="toast-wrapper">
        <img src={product.images[0]} alt="" className="toast-img" />

        <div className="toast-content">
          <strong>{product.title}</strong>
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


    const isInFav = favorites.some((i) => i.id === product.id);

const handelAddToFav = ()=>{

  if(isInFav){
    removeFromFavorites(product.id)
    toast.error(`${product.title} Removed To Favorites`)
  }else{

    addToFavorites(product)
    toast.success(`${product.title} Added To Favorites`)
  }

}


  return (
    <div className={`details-item ${isInCart ? "in-cart" : ""}`}>
      <h1 className="name">{product.title}</h1>
      <div className="stars">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStarHalfAlt />
      </div>
      <div className="price">
        $<span>{product.price}</span>
      </div>
      <h5>
        Availability : <span>{product.availabilityStatus}</span>
      </h5>
      <h5>
        Brand : <span>{product.brand}</span>
      </h5>
      <p className="decs">{product.description}</p>
      <h5 className="stock">
        {" "}
        <span>Hurry Up! Only {product.stock} products left in stock.</span>
      </h5>


      <button className="btn btn_addtocart" onClick={handelAddToCart} >
        {isInCart ? "Item In Cart" : "Add To Cart"}
        <FaCartArrowDown />
      </button>


      <div className="icons">
        <span  className={`${isInFav ? 'in-fav' : ''}`} onClick={handelAddToFav}  >
          <FaRegHeart />
        </span>
        <span>
          <FaShare />
        </span>
      </div>
    </div>
  );
};

export default ProductInfo;
