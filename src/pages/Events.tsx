import EventsPreview from "../components/home/EventsPreview";

function Events() {
  return (
    <main className="bg-[#f9f9fb] text-[#1a1c1d]">
      <EventsPreview showViewAll={false} title="ALL EVENTS" />
    </main>
  );
}

export default Events;
