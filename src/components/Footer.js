import React, { useRef, useState } from "react";
import "./Footer.css";
// import { Button } from "./Button";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Footer() {
  const form = useRef();
  const [message, setMessage] = useState(false);
  const showToastMessage = () => {
    toast.success("Successuflly subscribed !", {
      position: toast.POSITION.BOTTOM_RIGHT,
      zIndex: 10,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1B2d3cl",
        "template_cj650hc",
        form.current,
        "PQ79l6vM43pnm1XXl"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage(true);
          showToastMessage();
          form.current.reset();
        },

        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      className="footer-container"
      style={{ zIndex: 6, position: "relative" }}
    >
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the BigData Consult newsletter to get updates on our best deals
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form ref={form} onSubmit={sendEmail}>
            <input
              className="footer-input"
              name="email"
              placeholder="Your Email"
            />
            {/* <Button buttonStyle="btn--outline">Subscribe</Button> */}
            <button
              className="btn"
              type="submit"
              value="Send"
              style={{
                backgroundColor: "transparent",
                color: "#fff",
                padding: "8px 20px",
                border: "1px solid #fff",
                fontSize: "20px",
                transition: "all 0.3s ease-out",
                marginBottom: "16px",
              }}
            >
              SUBSCRIBE
            </button>
          </form>
          {message && <ToastContainer />}
        </div>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Destinations</Link>
            <Link to="/">Sponsorships</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Videos</h2>
            <Link to="/">Submit Video</Link>
            <Link to="/">Ambassadors</Link>
            <Link to="/">Agency</Link>
            <Link to="/">Influencer</Link>
          </div>
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              <img src="images/bigdata2.png" alt="BDCL" />
            </Link>
          </div>
          <small class="website-rights">BDCL © 2022</small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
