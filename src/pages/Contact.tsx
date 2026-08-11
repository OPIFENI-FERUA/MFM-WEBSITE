import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Navigation,
} from "lucide-react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Contact request from ${name || "Website Visitor"}`
    );

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    // Opens the user's email client
    window.location.href = `mailto:info@mfmkanyanya.org?subject=${subject}&body=${body}`;
  }

  return (
    <main className="min-h-screen bg-white">

      {/* =========================================
          PAGE HEADER
      ========================================= */}
      <section className="relative overflow-hidden bg-[#310065] px-6 py-20 text-white md:py-24">

        {/* Soft background decorations */}
        <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-[#ffffff]/10 blur-3xl" />

        <div className="relative mx-auto max-w-[1280px] text-center">

          <p className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-white/90">
            Get In Touch
          </p>

          <h1 className="mt-6 text-5xl font-bold uppercase tracking-[-0.03em] text-white md:text-6xl">
            Contact Us
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/80 md:text-lg">
            We would love to hear from you. Whether you have a question,
            need prayer, or simply want to connect with us, our team is
            here to help.
          </p>

        </div>
      </section>


      {/* =========================================
          CONTACT INFORMATION CARDS
      ========================================= */}
      <section className="px-6 pb-10">
        <div className="mx-auto grid max-w-[1100px] gap-5 md:grid-cols-2">

          {/* =====================================
              CONTACT INFORMATION
          ===================================== */}
          <div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-[0_15px_40px_rgba(49,0,101,0.07)]">

            <div className="mb-6 flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#310065]/10 text-[#310065]">
                <Phone size={22} />
              </div>

              <div>
                <h2 className="text-lg font-bold text-[#310065]">
                  Contact Information
                </h2>

                <p className="text-sm text-gray-500">
                  Reach us directly
                </p>
              </div>

            </div>


            <div className="space-y-4">

              {/* Phone */}
              <a
                href="tel:+256000000000"
                className="flex items-start gap-4 rounded-xl p-3 transition-colors hover:bg-white"
              >
                <Phone
                  size={19}
                  className="mt-1 shrink-0 text-[#fabd00]"
                />

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Phone
                  </p>

                  <p className="mt-1 text-sm font-medium text-gray-700">
                    +256 XXX XXX XXX
                  </p>
                </div>
              </a>


              {/* Email */}
              <a
                href="mailto:info@mfmkanyanya.org"
                className="flex items-start gap-4 rounded-xl p-3 transition-colors hover:bg-white"
              >
                <Mail
                  size={19}
                  className="mt-1 shrink-0 text-[#fabd00]"
                />

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Email
                  </p>

                  <p className="mt-1 text-sm font-medium text-gray-700">
                    info@mfmkanyanya.org
                  </p>
                </div>
              </a>


              {/* Office Hours */}
              <div className="flex items-start gap-4 rounded-xl p-3">

                <Clock
                  size={19}
                  className="mt-1 shrink-0 text-[#fabd00]"
                />

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Office Hours
                  </p>

                  <p className="mt-1 text-sm font-medium text-gray-700">
                    Monday – Friday
                  </p>

                  <p className="text-sm text-gray-500">
                    8:00 AM – 5:00 PM
                  </p>
                </div>

              </div>

            </div>
          </div>


          {/* =====================================
              LOCATION INFORMATION
          ===================================== */}
          <div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-[0_15px_40px_rgba(49,0,101,0.07)]">

            <div className="mb-6 flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#fabd00]/10 text-[#310065]">
                <MapPin size={22} />
              </div>

              <div>
                <h2 className="text-lg font-bold text-[#310065]">
                  Visit Us
                </h2>

                <p className="text-sm text-gray-500">
                  We would love to welcome you
                </p>
              </div>

            </div>


            <div className="flex items-start gap-4">

              <MapPin
                size={20}
                className="mt-1 shrink-0 text-[#310065]"
              />

              <div>
                <p className="text-sm leading-7 text-gray-600">
                  MFM Kanyanya Mega Regional Headquarters
                  <br />
                  Kanyanya, Kampala
                  <br />
                  Uganda
                </p>
              </div>

            </div>


            <a
              href="https://www.google.com/maps/search/?api=1&query=MFM+Kanyanya+Kampala+Uganda"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-7
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-[#fabd00]
                px-5
                py-3
                text-xs
                font-bold
                uppercase
                tracking-wider
                text-[#310065]
                transition-all
                hover:-translate-y-0.5
                hover:bg-[#ffd45c]
              "
            >
              <Navigation size={15} />
              Get Directions
            </a>

          </div>

        </div>
      </section>


      {/* =========================================
          MESSAGE + MAP
      ========================================= */}
      <section className="px-6 py-16 md:py-20">

        <div className="mx-auto grid max-w-[1100px] gap-12 lg:grid-cols-[1fr_0.9fr]">

          {/* =====================================
              MESSAGE US
          ===================================== */}
          <div>

            <div className="mb-8">

              <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#310065]">
                Send Us A Message
              </p>

              <h2 className="text-3xl font-bold text-[#310065] md:text-4xl">
                How Can We Help You?
              </h2>

              <p className="mt-4 max-w-lg text-sm leading-7 text-gray-600">
                Have a question, prayer request, or need more information
                about our church? Send us a message and we will get back
                to you as soon as possible.
              </p>

            </div>


            {/* Form Card */}
            <form
              onSubmit={handleSubmit}
              className="
                rounded-2xl
                border
                border-gray-100
                bg-white
                p-6
                shadow-[0_15px_40px_rgba(0,0,0,0.06)]
                md:p-8
              "
            >

              {/* Full Name */}
              <div className="mb-5">

                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="
                    w-full
                    rounded-xl
                    border
                    border-gray-200
                    bg-gray-50
                    px-4
                    py-3
                    text-sm
                    text-gray-800
                    outline-none
                    transition-all
                    placeholder:text-gray-400
                    focus:border-[#310065]
                    focus:bg-white
                    focus:ring-2
                    focus:ring-[#310065]/10
                  "
                  placeholder="Enter your full name"
                />

              </div>


              {/* Email */}
              <div className="mb-5">

                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="
                    w-full
                    rounded-xl
                    border
                    border-gray-200
                    bg-gray-50
                    px-4
                    py-3
                    text-sm
                    text-gray-800
                    outline-none
                    transition-all
                    placeholder:text-gray-400
                    focus:border-[#310065]
                    focus:bg-white
                    focus:ring-2
                    focus:ring-[#310065]/10
                  "
                  placeholder="you@example.com"
                />

              </div>


              {/* Message */}
              <div className="mb-6">

                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className="
                    w-full
                    resize-none
                    rounded-xl
                    border
                    border-gray-200
                    bg-gray-50
                    px-4
                    py-3
                    text-sm
                    text-gray-800
                    outline-none
                    transition-all
                    placeholder:text-gray-400
                    focus:border-[#310065]
                    focus:bg-white
                    focus:ring-2
                    focus:ring-[#310065]/10
                  "
                  placeholder="How can we help you?"
                />

              </div>


              {/* Submit Button */}
              <button
                type="submit"
                className="
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-[#310065]
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-[#310065]/15
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#4a148c]
                  hover:shadow-xl
                "
              >
                <Send size={17} />
                Send Message
              </button>

            </form>

          </div>


          {/* =====================================
              LOCATION + GOOGLE MAP
          ===================================== */}
          <div>

            <div className="mb-8">

              <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#310065]">
                Find Us
              </p>

              <h2 className="text-3xl font-bold text-[#310065] md:text-4xl">
                Our Location
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                Find your way to MFM Kanyanya Mega Regional Headquarters.
                We look forward to worshipping with you.
              </p>

            </div>


            {/* Google Maps */}
            <div className="
              overflow-hidden
              rounded-2xl
              border
              border-gray-100
              bg-white
              p-2
              shadow-[0_15px_40px_rgba(0,0,0,0.08)]
            ">

              <iframe
                title="MFM Kanyanya Location"
                src="https://www.google.com/maps?q=MFM+Kanyanya+Kampala+Uganda&output=embed"
                className="h-[450px] w-full rounded-xl border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Contact;