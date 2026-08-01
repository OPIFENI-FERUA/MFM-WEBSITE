import { Link } from "react-router-dom";

const ministries = [
  {
    title: "EVANGELISM",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYEZ_WOW6SVK9OX1T_6TomNKTgUhntGlcrdwR_DWV0LteQikbQMwU2V_kx43FzQPiGZmBTWaodM5WT_2lAEVXLsUvxtWCbo7VYlQVvoiyhYptl2xjAopRZOBJsdkTbt1Kb_sAxGVNVcbDRuEei7L-bwFFOPv0fHTFyio8RePtKu7xSt_nnmr2EUMLU81E-7AKTxV4yhUUEQGvayeDMaixvCSpVEP2QhHJhWqMZrjD4DWsdxERiqcXi",
  },
  {
    title: "YOUTH",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZhVUAjc4WKQW9aKT-caoPtd8BGsL4OpMS8DL12yZf8G4OTbFDJYHJAM0zBaGzoUHV_8xqn1IbODU6mPMb3Kj9vh-cFf4_Td48RWkD2m6SNvYN-F449FJoGauirnVWi7NASTPQ-vQIWBsTHfsjjiuFvx7RSWEd-xldAsRCWGmApxZoG_plRFNwBj-DIWmSRYmq6AYovGvqyTxJu2ZoIcRPxH1HeR4BU-vk63GAby2F4VDY0yhU1QlZ",
  },
  {
    title: "WOMEN",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqELdog7PlXRdcNc3MAkCUJK8YcLrQcLst7SbdSsZeXUxnuO5hQz1rA1xzKWuB7ot-fm3LQYTpOHJ-Yi1_bYeZAWmxzyPGxKGwlXAXqpZopvCl_y8PBVTRGe2soB0kWqpH204-w5G3uioajm5AvkzvjjgFV_5lPw8jLuJgiX8_3DxHk06TnCNPfgEi20mQenXkWrXqz4awHU7zAp6IMh-jSRwoV8Tm63CVPplVx6nYcxMF4DOHDqC7",
  },
  {
    title: "MEN",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3cQxmPRQYI_uUspYmEnxagYEB0Q_SXFt5p-dZc6CmICFTkyQhJx8ZocpObCBCAGxH_eULManLmZEh0FuX37XlYPMaq0qpZMeWvEaYDI-Gb8rjBqrJN5c7Ri-239bZPOCBZ_aQQPa2Bd5n_Vnft1a2ZnQj5dOOhpK_dAYkdLbbXmVRafaq7LggGPGIX2dphczbVK5yJlYlY8KD6wUx5pF9F0YZLY0z3kpxRuWFq4a_odfUp1x3lonv",
  },
];

function MinistriesPreview() {
  return (
    <section className="py-[120px]">
      <div className="mx-auto mb-16 max-w-[1280px] px-5 text-center md:px-6">
        <h2 className="mb-4 text-[32px] font-bold uppercase tracking-tight text-[#310065]">OUR MINISTRIES</h2>
        <p className="text-lg text-[#4a4452]">Find your place to serve, grow and belong in one of our departments.</p>
      </div>
      <div className="relative overflow-hidden px-5 md:px-6">
        <div className="marquee flex min-w-full items-stretch gap-4 md:gap-6">
          {[...ministries, ...ministries].map((ministry, index) => (
            <div
              key={`${ministry.title}-${index}`}
              className="group flex-shrink-0 w-full max-w-[280px] overflow-hidden rounded-[1.5rem] bg-white shadow-[0_18px_45px_rgba(49,0,101,0.14)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_28px_65px_rgba(49,0,101,0.2)]"
            >
              <div className="relative h-[260px] overflow-hidden rounded-t-[1.5rem]">
                <img
                  src={ministry.image}
                  alt={ministry.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-[#7e099e] shadow-md">
                  <span className="material-symbols-outlined text-base">
                    {index % ministries.length === 0 ? "campaign" : index % ministries.length === 1 ? "groups" : index % ministries.length === 2 ? "female" : "male"}
                  </span>
                </div>
              </div>
              <div className="space-y-3 p-5">
                <div className="flex items-center justify-between gap-3 text-[11px] uppercase tracking-[0.32em] text-[#7e099e]">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#7e099e]" />
                    Ministry
                  </span>
                  <span className="text-gray-400">Explore</span>
                </div>
                <h4 className="text-xl font-semibold text-[#1f1f1f]">{ministry.title}</h4>
                <p className="text-[13px] leading-5 text-gray-500">
                  A place to pray, serve, learn and connect with the body.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12 text-center">
        <Link to="/ministries" className="rounded-full bg-[#310065] px-10 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-all hover:bg-[#4a148c]">
          EXPLORE ALL MINISTRIES <span className="material-symbols-outlined align-middle ml-2">east</span>
        </Link>
      </div>
    </section>
  );
}

export default MinistriesPreview;
