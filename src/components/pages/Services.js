import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <main className="services-container">
      <article className="services">
        <img src="images/image2.jpg" alt="Services" />
        <div>
          <h2>Services</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
            distinctio molestiae ipsam, quasi, maxime sapiente animi accusamus
            placeat qui debitis facere corrupti doloribus consequuntur, at
            obcaecati quis libero! Exercitationem, enim?
          </p>
        </div>
      </article>

      <article>
        <Link to="/1" style={{ color: "black" }}>
          <div className="service-image-wrapper">
            <motion.img
              src="images/image9.jpg"
              alt="Consultancy img"
              whileHover={{ scale: 1.1 }}
            />
          </div>
        </Link>
        <Link to="/1" style={{ color: "black" }}>
          <div>
            <h3>Consultancy Services</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos aliquam optio odit dolor similique magnam
              necessitatibus doloremque reiciendis perspiciatis cumque!
              <br />
              <span>Read More....</span>
            </p>
          </div>
        </Link>
      </article>

      <article>
        <Link to="/2" style={{ color: "black" }}>
          <motion.img
            src="images/image1.jpg"
            alt="Data img"
            whileHover={{ scale: 1.1 }}
          />
        </Link>
        <Link to="/2" style={{ color: "black" }}>
          <div>
            <h3>Data Services</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
              dolor inventore asperiores voluptas ducimus? Natus temporibus
              nesciunt deleniti quibusdam sint! <br />
              <span>Read More....</span>
            </p>
          </div>
        </Link>
      </article>

      <article>
        <Link to="/3" style={{ color: "black" }}>
          <motion.img
            src="images/image8.jpg"
            alt="Training img"
            whileHover={{ scale: 1.1 }}
          />
        </Link>
        <Link to="/3" style={{ color: "black" }}>
          <div>
            <h3>Training Services</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              maiores, possimus non voluptate nisi neque sed tempora a quae
              ratione! <br />
              <span>Read More....</span>
            </p>
          </div>
        </Link>
      </article>

      <article>
        <Link to="/4" style={{ color: "black" }}>
          <motion.img
            src="images/image4.jpg"
            alt="Research img"
            whileHover={{ scale: 1.1 }}
          />
        </Link>
        <Link to="/4" style={{ color: "black" }}>
          <div>
            <h3>Research Services</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
              aspernatur natus itaque nam incidunt excepturi architecto, ullam
              accusamus omnis modi? <br />
              <span>Read More....</span>
            </p>
          </div>
        </Link>
      </article>

      <article className="technology">
        <Link to="/5">
          <motion.img
            src="images/image5.jpg"
            alt="Technology img"
            whileHover={{ scale: 1.1 }}
          />
        </Link>
        <Link to="/5" style={{ color: "black" }}>
          <div>
            <h3>Technology Services</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
              architecto suscipit placeat maxime ipsa sapiente enim natus alias.
              Recusandae, iure. <br />
              <span>Read More....</span>
            </p>
          </div>
        </Link>
      </article>
    </main>
  );
}
