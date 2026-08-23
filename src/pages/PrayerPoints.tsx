import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import PageHero from "../components/layout/PageHero";
import { prayerTopics } from "../data/prayerPoints";

function PrayerPoints() {
  const [selectedTopic, setSelectedTopic] = useState(prayerTopics[0]);

  const [mobileSelectedTopic, setMobileSelectedTopic] = useState<
    (typeof prayerTopics)[number] | null
  >(null);

  return (
    <main className="min-h-screen bg-white text-black">

      {/* =========================================
          DESKTOP HERO
      ========================================= */}
      <div className="hidden lg:block">
        <PageHero
          label="Prayer Points"
          title="Prayer Points"
          description="Join us in prayer as we seek God together and stand in faith for our church, families, community and nation."
        />
      </div>


      {/* =========================================
          MOBILE
      ========================================= */}
      <section
        className="px-4 pb-12 pt-16 sm:px-6 sm:pt-20 lg:hidden"
        data-no-scroll-reveal
      >
        {!mobileSelectedTopic ? (
          <div className="mx-auto max-w-xl">

            <p
              className="
                mb-6
                border-b
                border-gray-100
                pb-4
                text-sm
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#7e099e]
              "
            >
              Prayer Points
            </p>

            <div
              className="
                overflow-hidden
                rounded-2xl
                border
                border-gray-200
                bg-white
                shadow-sm
              "
            >
              {prayerTopics.map((topic) => (
                <button
                  key={topic.id}
                  type="button"
                  onClick={() => setMobileSelectedTopic(topic)}
                  className="
                    flex
                    w-full
                    items-center
                    gap-4
                    border-b
                    border-gray-100
                    px-4
                    py-5
                    text-left
                    transition-colors
                    last:border-b-0
                    hover:bg-[#5F0C1B]/5
                  "
                >
                  <span
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#7A1022]/10
                      text-sm
                      font-bold
                      text-[#7e099e]
                    "
                  >
                    {String(topic.id).padStart(2, "0")}
                  </span>

                  <span
                    className="
                      text-base
                      font-semibold
                      leading-6
                      text-gray-800
                    "
                  >
                    {topic.title}
                  </span>
                </button>
              ))}
            </div>

          </div>
        ) : (

          <div className="mx-auto max-w-xl">

            <button
              type="button"
              onClick={() => setMobileSelectedTopic(null)}
              className="
                mb-6
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-[#7A1022]
                px-4
                py-2.5
                text-sm
                font-bold
                text-white
                transition-colors
                hover:bg-[#43076f]
              "
            >
              <ArrowLeft size={18} />
              Back to Prayer Points
            </button>

            <div
              className="
                rounded-2xl
                border
                border-gray-200
                bg-white
                p-5
                shadow-sm
                sm:p-7
              "
            >

              <div className="space-y-6">

                {mobileSelectedTopic.points.map((point, index) => (
                  <div
                    key={index}
                    className="flex gap-3"
                  >
                    <span
                      className="
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#7A1022]
                        text-sm
                        font-bold
                        text-white
                      "
                    >
                      {index + 1}
                    </span>

                    <p
                      className="
                        pt-0.5
                        text-base
                        leading-7
                        text-gray-700
                      "
                    >
                      {point}
                    </p>
                  </div>
                ))}

              </div>

              <p
                className="
                  mt-8
                  border-l-4
                  border-[#7A1022]
                  bg-[#7A1022]/5
                  px-4
                  py-3
                  text-sm
                  font-semibold
                  text-[#7e099e]
                "
              >
                {mobileSelectedTopic.scripture}
              </p>

            </div>

          </div>
        )}
      </section>


      {/* =========================================
          DESKTOP
      ========================================= */}
      <section
        className="
          hidden
          bg-white
          px-4
          pb-20
          pt-28
          sm:px-6
          lg:block
          lg:px-8
        "
        data-no-scroll-reveal
      >

        <div
          className="
            mx-auto
            grid
            max-w-7xl
            gap-12
            lg:grid-cols-[320px_1fr]
          "
        >

          {/* SIDEBAR */}
          <aside>

            <div className="sticky top-28">

              <p
                className="
                  mb-3
                  text-base
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#7e099e]
                "
              >
                Prayer Focus
              </p>

              <h2 className="mb-7 text-4xl font-bold">
                Prayer Points
              </h2>

              <div className="border-l-2 border-gray-200">

                {prayerTopics.map((topic) => {

                  const isSelected =
                    selectedTopic.id === topic.id;

                  return (
                    <button
                      key={topic.id}
                      type="button"
                      onClick={() => setSelectedTopic(topic)}
                      className={`
                        relative
                        flex
                        w-full
                        items-start
                        gap-4
                        px-6
                        py-5
                        text-left
                        transition-colors
                        ${
                          isSelected
                            ? "bg-[#7A1022]/5 font-semibold text-[#7e099e]"
                            : "text-gray-600 hover:bg-gray-50 hover:text-[#7e099e]"
                        }
                      `}
                    >

                      {isSelected && (
                        <span
                          className="
                            absolute
                            bottom-0
                            left-[-2px]
                            top-0
                            w-[4px]
                            bg-[#7A1022]
                          "
                        />
                      )}

                      <span className="text-lg font-bold">
                        {String(topic.id).padStart(2, "0")}
                      </span>

                      <span className="text-xl leading-7">
                        {topic.title}
                      </span>

                    </button>
                  );
                })}

              </div>

            </div>

          </aside>


          {/* MAIN ARTICLE */}
          <article
            className="
              overflow-hidden
              rounded-3xl
              border
              border-gray-200
              bg-white
              shadow-md
            "
          >

            <div className="h-2 bg-[#7A1022]" />

            <div className="p-8 sm:p-10 lg:p-12">

              <p
                className="
                  mb-3
                  text-lg
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#7e099e]
                "
              >
                Prayer Point {selectedTopic.id}
              </p>

              <h1
                className="
                  text-4xl
                  font-bold
                  leading-tight
                  lg:text-5xl
                "
              >
                {selectedTopic.title}
              </h1>

              <p
                className="
                  mt-4
                  text-xl
                  leading-8
                  text-gray-500
                "
              >
                Posted on {selectedTopic.date} by{" "}
                {selectedTopic.author}
              </p>


              {/* PRAYER FOCUS */}
              <div
                className="
                  mt-10
                  rounded-2xl
                  border
                  border-gray-100
                  bg-gray-50
                  p-7
                  sm:p-9
                "
              >

                <h2 className="mb-7 text-3xl font-bold">
                  Prayer Focus
                </h2>

                <div className="space-y-7">

                  {selectedTopic.points.map(
                    (point, index) => (
                      <div
                        key={index}
                        className="flex gap-5"
                      >

                        <span
                          className="
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            bg-[#7A1022]
                            text-lg
                            font-bold
                            text-white
                          "
                        >
                          {index + 1}
                        </span>

                        <p
                          className="
                            text-xl
                            leading-9
                            text-gray-700
                          "
                        >
                          {point}
                        </p>

                      </div>
                    )
                  )}

                </div>

              </div>


              {/* SCRIPTURE */}
              <div
                className="
                  mt-9
                  rounded-2xl
                  border-l-4
                  border-[#7A1022]
                  bg-[#7A1022]/5
                  px-8
                  py-7
                "
              >

                <p
                  className="
                    text-xl
                    italic
                    leading-8
                    text-gray-700
                  "
                >
                  "The prayer of a righteous person is powerful
                  and effective."
                </p>

                <p
                  className="
                    mt-3
                    text-lg
                    font-semibold
                    text-[#7e099e]
                  "
                >
                  {selectedTopic.scripture}
                </p>

              </div>

            </div>

          </article>

        </div>

      </section>

    </main>
  );
}

export default PrayerPoints;