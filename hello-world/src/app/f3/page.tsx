import Link from "next/link";
export default function F3(){
    return (
        <>
        <h1> F3 page</h1>
        <div>
        <Link href="/f1/f2">Go  back to F2</Link>
        <br />
        <Link href="/f1">Go  back to F1</Link>
        </div>
        </>
    )
}