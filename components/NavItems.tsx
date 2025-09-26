"use client";
import { NAV_ITEMS } from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = () => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
  return (
    <ul className="flex flex-col sm:flex-row p-2 gap-3 sm:gap-10 font-medium">
      {
        /* Future nav items will go here */
        NAV_ITEMS.map(({ href, label }) => (
          <li
            key={label}
            className={`hover:text-yellow-500 transition-colors ${
              isActive(href) ? "text-gray-100" : "text-gray-400"
            }`}
          >
            <Link href={href}>{label}</Link>
          </li>
        ))
      }
    </ul>
  );
};

export default NavItems;
