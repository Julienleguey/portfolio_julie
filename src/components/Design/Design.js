import React from "react";
import design from "./design.json";
import Projects from "../Projects";

const Design = () => {
  return <Projects projectsCategory="design" projects={design} />;
};

export default Design;
