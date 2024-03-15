"use client";
import Link from "next/link";
import OrderSummary from "@/components/OrderSummary";
import { useOrderContext } from "@/context/OrderContext";
import { GoArrowRight } from "react-icons/go";

export default function Checkout() {
  const { orderDetails, loading } = useOrderContext();
  if (loading) {
    return <p style={{textAlign: "center"}}>Loading...</p>;
  }

  if (orderDetails.products.length === 0) {
    return <p>No items in the cart.</p>;
  }

  console.log(orderDetails.products);
  console.log(orderDetails.paymentMethods)
  return (
    <div>
      <h1 style={{textAlign: "center", marginBottom: "50px"}}>CHECKOUT</h1>
      <OrderSummary details={orderDetails.products} />
      <div style={{display: "flex", alignItems: "center", border: "solid", padding: "16px 32px", borderRadius: "5px", width: "17%", marginTop: "32px"}}>
      <Link href="/payment">
        Proceed to Payment 
      </Link>
      <GoArrowRight size={24}/>
      </div>
    </div>
  );
}
