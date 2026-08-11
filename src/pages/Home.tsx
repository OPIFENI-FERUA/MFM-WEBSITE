import Hero from "../components/home/Hero";
import AboutPreview from "../components/home/AboutPreview";
import ServicesPreview from "../components/home/ServicesPreview";
import SermonsPreview from "../components/home/SermonsPreview";
import EventsPreview from "../components/home/EventsPreview";
import MinistriesPreview from "../components/home/MinistriesPreview";



export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#1a1c1d]">
      <Hero />




      <AboutPreview />
      <ServicesPreview />
      <SermonsPreview />
      <MinistriesPreview />
      <EventsPreview />
    </main>
  );
}
