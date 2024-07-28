import Link from "next/link";

const HeroLinks = () => {
  return (
    <div>
      <div className="flex text-base tracking-tighter text-gray-600 space-x-2 ">
        <p className="capitalize">popular:</p>
        <div className="space-x-2 text-lime-600 italic tracking-tighter ">
          <Link
            href="/events/austin"
            className="hover:border-b hover:border-b-lime-500"
          >
            Austin
          </Link>
          <Link
            href="/events/seattle"
            className="hover:border-b hover:border-b-lime-500"
          >
            Seattle
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroLinks;
