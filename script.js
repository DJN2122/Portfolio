// Mobile menu toggle
$('#menu').click(function () {
    $(this).toggleClass('fa-times');
    $('header').toggleClass('active');
});

// Close menu on nav link click
$('header .navbar a').click(function () {
    $('#menu').removeClass('fa-times');
    $('header').removeClass('active');
});

// Smooth scroll
$('a[href*="#"]').on('click', function (e) {
    var target = $(this.hash);
    if (target.length) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: target.offset().top }, 600, 'swing');
    }
});

// Scroll-to-top button
$(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.gotopbtn').addClass('active');
    } else {
        $('.gotopbtn').removeClass('active');
    }
});

// Slideshow
var slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
    var slides = document.getElementsByClassName('slide');
    var dots = document.getElementsByClassName('dot');
    if (slides.length === 0) return;
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active-dot', '');
    }
    slides[slideIndex - 1].style.display = 'block';
    if (dots.length) dots[slideIndex - 1].className += ' active-dot';
}

document.querySelector('.next') && document.querySelector('.next').addEventListener('click', function () {
    showSlides(slideIndex += 1);
});

document.querySelector('.prev') && document.querySelector('.prev').addEventListener('click', function () {
    showSlides(slideIndex -= 1);
});

var dots = document.getElementsByClassName('dot');
for (var i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', (function (idx) {
        return function () { showSlides(slideIndex = idx + 1); };
    })(i));
}

setInterval(function () {
    showSlides(slideIndex += 1);
}, 5000);

// Micro-Certification Carousel
var microIndex = 0;
var microSlides = document.getElementsByClassName('micro-slide');
var microDots = document.getElementsByClassName('micro-dot');

function showMicroSlide(n) {
    if (microSlides.length === 0) return;
    if (n >= microSlides.length) microIndex = 0;
    if (n < 0) microIndex = microSlides.length - 1;
    for (var i = 0; i < microSlides.length; i++) {
        microSlides[i].classList.remove('active-micro');
    }
    for (var i = 0; i < microDots.length; i++) {
        microDots[i].classList.remove('active');
    }
    microSlides[microIndex].classList.add('active-micro');
    if (microDots[microIndex]) microDots[microIndex].classList.add('active');
}

showMicroSlide(microIndex);

document.querySelector('.micro-next-btn') && document.querySelector('.micro-next-btn').addEventListener('click', function () {
    showMicroSlide(++microIndex);
});

document.querySelector('.micro-prev-btn') && document.querySelector('.micro-prev-btn').addEventListener('click', function () {
    showMicroSlide(--microIndex);
});

for (var i = 0; i < microDots.length; i++) {
    microDots[i].addEventListener('click', (function (idx) {
        return function () { showMicroSlide(microIndex = idx); };
    })(i));
}

setInterval(function () {
    showMicroSlide(++microIndex);
}, 4000);
