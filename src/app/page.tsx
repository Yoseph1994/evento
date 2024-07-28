import Hero from "@/components/Hero";
import HeroLinks from "@/components/HeroLinks";
import SearchForm from "@/components/SearchForm";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="flex flex-col justify-center items-center min-h-screen space-y-4">
        <Hero />
        <SearchForm />
        <HeroLinks />
      </section>
    </main>
  );
}
