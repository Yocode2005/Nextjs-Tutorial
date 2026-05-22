export default function ProductDetailsLayout({
    children,
}: {
    children: React.ReactNode // use React.ReactNode to allow any valid React child (string, element, fragment, etc.)
}){
    return (
        <>
        {children}
        <h2>Featured Products </h2>
        </>
    )
}