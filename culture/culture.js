let slideIndex = 1;
showSlide(slideIndex);

document.querySelector('#contact-link').addEventListener('click', (event) => {
  event.preventDefault(); // prevent default behavior of link
  document.querySelector('footer').scrollIntoView({ behavior: 'smooth' });
});
