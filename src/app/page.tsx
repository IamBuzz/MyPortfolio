// import { body } from "framer-motion/client";
import "./globals.css";
import Navbar from "./Components/Nav";
// import Image from "next/image";
export default function Home() {
  return (
    <div className="bg-hero-pattern bg-cover bg-center h-screen">
      <Navbar/>
    </div>
  );
}
