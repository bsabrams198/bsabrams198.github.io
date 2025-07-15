import Navigation from "@/components/navigation"

export default function Purchase() {
  return (
    <div className="container">
      <Navigation />
      <main className="main-content">
        <section className="page-header">
          <h1>Purchase</h1>
        </section>

        <section className="content">
          <div className="purchase-info">
            <p>Available works for purchase and commission information.</p>
            <div className="contact-info">
              <p>Contact: email@example.com</p>
              <p>Phone: (555) 123-4567</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
