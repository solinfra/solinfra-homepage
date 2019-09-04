import React from 'react'

export default function Subscribe () {
  return (
    <section id="signup" className="signup-section">
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-lg-8 mx-auto text-center">
            <i className="far fa-paper-plane fa-2x mb-2 text-white"></i>
            <h2 className="text-white mb-5">Interested and wish to know more?</h2>
            <form className="form-inline d-flex" action="https://formspree.io/hello@solinfra.io" method="POST" >
              <input
                type="text"
                className="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0"
                id="inputName"
                name="name"
                placeholder="Your name..."
              />
              <input
                type="email"
                className="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0"
                id="inputEmail"
                name="_replyTo"
                placeholder="Your email address..."
              />
              <button type="submit" className="btn btn-primary mx-auto">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
