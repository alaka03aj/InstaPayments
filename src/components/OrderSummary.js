import Image from "next/image";

function OrderSummary({orderDetails}) {
    const {products, paymentMethods} = orderDetails;
    const totalPrice = 1000;
    return (
        <>
        <div>
            <h2>Order Summary</h2>
            <div>
                {products.map(product => (
                    <div key={product.id} style={{display: "flex", gap: "32px"}}>
                        <Image src={product.image} alt={product.title} width={100} height={100} />
                        <div>
                            <p>{product.title}</p>
                            <p>Quantity: {product.quantity}</p>
                            <p>{product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
}

export default OrderSummary;