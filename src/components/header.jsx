import React, { useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="appHeader">
      <nav className="mainNav">
        {/* <div className="navSection">
          <a href="#" className="logoLink">
            <img
              className="logo"
              src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=600"
              alt=""
            />
            <span>Your Company</span>
          </a>
        </div>

        <button className="menuButton" onClick={toggleSidebar}>
          Menu
        </button>

        <div className="navLinks hideOnMobile">
          <a href="#" className="navItem">
            Features
          </a>
          <a href="#" className="navItem">
            Marketplace
          </a>
          <a href="#" className="navItem">
            Company
          </a>
        </div> */}

        <div className="wallet-section  hideOnDesktop ml-auto flex gap-[12px]">
          <Link
            href="https://zora.co/collect/base:0x3a56ed006593740eb90e0dc9c45005933d27c8a2/1"
            target="_blank"
            className="link py-[6px] px-[20px] rounded-[12px] shadow-lg font-bold "
          >
            Litepaper
          </Link>
        </div>
        <div className="wallet-section hideOnMobile ml-auto flex gap-[12px]">
          <Link
            href="https://zora.co/collect/base:0x3a56ed006593740eb90e0dc9c45005933d27c8a2/1"
            target="_blank"
            className="link py-[6px] px-[20px] rounded-[12px] shadow-lg font-bold "
          >
            Litepaper
          </Link>
          <ConnectButton />
        </div>
      </nav>

      {/* {isSidebarOpen && (
        <div className="sidebarOverlay" onClick={toggleSidebar}>
          <div className="sidebar">
             <button className="menuButton" onClick={toggleSidebar}>
              Close
            </button> 
            <a href="#" className="sidebarItem">
              Features
            </a>
            <a href="#" className="sidebarItem">
              Marketplace
            </a>
            <a href="#" className="sidebarItem">
              Company
            </a>
            <a href="#" className="sidebarItem">
              Log in
            </a>
          </div>
        </div>
      )} */}
    </header>
  );
};

export default Header;
