import {
  FaCopyright,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contact">
      <div className="container mx-auto py-10">
        <h2 className="my-6 text-center text-xl sm:text-2xl leading-normal sm:leading-normal tracking-tight">
          Entre em contato conosco!
        </h2>

        <p className="flex gap-x-2 justify-center items-center mb-6">
          <FaCopyright /> MZN App Lab - {new Date().getFullYear()}
        </p>

        <div className="flex justify-center gap-3">
          <a
            href="https://wa.me/5519983373120"
            className="btn btn-lg btn-outline btn-neutral btn-circle"
          >
            <FaWhatsapp size={26} />
          </a>
          <a
            href="https://www.instagram.com/mznapplab/"
            className="btn btn-lg btn-outline btn-neutral btn-circle"
          >
            <FaInstagram size={26} />
          </a>
          <a
            href="https://www.facebook.com/mznapplab"
            className="btn btn-lg btn-outline btn-neutral btn-circle"
          >
            <FaFacebook size={26} />
          </a>
        </div>
      </div>
    </footer>
  );
}
