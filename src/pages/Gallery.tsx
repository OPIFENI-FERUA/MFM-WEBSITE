import { useState } from "react";
import { X } from "lucide-react";

type GalleryImage = {
  id: number;
  category: string;
  title: string;
  img: string;
};

function Gallery() {
  const [active, setActive] = useState("View All");
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null);
  const [failedImages, setFailedImages] = useState<number[]>([]);

  const CATEGORIES = [
    "View All",
    "Worship",
    "Programs",
    "Outreach",
    "Youth",
    "Events",
  ];

  const IMAGES = [
    {
      id: 1,
      category: "Worship",
      title: "Sunday Morning Service",
      img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=70",
    },
    {
      id: 2,
      category: "Worship",
      title: "Voices Raised in Song",
      img: "https://images.unsplash.com/photo-1544927893-72f24e1d5f0c?auto=format&fit=crop&w=800&q=70",
    },
    {
      id: 3,
      category: "Worship",
      title: "Evening Candlelight",
      img: "https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=800&q=70",
    },
    {
      id: 4,
      category: "Programs",
      title: "Bible Study Circle",
      img: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=70",
    },
    {
      id: 5,
      category: "Programs",
      title: "Marriage & Family Class",
      img: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=800&q=70",
    },
    {
      id: 6,
      category: "Programs",
      title: "Discipleship Workshop",
      img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=70",
    },
    {
      id: 7,
      category: "Outreach",
      title: "Community Food Drive",
      img: "https://images.unsplash.com/photo-1593113630400-ea4288922497?auto=format&fit=crop&w=800&q=70",
    },
    {
      id: 8,
      category: "Outreach",
      title: "Serving Our Neighbors",
      img: "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?auto=format&fit=crop&w=800&q=70",
    },
    {
      id: 9,
      category: "Outreach",
      title: "Volunteers at Work",
      img: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=800&q=70",
    },
    {
      id: 10,
      category: "Youth",
      title: "Youth Fellowship Night",
      img: "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=800&q=70",
    },
    {
      id: 11,
      category: "Youth",
      title: "Summer Camp Games",
      img: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=70",
    },
    {
      id: 12,
      category: "Youth",
      title: "Youth Choir Rehearsal",
      img: "https://images.unsplash.com/photo-1543269664-56d93c1b41a6?auto=format&fit=crop&w=800&q=70",
    },
    {
      id: 13,
      category: "Events",
      title: "Annual Church Picnic",
      img: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=70",
    },
    {
      id: 14,
      category: "Events",
      title: "Christmas Celebration",
      img: "https://images.unsplash.com/photo-1544273677-6e4b999de2a7?auto=format&fit=crop&w=800&q=70",
    },
    {
      id: 15,
      category: "Events",
      title: "Baptism Sunday",
      img: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=800&q=70",
    },
  ];

  const visible =
    active === "View All"
      ? IMAGES
      : IMAGES.filter((image) => image.category === active);

  const visibleImages = visible.filter(
    (image) => !failedImages.includes(image.id)
  );

  const handleImageError = (id: number) => {
    setFailedImages((prev) => Array.from(new Set([...prev, id])));
  };

  return (
    <main className="min-h-screen bg-white text-[#000000] pt-24 md:pt-28">
      {/* Filter tabs */}
      <div className="mt-6 flex flex-wrap justify-center gap-2 md:gap-3 px-6 mb-14">
        {CATEGORIES.map((category) => {
          const isActive = category === active;
          return (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={[
                "px-5 py-2.5 rounded-md text-sm md:text-[15px] transition-all duration-200 border",
                isActive
                  ? "bg-[#E8AA2E] text-[#000000] border-[#E8AA2E] font-semibold shadow-sm"
                  : "bg-transparent text-[#6b7280] border-transparent hover:text-[#0B6E4F]",
              ].join(" ")}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Image grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pb-24">
        <div
          key={active}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 animate-[fadeIn_0.4s_ease]"
        >
          {visibleImages.map((item) => (
            <button
              key={item.id}
              onClick={() => setLightbox(item)}
              className="group relative overflow-hidden rounded-lg aspect-[4/3.1] text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B6E4F]"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                onError={() => handleImageError(item.id)}
              />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/85 to-transparent" />
              <div className="absolute left-0 right-0 bottom-0 p-4">
                <p className="text-[11px] uppercase tracking-[0.15em] text-[#F2C75C] font-semibold mb-1">
                  {item.category}
                </p>
                <p className="text-white text-lg font-bold uppercase tracking-wide">
                  {item.title}
                </p>
              </div>
            </button>
          ))}
        </div>

        {visibleImages.length === 0 && (
          <p className="text-center text-[#6b7280] py-20">
            No photos in this category yet.
          </p>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 md:p-10"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-5 right-5 md:top-8 md:right-8 text-white/80 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X size={30} />
          </button>
          <div
            className="max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.img}
              alt={lightbox.title}
              className="w-full max-h-[75vh] object-contain rounded-md"
            />
            <div className="mt-4 text-center">
              <p className="text-[11px] uppercase tracking-[0.15em] text-[#E8AA2E] font-semibold mb-1">
                {lightbox.category}
              </p>
              <p className="text-white text-lg">
                {lightbox.title}
              </p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}

export default Gallery;
