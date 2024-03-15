import { useOrderContext } from "@/context/OrderContext";
import { useState, useEffect } from "react";
import Image from "next/image";
// import { useRouter } from "next/router";

const getRandomPaymentStatus = () => {
  const statuses = ["Successful", "Failed", "Pending"];
  const randomIndex = Math.floor(Math.random() * statuses.length);
  return statuses[randomIndex];
};

export default function Confirmation() {
  const { orderDetails, loading } = useOrderContext();
  const [paymentStatus, setPaymentStatus] = useState(null);
//   const router = useRouter();
//   const { paymentMethod } = router.query;

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
      <div style={{display: "flex", flexDirection: "column", gap: "32px"}}>
                {orderDetails.products.map(product => (
                    <div key={product.id} style={{display: "flex", gap: "32px"}}>
                        <Image src={product.image} alt={product.title} width={100} height={100} />
                        <div>
                            <p>{product.title}</p>
                            <p>Quantity: {product.quantity}</p>
                            <p style={{marginTop: "7px"}}>${product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
      <p>Payment Method: UPI</p>
      <p>Payment Status: {paymentStatus}</p>
    </div>
  );
}
