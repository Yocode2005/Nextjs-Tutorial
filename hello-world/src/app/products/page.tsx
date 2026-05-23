import Link from "next/link";
export default function ProductList() {
    const productId = 100;
  return (
    <>
      <Link href="/">Go to Home</Link>
      <h1>Product list</h1>
      <h2>
        <Link href="/products/1">Product 1</Link>
      </h2>
      <h2>
        <Link href="/products/2">Product 2</Link>
      </h2>
      <h2>
        <Link href="/products/3">Product 3</Link>
      </h2>
      <h2>
        <Link href="/products/4">Product 4</Link>
      </h2>
      <h2>
        <Link href="/products/5" replace>Product 5</Link> // replace will replace the current entry in the history stack instead of adding a new one || means that when you click on the link, it will navigate to the new page without adding a new entry to the browser's history. This can be useful in situations where you want to prevent users from going back to the previous page using the back button, such as after a form submission or when navigating through a multi-step process.
      </h2>
      <h2>
        <Link href={`/products/${productId}`}>Product ${productId}</Link>
      </h2>
    </>
  );
}
