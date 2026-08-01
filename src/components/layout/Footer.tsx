import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import mfmLogo from "../../assets/images/mfm-logo.png";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/sermons", label: "Sermons" },
  { to: "/events", label: "Events" },
];

const Footer = () => {
  return (
    <footer className="bg-[#070707] text-white">
      <div className="mx-auto max-w-[1220px] px-6 py-16 lg:px-0">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:gap-24">
          <div>
            <div className="mb-8 flex items-center gap-3">
              <img
                src={mfmLogo}
                alt="Mountain of Fire and Miracles Ministries"
                className="h-12 w-12 object-contain"
              />
              <div>
                <h2 className="text-sm font-bold text-[#ffdf9e]">
                  Mountain of Fire and Miracles
                </h2>
                <p className="text-sm text-gray-400">Ministries – Uganda</p>
              </div>
            </div>

            <p className="max-w-[330px] text-sm leading-[1.6] text-gray-300">
              We are a Holy Ghost-filled, fire-brand ministry committed to deliverance,
              prayer, and the transformation of lives through the power of God’s Word.
            </p>

            <div className="mt-8 flex gap-3">
              <a
                href="#"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#222222] text-white transition hover:bg-[#ba002c]"
              >
                <FaYoutube size={16} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#222222] text-white transition hover:bg-[#ba002c]"
              >
                <FaFacebook size={14} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#222222] text-white transition hover:bg-[#ba002c]"
              >
                <FaInstagram size={16} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wide text-gray-500">
              Quick Links
            </h3>

            <nav className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-gray-300 transition hover:text-[#ffdf9e]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wide text-gray-500">
              Contact Us
            </h3>

            <div className="space-y-5 text-sm text-gray-300">
              <div className="flex gap-4">
                <MapPin size={18} className="mt-0.5 shrink-0 text-[#ffdf9e]" />
                <p className="leading-6">
                  Kampala
                  <br />
                  Kisaasi, Kanyanya
                  <br />
                  2194, Uganda
                </p>
              </div>

              <div className="flex gap-4">
                <Phone size={18} className="mt-1 shrink-0 text-[#ffdf9e]" />
                <div className="flex flex-col gap-3">
                  <a href="tel:+27838803426" className="hover:text-[#ffdf9e]">
                    +27 83 880 3426
                  </a>
                  <a href="tel:+27734499117" className="hover:text-[#ffdf9e]">
                    +27 73 449 9117
                  </a>
                  <a href="tel:+27117818246" className="hover:text-[#ffdf9e]">
                    +27 11 781 8246
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Mail size={18} className="shrink-0 text-[#ffdf9e]" />
                <a href="mailto:info@mfmrandburg.org" className="hover:text-[#ffdf9e]">
                  info@mfmuganda.org
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#242424]">
        <div className="mx-auto flex max-w-[1220px] flex-col gap-4 px-6 py-5 text-xs text-gray-500 lg:flex-row lg:items-center lg:justify-between lg:px-0">
          <p>© 2026 Mountain of Fire and Miracles Ministries – Kanyanya. All rights reserved.</p>
          <p>Part of the Global MFM Ministry Network</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;