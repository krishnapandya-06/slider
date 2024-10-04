document.addEventListener('DOMContentLoaded', () => {
 const slides = document.querySelectorAll('.slide');
 const nextButton = document.getElementById('next');
 const prevButton = document.getElementById('prev');
 let currentIndex = 0;

 function showSlide(index) {
     slides.forEach((slide, i) => {
         slide.classList.remove('active');
         slide.style.transform = `translateX(${(i - index) * 100}%)`;
     });
 }

 nextButton.addEventListener('click', () => {
     currentIndex = (currentIndex + 1) % slides.length;
     showSlide(currentIndex);
 });


 prevButton.addEventListener('click', () => {
     currentIndex = (currentIndex - 1 + slides.length) % slides.length;
     showSlide(currentIndex);
 });

 showSlide(currentIndex);
});
