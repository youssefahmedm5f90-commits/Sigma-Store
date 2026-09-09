import { useEffect, useState } from "react";
import HeroSlider from "../../components/HeroSlider";
import SlideProduct from "../../components/slideProducts/SlideProduct";
import "./home.css";
import SlideProductLoading from "../../components/slideProducts/SlideProductLoading";
import PageTransition from "./../../components/PageTransition";

const categorys = [
  "smartphones",
  "laptops",
  "mens-watches",
  "mobile-accessories",
  "skin-care",
];

const Home = () => {
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const results = await Promise.all(
          categorys.map(async (category) => {
            const res = await fetch(
              `https://dummyjson.com/products/category/${category}`,
            );
            const data = await res.json();
            return { [category]: data.products };
          }),
        );

        const productsData = Object.assign({}, ...results);
        setProducts(productsData);
      } catch (error) {
        console.error("error fuck", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  console.log(products);

  return (
    <PageTransition>
      <div>
        <HeroSlider />

        {loading
          ? categorys.map((category) => <SlideProductLoading key={category} />)
          : categorys.map((category) => (
              <SlideProduct
                key={category}
                title={category.replace("-", " ")}
                data={products[category] ?? []}
                dec="The best mobile phones in the world"
              />
            ))}
      </div>
    </PageTransition>
  );
};

export default Home;
