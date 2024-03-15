"use client";
import Link from "next/link";
import OrderSummary from "@/components/OrderSummary";
import { useOrderContext } from "@/context/OrderContext";
import { GoArrowRight } from "react-icons/go";

export default function Checkout() {
  const { orderDetails, loading } = useOrderContext();
  if (loading) {
    return <p>Loading...</p>;
  }

  if (orderDetails.products.length === 0) {
    return <p>No items in the cart.</p>;
  }

  console.log(orderDetails.products);
  console.log(orderDetails.paymentMethods)
  return (
    <div>
      <h1>Checkout</h1>
      <OrderSummary details={orderDetails.products} />
      <div style={{display: "flex", alignItems: "center"}}>
      <Link href="/payment" style={{border: "solid", padding: "16px 32px", borderRadius: "5px"}}>
        Proceed to Payment 
      </Link>
      <GoArrowRight size={24}/>
      </div>
    </div>
  );
}
