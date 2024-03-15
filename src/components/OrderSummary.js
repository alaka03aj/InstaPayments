import Image from "next/image";

function OrderSummary({details}) {
    const totalPrice = details.reduce((acc, product) => acc + product.price * product.quantity, 0);
    return (
        <>
        <div>
            <h2>Order Summary</h2>
            <div style={{display: "flex", flexDirection: "column", gap: "32px"}}>
                {details.map(product => (
                    <div key={product.id} style={{display: "flex", gap: "32px"}}>
                        <Image src={product.image} alt={product.title} width={100} height={100} />
                        <div>
                            <p>{product.title}</p>
                            <p>Quantity: {product.quantity}</p>
                            <p>${product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div style={{marginTop: "48px"}}>
                <p>Total: ${totalPrice}</p>
            </div>
        </div>
        </>
    );
}

export default OrderSummary;