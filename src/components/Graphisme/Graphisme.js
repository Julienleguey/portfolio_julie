import React from "react";
import graphisme from "./graphisme.json";
import Projects from "../Projects";

const Graphisme = () => {
  return <Projects projectsCategory="graphisme" projects={graphisme} />;
};

export default Graphisme;

// {
//   "project_folder": "le_voile_de_beton",
//   "project_name": "le voile de béton",
//   "project_subcaption": "impression",
//   "project_picture": "IMG_3711.jpg",
//   "project_occasion": "projet de diplôme - juin 2020",
//   "project_award": "prix 'esthétique et expression'",
//   "project_short_description": "Rédaction et impression du mémoire: Le voile de béton, l’art d’allier un matériau lourd à un geste architectural léger",
//   "intentions": ["blobloblo"],
//   "carousels": [],
//   "pictures": [
//     "IMG_3684.jpg",
//     "IMG_3691.jpg",
//     "IMG_3705.jpg",
//     "IMG_3729.jpg",
//     "IMG_3736.jpg",
//     "IMG_3752.jpg",
//     "IMG_3755.jpg",
//     "IMG_3758.jpg",
//     "IMG_3770.jpg",
//     "IMG_3777.jpg",
//     "IMG_3791.jpg",
//     "IMG_3793.jpg",
//     "IMG_3805.jpg",
//     "IMG_3817.jpg",
//     "IMG_3822.jpg",
//     "IMG_3825.jpg",
//     "IMG_3827.jpg",
//     "IMG_3828.jpg"
//   ]
// }
