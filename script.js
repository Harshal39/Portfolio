function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  function mode(){
    const modeIcon = document.getElementById("mode"); 
    const example = document.querySelector("#example");
    const linkedin = document.querySelector("#linkedin");
    modeIcon.addEventListener("click", function() {
        // Check the current background color
        if (document.body.style.backgroundColor === "black") {
          // Change to light mode
          document.body.style.backgroundColor = "white";
          document.body.style.color = "black";
          const navLinks = document.querySelectorAll('.nav-links a');
          navLinks.forEach(link => {
          link.style.color = 'black';
      });    
      const downloadCV = document.querySelector(".btn-color-2")
      downloadCV.style.backgroundColor ="none"
      downloadCV.style.color = "black"
      modeIcon.src = modeIcon.getAttribute('data-light')
      example.style.color = "black";
      linkedin.style.color = "black";
      }
         else {
          // Change to dark mode
          document.body.style.backgroundColor = "black";
          document.body.style.color = "white";
          const navLinks = document.querySelectorAll('.nav-links a');
          navLinks.forEach(link => {
            link.style.color = 'white';
          });
          const downloadCV = document.querySelector(".btn-color-2")
          downloadCV.style.backgroundColor ="none"
          downloadCV.style.color = "white"
          const techStack = document.querySelectorAll('article');
          techStack.forEach(links =>{
            links.style.color = "black";
          })
        modeIcon.src = modeIcon.getAttribute('data-dark');
        example.style.color = "white";
        linkedin.style.color = "white";
        }
      });
  }
  mode();