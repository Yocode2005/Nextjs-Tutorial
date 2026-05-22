import { Metadata } from "next";
type Props = {
  params: Promise<{ productid: string }>;
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const id = (await params).productid;
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${id}`);
    }, 100);
  });
  return {
    title: `Product ${title}`,
  };
};

export default async function ProductDetails({ params }: Props) {
  const productid = (await params).productid;
  return <h1>Details about product {productid}</h1>;
}
