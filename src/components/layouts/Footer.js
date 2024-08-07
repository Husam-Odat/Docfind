import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import serviceblock from "../../data/service/service.json";

class Footer extends Component {
    render() {
        return (
          <footer className="sigma_footer style-5 pb-0">
            <div className="container">
              <div className="sigma_info-wrapper style-26 mb-5">
                <div className="sigma_info style-26">
                  <div className="sigma_info-title">
                    <span className="sigma_info-icon">
                      <i className="fal fa-map-marker-alt" />
                    </span>
                  </div>
                  <div className="sigma_info-description">
                    <p>Our Address</p>
                    <p className="secondary-color">
                      <b>Jordan, Irbid</b>
                    </p>
                  </div>
                </div>
                <div className="sigma_info style-26">
                  <div className="sigma_info-title">
                    <span className="sigma_info-icon">
                      <i className="fal fa-phone" />
                    </span>
                  </div>
                  <div className="sigma_info-description">
                    <p>Call Us</p>
                    <p className="secondary-color">
                      <b>0791579601</b>
                    </p>
                  </div>
                </div>
                <div className="sigma_info style-26">
                  <div className="sigma_info-title">
                    <span className="sigma_info-icon">
                      <i className="fal fa-envelope" />
                    </span>
                  </div>
                  <div className="sigma_info-description">
                    <p>Our Mail</p>
                    <p className="secondary-color">
                      <b>docfind@gmail.com</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="sigma_footer-middle">
              <div className="container">
                <div className="row">
                  <div className="col-lg-5">
                    <div className="sigma_footer-widget">
                      <div className="sigma_footer-logo mb-4">
                        <img
                          src={process.env.PUBLIC_URL + "/assets/img/logo.png"}
                          alt="logo"
                        />
                      </div>
                      <div className="row">
                        <div className="col-sm-9">
                          <p className="mb-0">
                            Your dedicated partner for top-tier healthcare,
                            prioritizing your well-being and satisfaction.
                          </p>
                        </div>
                      </div>
                      <ul className="sigma_social-icons has-border mt-4 justify-content-start">
                        <li>
                          <Link to="#">
                            <i className="fab fa-facebook-f" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fab fa-twitter" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fab fa-instagram" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fab fa-linkedin" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fab fa-google" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-3">
                    <div className="sigma_footer-widget">
                      <h5 className="widget-title">Services</h5>
                      <ul className="sigma_footer-links">
                        {/* Data */}
                        {serviceblock.slice(0, 5).map((item, i) => (
                          <li key={i}>
                            <Link to={"/service-details/" + item.id}>
                              {item.title}
                            </Link>
                          </li>
                        ))}
                        {/* Data */}
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-3">
                    <div className="sigma_footer-widget">
                      <h5 className="widget-title">Useful Links</h5>
                      <ul className="sigma_footer-links">
                        <li>
                          <Link to="/">Home</Link>
                        </li>
                        <li>
                          <Link to="/about">About Us</Link>
                        </li>
                        <li>
                          <Link to="/blog">News</Link>
                        </li>
                        <li>
                          <Link to="/doctor-grid">Doctors</Link>
                        </li>
                        <li>
                          <Link to="/contact">Contact Us</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
            <div className="container">
              <div className="sigma_footer-bottom d-block d-sm-flex align-items-center justify-content-between">
                <div className="sigma_footer-copyright mt-0 mb-3 mb-sm-0">
                  <p className="mb-0">
                    © Website <Link to="#">2022</Link> | All Rights Reserved
                  </p>
                </div>
                <ul className="sigma_footer-links">
                  <li>
                    <Link to="#">Privacy</Link>
                  </li>
                  <li>
                    <Link to="#">Terms</Link>
                  </li>
                  <li>
                    <Link to="#">Sitemap</Link>
                  </li>
                  <li>
                    <Link to="#">Help</Link>
                  </li>
                </ul>
              </div>
            </div>
          </footer>
        );
    }
}

export default Footer;