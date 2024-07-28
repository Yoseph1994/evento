import Link from "next/link";

function Hero() {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-bold">Find events around you</h1>
      <p className="text-xl text-gray-300 capitalize text-center">
        browse more than{" "}
        <span className="text-lime-500 italic tracking-tighter">
          <Link href="/all-events">10,000 events</Link>
        </span>{" "}
        worldwide
      </p>
    </div>
  );
}

export default Hero;
