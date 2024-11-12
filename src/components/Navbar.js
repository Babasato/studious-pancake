import React from "react"

export default function Navbar() {
  return (
    <nav style={{
      position: "sticky",
      top: 0,
      backgroundColor: "#1e2a38",
      padding: "1rem",
      display: "flex",
      justifyContent: "space-around",
      color: "#ffffff"
    }}>
      <a href="#offers" style={{ color: "inherit", textDecoration: "none" }}>Offers</a>
      <a href="#popular" style={{ color: "inherit", textDecoration: "none" }}>Popular</a>
      <a href="#blog" style={{ color: "inherit", textDecoration: "none" }}>Blog</a>
    </nav>
  )
}
