import { useState } from "react";
import PageHero from "../components/layout/PageHero";
import { prayerTopics } from "../data/prayerPoints";

function PrayerPoints() {
  const [selectedTopic, setSelectedTopic] = useState(prayerTopics[0]);

  return (
    <main className="min-h-screen bg-white text-[#000000]">
      <PageHero
        label="Prayer Points"
        title="Prayer Points"
        description="Join us in prayer as we seek God together and stand in faith for our church, families, community and nation."
      />

      <section
        className="bg-white px-4 py-20 sm:px-6 lg:px-8"
        data-no-scroll-reveal
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[320px_1fr]">
            <aside>
              <div className="lg:sticky lg:top-28">
                <div className="mb-7">
                  <p className="mb-3 text-base font-semibold uppercase tracking-[0.2em] text-[#540a8c]">
                    Prayer Focus
                  </p>

                  <h2 className="text-3xl font-bold text-[#000000] sm:text-4xl">
                    Prayer Points
                  </h2>
                </div>

                <div className="border-l-2 border-gray-200">
                  {prayerTopics.map((topic) => {
                    const isSelected = selectedTopic.id === topic.id;

                    return (
                      <button
                        key={topic.id}
                        onClick={() => setSelectedTopic(topic)}
                        className={`relative w-full px-6 py-5 text-left transition-all duration-200 ${
                          isSelected
                            ? "bg-[#540a8c]/5 font-semibold text-[#540a8c]"
                            : "text-gray-600 hover:bg-gray-50 hover:text-[#540a8c]"
                        }`}
                      >
                        {isSelected && (
                          <span className="absolute left-[-2px] top-0 h-full w-[4px] bg-[#540a8c]" />
                        )}

                        <div className="flex items-start gap-4">
                          <span
                            className={`text-lg font-bold ${
                              isSelected ? "text-[#540a8c]" : "text-gray-400"
                            }`}
                          >
                            {String(topic.id).padStart(2, "0")}
                          </span>

                          <span className="text-lg leading-7 sm:text-xl">
                            {topic.title}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </aside>

            <div>
              <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-md">
                <div className="h-2 bg-[#540a8c]" />

                <div className="p-8 sm:p-10 lg:p-12">
                  <div className="mb-10">
                    <p className="mb-3 text-base font-semibold uppercase tracking-[0.18em] text-[#540a8c] sm:text-lg">
                      Prayer Point {selectedTopic.id}
                    </p>

                    <h1 className="text-3xl font-bold leading-tight text-[#000000] sm:text-4xl lg:text-5xl">
                      {selectedTopic.title}
                    </h1>

                    <p className="mt-4 text-lg leading-8 text-gray-500 sm:text-xl">
                      Posted on {selectedTopic.date} by {selectedTopic.author}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-100 bg-gray-50 p-7 sm:p-9">
                    <h2 className="mb-7 text-2xl font-bold text-[#000000] sm:text-3xl">
                      Prayer Focus
                    </h2>

                    <div className="space-y-7">
                      {selectedTopic.points.map((point, index) => (
                        <div key={index} className="flex gap-5">
                          <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#540a8c] text-lg font-bold text-white">
                            {index + 1}
                          </span>

                          <p className="text-lg leading-9 text-gray-700 sm:text-xl">
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-9 rounded-2xl border-l-4 border-[#540a8c] bg-[#540a8c]/5 px-7 py-6 sm:px-8 sm:py-7">
                    <p className="text-lg italic leading-8 text-gray-700 sm:text-xl">
                      "The prayer of a righteous person is powerful and
                      effective."
                    </p>

                    <p className="mt-3 text-lg font-semibold text-[#540a8c]">
                      {selectedTopic.scripture}
                    </p>
                  </div>

                  <div className="mt-9 flex flex-wrap items-center justify-between gap-5 border-t border-gray-100 pt-7">
                    <div>
                      <p className="text-base uppercase tracking-wider text-gray-400">
                        Prayer Focus Date
                      </p>

                      <p className="mt-2 text-lg font-medium text-gray-700">
                        {selectedTopic.date}
                      </p>
                    </div>

                    <span className="inline-flex items-center rounded-full bg-[#540a8c]/10 px-5 py-2.5 text-base font-semibold text-[#540a8c]">
                      {selectedTopic.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default PrayerPoints;
