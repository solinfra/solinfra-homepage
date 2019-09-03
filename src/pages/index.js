import React from 'react'

import Layout from '../components/Layout'
import Scroll from '../components/Scroll'

import config from '../../config'

import Footer from '../components/Footer'
import SocialLinks from '../components/SocialLinks'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Header from '../components/Header'

const IndexPage = () =>
  <Layout>
    <Header />

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
    <Contact />
    <SocialLinks />
    <Footer />
  </Layout>

export default IndexPage
