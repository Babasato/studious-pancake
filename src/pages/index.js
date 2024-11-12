import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import SocialProof from "../components/SocialProof"
import Offers from "../components/Offers"
import Popular from "../components/Popular"
import Blog from "../components/Blog"

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <SocialProof />
      <Offers />
      <Popular />
      <Blog />
    </Layout>
  )
}
