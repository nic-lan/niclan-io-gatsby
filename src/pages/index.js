import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import ExternalLink from "../components/externalLink"
import { faLinkedin, faSoundcloud, faGithub } from '@fortawesome/free-brands-svg-icons'

const externalLinks = [
  { icon: faLinkedin, url: "https://www.linkedin.com/in/nicolaslanguille/"},
  { icon: faSoundcloud, url: "https://soundcloud.com/raum149"},
  { icon: faGithub, url: "https://github.com/nic-lan"},
].map((item, i) => {
  return <ExternalLink key={i} icon={item['icon']} url={item['url']} />
})

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>niclan</h1>
    {externalLinks}
  </Layout>
)

export default IndexPage
