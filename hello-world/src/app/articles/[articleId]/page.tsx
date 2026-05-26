import Link from "next/link";
export default function NewsArticle(){
    return (
        <div>
            <h1>News article id</h1>
            <p>Reading in language</p>
            <div>
                <Link href="/articles/id?lang=en">Read in English</Link>
                <br />
                <Link href="/articles/id?lang=es">Read in Spanish</Link>
                <br />
                <Link href="/articles/id?lang=fr">Read in French</Link>
            </div>
        </div>
    )
}