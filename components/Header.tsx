'use client';
import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavItems from "./NavItems";
import UserDropDown from "./UserDropDown";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const handleSignOut = async () => {
    // Redirect to the login page
    router.push("/sign-in");
  };
  return (
    <header className="sticky top-0 header">
      <div className="container header-wrapper">
        <Link href="/">
          <Image
            src="/assets/icons/logo.svg"
            alt=" Signalist logo"
            width={140}
            height={32}
            className="h-8 w-auto cursor-pointer"
          />
        </Link>
        <nav className="hidden md:block">
          <NavItems />
        </nav>
        <UserDropDown />
      </div>
    </header>
  );
};

export default Header;
