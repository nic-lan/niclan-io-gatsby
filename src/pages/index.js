import React from "react"

import 'bootstrap/dist/css/bootstrap.min.css'

import { Row, Col } from 'reactstrap';

import Layout from "../components/layout"

import ExternalLink from "../components/externalLink"

import { faLinkedin, faSoundcloud, faGithub } from '@fortawesome/free-brands-svg-icons'

const externalLinks = [
  { icon: faLinkedin, url: "https://www.linkedin.com/in/nicolaslanguille/"},
  { icon: faSoundcloud, url: "https://soundcloud.com/raum149"},
  { icon: faGithub, url: "https://github.com/nic-lan"},
]

const IndexPage = () => (
  <Layout>
    <Row>
      <Col><h1>niclan</h1></Col>
    </Row>
    <Row>
      {
        externalLinks.map((item, i) => {
          return(
            <Col>
              <ExternalLink key={i} icon={item.icon} url={item.url} />
            </Col>
          )
        })
      }
    </Row>
  </Layout>
)

export default IndexPage
