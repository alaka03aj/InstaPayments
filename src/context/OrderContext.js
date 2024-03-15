"use client";
import { createContext, useState, useEffect, useContext } from "react";

export const OrderContext = createContext({});

export const AppWrapper = ({ children }) => {
  const [orderDetails, setOrderDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await fetch(
          "https://groww-intern-assignment.vercel.app/v1/api/order-details"
        );
        const data = await response.json();
        setOrderDetails(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching order details:", error);
        setLoading(false);
      }
    };

    fetchOrderDetails();
  }, []);

  console.log(orderDetails);

  return (
    <OrderContext.Provider value={{ orderDetails, loading }}>
      {children}
    </OrderContext.Provider>
  );
};

export function useOrderContext() {
  return useContext(OrderContext);
}
