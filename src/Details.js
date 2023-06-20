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
    title: "Projecto 02  Page loading  Error 404",
    image: projectImage5,
    description: `Una página 404 responsive y muy con un diseño moderno y atractivo, 
    con colores armoniosos y elementos visuales llamativos. Además, se adapta perfectamente a diferentes dispositivos, 
    como teléfonos móviles y tablets, garantizando una experiencia de usuario óptima. Incluye también mensajes 
    amigables y creativos que indican que la página buscada no se encuentra, invitando al usuario a explorar otras
     secciones o a volver a la página principal.
    `,
    techstack: "JavaScript|Html5|Css3",
    previewLink: "https://6491fb22bb61d61d7f22ee9d--golden-narwhal-049f8a.netlify.app/",
    githubLink: "https://github.com/leonardo-sandoval/loadingpage404error.git",
  },
  {
    title: "Projecto 01 Sticky Notes App",
    image: projectImage4,
    description: ` Aplicación  en la que puedes crear notas adhesivas digitales
     de manera rápida y sencilla. Organiza tus tareas, recordatorios y pensamientos en pocos clics, 
     y mantén tus ideas al alcance de tu mano en todo momento Con funciones de personalización y sincronización
      en la nube, nunca perderás tus notas importantes
    `,
    techstack: "JavaScript|Html5|Css3",
    previewLink: "https://6490c7782348aa39edce5f62--chimerical-hamster-0f6a93.netlify.app/",
    githubLink: "https://github.com/leonardo-sandoval/StickyNotesApp",
  },
  {
    title: "Projecto App clima",
    image: projectImage3,
    description: ` aplicación de clima basada en JavaScript que consume una API para brindar 
    a los usuarios información actualizada y precisa sobre las condiciones meteorológicas en tiempo real.
     Con una interfaz intuitiva, 
    los usuarios pueden obtener fácilmente el pronóstico del clima de su ubicación o de cualquier otra ciudad.
    `,
    techstack: "JavaScript|Html5|Css3",
    previewLink: "https://6490a093781df819d725ef3f--magenta-palmier-375cde.netlify.app/",
    githubLink: "https://github.com/leonardo-sandoval/APPCLIMA-API",
  },
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
  {
    title: "Projecto Tienda virtual Unlimited",
    image: projectImage2,
    description: ` El proyecto de la tienda online es una solución de 
    comercio electrónico de código abierto escrita en PHP y basada en MySQL. 
    Con su enfoque en brindar una experiencia de carrito de compras . 
    `,
    techstack: "Html5|Css3|PHP|Mysql|Bootstrap|",
    githubLink: "https://github.com/leonardo-sandoval/proyecto-unlimited-",
  },

];

// Enter your Contact Details here
export const contactDetails = {
  email: "leonardoaya1234@gmail.com",
  phone: "3222804187",
};
