import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";

const ContactFooter = () => {
  return (
    <footer className="relative text-gray-700 py-10 border-t px-6 lg:px-36">
      {/* Contact Us Button */}
      <div className="absolute top-0 left-6 lg:left-36">
        <button className="bg-[#FF0076] text-white px-6 py-5 text-sm hover:bg-[#FF0076]/90 font-bold lg:text-[26px] transition-colors">
          Contact Us
        </button>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mt-12">
          {/* Logo and Name */}
          <div className="w-24 h-24 md:w-1/3 md:h-48 relative flex-shrink-0 mx-auto md:mx-0">
            <Image
              src="/assets/logo/logo.png"
              alt="St. Xavier's Logo"
              className="object-contain"
              width={500}
              height={500}
            />
          </div>

          {/* Address, Contact, and Social Section */}
          <div className="flex-1 space-y-6">
            {/* Address */}
            <div className="text-center md:text-left">
              <p className="text-sm leading-relaxed text-gray-700 lg:text-[20px]">
                St. Xavier's High School,{" "}
                <span className="font-bold">Panchgani</span> P.O,
                <br />
                Tal - Mahabaleshwar, Dist - Satara, Maharashtra, India - 412 805
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-2">
              <p className="text-sm lg:text-[20px] font-bold text-gray-800 text-center md:text-left">
                +91 9975064585 <span className="text-[#FF0076]">|</span> +91
                8390850053 <span className="text-[#FF0076]">|</span> +91
                7066090694
              </p>
              <p className="text-sm text-gray-700 text-center md:text-left">
                <span className="lg:text-[20px]">Email : </span>
                <a
                  href="mailto:xavierspanchgani@gmail.com"
                  className=" lg:text-[20px] hover:text-[#FF0076]/90 transition-colors"
                >
                  xavierspanchgani@gmail.com
                </a>
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start space-x-5">
              {[
                { Icon: FaFacebook, label: "Facebook" },
                { Icon: FaInstagram, label: "Instagram" },
                { Icon: FaWhatsapp, label: "WhatsApp" },
                { Icon: FaMapMarkerAlt, label: "Location" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#FF0076] transition-all transform hover:scale-110"
                  aria-label={label}
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t mt-8 pt-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} All rights reserved to St. Xavier's High
          School, Panchgani
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
