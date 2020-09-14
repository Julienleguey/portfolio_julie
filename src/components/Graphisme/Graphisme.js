import React from "react";
import graphisme from "./graphisme.json";
import Projects from "../Projects";

const Graphisme = () => {
  return <Projects projectsCategory="graphisme" projects={graphisme} />;
};

export default Graphisme;
