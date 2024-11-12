import React from "react"

export default function Hero() {
  return (
    <section style={{
      height: "80vh",
      backgroundImage: "url('https://via.placeholder.com/1600x900')",
      backgroundSize: "cover",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      position: "relative"
    }}>
      <div style={{
        position: "absolute",
        bottom: "2rem",
        backgroundColor: "rgba(0,0,0,0.5)",
        padding: "1rem",
        borderRadius: "8px"
      }}>
        <label>
          <input type="text" placeholder="Where do you want to go?" style={{ padding: "0.5rem" }} />
          <button style={{ marginLeft: "0.5rem", backgroundColor: "yellow", padding: "0.5rem 1rem" }}>Let's Travel</button>
        </label>
      </div>
    </section>
  )
}
