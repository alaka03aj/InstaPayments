"use client";
import { useOrderContext } from "@/context/OrderContext";
export default function Payment() {

    const { orderDetails, loading } = useOrderContext();
    if (loading) {
        return <p>Loading...</p>;
    }

    console.log(orderDetails)
  return (
    <>
      <div>Payment Dashboard</div>
      <p>Choose your payment method</p>
    </>
  );
}