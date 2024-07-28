"use client";
import { navLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Header() {
  const pathName = usePathname();
  return (
    <header>
      <section className="flex justify-between items-center border-b-2 border-b-gray-800 pt-3">
        <h1 className="text-2xl md:text-3xl uppercase tracking-tighter">
          <Link href="/">evento</Link>
        </h1>
        <div className="space-x-4 font-semibold tracking-tighter text-xl ">
          {navLinks.map((navLink) => (
            <Link
              key={navLink.id}
              href={navLink.href}
              className={cn(
                "hover:border-b-4 hover:border-b-lime-600 text-white/50",
                {
                  "text-white border-b-4 border-b-lime-600":
                    pathName === navLink.href,
                }
              )}
            >
              {navLink.label}
            </Link>
          ))}
        </div>
      </section>
    </header>
  );
}

export default Header;
