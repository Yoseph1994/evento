import Link from "next/link";

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      <div className="text-center p-8  rounded-lg shadow-xl">
        <h1 className="text-4xl mb-4">Oops!</h1>
        <p className="mb-4">We could not find the page you were looking for.</p>
        <Link
          href="/"
          className="bg-lime-700 hover:bg-lime-700 text-gray-200 font-bold py-2 px-4 rounded"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
