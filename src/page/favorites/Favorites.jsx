import { useContext } from "react"
import { CartContext } from "../../components/context/CartContext"
import PageTransition from './../../components/PageTransition';
import Products from "../../components/slideProducts/Products";


const Favorites = () => {

    const {favorites} = useContext(CartContext)

  return (
 <PageTransition >
        <div className="category_products FavoritesPage">
            <div className="container">
                <div className="top-slide">
                    <h2>Your Favorites</h2>
                </div>

                {favorites.length === 0 ? (
                    <p>No Favorites Products yet.</p>
                ) : (
                    <div className="products">
                        {favorites.map(item => (
                            <Products item={item} key={item.id} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    </PageTransition>
  )
}

export default Favorites
