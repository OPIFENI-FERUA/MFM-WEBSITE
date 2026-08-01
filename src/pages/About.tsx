function About() {
  return (
    <main className="min-h-screen page-shell flex items-center bg-[#f9f9fb]">
      <div className="container py-10">
        <h1>About MFM Kanyanya</h1>
        <p>We are committed to worship, discipleship, prayer, and service.</p>
        <section className="mt-8 grid gap-4 sm:grid-cols-3">
          <a href="/ministries" className="block rounded-lg border p-4 text-center hover:bg-gray-50">
            <h3 className="text-lg font-semibold">Ministries</h3>
            <p className="text-sm text-gray-600">Learn about our ministry areas.</p>
          </a>

          <a href="/projects" className="block rounded-lg border p-4 text-center hover:bg-gray-50">
            <h3 className="text-lg font-semibold">Projects</h3>
            <p className="text-sm text-gray-600">See our ongoing community projects.</p>
          </a>

          <a href="/gallery" className="block rounded-lg border p-4 text-center hover:bg-gray-50">
            <h3 className="text-lg font-semibold">Gallery</h3>
            <p className="text-sm text-gray-600">Browse photos from our events.</p>
          </a>
        </section>
      </div>
    </main>
  )
}

export default About
