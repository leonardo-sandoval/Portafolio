// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
import portfolio from "./assets/portafolio.png"
// Profile Image
import profile from "./assets/profile.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,

};

// Enter your Personal Details here
export const personalDetails = {
  name: "Leonardo Sandoval",
  tagline: "Programador Web",
  img: profile,
  about: ``,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/leonardo-sandoval-aya-b57564184/",
  github: "https://github.com/leonardo-sandoval",
  twitter: "https://twitter.com/sando95870187",
  
};


// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Projecto TaskCalendar",
    image: projectImage1,
    description: ` Es una herramienta indispensable para la gestión del tiempo.
     Su interfaz intuitiva y la posibilidad de añadir tareas con fechas de inicio y fin, 
     junto con la personalización de colores, hacen que organizar el horario sea fácil y eficiente. 
    `,
    techstack: "JavaScript|PHP|Mysql|Bootstrap",
    previewLink: "https://calendario-production-b6a3.up.railway.app/",
    githubLink: "https://github.com/leonardo-sandoval/CALENDARIO",
  },

];

// Enter your Contact Details here
export const contactDetails = {
  email: "leonardoaya1234@gmail.com",
  phone: "3222804187",
};
