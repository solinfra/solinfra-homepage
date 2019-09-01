import React, { Component } from 'react';

import config from '../../config';

import imgCargo from '../assets/images/pr-dock.jpg';

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      smallClass: 'shadow'
    };
  }
  handleWidth = () => {
    let { smallClass } = this.state;
    const w = window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;

    const wideShadow = 'shadow'
    const narrowShadow = 'shadow-lg'

    if (w < 992 && smallClass !== wideShadow)
      smallClass = wideShadow;
    else if (w >= 992 && smallClass !== narrowShadow)
      smallClass = narrowShadow;
    else
      return;
    
    return this.setState({ smallClass });
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleWidth);
    this.handleWidth()
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWidth);
  }

  render() {
    const { smallClass } = this.state;
    return (
      <section id="projects" className="projects-section bg-light">
        <div className="container">

          <div className="row align-items-center no-gutters mb-4 mb-lg-5">
            <div className="col-xl-7 col-lg-7">
              <img className="img-fluid mb-3 mb-lg-0" src={imgCargo} alt="" />
            </div>
            <div className="col-xl-5 col-lg-5">
              <div className="featured-text text-center text-lg-left">
                <h4>{config.projects[0].title}</h4>
                <p className="text-black-50 mb-0">{config.projects[0].body}</p>
              </div>
            </div>
          </div>

          {config.projects.slice(1).map((project, idx) =>
            <div 
            key={project.title} 
            className={`row justify-content-center no-gutters mb-5 mb-lg-0 project-checkers ${smallClass}`}>
              <div className="col-lg-6 text-center my-auto">
                <h2 className="text-black">{project.title}</h2>
              </div>
              <div className={`col-lg-6 ${idx % 2 === 1 ? 'order-lg-first' : ''}`}>
                <div className="bg-black text-center h-100 project">
                  <div className="d-flex h-100">
                    <div className={`project-text w-100 my-auto text-center ${idx % 2 === 1 ? 'text-lg-right' : 'text-lg-left'}`}>
                      <p className="mb-0 text-white-50">{project.body}</p>
                      <hr className={`d-md-none d-lg-block mb-0 ${idx % 2 === 1 ? 'mr-0' : 'ml-0'}`} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>
    );
  }
}
