          import { useState } from "react";
          import {
            MapPin,
            Phone,
            Mail,
            Clock,
            Send,
          } from "lucide-react";
          import PageHero from "../components/layout/PageHero";

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

              window.location.href = `mailto:info@mfmkanyanya.org?subject=${subject}&body=${body}`;
            }

            return (
              <main className="min-h-screen bg-white">
                <PageHero
                  label="Get In Touch"
                  title="Contact Us"
                  description="We would love to hear from you. Whether you have a question, need prayer, or simply want to connect with us, our team is here to help."
                />

                {/* =========================================
                    CONTACT INFORMATION CARDS
                ========================================= */}
                <section className="px-6 pb-10 pt-10">
                  <div className="mx-auto grid max-w-[1100px] gap-5 md:grid-cols-2">

                    {/* CONTACT INFORMATION */}
                    <div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-[0_15px_40px_rgba(114,17,110,0.07)]">
                      <div className="mb-6 flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#540a8c]/10 text-[#540a8c]">
                          <Phone size={22} />
                        </div>

                        <div>
                          <h2 className="text-xl font-bold text-[#540a8c]">
                            Contact Information
                          </h2>

                          <p className="text-base text-gray-500">
                            Reach us directly
                          </p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        {/* Phone */}
                        <a
                          href="tel:+256753310318"
                          className="flex items-start gap-4 rounded-xl p-3 transition-colors hover:bg-gray-50"
                        >
                          <Phone
                            size={20}
                            className="mt-1 shrink-0 text-[#fabd00]"
                          />

                          <div>
                            <p className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                              Phone
                            </p>

                            <p className="mt-1 text-base font-medium text-gray-700">
                              +256 753 310 318 | +256 782 130 042
                            </p>
                          </div>
                        </a>

                        {/* Email */}
                        <a
                          href="mailto:info@mfmkanyanya.org"
                          className="flex items-start gap-4 rounded-xl p-3 transition-colors hover:bg-gray-50"
                        >
                          <Mail
                            size={20}
                            className="mt-1 shrink-0 text-[#fabd00]"
                          />

                          <div>
                            <p className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                              Email
                            </p>

                            <p className="mt-1 text-base font-medium text-gray-700">
                              info@mfmkanyanya.org
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>

                    {/* VISIT US */}
                    <div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-[0_15px_40px_rgba(114,17,110,0.07)]">
                      <div className="mb-6 flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#540a8c]/10 text-[#540a8c]">
                          <MapPin size={22} />
                        </div>

                        <div>
                          <h2 className="text-xl font-bold text-[#540a8c]">
                            Visit Us
                          </h2>

                          <p className="text-base text-gray-500">
                            We would love to welcome you
                          </p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-start gap-4 rounded-xl p-3">
                          <MapPin
                            size={20}
                            className="mt-1 shrink-0 text-[#fabd00]"
                          />

                          <div>
                            <p className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                              Address
                            </p>

                            <p className="mt-1 text-base font-medium text-gray-700">
                              Off Kizanyiro Road, on the left
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4 rounded-xl p-3">
                          <Clock
                            size={20}
                            className="mt-1 shrink-0 text-[#fabd00]"
                          />

                          <div>
                            <p className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                              Office Hours
                            </p>

                            <p className="mt-1 text-base font-medium text-gray-700">
                              Monday – Friday
                            </p>

                            <p className="text-base text-gray-500">
                              8:00 AM – 5:00 PM
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
          </div>
          </section>

        {/* =========================================
            MESSAGE + MAP
        ========================================= */}
        <section className="px-6 py-16 md:py-20">
          <div className="mx-auto grid max-w-[1100px] gap-12 lg:grid-cols-[1fr_0.9fr]">

            {/* MESSAGE US */}
            <div>
              <div className="mb-8">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#540a8c]">
                  Send Us A Message
                </p>

                <h2 className="text-3xl font-bold text-[#540a8c] md:text-4xl">
                  How Can We Help You?
                </h2>

                <p className="mt-4 max-w-lg text-sm leading-7 text-gray-600">
                  Have a question, prayer request, or need more information
                  about our church? Send us a message and we will get back
                  to you as soon as possible.
                </p>
              </div>

              {/* FORM */}
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_15px_40px_rgba(0,0,0,0.06)] md:p-8"
              >
                {/* FULL NAME */}
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
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 outline-none transition-all placeholder:text-gray-400 focus:border-[#540a8c] focus:bg-white focus:ring-2 focus:ring-[#540a8c]/10"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* EMAIL */}
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
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 outline-none transition-all placeholder:text-gray-400 focus:border-[#540a8c] focus:bg-white focus:ring-2 focus:ring-[#540a8c]/10"
                    placeholder="you@example.com"
                  />
                </div>

                {/* MESSAGE */}
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
                    className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 outline-none transition-all placeholder:text-gray-400 focus:border-[#540a8c] focus:bg-white focus:ring-2 focus:ring-[#540a8c]/10"
                    placeholder="How can we help you?"
                  />
                </div>

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#540a8c] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#540a8c]/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#540a8c] hover:shadow-xl"
                >
                  <Send size={17} />
                  Send Message
                </button>
              </form>
            </div>

            {/* LOCATION + GOOGLE MAP */}
            <div>
              <div className="mb-8">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#540a8c]">
                  Find Us
                </p>

                <h2 className="text-3xl font-bold text-[#540a8c] md:text-4xl">
                  Our Location
                </h2>

                <p className="mt-4 text-sm leading-7 text-gray-600">
                  Find your way to MFM Kanyanya Mega Regional Headquarters.
                  We look forward to worshipping with you.
                </p>
              </div>

              {/* GOOGLE MAP */}
              <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white p-2 shadow-[0_15px_40px_rgba(0,0,0,0.08)]">
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