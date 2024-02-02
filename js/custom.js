var rev = $('.rev_slider');

rev.on('init', function (event, slick, currentSlide) {
  var cur = $(slick.$slides[slick.currentSlide]),
    next = cur.next(),
    prev = cur.prev();
  prev.addClass('slick-sprev');
  next.addClass('slick-snext');
  cur.removeClass('slick-snext').removeClass('slick-sprev');
  slick.$prev = prev;
  slick.$next = next;
}).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
  var cur = $(slick.$slides[nextSlide]);
  slick.$prev.removeClass('slick-sprev');
  slick.$next.removeClass('slick-snext');
  next = cur.next(),
    prev = cur.prev();
  prev.prev();
  prev.next();
  prev.addClass('slick-sprev');
  next.addClass('slick-snext');
  slick.$prev = prev;
  slick.$next = next;
  cur.removeClass('slick-next').removeClass('slick-sprev');
});

var rev = $('.rev_slider');

rev.slick({
  speed: 1000,
  margin: 150, // Increase this value to add more gap between slides
  arrows: false,
  dots: true,
  focusOnSelect: true,
  infinite: true,
  centerMode: true,
  slidesPerRow: 1,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerPadding: '0px',
  swipe: true,
  customPaging: function (slider, i) {
    var title = $(slider.$slides[i]).find('.slide-title').text();
    return '<span>' + title + '</span>';
  },
  responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        centerMode: false
        // Adjust other settings as needed
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false
        // Adjust other settings as needed
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false
        // Adjust other settings as needed
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false
        // Adjust other settings as needed
      }
    }
  ]
});



$('#product').owlCarousel({
  loop: true,
  nav: true,
  dots: true,
  margin: 10,
  autoplay: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
      dots: true
    },
    600: {
      items: 2,
      nav: false
    },
    1000: {
      items: 4,
      nav: true,
      dots: true,
      loop: true
    }
  },
  navText: ["<img src='img/left.png'>", "<img src='img/right.png'>"],

});




$('#testimonials').owlCarousel({
  loop: true,
  nav: true,
  dots: true,
  margin: 10,
  autoplay: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    600: {
      items: 2,
      nav: false
    },
    1000: {
      items: 1,
      nav: true,
      dots: true,
      loop: true
    }
  },
  navText: ["<img src='img/left.png'>", "<img src='img/right.png'>"],

});



$('#blog').owlCarousel({
  loop: true,
  nav: true,
  dots: true,
  margin: 30,
  autoplay: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    600: {
      items: 1,
      nav: false
    },
    1000: {
      items: 3,
      nav: true,
      dots: true,
      loop: true
    }
  },
  navText: ["<img src='img/left.png'>", "<img src='img/right.png'>"],

});





// Add a click event listener to the link with the "down-aaa" class
const downAaaLink = document.querySelector('.down-aaa');
downAaaLink.addEventListener('click', function (event) {
  event.preventDefault(); // Prevent the default link behavior

  // Get the target element to scroll to (specified in href)
  const targetId = this.getAttribute('href').substring(1);
  const targetElement = document.getElementById(targetId);

  // Scroll to the target element smoothly
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth'
    });
  }
});



const animateOnScroll = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const elementsToAnimate = entry.target.querySelectorAll('.l1, .l2, .l3, .l4, .path');
      elementsToAnimate.forEach(element => {
        element.style.animationPlayState = "running";
      });
    } else {
      const elementsToPause = entry.target.querySelectorAll('.l1, .l2, .l3, .l4, .path');
      elementsToPause.forEach(element => {
        element.style.animationPlayState = "paused";
      });
    }
  });
};

const options = {
  threshold: 0.5 // Adjust the threshold value to trigger the animation when the section is more visible
};

const observer = new IntersectionObserver(animateOnScroll, options);
const sectionToObserve = document.getElementById('my-section');
observer.observe(sectionToObserve);

