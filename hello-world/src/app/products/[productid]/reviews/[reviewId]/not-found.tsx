"use client";
import { usePathname } from "next/navigation"; // used to access the current URL path in a client component, allowing us to extract parameters like productId and reviewId from the URL to display relevant information about the not found review.
export default function NotFound(){
    const pathname = usePathname();
    const productId = pathname.split("/")[2]; // Extract productId from the URL and 2
    const reviewId = pathname.split("/")[4]; // Extract reviewId from the URL and 4 is the index of reviewId in the URL
    return (
        <div>
            <h2>Review Not Found</h2>
            <p>Could not find requested review {reviewId} for product {productId}</p>
        </div>
    );
}