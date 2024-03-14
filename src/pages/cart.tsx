import { useState, useEffect } from "react";
import { VscError } from "react-icons/vsc";
import cartItem from "../components/cart-item";
const cartItems = [
  {
    productId: "asanianskadkw",
    photo: "https://m.media-amazon.com/images/I/619L9jf3-rL._AC_SX679_.jpg",
    name: "Macbook",
    price: 3000,
    quantity: 40,
    stock: 10,
  }
];
const subtotal = 4000;
const tax = Math.round(subtotal * 0.18);
const shippingCharges = 250;
const discount = 400;
const total = tax + shippingCharges + subtotal;

const cart = () => {
  const [couponCode, setCouponCode ] = useState<string>("");
  const [ isvalidcouponCode, setIsValidCouponCode ] = useState<boolean>();
  useEffect(() => {
    const timeOutId = setTimeout(() => {
      if(Math.random() > 0.5) setIsValidCouponCode(true);
      else setIsValidCouponCode(false);
      setIsValidCouponCode(false)
    }, 1000);
  
    return () => {
      clearTimeout(timeOutId)
    }
  }, [couponCode])
  
  return (
    <div className="cart">
      <main>
      {cartItems.map(i => <cartItem />)}
      </main>
      <aside>
        <p>{`Subtotal: ${subtotal}`}</p>
        <p>{`Shipping Charges: ${shippingCharges}`}</p>
        <p>{`Tax: ${tax}`}</p>
        <p>Discount: <em> {`- Discount ${discount}`}</em></p>
        <p>Total <b>{total}</b></p>
        <input type="text" value={couponCode} placeholder="Coupon code" onChange={(e) => setCouponCode(e.target.value)} />
        {
          couponCode && (
            isvalidcouponCode ? ( <span className="green">{`- Discount ${discount}`} off using the "<code>{couponCode}</code>"</span> ) : (<span className="red">Invalid Coupon <VscError /></span>)
          )
        }
      </aside>
    </div>
  )
}

export default cart