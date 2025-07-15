import Navigation from "@/components/navigation"

export default function About() {
  return (
    <div className="container">
      <Navigation />
      <main className="main-content">
        <section className="page-header">
          <h1>About</h1>
        </section>

        <section className="content">
          <div className="bio">
            <p>Artist biography and background information will go here.</p>
            <p>Education, exhibitions, and artistic philosophy.</p>
          </div>
        </section>
      </main>
    </div>
  )
}
