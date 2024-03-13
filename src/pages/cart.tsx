import { useState, useEffect } from "react";
import { VscError } from "react-icons/vsc";
const cartItems = [];
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
      if(Math.random()>0.5) setIsValidCouponCode(true);
      else setIsValidCouponCode(false)
    }, 1000);
  
    return () => {
      clearTimeout(timeOutId)
    }
  }, [couponCode])
  
  return (
    <div className="cart">
      <main>
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
            isvalidcouponCode ? ( <span className="green">{`- Discount ${discount}`} off using the <code>{couponCode}</code></span> ) : (<span className="red">Invalid Coupon <VscError /></span>)
          )
        }
      </aside>
    </div>
  )
}

export default cart