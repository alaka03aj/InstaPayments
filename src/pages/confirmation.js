import { useOrderContext } from "@/context/OrderContext";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const getRandomPaymentStatus = () => {
  const statuses = ["Successful", "Failed", "Pending"];
  const randomIndex = Math.floor(Math.random() * statuses.length);
  return statuses[randomIndex];
};

export default function Confirmation() {
  const { orderDetails, loading } = useOrderContext();
  const [paymentStatus, setPaymentStatus] = useState(null);
  const router = useRouter();
  const { paymentMethod } = router.query;

  useEffect(() => {
    const status = getRandomPaymentStatus();
    setPaymentStatus(status);
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Order Confirmation</h1>
      <h2>Order Summary</h2>
      <p>Products:</p>
      <ul>
        {orderDetails &&
          orderDetails.products.map((product) => (
            <li key={product.id}>
              {product.title} - ${product.price}
            </li>
          ))}
      </ul>
      <p>Payment Method: {paymentMethod}</p>
      <p>Payment Status: {paymentMethod && paymentStatus}</p>
    </div>
  );
}
