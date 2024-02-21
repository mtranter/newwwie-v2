'use client';

import { usePathname } from "next/navigation";
import { FC, useState } from "react";
import styles from "./nav.module.css";
import Link from "next/link";
import Logo from "./logo";

const Nav: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const path = usePathname();
  const currentTabClasses =
    "border-b-2 border-blue-300 text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium";
  const defaultTabClasses =
    "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium";
  const tabs = [
    {
      to: "/",
      label: "Home",
      classes: path === "/" ? currentTabClasses : defaultTabClasses,
    },
    {
      to: "/about",
      label: "About",
      classes: path === "/about" ? currentTabClasses : defaultTabClasses,
    },
    {
      to: "/get-invite",
      label: "Get an Invite",
      classes:
      path === "/get-invite" ? currentTabClasses : defaultTabClasses,
    },
    {
      to: "/community",
      label: "Community",
      classes: path === "/community" ? currentTabClasses : defaultTabClasses,
    },
    {
      to: "/events",
      label: "Events",
      classes: path === "/events" ? currentTabClasses : defaultTabClasses,
    },
  ];

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold text-gray-900">
                <Logo />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {tabs.map((tab, index) => (
                <Link key={index} href={tab.to} className={tab.classes}>
                  {tab.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMobileMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <svg
                className={`${isMobileMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isMobileMenuOpen ? "block" : "hidden"} sm:hidden`}>
        <div className={`px-2 pt-2 pb-6 space-y-1 ${styles['mobile-links']}`}>
          {tabs.map((tab, index) => (
            <div key={index} className="flex justify-center">
              <Link
                href={tab.to}
                className={`${tab.classes} block`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {tab.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};



export default Nav;