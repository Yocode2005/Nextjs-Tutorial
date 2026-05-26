import {useRouter} from 'next/navigation';


export default function OrderProduct(){
    const router = useRouter();
    const handleClick = () => {
        console.log("Order placed successfully!");
        router.push('/'); //  Redirect to home page after placing the order
    }
    return(
        <>
        <h1>Order Product</h1>
        <button onClick={handleClick}>Place Order</button>
        </>
    )
     
}