import { useStateContext } from "../lib/context";
import { CartWrapper, CartStyle, Card } from "../styles/CartStyles";

function Cart() {
  const { cartItems } = useStateContext();

  return (
    <CartWrapper>
      <CartStyle>
        {cartItems.length < 1 && (
          <div>
            <h1>Nothing in your cart...</h1>
          </div>
        )}
        {cartItems.length >= 1 &&
          cartItems.map((item) => {
            return (
              <Card key={item.slug}>
                <img
                  src={item.image.data.attributes.formats.thumbnail.url}
                  alt={item.name}
                />
                <div>
                  <h3>{item.name}</h3>
                  <h3>{item.price}</h3>
                </div>
              </Card>
            );
          })}
      </CartStyle>
    </CartWrapper>
  );
}

export default Cart;
