import Navigation from "@/components/navigation"

export default function Home() {
  return (
    <div className="container">
      <Navigation />
      <main className="main-content">
        <section className="hero">
          <h1>Melinda Abrams</h1>
          <p className="subtitle">Contemporary Artist</p>
        </section>

        <section className="intro">
          <p>Welcome to my artistic journey. Explore my latest works and discover the stories behind each piece.</p>
        </section>
      </main>
    </div>
  )
}
