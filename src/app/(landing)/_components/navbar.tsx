"use client";
import Link from "next/link";
import { NavLinks } from "@/shared/constants/nav_link";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Logo from '@/app/assets/logo_white.png';
import LogoNav from '@/app/assets/logo_dark.png'
import { Button } from "@/shared/components/ui/button";
import { useState } from "react";
import MobileNavbar from "./mobile_navbar";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const pathname = usePathname();
  const isActive = (href: string) => {
    if (href === "#") return false;
    if (pathname === "/" && href === "/") return true;
    return (
      pathname.startsWith(href) &&
      (pathname === href || pathname[href.length] === "/")
    );
  };
  return (
    <div className="sticky z-50 top-0 bg-black/80 backdrop-blur-md ">
      <header className=" max-w-screen-2xl mx-auto hidden md:block  p-6">
        <nav className=" flex items-center gap-6">
          <div className=" w-32 h-12 overflow-hidden ">
            <Image src={LogoNav} alt={'logo'} width={300} className={'h-full w-full object-cover object-top '} />
          </div>
          <ul className=" flex gap-4 font-semibold">
            {NavLinks.map((link) => {
              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`${
                      isActive(link.href)
                        ? "text-secondary font-extrabold"
                        : "text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className=" ml-auto flex gap-3 items-center">
            <Link href={'/contact'} className=" px-6 py-2 bg-white hover:opacity-80 text-black">
              Contact Us
            </Link>
            {/*<Icon*/}
            {/*  icon={"solar:user-circle-bold"}*/}
            {/*  className=" h-8 w-8 text-stone-200 "*/}
            {/*/>*/}
            {/*<Icon*/}
            {/*  icon={"solar:map-point-bold"}*/}
            {/*  className=" h-8 w-8 text-stone-200 "*/}
            {/*/>*/}
          </div>
        </nav>
      </header>
      <div className="  block border-b border-b-neutral-700 md:hidden sticky z-50 top-0 bg-black">
        <div className=" p-4 flex justify-between ">
          <div className=" w-24 h-9 mt-1 overflow-hidden ">
            <Image src={Logo} alt={'logo'} width={300} className={'h-full w-full object-cover object-bottom '}/>
          </div>
          <button
              onClick={() => setMenuOpen(true)}
              className=" w-fit bg-stone-200 p-3 rounded-full hover:opacity-80"
          >
            <Icon
                icon="solar:hamburger-menu-line-duotone"
                className=" text-black"
            />
          </button>
        </div>
        {menuOpen && (
            <MobileNavbar isMenuOpen={menuOpen} closeMenuHandler={closeMenu}/>
        )}
      </div>
    </div>
  );
}
