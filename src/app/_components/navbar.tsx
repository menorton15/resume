"use client";

import Link from "next/link";
import { MenuItems } from "./MenuItems";
import { ButtonLink } from "./base/buttonLink";
import { useState } from "react";

export const Navbar = () => {
  const mobileBtnBarClasses =
    " w-7 h-0.5 bg-white my-1.5 transition-all transition-400";
  const [mobileMenuExpanded, setMobileMenuExpanded] = useState<boolean>(false);

  return (
    <div className={`
      visble 
      ${mobileMenuExpanded ? "max-md:fixed" : "max-md:absolute"} w-full h-full z-[9999]`}>
      <div
        className={`
        z-50
        transform 
        animate-default 
        cursor-pointer 
        self-center
        max-md:justify-self-end
        pr-4
        pt-5
        md:hidden
        ${mobileMenuExpanded ? "right-0 max-md:fixed " : "right-0 max-md:absolute"}`}
        onClick={() => setMobileMenuExpanded(!mobileMenuExpanded)}
      >
        <div
          className={`
            ${mobileBtnBarClasses}
            ${
              mobileMenuExpanded ? "translate-y-mobile-menu-btn -rotate-45" : ""
            }
          `}
        ></div>
        <div
          className={`
            ${mobileBtnBarClasses}
            ${mobileMenuExpanded ? "hidden" : ""}
          `}
        ></div>
        <div
          className={`
          ${mobileBtnBarClasses}
          ${mobileMenuExpanded ? "-translate-y-mobile-menu-btn rotate-45" : ""}
        `}
        ></div>
      </div>
      <nav
        className={`
        z-40 
        block 
        md:flex
        w-full
        items-center
        ${mobileMenuExpanded ? "bg-gradient-to-b from-[#2e026d] to-[#15162c]" : "bg-none"} 
        justify-center
        max-md:space-y-10
         duration-300 
        ${
          mobileMenuExpanded
            ? "flex h-screen justify-center max-md:flex-col max-md:fixed slide-out-to-top-24"
            : "max-md:absolute max-md:h-4 max-md:slide-in-from-top-24"
        }
        `}
      >
        <div className="mx-auto max-md:mt-0 flex max-md:justify-end text-center max-md:flex-col">
          <ul
            className={
              // clicked
              // ? "active flex"
              `flex 
              items-center
              text-center
              max-md:flex-col 
              ${mobileMenuExpanded ? "max-md:space-y-4" : "space-x-8"}`
            }
          >
            {MenuItems.map((item, index) => {
              return (
                <li key={index} className="text-center">
                  <Link
                    className={`
                      max-lg:text 
                      w-auto
                      flex-row
                      text-center
                      text-nav
                      text-gray-300
                      transition-all
                      duration-500
                      ease-in-out
                      hover:text-white
                      max-md:text-mobile-nav
                      ${
                        mobileMenuExpanded ? "visible" : "visible max-md:hidden"
                      }
                    `}
                    href={item.url}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div
            className={`
          ${mobileMenuExpanded ? "max-md:mt-10" : "sm:ml-8"}
          ${mobileMenuExpanded ? "visible" : "max-md:hidden"}
          `}
          >
            <ButtonLink value="Contact" href="/contact" />
          </div>
        </div>
      </nav>
    </div>
  );
};
