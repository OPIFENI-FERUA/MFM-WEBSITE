import SermonsPreview from "../components/home/SermonsPreview";
import PageHero from "../components/layout/PageHero";

function Sermons() {
  return (
    <main className="bg-white text-[#000000]">
      <PageHero
        label="Sermons"
        title="All Sermons"
        description="Watch and listen to the messages that inspire our church family each week."
      />
      <SermonsPreview title="ALL SERMONS" limit={6} showViewAll={false} />
    </main>
  );
}

export default Sermons;
