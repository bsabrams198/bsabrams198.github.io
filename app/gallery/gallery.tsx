import Navigation from "@/components/navigation"

export default function Gallery() {
  return (
    <div className="container">
      <Navigation />
      <main className="main-content">
        <section className="page-header">
          <h1>Gallery</h1>
        </section>

        <section className="content">
          <div className="gallery-grid">
            <div className="artwork-item">
              <div className="artwork-placeholder"></div>
              <h3>Artwork Title 1</h3>
            </div>
            <div className="artwork-item">
              <div className="artwork-placeholder"></div>
              <h3>Artwork Title 2</h3>
            </div>
            <div className="artwork-item">
              <div className="artwork-placeholder"></div>
              <h3>Artwork Title 3</h3>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
