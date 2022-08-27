import React from "react";
import Services from "./Services";
import "../../App.css";

const About = () => {
  return (
    <div className="about-container">
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
          voluptate similique repellat alias quod cumque assumenda molestiae
          voluptas! Et reprehenderit commodi sequi laborum cumque? Asperiores
          officiis repudiandae animi fuga. Minima hic molestiae neque
          dignissimos ea delectus deleniti temporibus! Voluptate dolorum
          aspernatur iste quis facilis nihil pariatur harum dolore? Nesciunt
          adipisci voluptatibus sed nam quis veniam.
        </p>

        <img src="images/about.jpg" alt="about img" />
      </div>
      <Services />
    </div>
  );
};

export default About;
