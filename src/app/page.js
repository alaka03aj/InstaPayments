"use client";
import Link from "next/link";
import OrderSummary from "@/components/OrderSummary";
import { useOrderContext } from "@/context/OrderContext";

export default function Checkout() {
  const { orderDetails, loading } = useOrderContext();
  if (loading) {
    return <p>Loading...</p>;
  }

  if (orderDetails.products.length === 0) {
    return <p>No items in the cart.</p>;
  }

  console.log(orderDetails.products)
  return (
    <div>
      <h1>Checkout</h1>
      <OrderSummary details={orderDetails.products} />
      <Link href="/payment">Proceed to Payment</Link>
    </div>
  );
}
