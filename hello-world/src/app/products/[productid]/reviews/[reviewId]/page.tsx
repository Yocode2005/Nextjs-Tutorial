export default async function ProductReview({
    params,
} : {
    params : Promise<{ productid : string;  reviewId : string }>;
}){
    const { productid, reviewId } = await params;
    return <h1>Review {reviewId} for product {productid}</h1>;  
}