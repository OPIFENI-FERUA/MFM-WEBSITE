import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import mfmLogo from "../../assets/images/mfm-logo.png";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/sermons", label: "Sermons & Media" },
  { to: "/events", label: "Upcoming Events" },
  { to: "/giving", label: "Online Giving" },
  { to: "/contact", label: "Contact Us" },
];

const serviceTimes = [
  { day: "Sunday Main Service", time: "8:00 AM - 11:30 AM" },
  { day: "Wednesday Power Must Change Hands", time: "5:00 PM - 7:00 PM" },
  { day: "Friday Revival & Deliverance", time: "10:00 PM - 3:00 AM" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#070707] text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ffdf9e]/40 to-transparent" />
      {/* Main Content Section */}
      <div className="mx-auto max-w-[1280px] px-6 py-16 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          
          {/* Column 1: About & Logo */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <img
                  src={mfmLogo}
                  alt="Mountain of Fire and Miracles Ministries"
                  className="h-12 w-12 object-contain"
                />
                <div>
                  <h2 className="text-sm font-bold uppercase tracking-wider text-[#ffdf9e]">
                    MFM Kanyanya
                  </h2>
                  <p className="text-xs font-semibold text-white">
                    Citadel of Solution and Power
                  </p>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-white">
                We are a Holy Ghost-filled, fire-brand ministry committed to deliverance,
                prayer, and the transformation of lives through the power of God’s Word.
              </p>
            </div>

            {/* Social Icons */}
            <div className="mt-6">
              <h4 className="mb-3 text-xs font-semibold uppercase text-white">Connect With Us</h4>
              <div className="flex gap-3">
                <a
                  href="#"
                  aria-label="YouTube"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1a1a1a] text-white transition-all hover:bg-[#ba002c] hover:text-white"
                >
                  <FaYoutube size={16} />
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1a1a1a] text-white transition-all hover:bg-[#ba002c] hover:text-white"
                >
                  <FaFacebook size={14} />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1a1a1a] text-white transition-all hover:bg-[#ba002c] hover:text-white"
                >
                  <FaInstagram size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links & Service Times */}
          <div className="space-y-8">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
              <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.25em] text-[#ffdf9e]">
                Quick Links
              </h3>
              <nav className="grid grid-cols-2 gap-2 text-sm text-white">
                {quickLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="flex items-center gap-1 transition duration-200 hover:text-[#ffdf9e]"
                  >
                    <span className="text-[#ffdf9e]">›</span> {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Service Times Block */}
            <div className="rounded-2xl border border-white/10 bg-[#111111] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
              <div className="mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-[#ffdf9e]">
                <Clock size={14} />
                <span>Service Times</span>
              </div>
              <ul className="space-y-2 text-xs text-white">
                {serviceTimes.map((item, index) => (
                  <li key={index} className="border-b border-white/10 pb-2 last:border-0 last:pb-0">
                    <p className="font-semibold text-white">{item.day}</p>
                    <p className="mt-0.5 text-white">{item.time}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: Contact Info */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
            <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.25em] text-[#ffdf9e]">
              Get In Touch
            </h3>

            <div className="space-y-4 text-sm text-white">
              <div className="flex gap-3">
                <MapPin size={18} className="mt-1 shrink-0 text-[#ffdf9e]" />
                <p className="leading-7">
                  <strong className="text-white">MFM Kanyanya Regional HQ</strong><br />
                  Kanyanya - Kisaasi Road,<br />
                  Kampala, Uganda
                </p>
              </div>

              <div className="flex gap-3">
                <Phone size={18} className="mt-1 shrink-0 text-[#ffdf9e]" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+256000000000" className="transition duration-200 hover:text-[#ffdf9e]">
                    +256 (0) 700 000000
                  </a>
                  <a href="tel:+256000000001" className="transition duration-200 hover:text-[#ffdf9e]">
                    +256 (0) 770 000000
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-[#ffdf9e]" />
                <a href="mailto:info@mfmuganda.org" className="transition duration-200 hover:text-[#ffdf9e]">
                  info@mfmuganda.org
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Embedded Google Map */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
            <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.25em] text-[#ffdf9e]">
              Find Us On The Map
            </h3>
            <div className="overflow-hidden rounded-xl border border-white/10 shadow-md">
              <iframe
                title="MFM Kanyanya Church Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15958.94827828064!2d32.5765!3d0.3708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb28c89b2513%3A0x628bf4225091724!2sKanyanya%2C%20Kampala!5e0!3m2!1sen!2sug!4v1700000000000!5m2!1sen!2sug"
                width="100%"
                height="180"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="filter grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              ></iframe>
            </div>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-1 text-xs text-white transition duration-200 hover:text-[#ffdf9e]"
            >
              Open in Google Maps <ExternalLink size={12} />
            </a>
          </div>

        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="border-t border-white/10 bg-[#040404]">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-3 px-6 py-4 text-xs text-white sm:flex-row sm:px-8 lg:px-10">
          <p>© {new Date().getFullYear()} MFM Kanyanya. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Citadel of Solution and Power
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;