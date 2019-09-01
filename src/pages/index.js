import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Subscribe from '../components/Subscribe';
import Contact from '../components/Contact';
import Header from '../components/Header';

import bgMaster from '../assets/images/bg-masthead.jpg';
import imgCargo from '../assets/images/pr-dock.jpg';

const IndexPage = () => (
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
            <h2 className="text-white mb-4">The solution to infrastructure</h2>
            <p className="text-white-50">
              Whether you're a start-up with the foresight of appropriately preparing
              for your infrastructure needs or 
              an already established organization looking to upgrade your legacy IT
              infrastructure, we're here for you.
              Our experienced team will blueprint and manage the ideal 
              infrastructure to make your service run efficiently, with resilience and 
              scalablity in mind.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="projects" className="projects-section bg-light">
      <div className="container">

        <div className="row align-items-center no-gutters mb-4 mb-lg-5">
          <div className="col-xl-7 col-lg-7">
            <img className="img-fluid mb-3 mb-lg-0" src={imgCargo} alt="" />
          </div>
          <div className="col-xl-5 col-lg-5">
            <div className="featured-text text-center text-lg-left">
              <h4>Balancing NoOps and DevOps</h4>
              <p className="text-black-50 mb-0">
                Streamlining as much of your infrastructure effectively is our goal
                and to achieve this we take the best of both worlds from
                NoOps and DevOps.
                NoOps being the ideal of moving towards a frictionless software
                deployment by automating and abstracting infrastructure, 
                up to the point of serverless.
                There is such a thing as abstracting out too much,
                hurting performance and reliability, and we provide you with this
                frictionlessness whilst you retain control of your infrastructure.
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters mb-5 mb-lg-0 project-checkers">
          <div className="col-lg-6 text-center my-auto">
            <h2 className="text-black">Open-Source</h2>
          </div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <p className="mb-0 text-white-50">
                    We proudly utilize open-source projects to the fullest extent
                    possible in our solutions.
                    What open-source entails for you as a client is an assurance
                    of continued quality and transparency. No trying to sell you
                    on proprietary software shrouded in NDAs and mystery and no vendor
                    lock-ins from us.
                    Additionally, you are free to re-tailor parts as your needs
                    change over time, no dealing with lawyers, only building.
                  </p>
                  <hr className="d-none d-lg-block mb-0 ml-0" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters project-checkers">
          <div className="col-lg-6 text-center my-auto">
            <h2 className="text-black">Cloud-Native</h2>
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <p className="mb-0 text-white-50">
                    Our solutions are built on the cloud-native philosophy. Adopting it
                    allows your organization to become highly efficient while keeping your
                    developers happy. Have a look through our own repositories that are
                    built this way. We also believe that cloud-native should not entail
                    locking you to a specific cloud provider, or even any at all unlike 
                    others. The solution you are provided is agnostic, and gives you
                    the ultimate fleixibility of choosing cloud providers as you please.
                  </p>
                  <hr className="d-none d-lg-block mb-0 mr-0" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6 text-center my-auto">
            <h2 className="text-black">Self-Healing</h2>
          </div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <p className="mb-0 text-white-50">
                    Time is money. Likewise, any downtime of your service is
                    a significant cost to you both in terms of lost opportunity and
                    potential loss of trust. This is why our solutions are
                    based on the principles of self-healing and redundancy, where
                    your service is hosted amongst multiple cloud instances. If one 
                    goes down, another is ready to take its place, while the downed
                    instance is replaced.
                  </p>
                  <hr className="d-none d-lg-block mb-0 ml-0" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <Contact />
    <SocialLinks />
    <Footer />
  </Layout>
);

export default IndexPage;
