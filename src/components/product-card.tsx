import { FaPlus } from "react-icons/fa";
type ProductsProps = {
    productId:string;
    name: string;
    photo: string;
    stock: number;
    price: number;
    handler: () => void;
}

const server = "dummyserver"

const productCard = ({ productId, name, photo, stock, price, handler}: ProductsProps) => {
  return (
    <div className="product-card">
        <img src={`${server}/${photo}`} alt={name}/>
        <p>{name}</p>
        <span>{price}</span>
        <button onClick={handler}><FaPlus/></button>
    </div>
  )
}

export default productCard