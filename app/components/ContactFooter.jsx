import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";

const ContactFooter = () => {
  return (
    <footer className="relative text-gray-700 py-10 border-t px-6 lg:px-40">
      {/* Contact Us Button */}

      <div className="absolute top-0">
        <button className="bg-[#FF0076] text-white px-8 py-2 text-lg font-bold">
          Contact Us
        </button>
      </div>
      <div className="relative mx-auto">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-12">
          {/* Logo and Name */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Image
              src="/assets/home/logo.png"
              alt="St. Xavier's Logo"
              width={90}
              height={90}
            />
            <h3 className="text-lg font-bold mt-2 text-gray-800">
              ST. XAVIER'S
            </h3>
            <p className="text-sm text-gray-600">HIGH SCHOOL, PANCHGANI</p>
          </div>

          {/* Address and Contact */}
          <div className="mt-6 md:mt-0 text-center md:text-left">
            <p className="text-sm leading-relaxed text-gray-700">
              St. Xavier's High School,{" "}
              <span className="font-bold">Panchgani</span> P.O.,
              <br />
              Tal - Mahabaleshwar, Dist - Satara, Maharashtra, India - 412 805
            </p>
            <p className="mt-2 text-sm font-bold text-gray-800">
              +91 9975064585 | +91 8390850053 | +91 7066090694
            </p>
            <p className="mt-1 text-sm text-gray-700">
              Email:{" "}
              <a
                href="mailto:xavierspanchgani@gmail.com"
                className="underline text-[#FF0076] hover:text-[#FF0076]"
              >
                xavierspanchgani@gmail.com
              </a>
            </p>
          </div>

          {/* Social Icons */}
          <div className="mt-6 md:mt-0 flex space-x-5">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#FF0076] transition transform hover:scale-110"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#FF0076] transition transform hover:scale-110"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#FF0076] transition transform hover:scale-110"
            >
              <FaWhatsapp size={24} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#FF0076] transition transform hover:scale-110"
            >
              <FaMapMarkerAlt size={24} />
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t mt-6 pt-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} All rights reserved to St. Xavier's High
          School, Panchgani
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
