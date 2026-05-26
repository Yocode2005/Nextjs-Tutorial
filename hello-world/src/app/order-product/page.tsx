"use client"; // This directive indicates that this component should be rendered on the client side
import {useRouter} from 'next/navigation'; // only works in client components


export default function OrderProduct(){
    const router = useRouter();
    const handleClick = () => {
        alert("Order placed successfully!");
        router.push('/'); //  Redirect to home page after placing the order
    }
    return(
        <>
        <h1>Order Product</h1>
        <button onClick={handleClick}>Place Order</button>
        </>
    )
     
}