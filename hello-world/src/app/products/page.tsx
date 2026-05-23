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
        <Link href="/products/5" replace>Product 5</Link>
      </h2>
      <h2>
        <Link href={`/products/${productId}`}>Product ${productId}</Link>
      </h2>
    </>
  );
}
