let galleryIndex = 0;
const images = ['img1.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg'];
const galleryImg = document.getElementById('gallery-img');

setInterval(() => {
    galleryIndex = (galleryIndex + 1) % images.length;
    galleryImg.src = images[galleryIndex];
}, 3000);

// Request Form Submission
const requestForm = document.getElementById('request-form');
const requestSuccess = document.getElementById('request-success');

requestForm.addEventListener('submit', function (e) {
    e.preventDefault();
    requestSuccess.textContent = "Your product request has been submitted successfully!";
    requestForm.reset();
});

// Contact Form Submission
const contactForm = document.getElementById('contact-form');
const contactSuccess = document.getElementById('contact-success');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    contactSuccess.textContent = "Your product has been requested successfully We will get in touch with you soon !";
    contactForm.reset();
});
