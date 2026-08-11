import PageHero from "../components/layout/PageHero";

function About() {
  return (
    <main className="bg-[#faf8fc] text-[#221433]">
      <PageHero
        label="About Us"
        title="About MFM Kanyanya"
        description="We are committed to worship, discipleship, prayer, and service. Discover our mission, vision, and community impact."
      />

      <section className="py-20" id="about">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-block text-[1.6rem] font-semibold uppercase tracking-[0.08em] text-[#d9a441]">
              About Us
            </span>
            <h2 className="text-4xl font-semibold text-[#2e1345]">Mountain Grove Chapel is a house of prayer for all people.</h2>
            <p className="text-[#6f6480] max-w-2xl leading-8">
              Mountain Grove Chapel is a place where people from all walks of life find rest, discover purpose, and grow in their faith.
            </p>
            <p className="text-[#6f6480] max-w-2xl leading-8">
              We are committed to raising ordinary people, transformed and effective, who will impact their world for Christ.
            </p>
          </div>
          <div className="overflow-hidden rounded-[18px] shadow-[0_20px_50px_-20px_rgba(46,19,69,0.25)]">
            <img
              src="https://images.unsplash.com/photo-1438032005730-c779502df39b?w=900&q=80"
              alt="Church exterior at dusk"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#efe6fb] py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 md:grid-cols-[0.95fr_1.1fr]">
          <div className="space-y-6">
            <span className="inline-block text-[1.6rem] font-semibold uppercase tracking-[0.08em] text-[#d9a441]">
              Our Background
            </span>
            <h2 className="text-4xl font-semibold text-[#2e1345]">Our Journey of Faith</h2>
            <p className="text-[#6f6480] max-w-2xl leading-8">
              Mountain Grove Chapel was established as a house of healing and hope. Ministering with the word in season and out of season to the community around us.
            </p>
            <p className="text-[#6f6480] max-w-2xl leading-8">
              Over the years, God has continually poured out His grace, expanding our reach and impacting lives through prayer, the Word, and acts of compassion.
            </p>
            <p className="text-[#6f6480] max-w-2xl leading-8">
              Today, we continue to advance the Kingdom of God through effective prayer, discipleship, and outreach.
            </p>
          </div>
          <div className="relative pl-6">
            <div
              className="absolute left-0 top-2 bottom-2 w-[2px]"
              style={{
                background: "repeating-linear-gradient(to bottom, #f0c869 0 6px, transparent 6px 12px)",
              }}
            />
            <div className="space-y-8">
              {[
                { year: "2008", title: "Church Started", copy: "Our journey began with a small prayer group meeting in a living room." },
                { year: "2012", title: "Youth Ministry Launch", copy: "Raising up passionate young people through mentorship and outreach." },
                { year: "2016", title: "Ministry Expansion", copy: "New departments launched to serve our growing congregation." },
                { year: "2021", title: "Community Outreach", copy: "Taking the Gospel and practical aid into the surrounding community." },
                { year: "2023", title: "New Church Programs", copy: "Introducing discipleship tracks designed to deepen every believer's walk." },
              ].map((item) => (
                <div key={item.year} className="flex gap-5">
                  <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#3a1a56] text-white text-sm shadow-[0_0_0_6px_rgba(239,230,251,1)]">
                    ?
                  </div>
                  <div className="flex-1">
                    <span className="block text-sm font-semibold uppercase tracking-[0.08em] text-[#d9a441]">
                      {item.year}
                    </span>
                    <h4 className="text-xl font-semibold text-[#2e1345] mt-2">{item.title}</h4>
                    <p className="text-[#6f6480] mt-2 text-sm leading-7">{item.copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-[#2e1345] via-[#201033] to-[#201033] py-20 text-white" id="leader">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(217,164,65,0.12)_2px,transparent_2px)] bg-[length:20px_20px] opacity-40" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-[0.6fr_1fr_0.75fr] items-center">
          <div className="mx-auto w-full max-w-[320px] overflow-hidden rounded-full border-4 border-[#d9a441] shadow-[0_0_0_10px_rgba(217,164,65,0.15)] aspect-square">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&q=80"
              alt="Portrait of the General Overseer"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="space-y-5">
            <span className="inline-block text-[1.6rem] font-semibold uppercase tracking-[0.08em] text-[#d9a441]">Our Leader</span>
            <h2 className="text-4xl font-semibold">Our General Overseer</h2>
            <span className="block text-[#f0c869] text-base font-semibold uppercase tracking-[0.12em]">Dr. Samuel Adewale Braimoh</span>
            <p className="max-w-xl text-sm leading-7 text-[#e3d4f1]">
              The General Overseer of Mountain Grove Chapel is a passionate teacher and mentor to thousands, whose leadership has drawn many to a closer walk with God through prayer, the Word, and the demonstration of the Holy Spirit.
            </p>
            <a
              href="#leader"
              className="inline-flex items-center justify-center rounded-full border border-[#d9a441] bg-white/5 px-8 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-[#d9a441] transition hover:bg-white/10"
            >
              Meet Our Overseer ?
            </a>
          </div>
          <div className="rounded-[16px] border border-white/15 bg-white/5 p-8 backdrop-blur-md">
            <div className="text-[3rem] font-serif leading-none text-[#d9a441]">�</div>
            <p className="font-serif italic text-xl leading-9 text-white">Prayer is the master key to victory.</p>
            <span className="mt-6 block text-sm uppercase tracking-[0.12em] text-[#f0c869]">� DR. S. A. BRAIMOH</span>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#faf8fc]" id="departments">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-[#2e1345]">Our Departments</h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#d9a441]" />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[
              { title: "Youth Ministry", icon: "????????", image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=400&q=80", copy: "Raising a generation on fire for God." },
              { title: "Women Ministry", icon: "??", image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80", copy: "Empowering women through fellowship." },
              { title: "Men Ministry", icon: "??", image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&q=80", copy: "Building godly leaders in every home." },
              { title: "Children Ministry", icon: "??", image: "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=400&q=80", copy: "Nurturing the faith of our little ones." },
              { title: "Choir Ministry", icon: "??", image: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=400&q=80", copy: "Leading the church in worship and song." },
              { title: "Prayer Ministry", icon: "??", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80", copy: "Standing in the gap for our community." },
              { title: "Evangelism", icon: "??", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&q=80", copy: "Taking the good news to the world." },
              { title: "Media Ministry", icon: "??", image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&q=80", copy: "Telling our stories for the world to see." },
              { title: "Protocol Ministry", icon: "??", image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&q=80", copy: "Coordinating with excellence and order." },
              { title: "Ushering Ministry", icon: "??", image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=400&q=80", copy: "Serving with joy and hospitality." },
              { title: "Security Ministry", icon: "???", image: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?w=400&q=80", copy: "Ensuring a safe worship environment." },
              { title: "Hospitality Ministry", icon: "???", image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=400&q=80", copy: "Making every visitor feel at home." },
            ].map((dept) => (
              <div key={dept.title} className="overflow-hidden rounded-[14px] bg-white shadow-[0_10px_26px_-14px_rgba(46,19,69,0.25)] transition-transform duration-200 hover:-translate-y-1">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={dept.image} alt={dept.title} className="h-full w-full object-cover" />
                  <div className="absolute left-1/2 bottom-[-22px] flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-[#3a1a56] text-white text-lg border-[3px] border-white">
                    {dept.icon}
                  </div>
                </div>
                <div className="px-4 pb-6 pt-10 text-center">
                  <h4 className="text-lg font-semibold text-[#2e1345]">{dept.title}</h4>
                  <p className="mt-3 text-sm leading-6 text-[#6f6480] min-h-[3rem]">{dept.copy}</p>
                  <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-[0.12em] text-[#4d2472]">
                    Explore ?
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
