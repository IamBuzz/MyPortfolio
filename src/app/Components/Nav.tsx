// import AtharvaLogo from "../assets/AtharvaLogo";
"use client"
import Image from "next/image";
import {
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem
} from "@heroui/navbar";
import "../globals.css";
import Link from "next/link";
import React from "react";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Contact"
  ];

  return (
    <Navbar className="flex" isBordered isBlurred isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden bg-opacity-10" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden">
        <NavbarBrand>
          <Image
            src="/assets/logo.png"
            alt="logo"
            // layout="intrinsic"
            width={40}
            height={40}
          />
          <p className="NavHeroName font-bold text-xl p-5">Portfolio</p>
        </NavbarBrand>
      </NavbarContent>
        
        <NavbarContent className="hidden sm:flex gap-8">
          <NavbarBrand>
            <Image
              src="/assets/logo.png"
              alt="logo"
              // layout="intrinsic"
              width={40}
              height={40}
            />
            <p className="NavHeroName font-bold text-3xl pl-5">Portfolio</p>
          </NavbarBrand>
          <NavbarItem className="text-lg"isActive>
            <Link href='/'>Home</Link>
          </NavbarItem>
          <NavbarItem className="text-lg">
            <Link href='/'>About</Link>
          </NavbarItem>
          <NavbarItem className=" text-lg text-center">
            <Link href='/'>Skills</Link>
          </NavbarItem>
          <NavbarItem className="text-lg text-center">
            <Link href='/'>Projects</Link>
          </NavbarItem>
          <NavbarItem className="text-lg text-center">
            <Link href='/'>Contact</Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-1/3 bg-transparent text-2xl MobileNavbar"
                color={
                  index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                }
                href='/'
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default Nav;
