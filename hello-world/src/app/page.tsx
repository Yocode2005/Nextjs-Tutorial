import Link from "next/link";

export default function Home() {
  return(
    <>
    <h1>Welcome  to the Home Page</h1>
    <Link href="/blog">Go to Blog</Link>
    <br />
    <Link href="/products">Go to Product</Link>
    <br />
    <Link href="/articles/breaking-news-123?lang=en">Click for English</Link>
    <br />
    <Link href="/articles/breaking-news-123?lang=es">Click for Spanish</Link>
    <br />
    <Link href="/articles/breaking-news-123?lang=fr">Click for French</Link>
    </>
  ) 
}