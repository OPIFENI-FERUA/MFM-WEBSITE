import SermonsPreview from "../components/home/SermonsPreview";

function Sermons() {
  return (
    <main className="bg-[#f9f9fb] text-[#1a1c1d]">
      <SermonsPreview title="ALL SERMONS" limit={6} showViewAll={false} />
    </main>
  );
}

export default Sermons;
