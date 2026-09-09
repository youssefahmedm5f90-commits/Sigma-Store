import TopHeader from "./components/header/TopHeader";
import BtmHeader from "./components/header/BtmHeader";
import Home from "./page/Home/Home";
import { Route, Routes } from "react-router-dom";
import ProductDetalis from "./page/productDetails/ProductDetalis";
import Cart from "./page/cart/Cart";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/ScrollToTop";
import { AnimatePresence } from "framer-motion";
import CategoryPage from "./page/categoryPage/CategoryPage";
import SearchResults from "./page/SearchResults";
import Favorites from "./page/favorites/Favorites";

function App() {
  return (
    <>
      <header>
        <TopHeader />
        <BtmHeader />
      </header>

<Toaster position="bottom-right" toastOptions={{
  style:{
    background:"#e9e9e9",
    borderRadius: "5px",
    padding:'14px'

  }
}}/>
<ScrollToTop/>

<AnimatePresence mode="wait">
<Routes>
  <Route path="/" element={<Home />}/>
  <Route path="/cart" element={<Cart/>}/>
  <Route path="/search" element={<SearchResults/>}/>
  <Route path="/favorites" element={<Favorites/>}/>
  <Route path="/products/:id" element={<ProductDetalis/>}/>
  <Route path="/category/:category" element={<CategoryPage/>}/>
</Routes>
</AnimatePresence>


      
    </>
  );
}

export default App;
