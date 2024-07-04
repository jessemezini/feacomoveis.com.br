import {
  FaCopyright,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="">
      <div className="container mx-auto py-10">
        <h2 className="my-6 text-center text-xl sm:text-2xl leading-normal sm:leading-normal tracking-tight">
          Entre em contato conosco!
        </h2>

        <div className="flex justify-center gap-3">
          <a href="https://wa.me/5519983373120" className="btn btn-circle">
            <FaWhatsapp size={20} />
          </a>
          <a
            href="https://www.instagram.com/mznapplab/"
            className="btn btn-circle"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://www.facebook.com/mznapplab"
            className="btn btn-circle"
          >
            <FaFacebook size={20} />
          </a>
        </div>
      </div>

      <div className="py-3">
        <div className="container mx-auto text-sm flex flex-col gap-3 items-center justify-between sm:flex-row sm:justify-between">
          <p>MZN App Lab</p>
          <p className="flex gap-x-1 items-center">
            <FaCopyright /> {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
