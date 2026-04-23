
function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let requirement = document.getElementById("requirement").value;
    let location = document.getElementById("location").value.trim();

    // Name validation
    if (name === "") {
        alert("Please enter your full name");
        return false;
    }

    // Email validation
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email");
        return false;
    }

    // Mobile validation (10 digits)
    let mobilePattern = /^[0-9]{10}$/;
    if (!mobile.match(mobilePattern)) {
        alert("Please enter a valid 10-digit mobile number");
        return false;
    }

    // Requirement validation
    if (requirement === "Choose Your Requirement") {
        alert("Please select your requirement");
        return false;
    }

    // Location validation
    if (location === "") {
        alert("Please enter your city");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}



// TESTIMONIAL SWIPER - Sliders (1 at a time)
new Swiper(".testimonialSwiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".testimonial-pagination",
    clickable: true,
  },
  breakpoints: {
    480: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    1200: {
      slidesPerView: 1,
      spaceBetween: 30
    }
  }
});



// BRAND SWIPER (trusted brands)
new Swiper(".brandSwiper", {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 30,
  centeredSlides: false,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".brand-pagination",
    clickable: true,
  },
  breakpoints: {
    480: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 30
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 30
    }
  }
});
