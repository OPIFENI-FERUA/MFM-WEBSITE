import EventsPreview from "../components/home/EventsPreview";
import PageHero from "../components/layout/PageHero";

function Events() {
  return (
    <main className="bg-white text-[#000000]">
      <PageHero
        label="Events"
        title="All Events"
        description="Stay updated on upcoming gatherings, worship nights, and church celebrations."
      />
      <EventsPreview showViewAll={false} title="ALL EVENTS" />
    </main>
  );
}

export default Events;
