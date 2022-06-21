import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";
import { NavbarStyles, NavItems } from "../styles/NavbarStyles";
import Cart from "./Cart";

function Navbar() {
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
