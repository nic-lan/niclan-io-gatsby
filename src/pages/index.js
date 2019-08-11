import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faSoundcloud, faGithub } from '@fortawesome/free-brands-svg-icons'

import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const personalLinks = [
  { icon: faLinkedin, url: "https://www.linkedin.com/in/nicolaslanguille/"},
  { icon: faSoundcloud, url: "https://soundcloud.com/raum149"},
  { icon: faGithub, url: "https://github.com/nic-lan"},
].map((e) => {
  return(
    <a href={e['url']}>
      <FontAwesomeIcon
        icon={e['icon']}
        size='2x'
      />
    </a>
  )
})

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>niclan</h1>
    {personalLinks}
  </Layout>
)

export default IndexPage
