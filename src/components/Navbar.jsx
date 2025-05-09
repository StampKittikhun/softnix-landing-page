import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import logo from "../assets/images/Logo-Logger.png";
import React, { useState } from "react";

export default function MyNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");

  // const menuItems = ["Home", "About", "Services", "Contact"];

  const menuItems = [
    { id: "Hero", label: "หน้าแรก" },
  { id: "Features", label: "ฟีเจอร์เด่น" },
  { id: "WhySoftnix", label: "จุดเด่นของเรา" },
  { id: "VideoSection", label: "แนะนำระบบ" },
  { id: "CustomerLogo", label: "ลูกค้าของเรา" },
  { id: "RegisterDemo", label: "ทดลองฟรี" },
  ];

  return (
    <Navbar
      id="nav"
      fluid
      rounded
      className="sticky top-0 z-50  !bg-sky-300/20 backdrop-blur-md py-4 px-6 text-sky-900"
    >
      <NavbarBrand href="#">
        <img
          src={logo}
          className="ml-4 mr-3 h-[48px] sm:h-[56px]"
          alt="Flowbite React Logo"
        />
      </NavbarBrand>
      
      <div className="flex md:order-2 items-center gap-2"></div>
      <NavbarToggle onClick={() => setIsOpen(!isOpen)} />
      <NavbarCollapse
        className={isOpen ? "block" : "hidden md:flex md:space-x-6"}
      >
        {menuItems.map((label, idx) => (
          <NavbarLink
            key={idx}
            onClick={() => {
              setActive(label.id);
              setIsOpen(false);
              document.getElementById(label.id).scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="text-base md:text-lg !text-sky-900 font-medium transition-all duration-200 hover:underline hover:underline-offset-4"
          >
            {label.label}
          </NavbarLink>
        ))}
      </NavbarCollapse>
    </Navbar>
  );
}
