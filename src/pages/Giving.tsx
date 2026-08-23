import {
  Smartphone,
  Heart,
  Copy,
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";
import PageHero from "../components/layout/PageHero";
import mtnIcon from "../assets/icons/MTN1.jpg";
import airtelIcon from "../assets/icons/AIRTEL.png";

function Giving() {
  const [copied, setCopied] = useState("");

  async function copyToClipboard(text: string, label: string) {
    try {
      if (navigator.clipboard?.writeText && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.setAttribute("readonly", "");
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.select();

        const didCopy = document.execCommand("copy");
        document.body.removeChild(textArea);

        if (!didCopy) {
          throw new Error("Copy command was not successful");
        }
      }

      setCopied(label);
      window.setTimeout(() => setCopied(""), 2000);
    } catch {
      setCopied(`${label}-error`);
      window.setTimeout(() => setCopied(""), 2500);
    }
  }

  return (
    <main className="min-h-screen bg-white">

      {/* =========================================
          PAGE HERO
      ========================================= */}
      <PageHero
        label="Give With Purpose"
        title="Giving"
        description="Your generosity helps support ministry, outreach, evangelism, and the work of the church. Thank you for partnering with us as we advance God's Kingdom."
      />


      {/* =========================================
          INTRODUCTION
      ========================================= */}
      <section className="px-4 pb-12 sm:px-6 sm:pb-14 lg:px-8">

        <div className="mx-auto max-w-[1200px]">

          <div
            className="
              rounded-2xl
              border
              border-[#D9A441]/20
              bg-white
              p-5
              shadow-[0_12px_35px_rgba(0,0,0,0.07)]
              sm:p-7
              sm:p-8
              md:p-10
            "
          >

            <div className="flex flex-col gap-5 sm:gap-6 md:flex-row md:items-center">

              {/* Icon */}
              <div
                className="
                  flex
                  h-16
                  w-16
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#D9A441]/10
                  text-[#7e099e]
                "
              >
                <Heart size={29} />
              </div>


              {/* Text */}
              <div>

                <h2
                  className="
                    text-xl
                    font-bold
                    text-[#7e099e]
                    sm:text-2xl
                    md:text-3xl
                  "
                >
                  Thank You for Your Generosity
                </h2>

                <p
                  className="
                    mt-3
                    text-base
                    font-medium
                    leading-7
                    text-gray-900
                    md:text-lg
                  "
                >
                  Every gift, no matter the size, makes a difference.
                  Your giving enables us to reach people with the Gospel,
                  support ministry activities, and serve our community.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          GIVING METHODS
      ========================================= */}
      <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">

        <div className="mx-auto max-w-[1200px]">


          {/* =========================================
              SECTION INTRO
          ========================================= */}
          <div className="mb-9 grid gap-7 sm:mb-12 sm:gap-8 md:grid-cols-2">

            <div>

              <p
                className="
                  mb-3
                  text-sm
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#7e099e]
                "
              >
                Local Bank Transfers
              </p>

              <p
                className="
                  text-base
                  font-medium
                  leading-7
                  text-gray-900
                  md:text-lg
                "
              >
                For our local congregation in Uganda, you can transfer
                your tithes, offerings, and vows directly into any of
                our official church accounts below.
              </p>

            </div>


            <div>

              <p
                className="
                  mb-3
                  text-sm
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#7e099e]
                "
              >
                Online & International
              </p>

              <p
                className="
                  text-base
                  font-medium
                  leading-7
                  text-gray-900
                  md:text-lg
                "
              >
                Securely give using your credit card or send directly
                to our official PayPal address.
              </p>

            </div>

          </div>


          {/* =========================================
              MAIN GIVING LAYOUT
          ========================================= */}
          <div className="grid gap-8 lg:grid-cols-2">


            {/* =======================================
                BANK TRANSFER
            ======================================= */}
            <div
              className="
                rounded-2xl
                border
                border-gray-100
                border-l-[5px]
                border-l-[#7e099e]
                bg-white
                p-5
                shadow-[0_18px_45px_rgba(84,10,140,0.10)]
                transition
                hover:shadow-[0_22px_55px_rgba(84,10,140,0.14)]
                sm:p-7
                md:p-8
              "
            >

              {/* Header */}
              <div className="mb-7">

                <p
                  className="
                    text-sm
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-[#7e099e]
                  "
                >
                  Bank Transfer
                </p>

                <h3
                  className="
                    mt-2
                    text-2xl
                    font-bold
                    text-black
                  "
                >
                  UBA (United Bank for Africa)
                </h3>

              </div>


              {/* Details */}
              <div className="space-y-6">


                {/* Account Name */}
                <div>

                  <p
                    className="
                      text-xs
                      font-bold
                      uppercase
                      tracking-wider
                      text-black
                    "
                  >
                    Account Name
                  </p>

                  <p
                    className="
                      mt-2
                      text-base
                      font-bold
                      leading-6
                      text-black
                      md:text-lg
                    "
                  >
                    MOUNTAIN OF FIRE AND MIRACLES
                    <br />
                    MINISTRIES
                  </p>

                </div>


                {/* UGX */}
                <div>

                  <p
                    className="
                      text-xs
                      font-bold
                      uppercase
                      tracking-wider
                      text-black
                    "
                  >
                    Account Number (UGX)
                  </p>

                  <div
                    className="
                      mt-2
                      flex flex-col
                      items-center
                      gap-3
                      sm:flex-row
                      sm:justify-between
                      sm:gap-4
                    "
                  >

                    <p
                      className="
                        break-all
                        text-lg
                        font-bold
                        text-black
                        md:text-xl
                      "
                    >
                      0531000098
                    </p>

                    <button
                      type="button"
                      onClick={() =>
                        copyToClipboard(
                          "0531000098",
                          "bank-ugx"
                        )
                      }
                      className={`
                        flex
                        shrink-0
                        items-center
                        gap-1.5
                        rounded-lg
                        px-3
                        py-2
                        text-xs
                        font-bold
                        transition
                        ${copied === "bank-ugx" ? "bg-green-600 text-white hover:bg-green-700" : "bg-gray-50 text-[#7e099e] hover:bg-[#5F0C1B]/10"}
                      `}
                    >
                      {copied === "bank-ugx" ? (
                        <>
                          <CheckCircle2 size={14} />
                          Copied
                        </>
                      ) : copied === "bank-ugx-error" ? (
                        <>Unable to copy</>
                      ) : (
                        <>
                          <Copy size={14} />
                          Copy
                        </>
                      )}
                    </button>

                  </div>

                </div>


                {/* USD */}
                <div>

                  <p
                    className="
                      text-xs
                      font-bold
                      uppercase
                      tracking-wider
                      text-gray-500
                    "
                  >
                    Account Number (USD)
                  </p>

                  <div
                    className="
                      mt-2
                      flex flex-col
                      items-center
                      gap-3
                      sm:flex-row
                      sm:justify-between
                      sm:gap-4
                    "
                  >

                    <p
                      className="
                        break-all
                        text-lg
                        font-bold
                        text-gray-950
                        md:text-xl
                      "
                    >
                      0513000010G
                    </p>

                    <button
                      type="button"
                      onClick={() =>
                        copyToClipboard(
                          "0513000010G",
                          "bank-usd"
                        )
                      }
                      className={`
                        flex
                        shrink-0
                        items-center
                        gap-1.5
                        rounded-lg
                        px-3
                        py-2
                        text-xs
                        font-bold
                        transition
                        ${copied === "bank-usd" ? "bg-green-600 text-white hover:bg-green-700" : "bg-gray-50 text-[#7e099e] hover:bg-[#5F0C1B]/10"}
                      `}
                    >
                      {copied === "bank-usd" ? (
                        <>
                          <CheckCircle2 size={14} />
                          Copied
                        </>
                      ) : copied === "bank-usd-error" ? (
                        <>Unable to copy</>
                      ) : (
                        <>
                          <Copy size={14} />
                          Copy
                        </>
                      )}
                    </button>

                  </div>

                </div>

              </div>

            </div>


            {/* =======================================
                PAYPAL
            ======================================= */}
            <div
              className="
                flex
                flex-col
                items-center
                justify-center
                rounded-2xl
                border
                border-gray-100
                bg-gradient-to-br
                from-blue-50
                via-white
                to-white
                p-5
                text-center
                shadow-[0_18px_45px_rgba(0,0,0,0.09)]
                transition
                hover:shadow-[0_22px_55px_rgba(0,0,0,0.13)]
                sm:p-8
                md:p-10
              "
            >

              {/* PayPal Logo */}
              <div
                className="
                  mb-5
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  shadow-md
                "
              >

                <svg
                  viewBox="0 0 24 24"
                  className="h-12 w-12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >

                  <text
                    x="12"
                    y="16"
                    textAnchor="middle"
                    fill="#0070BA"
                    fontSize="18"
                    fontWeight="bold"
                    fontFamily="Arial"
                  >
                    PP
                  </text>

                </svg>

              </div>


              <p
                className="
                  text-sm
                  font-bold
                  uppercase
                  tracking-[0.15em]
                  text-[#0070BA]
                "
              >
                Online Giving
              </p>


              <h3
                className="
                  mt-2
                  text-2xl
                  font-bold
                  text-gray-950
                "
              >
                PayPal Transfer
              </h3>


              <p
                className="
                  mt-3
                  max-w-md
                  text-base
                  font-medium
                  leading-7
                  text-gray-900
                "
              >
                Give your tithes or offerings directly through our
                official PayPal link.
              </p>


              {/* PayPal Button */}
              <a
                href="https://www.paypal.com/donate/?hosted_button_id=YOUR_BUTTON_ID"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-7
                  inline-flex
                  w-full
                  max-w-sm
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#0070BA]
                  px-6
                  py-4
                  text-base
                  font-bold
                  text-white
                  shadow-md
                  transition-all
                  duration-200
                  hover:bg-[#005EA6]
                  hover:shadow-lg
                  hover:-translate-y-0.5
                "
              >
                Give with PayPal
              </a>


              {/* Security */}
              <div
                className="
                  mt-6
                  flex
                  items-center
                  gap-2
                  text-xs
                  font-bold
                  text-green-700
                "
              >
                <CheckCircle2 size={15} />
                256-BIT SSL ENCRYPTED
              </div>

            </div>


            {/* =======================================
                MOBILE MONEY — FULL WIDTH
            ======================================= */}
            <div
              className="
                lg:col-span-2
                rounded-2xl
                border
                border-gray-100
                bg-white
                p-5
                shadow-[0_20px_50px_rgba(84,10,140,0.11)]
                transition
                hover:shadow-[0_25px_60px_rgba(84,10,140,0.15)]
                sm:p-7
                md:p-9
              "
            >

              {/* Mobile Money Header */}
              <div
                className="
                  mb-8
                  flex flex-col
                  items-center
                  gap-4
                  sm:flex-row
                "
              >

                <div
                  className="
                    flex
                    h-14
                    w-14
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#D9A441]/15
                    text-[#7e099e]
                  "
                >
                  <Smartphone size={27} />
                </div>


                <div>

                  <p
                    className="
                      text-sm
                      font-bold
                      uppercase
                      tracking-[0.15em]
                      text-[#7e099e]
                    "
                  >
                    Mobile Giving
                  </p>

                  <h3
                    className="
                      mt-1
                      text-2xl
                      font-bold
                      text-gray-950
                    "
                  >
                    Mobile Money
                  </h3>

                  <p
                    className="
                      mt-1
                      text-base
                      font-medium
                      text-gray-600
                    "
                  >
                    Give conveniently using MTN or Airtel Money.
                  </p>

                </div>

              </div>


              {/* =====================================
                  MTN + AIRTEL
              ===================================== */}
              <div
                className="
                  grid
                  gap-6
                  md:grid-cols-2
                "
              >


                {/* =================================
                    MTN
                ================================= */}
                <div
                  className="
                    rounded-2xl
                    border
                    border-gray-100
                    bg-gray-50
                    p-5
                    shadow-sm
                    transition
                    hover:shadow-md
                    sm:p-6
                    md:p-7
                  "
                >

                  <div
                    className="
                    flex flex-col
                    items-start
                    gap-4
                    sm:flex-row
                    sm:justify-between
                    sm:gap-5
                    "
                  >

                    <div
                      className="
                      flex flex-col
                      items-start
                      gap-4
                      min-[420px]:flex-row
                      "
                    >

                      {/* MTN Logo */}
                      <div
                        className="
                          flex
                          h-12
                          w-12
                          shrink-0
                          items-center
                          justify-center
                          overflow-hidden
                          rounded-xl
                          bg-white
                          shadow-sm
                        "
                      >

                        <img
                          src={mtnIcon}
                          alt="MTN"
                          className="h-10 w-10 object-contain"
                        />

                      </div>


                      <div>

                        <p
                          className="
                            text-sm
                            font-bold
                            uppercase
                            tracking-wider
                            text-gray-500
                          "
                        >
                          MTN Mobile Money
                        </p>

                        <div className="mt-2 flex flex-wrap items-center gap-2">
                          <p className="text-2xl font-bold text-gray-950 md:text-3xl">
                            0783 830 514
                          </p>
                          <button
                            type="button"
                            onClick={() => copyToClipboard("0783 830 514", "mtn-number")}
                            className={`rounded-md px-2.5 py-1.5 text-xs font-bold shadow-sm transition ${copied === "mtn-number" ? "bg-green-600 text-white hover:bg-green-700" : "bg-white text-[#7e099e] hover:bg-[#5F0C1B]/10"}`}
                          >
                            {copied === "mtn-number" ? "Copied" : copied === "mtn-number-error" ? "Unable to copy" : "Copy number"}
                          </button>
                        </div>

                        <p
                          className="
                            mt-2
                            text-base
                            font-medium
                            leading-6
                            text-gray-900
                          "
                        >
                          Account Name:
                          <br />
                          MOUNTAIN OF FIRE AND MIRACLES MINISTRIES
                        </p>


                        {/* Merchant Codes */}
                        <div
                          className="
                            mt-5
                            border-t
                            border-gray-200
                            pt-4
                          "
                        >

                          <p
                            className="
                              text-sm
                              font-bold
                              uppercase
                              tracking-wider
                              text-gray-500
                            "
                          >
                            Merchant Codes
                          </p>

                          <p className="mt-1 text-sm font-medium text-gray-600">
                            Dial <span className="font-bold text-[#7e099e]">*165*3#</span> and enter the merchant code.
                          </p>

                          <div
                            className="
                              mt-3
                              space-y-2
                              text-base
                              font-medium
                              text-gray-900
                            "
                          >

                            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                              <p>
                                <span className="font-bold">Tithe:</span>{" "}
                                149156
                              </p>
                              <button
                                type="button"
                                onClick={() => copyToClipboard("149156", "mtn-tithe")}
                                className={`rounded-md px-2.5 py-1.5 text-xs font-bold shadow-sm transition ${copied === "mtn-tithe" ? "bg-green-600 text-white hover:bg-green-700" : "bg-white text-[#7e099e] hover:bg-[#5F0C1B]/10"}`}
                              >
                                {copied === "mtn-tithe" ? "Copied" : copied === "mtn-tithe-error" ? "Unable to copy" : "Copy"}
                              </button>
                            </div>

                            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                              <p>
                                <span className="font-bold">Offertory:</span>{" "}
                                149155
                              </p>
                              <button
                                type="button"
                                onClick={() => copyToClipboard("149155", "mtn-offertory")}
                                className={`rounded-md px-2.5 py-1.5 text-xs font-bold shadow-sm transition ${copied === "mtn-offertory" ? "bg-green-600 text-white hover:bg-green-700" : "bg-white text-[#7e099e] hover:bg-[#5F0C1B]/10"}`}
                              >
                                {copied === "mtn-offertory" ? "Copied" : copied === "mtn-offertory-error" ? "Unable to copy" : "Copy"}
                              </button>
                            </div>

                            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                              <p>
                                <span className="font-bold">First Fruit:</span>{" "}
                                149154
                              </p>
                              <button
                                type="button"
                                onClick={() => copyToClipboard("149154", "mtn-first-fruit")}
                                className={`rounded-md px-2.5 py-1.5 text-xs font-bold shadow-sm transition ${copied === "mtn-first-fruit" ? "bg-green-600 text-white hover:bg-green-700" : "bg-white text-[#7e099e] hover:bg-[#5F0C1B]/10"}`}
                              >
                                {copied === "mtn-first-fruit" ? "Copied" : copied === "mtn-first-fruit-error" ? "Unable to copy" : "Copy"}
                              </button>
                            </div>

                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>


                {/* =================================
                    AIRTEL
                ================================= */}
                <div
                  className="
                    rounded-2xl
                    border
                    border-gray-100
                    bg-gray-50
                    p-5
                    shadow-sm
                    transition
                    hover:shadow-md
                    sm:p-6
                    md:p-7
                  "
                >

                  <div
                    className="
                    flex flex-col
                    items-start
                    gap-4
                    sm:flex-row
                    sm:justify-between
                    sm:gap-5
                    "
                  >

                    <div
                      className="
                      flex flex-col
                      items-start
                      gap-4
                      min-[420px]:flex-row
                      "
                    >

                      {/* Airtel Logo */}
                      <div
                        className="
                          flex
                          h-12
                          w-12
                          shrink-0
                          items-center
                          justify-center
                          overflow-hidden
                          rounded-xl
                          bg-white
                          shadow-sm
                        "
                      >

                        <img
                          src={airtelIcon}
                          alt="Airtel"
                          className="h-10 w-10 object-contain"
                        />

                      </div>


                      <div>

                        <p
                          className="
                            text-sm
                            font-bold
                            uppercase
                            tracking-wider
                            text-gray-500
                          "
                        >
                          Airtel Money
                        </p>

                        <p
                          className="
                            mt-2
                            text-2xl
                            font-bold
                            text-gray-950
                            md:text-3xl
                          "
                        >
                          Merchant ID: 4362830
                        </p>

                        <p
                          className="
                            mt-2
                            text-sm
                            font-medium
                            leading-6
                            text-gray-900
                          "
                        >
                          Account Name:
                          <br />
                          MOUNTAIN OF FIRE AND MIRACLES MINISTRIES
                        </p>


                        {/* Merchant Code */}
                        <div
                          className="
                            mt-5
                            border-t
                            border-gray-200
                            pt-4
                          "
                        >

                          <p
                            className="
                              text-sm
                              font-bold
                              uppercase
                              tracking-wider
                              text-gray-500
                            "
                          >
                            Merchant Code
                          </p>

                          <p
                            className="
                              mt-2
                              text-xl
                              font-bold
                              text-gray-950
                            "
                          >
                            *185*9#
                          </p>

                        </div>

                      </div>

                    </div>


                    {/* Copy */}
                    <button
                      type="button"
                      onClick={() =>
                        copyToClipboard(
                          "*4362830",
                          "airtel"
                        )
                      }
                      className={`
                        flex
                        self-start
                        shrink-0
                        items-center
                        gap-1.5
                        rounded-lg
                        px-3
                        py-2
                        text-xs
                        font-bold
                        shadow-sm
                        transition
                        ${copied === "airtel" ? "bg-green-600 text-white hover:bg-green-700" : "bg-white text-[#7e099e] hover:bg-[#5F0C1B]/10"}
                      `}
                    >

                      {copied === "airtel" ? (
                        <>
                          <CheckCircle2 size={14} />
                          Copied
                        </>
                      ) : copied === "airtel-error" ? (
                        <>Unable to copy</>
                      ) : (
                        <>
                          <Copy size={14} />
                          Copy
                        </>
                      )}

                    </button>

                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* =========================================
              GIVING NOTE
          ========================================= */}
          <div
            className="
              mt-10
              rounded-2xl
              bg-[#7A1022]
              px-5
              py-7
              text-center
              shadow-[0_15px_40px_rgba(84,10,140,0.15)]
              sm:px-6
              sm:py-8
              md:px-10
              md:py-9
            "
          >

            <h3
              className="
                text-xl
                font-bold
                text-white
                md:text-2xl
              "
            >
              Give Freely, Give Cheerfully
            </h3>

            <p
              className="
                mx-auto
                mt-4
                max-w-2xl
                text-base
                font-medium
                leading-7
                text-white/80
                md:text-lg
              "
            >
              "Each of you should give what you have decided in your heart
              to give, not reluctantly or under compulsion, for God loves
              a cheerful giver."
            </p>

            <p
              className="
                mt-4
                text-sm
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#D9A441]
              "
            >
              2 Corinthians 9:7
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Giving;
