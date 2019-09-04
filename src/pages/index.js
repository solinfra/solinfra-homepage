import React from 'react'
import { graphql } from 'gatsby'
import BgImg from 'gatsby-background-image'

import Layout from '../components/Layout'
import Scroll from '../components/Scroll'

import config from '../../config'

import Footer from '../components/Footer'
import SocialLinks from '../components/SocialLinks'
import Projects from '../components/Projects'
import Header from '../components/Header'


const IndexPage = ({ data }) =>
  <Layout>
    <Header />

    <BgImg
      preserveStackingContext={true}
      fluid={[
        'linear-gradient(180deg,rgba(22,22,22,.3) 0,rgba(22,22,22,.7) 75%,#161616)',
        data.imgMasthead.childImageSharp.fluid
      ]}>
      <header className="masthead">
        <div className="container d-flex h-100 align-items-center">
          <div className="mx-auto text-center logo-title">
            <h1 className="mx-auto my-0 logo-font">{config.heading}</h1>
            <h2 className="text-white-50 mx-auto mt-2 mb-5">
              {config.subHeading}
            </h2>
            <Scroll type="id" element="about">
              <a href="#about" className="btn btn-primary">
                About
              </a>
            </Scroll>
          </div>
        </div>
      </header>
    </BgImg>

    <section id="about" className="about-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-white mb-4">{config.about.title}</h2>
            <p className="text-white-50">{config.about.body}</p>
          </div>
        </div>
      </div>
    </section>

    <Projects />

    <BgImg
      preserveStackingContext={true}
      fluid={[
        'linear-gradient(180deg,rgba(22,22,22,.1) 0,rgba(22,22,22,.5) 75%,rgba(22,22,22,1))',
        data.imgFooter.childImageSharp.fluid
      ]}>
      <section id="contact" className="signup-section">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-lg-8 mx-auto text-center">
              <i className="far fa-envelope fa-2x mb-2 text-white"></i>
              <h2 className="text-white mb-5">Contact us!</h2>
            </div>
          </div>
        </div>
      </section>
    </BgImg>

    <SocialLinks />
    <Footer />
  </Layout>

export const query = graphql`
  query {
    imgMasthead: file(relativePath: { eq: "bg-masthead.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3887, quality: 70) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    imgFooter: file(relativePath: { eq: "bg-footer.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4342, quality: 64) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default IndexPage
