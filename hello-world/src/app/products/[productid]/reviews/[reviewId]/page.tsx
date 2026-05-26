//import { notFound } from 'next/navigation'; // This function is used to trigger a 404 Not Found response when a certain condition is met, in this case, when the reviewId is greater than 1000.

import {redirect} from 'next/navigation'; // This function is used to programmatically redirect the user to a different page, in this case, to the home page if the reviewId is greater than 1000.

import { parse } from 'path';

export default async function ProductReview({
    params,
} : {
    params : Promise<{ productid : string;  reviewId : string }>;
}){
    const { productid, reviewId } = await params;
    if(parseInt(reviewId) > 1000){
        redirect('/products'); // Redirect to home page if reviewId is greater than 1000
        //notFound(); // Trigger a 404 Not Found response if reviewId is greater than 1000
    }
    return <h1>Review {reviewId} for product {productid}</h1>;  
}