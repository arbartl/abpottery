import { useQuery } from "urql";
import { GET_PRODUCT_QUERY } from "../../lib/query";
import { useRouter } from "next/router";
import {
  DetailsStyle,
  ProductInfo,
  Quantity,
  Buy,
} from "../../styles/ProductDetails";
import {
  AiFillPlusCircle,
  AiFillMinusCircle,
  AiOutlineMinusCircle,
} from "react-icons/ai";
import { useStateContext } from "../../lib/context";

function ProductDetails() {
  const { query } = useRouter();
  const { quantity, increaseQuantity, decreaseQuantity, onAdd } =
    useStateContext();

  const [results] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: { slug: query.id },
  });

  const { data, error, fetching } = results;

  if (error) return <p>Error fetching products</p>;
  if (fetching) return <p>Loading...</p>;

  const product = data.products.data;
  const { name, description, price, image } = product[0].attributes;
  return (
    <DetailsStyle>
      <img src={image.data.attributes.formats.medium.url} alt={name} />
      <ProductInfo>
        <h3>{name}</h3>
        <p>{description}</p>
        <Quantity>
          <span>Quantity</span>
          <button onClick={decreaseQuantity}>
            {quantity === 0 ? <AiOutlineMinusCircle /> : <AiFillMinusCircle />}
          </button>
          <p>{quantity}</p>
          <button onClick={increaseQuantity}>
            <AiFillPlusCircle />
          </button>
        </Quantity>
        <Buy onClick={() => onAdd(data.products.data[0].attributes, quantity)}>
          Add to cart
        </Buy>
      </ProductInfo>
    </DetailsStyle>
  );
}

export default ProductDetails;
