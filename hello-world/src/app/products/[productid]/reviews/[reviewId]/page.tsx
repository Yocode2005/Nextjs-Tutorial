import { notFound } from 'next/navigation';
import { parse } from 'path';
export default async function ProductReview({
    params,
} : {
    params : Promise<{ productid : string;  reviewId : string }>;
}){
    const { productid, reviewId } = await params;
    if(parseInt(reviewId) > 100){
        notFound();
    }
    return <h1>Review {reviewId} for product {productid}</h1>;  
}