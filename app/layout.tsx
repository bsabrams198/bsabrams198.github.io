import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Melinda Abrams Art",
  description: "Artist portfolio and gallery",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
