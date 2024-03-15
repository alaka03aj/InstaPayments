import { useState } from "react";
import { useOrderContext } from "@/context/OrderContext";

export default function Payment() {
    const { orderDetails, loading } = useOrderContext();
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

    if (loading) {
        return <p>Loading...</p>;
    }

    const handlePaymentMethodChange = (event) => {
        setSelectedPaymentMethod(event.target.value);
    };

    const payments = orderDetails.paymentMethods;

    return (
        <>
            <div>Payment Dashboard</div>
            <p>Choose your payment method</p>
            <div>
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
            <button onClick={() => console.log("Selected payment method:", selectedPaymentMethod)}>
                Confirm Payment
            </button>
        </>
    );
}
