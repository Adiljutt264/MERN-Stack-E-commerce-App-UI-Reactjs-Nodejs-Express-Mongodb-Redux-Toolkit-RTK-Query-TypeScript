import { FaPlus } from "react-icons/fa";
type ProductsProps = {
    productId:string;
    name: string;
    photo: string;
    stock: number;
    price: number;
    handler: () => void;
}


const productCard = ({ productId, name, photo, stock, price, handler}: ProductsProps) => {
  return (
    <div className="product-card">
        <img src={photo} alt={name}/>
        <p>{name}</p>
        <span>{price}</span>
        <div>
        <button onClick={handler}><FaPlus/></button>
        </div> 
    </div>
  )
}

export default productCard