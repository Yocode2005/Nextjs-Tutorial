import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog",
  description: "Welcome to my blog",
}

export default async function Blog(){
  await new Promise((resolve)  => {
    setTimeout(() => {
      resolve("intentional delay");
    },2000);
  });
    return <h1>My Blog</h1>;
}