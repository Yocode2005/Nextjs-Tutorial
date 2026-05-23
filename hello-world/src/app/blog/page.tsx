import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog",
  description: "Welcome to my blog",
}

export default function Blog(){
    return <h1>My Blog</h1>;
}