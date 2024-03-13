import { Link } from "react-router-dom";
import ProductCard  from "../components/product-card";

const home = () => {
  return (
    <div className="home">
    <section></section>
    <h1>Latest Products
    <Link to="/search" className="findmore">More</Link>
    </h1>
    <main>
      <ProductCard productId="a12" name="macbook" stock={21} price={9000} photo="https://m.media-amazon.com/images/I/619L9jf3-rL._AC_SX679_.jpg" />
    </main>
    </div>
    
  )
}

export default home