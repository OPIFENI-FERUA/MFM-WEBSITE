import Hero from "../components/home/Hero";
import AboutPreview from "../components/home/AboutPreview";
import ServicesPreview from "../components/home/ServicesPreview";
import SermonsPreview from "../components/home/SermonsPreview";
import EventsPreview from "../components/home/EventsPreview";
import ProjectPreview from "../components/home/ProjectPreview";



export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#000000]">
      <Hero />




      <AboutPreview />
      <ServicesPreview />
      <SermonsPreview />
      <ProjectPreview />
      <EventsPreview />
    </main>
  );
}
