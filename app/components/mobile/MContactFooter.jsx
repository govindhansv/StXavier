import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";

const MContactFooter = () => {
  return (
    <footer className="relative text-gray-700 py-10 border-t px-4 md:px-6 lg:px-36">
      {/* Contact Us Button */}
      <div className="absolute -top-7 left-4 md:left-6 lg:left-36">
        <button className="bg-[#FF0076] text-white px-4 md:px-6 py-3 md:py-5 text-base md:text-sm lg:text-[26px] hover:bg-[#FF0076]/90 font-bold transition-colors">
          Contact Us
        </button>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mt-12">
          {/* Logo and Name */}
          <div className=" md:w-1/3 md:h-48 relative flex-shrink-0 mx-auto md:mx-0">
            <Image
              src="/assets/logo/logo.png"
              alt="St. Xavier's Logo"
              className="object-contain"
              width={500}
              height={500}
              priority
            />
          </div>

          {/* Address, Contact, and Social Section */}
          <div className="flex-1 space-y-6">
            {/* Address */}
            <div className="text-center md:text-left">
              <p className="text-base md:text-sm leading-relaxed text-gray-700 lg:text-[20px]">
                St. Xavier's High School,{" "}
                <span className="font-bold">Panchgani</span> P.O.,
                <br className="hidden md:block" />{" "}
                <span className="md:hidden">, </span>
                Tal - Mahabaleshwar, Dist - Satara,
                <br className="hidden md:block" />{" "}
                <span className="md:hidden">, </span>
                Maharashtra, India - 412 805
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-2">
              <p className="text-base md:text-sm lg:text-[20px] font-bold text-gray-800 text-center md:text-left">
                <span className="block md:inline mb-2 md:mb-0">
                  +91 9975064585
                </span>{" "}
                <span className="hidden md:inline text-[#FF0076]">|</span>{" "}
                <span className="block md:inline mb-2 md:mb-0">
                  +91 8390850053
                </span>{" "}
                <span className="hidden md:inline text-[#FF0076]">|</span>{" "}
                <span className="block md:inline">+91 7066090694</span>
              </p>
              <p className="text-base md:text-sm text-gray-700 text-center md:text-left pt-4">
                <span className="block md:inline lg:text-[20px] md:pr-4">
                  Email:{" "}
                </span>

                <a
                  href="mailto:xavierspanchgani@gmail.com"
                  className="underline lg:text-[20px] hover:text-[#FF0076]/90 transition-colors break-all md:break-normal"
                >
                  xavierspanchgani@gmail.com
                </a>
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start space-x-8 md:space-x-5 pt-4 md:pt-0">
              {[
                {
                  Icon: FaFacebook,
                  label: "Facebook",
                  url: "https://www.facebook.com/stxavierspanchgani",
                },
                {
                  Icon: FaInstagram,
                  label: "Instagram",
                  url: "https://www.instagram.com/stxavierspanchgani/",
                },
                {
                  Icon: FaWhatsapp,
                  label: "WhatsApp",
                  url: "https://wa.me/+919975064585",
                },
                {
                  Icon: FaMapMarkerAlt,
                  label: "Location",
                  url: "https://maps.app.goo.gl/M3W1JCqH8XxDUp6y8",
                },
              ].map(({ Icon, label, url }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#FF0076] transition-all transform hover:scale-110"
                  aria-label={label}
                >
                  <Icon className="w-6 h-6 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t mt-8 pt-4 text-center text-xs md:text-sm text-gray-500">
          © {new Date().getFullYear()} All rights reserved to St. Xavier's High
          School, Panchgani
        </div>
      </div>
    </footer>
  );
};

export default MContactFooter;
