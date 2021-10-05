import React from "react";
// import ReactDOM from "react-dom";

import Navbar from "./components/Navbar";
import Testimonial from "./components/Testimonial";
import ImageGallery from "./components/ImageGallery";

import Footer from "./components/Footer";
import Header from "./components/Header";

import { GiClothespin, GiClothes, GiDress } from "react-icons/gi";
//import MdAirlineSeatIndividualSuite from "react-icons/all/md";
import "./App.css";
import "./assets/css/style.css";

function App() {
  return (
    <body className="d-flex flex-column h-100">
      <main className="flex-shrink-0">
        {/* <!-- Navigation--> */}
        <Navbar />
        {/* <!-- Header--> */}
        <Header />
        {/* <!-- Features section--> */}
        <section className="py-5" id="features">
          <div className="container px-5 my-5">
            <div className="row gx-5">
              <div className="col-lg-4 mb-5 mb-lg-0">
                <h2 className="fw-bolder mb-0">
                  Nettoyage tous vêtement.
                  <br />
                  <span>Service de qualité.</span>
                </h2>
              </div>
              <div className="col-lg-8">
                <div className="row gx-5 row-cols-1 row-cols-md-2">
                  <div className="col mb-5 h-100">
                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                      <GiClothes />
                    </div>
                    <h2 className="h5">Repassage au kilo</h2>
                    <p className="mb-0">
                      Paragraph of text beneath the heading to explain the
                      heading. Here is just a bit more text.
                    </p>
                  </div>
                  <div className="col mb-5 h-100">
                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                      <GiDress />
                    </div>
                    <h2 className="h5">Blanchisserie</h2>
                    <p className="mb-0">
                      Paragraph of text beneath the heading to explain the
                      heading. Here is just a bit more text.
                    </p>
                  </div>
                  <div className="col mb-5 mb-md-0 h-100">
                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                      <GiClothespin />
                    </div>
                    <h2 className="h5">Tapi, cuir et daim</h2>
                    <p className="mb-0">
                      Paragraph of text beneath the heading to explain the
                      heading. Here is just a bit more text.
                    </p>
                  </div>
                  <div className="col h-100">
                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                      {/* <MdAirlineSeatIndividualSuite /> */}
                      <GiClothes />
                      <i className="bi bi-toggles2"></i>
                    </div>
                    <h2 className="h5">Retouche</h2>
                    <p className="mb-0">
                      Paragraph of text beneath the heading to explain the
                      heading. Here is just a bit more text.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Image Galery section--> */}
        <ImageGallery />
        {/* <!-- Testimonial section--> */}
        <Testimonial />

        {/* <!-- Blog preview section--> */}
        <section className="py-5">
          <div className="container px-5 my-5">
            <div className="row gx-5 justify-content-center">
              <div className="col-lg-8 col-xl-6">
                <div className="text-center">
                  <h2 className="fw-bolder">From our blog</h2>
                  <p className="lead fw-normal text-muted mb-5">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Eaque fugit ratione dicta mollitia. Officiis ad.
                  </p>
                </div>
              </div>
            </div>
            <div className="row gx-5">
              <div className="col-lg-4 mb-5">
                <div className="card h-100 shadow border-0">
                  <img
                    className="card-img-top"
                    src="https://dummyimage.com/600x350/ced4da/6c757d"
                    alt="..."
                  />
                  <div className="card-body p-4">
                    <div className="badge bg-primary bg-gradient rounded-pill mb-2">
                      News
                    </div>
                    <a
                      className="text-decoration-none link-dark stretched-link"
                      href="#!"
                    >
                      <h5 className="card-title mb-3">Blog post title</h5>
                    </a>
                    <p className="card-text mb-0">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                  <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                    <div className="d-flex align-items-end justify-content-between">
                      <div className="d-flex align-items-center">
                        <img
                          className="rounded-circle me-3"
                          src="https://dummyimage.com/40x40/ced4da/6c757d"
                          alt="..."
                        />
                        <div className="small">
                          <div className="fw-bold">Kelly Rowan</div>
                          <div className="text-muted">
                            March 12, 2021 &middot; 6 min read
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-5">
                <div className="card h-100 shadow border-0">
                  <img
                    className="card-img-top"
                    src="https://dummyimage.com/600x350/adb5bd/495057"
                    alt="..."
                  />
                  <div className="card-body p-4">
                    <div className="badge bg-primary bg-gradient rounded-pill mb-2">
                      Media
                    </div>
                    <a
                      className="text-decoration-none link-dark stretched-link"
                      href="#!"
                    >
                      <h5 className="card-title mb-3">
                        Another blog post title
                      </h5>
                    </a>
                    <p className="card-text mb-0">
                      This text is a bit longer to illustrate the adaptive
                      height of each card. Some quick example text to build on
                      the card title and make up the bulk of the card's content.
                    </p>
                  </div>
                  <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                    <div className="d-flex align-items-end justify-content-between">
                      <div className="d-flex align-items-center">
                        <img
                          className="rounded-circle me-3"
                          src="https://dummyimage.com/40x40/ced4da/6c757d"
                          alt="..."
                        />
                        <div className="small">
                          <div className="fw-bold">Josiah Barclay</div>
                          <div className="text-muted">
                            March 23, 2021 &middot; 4 min read
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 mb-5">
                <div className="card h-100 shadow border-0">
                  <img
                    className="card-img-top"
                    src="https://dummyimage.com/600x350/6c757d/343a40"
                    alt="..."
                  />
                  <div className="card-body p-4">
                    <div className="badge bg-primary bg-gradient rounded-pill mb-2">
                      News
                    </div>
                    <a
                      className="text-decoration-none link-dark stretched-link"
                      href="#!"
                    >
                      <h5 className="card-title mb-3">
                        The last blog post title is a little bit longer than the
                        others
                      </h5>
                    </a>
                    <p className="card-text mb-0">
                      Some more quick example text to build on the card title
                      and make up the bulk of the card's content.
                    </p>
                  </div>
                  <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                    <div className="d-flex align-items-end justify-content-between">
                      <div className="d-flex align-items-center">
                        <img
                          className="rounded-circle me-3"
                          src="https://dummyimage.com/40x40/ced4da/6c757d"
                          alt="..."
                        />
                        <div className="small">
                          <div className="fw-bold">Evelyn Martinez</div>
                          <div className="text-muted">
                            April 2, 2021 &middot; 10 min read
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Call to action--> */}
            <aside className="bg-primary bg-gradient rounded-3 p-4 p-sm-5 mt-5">
              <div className="d-flex align-items-center justify-content-between flex-column flex-xl-row text-center text-xl-start">
                <div className="mb-4 mb-xl-0">
                  <div className="fs-3 fw-bold text-white">
                    New products, delivered to you.
                  </div>
                  <div className="text-white-50">
                    Sign up for our newsletter for the latest updates.
                  </div>
                </div>
                <div className="ms-xl-4">
                  <div className="input-group mb-2">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Email address..."
                      aria-label="Email address..."
                      aria-describedby="button-newsletter"
                    />
                    <button
                      className="btn btn-outline-light"
                      id="button-newsletter"
                      type="button"
                    >
                      Sign up
                    </button>
                  </div>
                  <div className="small text-white-50">
                    We care about privacy, and will never share your data.
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>
      {/* <!-- Footer--> */}
      <Footer />
    </body>
  );
}

export default App;
