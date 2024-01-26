      // fondo blanco de la nav cambia con alfa al hacer scroll
      document.addEventListener("DOMContentLoaded", function() {
        const menu = document.querySelector('.menu');
        const links = document.querySelectorAll('.navbar-nav a');
        const menuHeight = menu.offsetHeight;
  
        window.addEventListener('scroll', function() {
          const scrollPosition = window.pageYOffset;
  
          if (scrollPosition > menuHeight) {
            menu.style.backgroundColor = 'rgba(255, 255, 255, 0.9)'; // Fondo blanco con transparencia
          } else {
            menu.style.backgroundColor = 'white'; // Fondo blanco sin transparencia
          }
        });
  
        // al hacer scroll calcula el alto del menu para no pisar las sections
        links.forEach(link => {
          link.addEventListener('click', function(event) {
            event.preventDefault();
  
          const targetId = this.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);
  
          if (targetElement) {
            const offsetTop = targetElement.offsetTop - menuHeight;
  
            window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
            });
          }
            });
          });
        });
  
        // clase active para los links seleccionados
        document.addEventListener("DOMContentLoaded", function() {
          const links = document.querySelectorAll('.navbar-nav a');
  
          links.forEach(link => {
            link.addEventListener('click', function() {
              links.forEach(innerLink => innerLink.classList.remove('active'));
              this.classList.add('active');
            });
          });
        });
  
        document.addEventListener("DOMContentLoaded", function() {
        const links = document.querySelectorAll('.navbar-nav a');
        const menuHeight = document.querySelector('.menu').offsetHeight;
  
        links.forEach(link => {
        link.addEventListener('click', function(event) {
        event.preventDefault();
  
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          const offsetTop = targetElement.offsetTop - menuHeight;
  
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  });