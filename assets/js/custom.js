$(document).ready(function(){

	"use strict";  

    // 1. Scroll To Top 

		$(window).on('scroll',function () {

			if ($(this).scrollTop() > 600) {

				$('.return-to-top').fadeIn();

			} else {

				$('.return-to-top').fadeOut();

			}

		});

		$('.return-to-top').on('click',function(){

				$('html, body').animate({

				scrollTop: 0

			}, 1500);

			return false;

		});

    // 2. range js
        
        $( "#slider-range" ).slider({
            range: true,
            min: 0,
            max: 12000,
            values: [ 2677, 9241 ],
            slide: function( event, ui ) {
            $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
            }
        });
        $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
        " - $" + $( "#slider-range" ).slider( "values", 1 ) );
        
        
        // Quantity Buttons Shop
    
        $(".qtyplus").on("click", function(){
        var b = $(this).parents(".quantity-form").find("input.qty"),
                c = parseInt(b.val(), 10) + 1,
                d = parseInt(b.attr("max"), 10);
            d || (d = 9999999999), c <= d && (b.val(c), b.change())
        });
        $(".qtyminus").on("click", function(){
            var b = $(this).parents(".quantity-form").find("input.qty"),
                c = parseInt(b.val(), 10) - 1,
                d = parseInt(b.attr("min"), 10);
            d || (d = 1), c >= d && (b.val(c), b.change())
        });


    // 3.Countdown timer 
        
        function makeTimer() {

                var endTime = new Date("March 7, 2018 12:00:00 PDT");            
                var endTime = (Date.parse(endTime)) / 1000;

                var now = new Date();
                var now = (Date.parse(now) / 1000);

                var timeLeft = endTime - now;

                var days = Math.floor(timeLeft / 86400); 
                var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
                var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
                var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

                if (hours < "10") { hours = "0" + hours; }
                if (minutes < "10") { minutes = "0" + minutes; }
                if (seconds < "10") { seconds = "0" + seconds; }

                $("#days").html(days + '<span class="camp">Days</span>');
                $("#hours").html(hours + '<span class="camp">Hour</span>');
                $("#minutes").html(minutes + '<span class="camp">Minute</span>');
                $("#seconds").html(seconds + '<span class="camp">Second</span>');       

        }
        
        setInterval(function() { makeTimer(); }, 1000);

    // 4. owl carousel
    
        // i. #testimonial-carousel
    
        
        var owl=$('#testemonial-carousel');
        owl.owlCarousel({
            items:3,
            margin:0,
            
            loop:true,
            autoplay:true,
            smartSpeed:1000,
            
            //nav:false,
            //navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
            
            dots:true,
            autoplayHoverPause:true,
        
            responsiveClass:true,
                responsive:{
                    0:{
                        items:1
                    },
                    640:{
                        items:1
                    },
                    767:{
                        items:2
                    },
                    992:{
                        items:3
                    }
                }
            
            
        });

    // 6. Smooth Scroll spy
        
        $('.header-area').sticky({
           topSpacing:0
        });
        
        //=============

        $('li.smooth-menu a').bind("click", function(event) {
            event.preventDefault();
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - -1
            }, 1200,'easeInOutExpo');
        });
        
        $('body').scrollspy({
            target:'.navbar-collapse',
            offset:0
        });

    // 7.animation support

        $(window).load(function(){

            $(".about-us-txt h2").removeClass("animated fadeInUp").css({'opacity':'0'});
            $(".about-us-txt button").removeClass("animated fadeInDown").css({'opacity':'0'});
        });

        $(window).load(function(){

            $(".about-us-txt h2").addClass("animated fadeInUp").css({'opacity':'0'});
            $(".about-us-txt button").addClass("animated fadeInDown").css({'opacity':'0'});

        });
        

});	

	// Get modal elements
const loginModal = document.getElementById("login-modal");
const signupModal = document.getElementById("signup-modal");

// Get buttons that trigger the modals
const loginModalBtn = document.getElementById("login-modal-btn");
const signupModalBtn = document.getElementById("signup-modal-btn");

// Get close buttons
const loginCloseBtn = document.getElementById("login-modal-close");
const signupCloseBtn = document.getElementById("signup-modal-close");

// Form elements
const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");

// Open login modal
loginModalBtn.onclick = function () {
  loginModal.style.display = "flex";
};

// Open signup modal
signupModalBtn.onclick = function () {
  signupModal.style.display = "flex";
};

// Close login modal
loginCloseBtn.onclick = function () {
  loginModal.style.display = "none";
};

// Close signup modal
signupCloseBtn.onclick = function () {
  signupModal.style.display = "none";
};

// Close modal when clicking outside of it
window.onclick = function (event) {
  if (event.target == loginModal) {
    loginModal.style.display = "none";
  }
  if (event.target == signupModal) {
    signupModal.style.display = "none";
  }
};

// Validate Signup Form and Store Data in LocalStorage
signupForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get form values
  const name = document.getElementById("signup-name").value.trim();
  const email = document.getElementById("signup-email").value.trim();
  const password = document.getElementById("signup-password").value.trim();

  // Error elements
  const nameError = document.getElementById("signup-name-error");
  const emailError = document.getElementById("signup-email-error");
  const passwordError = document.getElementById("signup-password-error");

  // Clear previous error messages
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";

  // Name validation: at least 3 characters and only letters
  if (!name) {
    nameError.textContent = "Full Name is required.";
    return;
  } else if (!/^[a-zA-Z\s]+$/.test(name)) {
    nameError.textContent = "Name can only contain letters and spaces.";
    return;
  } else if (name.length < 3) {
    nameError.textContent = "Name must be at least 3 characters long.";
    return;
  }

  // Email validation
  if (!validateEmail(email)) {
    emailError.textContent = "Invalid email address.";
    return;
  }

  // Password validation
  if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    return;
  }

  // Store user data in localStorage
  const user = { name, email, password };
  localStorage.setItem("user", JSON.stringify(user));

  alert("Signup successful!");
  signupModal.style.display = "none";
});

// Validate Login Form
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("login-email").value.trim();
  const password = document.getElementById("login-password").value.trim();

  const emailError = document.getElementById("login-email-error");
  const passwordError = document.getElementById("login-password-error");

  emailError.textContent = "";
  passwordError.textContent = "";

  // Retrieve user data from localStorage
  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (!validateEmail(email)) {
    emailError.textContent = "Invalid email address.";
    return;
  }
  if (!storedUser || storedUser.email !== email || storedUser.password !== password) {
    passwordError.textContent = "Invalid email or password.";
    return;
  }

  alert("Login successful!");
  loginModal.style.display = "none";
});

// Email validation function
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
