import { useState } from "react";
import { useOrderContext } from "@/context/OrderContext";
import Link from "next/link";

export default function Payment() {
    const { orderDetails, loading } = useOrderContext();
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

    if (loading) {
        return <p style={{textAlign: "center"}}>Loading...</p>;
    }

    const handlePaymentMethodChange = (event) => {
        setSelectedPaymentMethod(event.target.value);
    };

    const payments = orderDetails.paymentMethods;

    return (
        <>
            <div><h1>Payment Dashboard</h1></div>
            <p>Choose your payment method</p>
            <div style={{marginBottom: "32px"}}>
                {payments.map((payment) => (
                    <div key={payment} style={{ display: "flex", gap: "32px" }}>
                        <input
                            type="radio"
                            id={payment}
                            name="paymentMethod"
                            value={payment}
                            checked={selectedPaymentMethod === payment}
                            onChange={handlePaymentMethodChange}
                        />
                        <label htmlFor={payment}>{payment}</label>
                    </div>
                ))}
            </div>
            <Link href={"/confirmation"} style={{border: "solid", padding: "16px 32px", borderRadius: "5px", width: "17%", marginTop: "32px", textDecoration: "none", color: "black"}}>Confirm Order</Link>
        </>
    );
}
