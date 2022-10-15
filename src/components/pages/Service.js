import React from "react";
import { useParams } from "react-router";
import { motion } from "framer-motion";

const Service = () => {
  let { id } = useParams();
  let header;
  let body;
  if (id === "1") {
    header = "Consultancy Services";
    body =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia blanditiis quae fugiat quam autem, adipisci tempore suscipit. Fugiat vero aspernatur placeat! Hic earum id sit quidem, adipisci a dolor ratione. Repellendus consectetur doloribus illum dicta vero eius eos labore praesentium aperiam. Quaerat facilis repudiandae, amet dolor vel voluptatem eaque quis.";
  }
  if (id === "2") {
    header = "Data Services";
    body =
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae modi nihil facilis pariatur? Suscipit corporis similique laboriosam. Nam veniam, suscipit labore doloremque dolorem sunt ut porro maiores eligendi praesentium enim quidem esse eaque, officiis soluta temporibus placeat ab fugit cupiditate quisquam amet et dolor nulla reiciendis? Consequatur sunt nihil sed!";
  }
  if (id === "3") {
    header = "Training Services";
    body =
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta aperiam sapiente error quo non, totam deserunt exercitationem ex blanditiis quas dolorum beatae officiis libero natus dolores minima. Placeat vitae alias et fugiat pariatur quos ipsa cum minima! Neque corrupti pariatur libero! Fugiat tempore eos repellat sed quam totam ratione enim!";
  }
  if (id === "4") {
    header = "Research Services";
    body =
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab eaque debitis nihil laborum, provident ullam praesentium quia blanditiis non libero vero expedita cumque commodi distinctio. Odio ullam repellat tempora a dolor aliquam reiciendis iure? Quis reiciendis repudiandae eos sequi recusandae quia veniam vero repellendus blanditiis aliquam, inventore possimus assumenda sint.";
  }
  if (id === "5") {
    header = "Technology Services";
    body =
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut vero nam quasi corporis est minima, optio exercitationem autem id delectus nemo dicta necessitatibus accusamus voluptatem sequi hic quae pariatur deleniti ad, sapiente dolorem ipsa magnam voluptatum! Iste, tenetur iure. Ea officiis rerum corrupti! Molestias consequatur est dolorem eos nobis ducimus.";
  }

  return (
    <motion.div
      className="service"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <h2>{header}</h2>
      <p>{body}</p>
      <p>{body}</p>
      <p>{body}</p>
    </motion.div>
  );
};

export default Service;
