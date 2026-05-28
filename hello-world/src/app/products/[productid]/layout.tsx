function getRandomInt(count : number){
    return Math.floor(Math.random()  * count);
}

export default function ProductDetailsLayout({
    children,
}: {
    children: React.ReactNode // use React.ReactNode to allow any valid React child (string, element, fragment, etc.)
}){
    const random = getRandomInt(2);
    if(random == 1){
        throw new Error("Error loading product details"); // Simulate a random error to demonstrate error handling in Next.js. This will cause the page to display an error message when the random number is 1.
    }
    return (
        <>
        {children}
        <h2>Featured Products </h2>
        </>
    )
}