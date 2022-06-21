import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";
import { useStateContext } from "../lib/context";
import { NavbarStyles, NavItems } from "../styles/NavbarStyles";
import Cart from "./Cart";

const { AnimatePresence, motion } = require("framer-motion");

function Navbar() {
  const { showCart, setShowCart, totalQuantity } = useStateContext();

  return (
    <NavbarStyles>
      <Link href={"/"}>
        <img
          src={
            "https://res.cloudinary.com/abpottery/image/upload/v1655771339/Transparent_logo_with_name_2_gxm5d5.png"
          }
          alt="Alex Broussard Pottery Logo"
        />
      </Link>
      <Link href={"/about"}>About Me</Link>
      <Link href={"/store"}>Products</Link>
      <NavItems>
        <div onClick={() => setShowCart(true)}>
          {totalQuantity > 0 && (
            <motion.span animate={{ scale: 1 }} initial={{ scale: 0 }}>
              {totalQuantity}
            </motion.span>
          )}
          <FiShoppingBag />
          <h3>Cart</h3>
        </div>
      </NavItems>
      <AnimatePresence>{showCart && <Cart />}</AnimatePresence>
    </NavbarStyles>
  );
}

export default Navbar;
