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
import projectImage7 from "./assets/projects/project7.jpg";
import projectImage8 from "./assets/projects/project8.jpg";
import projectImage9 from "./assets/projects/project9.jpg";

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
    title: "Projecto Back End pagina galeria de imagenes",
    image: projectImage8,
    description: `La página de publicación de imágenes es un emocionante proyecto 
    que busca permitir a los usuarios compartir su creatividad y descubrir nuevas 
    inspiraciones. Diseñada como un prototipo con fines de estudio, esta aplicación 
    web utiliza tecnologías como Node.js, Express y MongoDB para brindar una experiencia
     fluida. 
    `,
    techstack: "Html5|Css3|Javascript|Node|Espress|Mongo|Boostrap",
    previewLink: "https://github.com/leonardo-sandoval/colleming",
    githubLink: "https://github.com/leonardo-sandoval/colleming",
  },
  {
    title: "Projecto Front End Diseño UI tienda de videojuegos",
    image: projectImage7,
    description: `Sitio web, desarrollado con React y una interfaz de usuario intuitiva, 
    te brindará una experiencia de compra inigualable. Explora nuestro catálogo actualizado 
    constantemente y descubre los títulos más populares y aclamados por la crítica. Además, 
    podrás disfrutar de recomendaciones personalizadas y reseñas detalladas 
    `,
    techstack: "Html5|Css3|Javascript|React|tailwind",
    previewLink: "https://github.com/leonardo-sandoval/tiendavideojuegos",
    githubLink: "https://github.com/leonardo-sandoval/tiendavideojuegos",
  },
  {
    title: "Projecto  Desafio Front end #1",
    image: projectImage6,
    description: `Para este primer miniproyecto de HTML/CSS, 
    reforcé los fundamentos básicos aprendidos del curso "HTML & CSS 
    Full Course - Beginner to Pro" de SuperSimpleDev que se encuentra
     en YouTube. Luego reelaboré el componente para que sea más 
     receptivo y accesible, así como para usar la semántica y los
    puntos de referencia HTML adecuados..
    `,
    techstack: "Html5|Css3",
    previewLink: "https://rococo-kitsune-d213d1.netlify.app",
    githubLink: "https://github.com/leonardo-sandoval/QRcode",
  },
  {
    title: "Projecto 02  Page loading  Error 404",
    image: projectImage5,
    description: `Una página 404 responsive y muy con un diseño moderno y atractivo, 
    con colores armoniosos y elementos visuales llamativos. Además, se adapta perfectamente a diferentes dispositivos, 
    como teléfonos móviles y tablets, garantizando una experiencia de usuario óptima. 
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
    los usuarios pueden obtener fácilmente el pronóstico del clima de su ubicación o de cualquier ciudad.
    `,
    techstack: "JavaScript|Html5|Css3",
    previewLink: "https://6490a093781df819d725ef3f--magenta-palmier-375cde.netlify.app/",
    githubLink: "https://github.com/leonardo-sandoval/APPCLIMA-API",
  },
  {
    title: "Projecto Udemi sitio web estático tienda de cafe ",
    image: projectImage9,
    description: ` Este proyecto es una página web estática que ofrece servicios de bebidas calientes,
     como café, y un servicio de entrega a domicilio. Fue desarrollado como parte de un curso en Udemy y 
     se basó en una plantilla como referencia. 
     La página está implementada utilizando HTML, CSS, SCSS, Bootstrap y JavaScript puro,
   

    `,
    techstack: "JavaScript|Scss|Php|Bootstrap",
    previewLink: "https://64cc374003c12f248221d532--delicate-bubblegum-b339a1.netlify.app/",
    githubLink: "https://github.com/leonardo-sandoval/storecooffee",
  },
  {
    title: "Projecto TaskCalendar",
    image: projectImage1,
    description: ` Su interfaz intuitiva permite a los usuarios organizar su horario de manera eficiente
     al poder añadir tareas con fechas de inicio y fin. La posibilidad de personalizar colores facilita 
     aún más la organización y priorización de actividades. Con esta combinación de características, los usuarios pueden 
     optimizar su productividad y mejorar su planificación
    `,
    techstack: "JavaScript|PHP|Mysql|Bootstrap",
    previewLink: "https://calendario-production-b6a3.up.railway.app/",
    githubLink: "https://github.com/leonardo-sandoval/CALENDARIO",
  },
  {
    title: "Projecto Tienda virtual Unlimited",
    image: projectImage2,
    description: ` La tienda en línea es una solución de comercio electrónico de código abierto, 
    desarrollada en PHP y basada en MySQL, que busca brindar a sus usuarios una experiencia de carrito de compras excepcional.
     Con un diseño intuitivo y seguro, los clientes pueden explorar una amplia variedad de productos, aprovechar promociones 
     especiales.
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
