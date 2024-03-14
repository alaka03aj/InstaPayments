"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import OrderSummary from "../components/OrderSummary";

export default function Checkout() {
  const [orderDetails, setOrderDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrderDetails();
  }, []);

  const fetchOrderDetails = async () => {
    try {
      //   const response = await fetch(
      //     "https://groww-intern-assignment.vercel.app/v1/api/order-details"
      //   , {cache: "force-cache"});
      const response = await fetch(
        "https://groww-intern-assignment.vercel.app/v1/api/order-details"
      );
      const data = await response.json();
      console.log(data);
      setOrderDetails(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching order details:", error);
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Checkout</h1>
      {loading ? (
        <p>Loading...</p>
      ) : orderDetails && orderDetails.products.length > 0 ? (
        <>
          <OrderSummary orderDetails={orderDetails} />
          <Link href="/payment">Proceed to Payment</Link>
        </>
      ) : (
        <p>No items in the cart.</p>
      )}
    </div>
  );
}
