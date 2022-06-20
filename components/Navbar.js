import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";
import { NavbarStyles, NavItems } from "../styles/NavbarStyles";
import Cart from "./Cart";

function Navbar() {
  return (
    <NavbarStyles>
      <Link href={"/"}>LOGO</Link>
      <Link href={"/about"}>About Me</Link>
      <Link href={"/store"}>Products</Link>
      <NavItems>
        <div>
          <FiShoppingBag />
          <h3>Cart</h3>
        </div>
      </NavItems>
      <Cart />
    </NavbarStyles>
  );
}

export default Navbar;
