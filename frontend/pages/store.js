import Head from "next/head";
import Link from "next/link";
import { useQuery } from "urql";
import { PRODUCTS_QUERY } from "../lib/query";
import Product from "../components/Product";
import { Gallery } from "../styles/Gallery";

function Store() {
  const [results] = useQuery({ query: PRODUCTS_QUERY });
  const { data, error, fetching } = results;

  if (error) return <p>Error fetching products</p>;
  if (fetching) return <p>Loading...</p>;

  const products = data.products.data;

  return (
    <>
      <Head>
        <title>Products</title>
      </Head>
      <main>
        <Gallery>
          {products.map((product) => (
            <Product key={product.attributes.slug} product={product} />
          ))}
        </Gallery>
      </main>
    </>
  );
}

export default Store;
