import React from "react"

import "bootstrap/dist/css/bootstrap.min.css"
import styles from "../styles/pages/index.module.scss"

import { Row, Col } from 'reactstrap';

import Layout from "../components/layout"

import Footer from "../components/footer"

import { faLinkedin, faSoundcloud, faGithub } from '@fortawesome/free-brands-svg-icons'

const IndexPage = () => (
  <Layout>
    <Row className={styles.row}>
      <Col><h1>niclan</h1></Col>
    </Row>
    <Row className={styles.row}>
      <Col><p>software developer and devops engineer</p></Col>
    </Row>
    <Footer contacts={[
      { icon: faLinkedin, url: "https://www.linkedin.com/in/nicolaslanguille/"},
      { icon: faSoundcloud, url: "https://soundcloud.com/raum149"},
      { icon: faGithub, url: "https://github.com/nic-lan"},
    ]} />
  </Layout>
)

export default IndexPage
