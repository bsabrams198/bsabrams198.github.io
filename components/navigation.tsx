import Link from "next/link"

export default function Navigation() {
  return (
    <nav className="navigation">
      <div className="nav-brand">
        <Link href="/">Melinda Abrams Art</Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/gallery">Gallery</Link>
        </li>
        <li>
          <Link href="/purchase">Purchase</Link>
        </li>
      </ul>
    </nav>
  )
}
