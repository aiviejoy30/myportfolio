// Smooth scroll for navbar links
document.querySelectorAll('.navbar a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Reveal animation (unchanged from your version)
function reveal() {
  const reveals = document.querySelectorAll(".reveal-top, .reveal-bottom");
  const windowHeight = window.innerHeight;
  const revealPoint = 100;

  for (let i = 0; i < reveals.length; i++) {
    const revealTop = reveals[i].getBoundingClientRect().top;
    const revealBottom = reveals[i].getBoundingClientRect().bottom;
    if (revealTop < windowHeight - revealPoint && revealBottom > revealPoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }

  const aboutImageContainer = document.querySelector('.about-image');
  const aboutSectionTop = document.querySelector('#about').getBoundingClientRect().top;
  if (aboutImageContainer) {
    const img = aboutImageContainer.querySelector('img');
    if (aboutSectionTop < windowHeight && aboutSectionTop > -windowHeight) {
      aboutImageContainer.classList.remove('reset');
      img.style.animation = 'none';
      img.offsetHeight;
      img.style.animation = 'slideBounceLeftSlow 3s ease-out forwards, verticalBounce 2s ease-in-out infinite 3s';
      img.style.opacity = '0';
    } else {
      aboutImageContainer.classList.add('reset');
      img.style.animation = 'none';
      img.style.opacity = '0';
    }
  }

  const homeContent = document.querySelector('.content');
  const homeTop = document.querySelector('#home').getBoundingClientRect().top;
  if (homeContent && Math.abs(homeTop) < 50) {
    homeContent.classList.remove('reset');
    const typingElement = document.querySelector('.typing');
    if (typingElement) {
      typingElement.style.animation = 'none';
      typingElement.offsetHeight;
      typingElement.style.animation = 'typing 2s steps(10) 1, blink 0.7s step-end infinite alternate';
    }
  } else if (homeContent) {
    homeContent.classList.add('reset');
  }
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);
window.addEventListener("load", function() {
  reveal();
  const img = document.querySelector('.about-image img');
  if (img) {
    img.style.opacity = '0';
  }
});