// import AtharvaLogo from "../assets/AtharvaLogo";
import Image from "next/image";
import {
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  // NavbarMenuToggle,
  // NavbarMenu,
  // NavbarMenuItem
} from "@heroui/navbar";
import Link from "next/link";


function Nav() {
  return (
    <Navbar className="flex">
        <NavbarBrand className="flex justify-start ">
        <Image
            src="/assets/logo.png"
            alt="logo"
            // layout="intrinsic"
            width={80}
            height={80}
        />
          <Link
            href='/'
          >
            Atharva Panchal Software Developer
          </Link>
        </NavbarBrand>
        <NavbarContent className="flex justify-end">
          <NavbarItem isActive>
            <Link href='/'>Home</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href='/'>About</Link>
          </NavbarItem>
          <NavbarItem className="text-center">
            <Link href='/'>Skills</Link>
          </NavbarItem>
          <NavbarItem className="text-center">
            <Link href='/'>Projects</Link>
          </NavbarItem>
          <NavbarItem className="text-center">
            <Link href='/'>Contact</Link>
          </NavbarItem>
        </NavbarContent>
    </Navbar>
  );
}

export default Nav;
