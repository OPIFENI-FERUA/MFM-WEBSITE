import { Link } from "react-router-dom";
import { Calendar, User, PlayCircle, ArrowUpRight } from "lucide-react";

type Sermon = {
  title: string;
  date: string;
  image: string;
  videoUrl: string;
  pastor: string;
};

const dummySermons: Sermon[] = [
  {
    title: "The Finger of Fire",
    date: "26 July 2026",
    image:
      "https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://youtube.com",
    pastor: "Benita",
  },
  {
    title: "When Love Becomes A Weapon",
    date: "12 July 2026",
    image:
      "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://youtube.com",
    pastor: "Benita",
  },
  {
    title: "Glory Revival",
    date: "5 July 2026",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://youtube.com",
    pastor: "Benita",
  },
];

interface SermonsPreviewProps {
  limit?: number;
  title?: string;
  showViewAll?: boolean;
}

function SermonsPreview({
  limit = 3,
  title = "Latest Sermons",
  showViewAll = true,
}: SermonsPreviewProps): JSX.Element {
  return (
    <section className="bg-[#faf9fc] py-20 md:py-28">

      <div className="mx-auto max-w-[1280px] px-6">


        {/* HEADER */}

        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">

          <div>

            <div className="mb-3 flex items-center gap-3">

              <span className="h-[2px] w-10 bg-[#d4af37]" />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#310065]">
                Word &amp; Worship
              </span>

            </div>


            <h2 className="text-3xl font-bold leading-tight text-[#310065] md:text-4xl">
              {title}
            </h2>

          </div>



          {showViewAll && (

            <Link
              to="/sermons"
              className="
                group
                flex
                items-center
                gap-2
                text-sm
                font-bold
                uppercase
                tracking-[0.15em]
                text-[#310065]
                transition-colors
                duration-200
                hover:text-[#4a148c]
              "
            >

              View All Sermons

              <ArrowUpRight
                size={16}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />

            </Link>

          )}

        </div>





        {/* SERMON CARDS */}

        <div className="grid gap-8 md:grid-cols-3">


          {dummySermons
            .slice(0, limit)
            .map((sermon) => (


            <article
              key={sermon.title}
              className="
                group
                overflow-hidden
                rounded-2xl
                border
                border-gray-100
                bg-white
                shadow-[0_8px_30px_rgba(49,0,101,0.06)]
                transition-all
                duration-300
                hover:-translate-y-1.5
                hover:shadow-[0_20px_45px_rgba(49,0,101,0.14)]
              "
            >



              {/* IMAGE */}

              <div className="relative h-56 overflow-hidden">


                <img
                  src={sermon.image}
                  alt={sermon.title}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-105
                  "
                />



                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/60
                    via-black/10
                    to-transparent
                  "
                />




                <span
                  className="
                    absolute
                    left-4
                    top-4
                    rounded-full
                    bg-[#d4af37]
                    px-3
                    py-1
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-[#310065]
                  "
                >
                  Sunday Service
                </span>





                <div
                  className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  "
                >

                  <PlayCircle
                    size={56}
                    className="
                      text-white
                      drop-shadow-lg
                    "
                    strokeWidth={1.5}
                  />

                </div>


              </div>







              {/* CONTENT */}


              <div className="p-6">


                <h3
                  className="
                    text-lg
                    font-bold
                    leading-snug
                    text-[#1a1c1d]
                  "
                >
                  {sermon.title}
                </h3>





                <div
                  className="
                    mt-4
                    flex
                    flex-wrap
                    items-center
                    gap-4
                    text-xs
                    text-gray-500
                  "
                >


                  <span className="flex items-center gap-1.5">

                    <Calendar
                      size={14}
                      className="text-[#d4af37]"
                    />

                    {sermon.date}

                  </span>





                  <span className="flex items-center gap-1.5">

                    <User
                      size={14}
                      className="text-[#d4af37]"
                    />

                    Pastor {sermon.pastor}

                  </span>


                </div>







                {/* BUTTONS */}


                <div className="mt-6 flex gap-2.5">


                  <a
                    href={sermon.videoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex-1
                      rounded-lg
                      bg-[#310065]
                      px-4
                      py-2.5
                      text-center
                      text-xs
                      font-bold
                      uppercase
                      tracking-wider
                      text-white
                      transition-colors
                      duration-200
                      hover:bg-[#4a148c]
                    "
                  >
                    Watch
                  </a>




                  <a
                    href={sermon.videoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex-1
                      rounded-lg
                      border
                      border-gray-200
                      px-4
                      py-2.5
                      text-center
                      text-xs
                      font-bold
                      uppercase
                      tracking-wider
                      text-gray-600
                      transition-colors
                      duration-200
                      hover:border-[#310065]/30
                      hover:bg-gray-50
                      hover:text-[#310065]
                    "
                  >
                    Listen
                  </a>


                </div>



              </div>


            </article>


          ))}


        </div>


      </div>


    </section>
  );
}

export default SermonsPreview;