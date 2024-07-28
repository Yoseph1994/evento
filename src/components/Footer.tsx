import Link from "next/link";

function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer>
      <section className="p-4 flex flex-col md:flex-row justify-between items-center text-base text-gray-600 capitalize border-t border-t-gray-800">
        <p className="">&copy;{date} All rights reserved</p>
        <div className="md:space-x-3 gap-2 flex items-center justify-center flex-col md:flex-row">
          <Link href="/privacy" className="hover:text-gray-400">
            Terms & condition{" "}
          </Link>
          <Link href="/terms-and-condition" className="hover:text-gray-400">
            privacy policy{" "}
          </Link>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
