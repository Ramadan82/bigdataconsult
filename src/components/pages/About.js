import React from "react";
import Services from "./Services";
import "../../App.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div className="about-container">
      <div className="about-header">
        <div>
          <h2>About Us</h2>
          <p>Who we are</p>
        </div>
      </div>
      <div className="about-body">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum cumque
          mollitia, voluptates reprehenderit culpa magnam esse quaerat atque
          odit quisquam perspiciatis, nihil optio sint tempore omnis harum
          similique, eligendi nulla eos ipsam nostrum a consequuntur iusto?
          Aperiam ratione nulla veniam dolor voluptatem ducimus soluta
          doloremque pariatur neque odio vitae eum eligendi hic, nihil esse
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
          illo fugiat culpa voluptate, veniam dolores error maxime, deserunt
          vitae autem eveniet molestiae, consequatur amet voluptates placeat
          quidem quo odio optio fugit labore tempore. Vitae saepe, esse laborum
          rerum totam explicabo similique! Tempora, id. Reprehenderit sequi
          autem repellendus! Harum, doloribus earum.
        </p>

        <img src="images/about.jpg" alt="about img" />
      </div>
      <Services />
    </motion.div>
  );
};

export default About;
