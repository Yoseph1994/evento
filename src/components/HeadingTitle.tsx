"use client";

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

function HeadingTitle() {
  const router = useRouter();
  console.log();
  return (
    <h1 className="text-4xl md:text-5xl font-bold text-center">Events in {}</h1>
  );
}

export default HeadingTitle;
