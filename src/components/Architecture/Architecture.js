import React from "react";
import architecture from "./architecture.json";
import Projects from "../Projects";

const Architecture = () => {
  return <Projects projectsCategory="architecture" projects={architecture} />;
};

export default Architecture;
