import {
  Building2,
  Smartphone,
  Heart,
  Copy,
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";
import PageHero from "../components/layout/PageHero";

function Giving() {
  const [copied, setCopied] = useState("");

  function copyToClipboard(text: string, label: string) {
    navigator.clipboard.writeText(text);
    setCopied(label);

    setTimeout(() => {
      setCopied("");
    }, 2000);
  }

  return (
    <main className="min-h-screen bg-white">

      <PageHero
        label="Give With Purpose"
        title="Giving"
        description="Your generosity helps support ministry, outreach, evangelism, and the work of the church. Thank you for partnering with us as we advance God's Kingdom."
      />


      {/* =========================================
          INTRODUCTION
      ========================================= */}
      <section className="px-6 pb-12">

        <div className="mx-auto max-w-[1000px]">

          <div className="
            rounded-2xl
            border
            border-[#fabd00]/20
            bg-white
            p-6
            shadow-[0_10px_30px_rgba(0,0,0,0.05)]
            md:p-8
          ">

            <div className="flex flex-col gap-5 md:flex-row md:items-center">

              <div className="
                flex
                h-14
                w-14
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#fabd00]/10
                text-[#540a8c]
              ">
                <Heart size={25} />
              </div>

              <div>

                <h2 className="text-xl font-bold text-[#540a8c]">
                  Thank You for Your Generosity
                </h2>

                <p className="mt-2 text-sm leading-7 text-gray-600">
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
      <section className="px-6 pb-20">

        <div className="mx-auto max-w-[1000px]">

          <div className="mb-10 text-center">

            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#540a8c]">
              Ways To Give
            </p>

            <h2 className="text-3xl font-bold text-[#540a8c] md:text-4xl">
              Choose Your Preferred Method
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600">
              You can support the ministry through bank transfer or
              mobile money using the details below.
            </p>

          </div>


          {/* =====================================
              GIVING CARDS
          ===================================== */}
          <div className="grid gap-6 md:grid-cols-2">


            {/* ===================================
                BANK DETAILS
            =================================== */}
            <div className="
              rounded-2xl
              border
              border-gray-100
              bg-white
              p-7
              shadow-[0_15px_40px_rgba(114,17,110,0.07)]
            ">

              {/* Card Header */}
              <div className="mb-7 flex items-center gap-4">

                <div className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#540a8c]/10
                  text-[#540a8c]
                ">
                  <Building2 size={23} />
                </div>

                <div>

                  <h3 className="text-xl font-bold text-[#540a8c]">
                    Bank Transfer
                  </h3>

                  <p className="text-sm text-gray-500">
                    Give through your bank
                  </p>

                </div>

              </div>


              {/* Bank Details */}
              <div className="space-y-4">

                <div className="border-b border-gray-100 pb-4">

                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Bank Name
                  </p>

                  <p className="mt-1 font-medium text-gray-700">
                    YOUR BANK NAME
                  </p>

                </div>


                <div className="border-b border-gray-100 pb-4">

                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Account Name
                  </p>

                  <p className="mt-1 font-medium text-gray-700">
                    MFM KANYANYA
                  </p>

                </div>


                <div className="border-b border-gray-100 pb-4">

                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Account Number
                  </p>

                  <div className="mt-1 flex items-center justify-between gap-3">

                    <p className="font-medium text-gray-700">
                      000000000000
                    </p>

                    <button
                      type="button"
                      onClick={() =>
                        copyToClipboard(
                          "000000000000",
                          "bank"
                        )
                      }
                      className="
                        flex
                        items-center
                        gap-1.5
                        rounded-lg
                        bg-gray-50
                        px-3
                        py-2
                        text-xs
                        font-medium
                        text-[#540a8c]
                        transition-colors
                        hover:bg-[#540a8c]/10
                      "
                    >
                      {copied === "bank" ? (
                        <>
                          <CheckCircle2 size={14} />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy size={14} />
                          Copy
                        </>
                      )}
                    </button>

                  </div>

                </div>


                <div>

                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Branch
                  </p>

                  <p className="mt-1 font-medium text-gray-700">
                    YOUR BANK BRANCH
                  </p>

                </div>

              </div>

            </div>


            {/* ===================================
                MOBILE MONEY
            =================================== */}
            <div className="
              rounded-2xl
              border
              border-gray-100
              bg-white
              p-7
              shadow-[0_15px_40px_rgba(114,17,110,0.07)]
            ">

              {/* Card Header */}
              <div className="mb-7 flex items-center gap-4">

                <div className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#fabd00]/15
                  text-[#540a8c]
                ">
                  <Smartphone size={23} />
                </div>

                <div>

                  <h3 className="text-xl font-bold text-[#540a8c]">
                    Mobile Money
                  </h3>

                  <p className="text-sm text-gray-500">
                    Give using mobile money
                  </p>

                </div>

              </div>


              {/* Mobile Money Details */}
              <div className="space-y-4">

                {/* MTN */}
                <div className="
                  rounded-xl
                  border
                  border-gray-100
                  bg-gray-50
                  p-4
                ">

                  <div className="flex items-center justify-between">

                    <div>

                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                        MTN Mobile Money
                      </p>

                      <p className="mt-1 text-lg font-bold text-gray-700">
                        +256 XXX XXX XXX
                      </p>

                      <p className="mt-1 text-xs text-gray-500">
                        Account Name: MFM Kanyanya
                      </p>

                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        copyToClipboard(
                          "+256 XXX XXX XXX",
                          "mtn"
                        )
                      }
                      className="
                        flex
                        items-center
                        gap-1.5
                        rounded-lg
                        bg-white
                        px-3
                        py-2
                        text-xs
                        font-medium
                        text-[#540a8c]
                        shadow-sm
                        transition-colors
                        hover:bg-[#540a8c]/10
                      "
                    >
                      {copied === "mtn" ? (
                        <>
                          <CheckCircle2 size={14} />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy size={14} />
                          Copy
                        </>
                      )}
                    </button>

                  </div>

                </div>


                {/* Airtel */}
                <div className="
                  rounded-xl
                  border
                  border-gray-100
                  bg-gray-50
                  p-4
                ">

                  <div className="flex items-center justify-between">

                    <div>

                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                        Airtel Money
                      </p>

                      <p className="mt-1 text-lg font-bold text-gray-700">
                        +256 XXX XXX XXX
                      </p>

                      <p className="mt-1 text-xs text-gray-500">
                        Account Name: MFM Kanyanya
                      </p>

                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        copyToClipboard(
                          "+256 XXX XXX XXX",
                          "airtel"
                        )
                      }
                      className="
                        flex
                        items-center
                        gap-1.5
                        rounded-lg
                        bg-white
                        px-3
                        py-2
                        text-xs
                        font-medium
                        text-[#540a8c]
                        shadow-sm
                        transition-colors
                        hover:bg-[#540a8c]/10
                      "
                    >
                      {copied === "airtel" ? (
                        <>
                          <CheckCircle2 size={14} />
                          Copied
                        </>
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


          {/* =====================================
              GIVING NOTE
          ===================================== */}
          <div className="
            mt-8
            rounded-2xl
            bg-[#540a8c]
            px-6
            py-7
            text-center
            md:px-10
          ">

            <h3 className="text-lg font-bold text-white">
              Give Freely, Give Cheerfully
            </h3>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-white/70">
              "Each of you should give what you have decided in your heart
              to give, not reluctantly or under compulsion, for God loves
              a cheerful giver."
            </p>

            <p className="mt-3 text-xs font-bold uppercase tracking-[0.2em] text-[#fabd00]">
              2 Corinthians 9:7
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Giving;