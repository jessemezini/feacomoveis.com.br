import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function NavBar() {
  return (
    <div className="md:max-w-screen-md mx-auto md:shadow-sm mt-5 md:rounded-lg">
      <div className="navbar">
        <div className="navbar-start max-lg:w-3/4">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-base font-normal"
            >
              <li>
                <Link href="/">Início</Link>
              </li>
              <li>
                <Link href="#services">Serviços</Link>
              </li>
              <li>
                <Link href="#contact">Contato</Link>
              </li>
            </ul>
          </div>
          <Link href="/">
            <Image
              src="/logo-horizontal.png"
              alt="MZN App Lab"
              width={150}
              height={50.69}
              priority
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-base font-normal">
            <li>
              <Link
                href="/"
                className="active:bg-base-100 hover:bg-base-100 hover:text-primary"
              >
                Início
              </Link>
            </li>
            <li>
              <Link
                href="#services"
                className="hover:bg-base-100 hover:text-primary"
              >
                Serviços
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="hover:bg-base-100 hover:text-primary"
              >
                Contato
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a
            href="https://wa.me/5519983373120"
            className="btn btn-primary text-primary-content"
          >
            <span className="max-[375px]:hidden">Contato</span>{" "}
            <FaWhatsapp size="1.25rem" />
          </a>
        </div>
      </div>
    </div>
  );
}
