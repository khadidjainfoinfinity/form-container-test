const viewp1 = new IntersectionObserver((entries, observer) => {
    if (entries[0].isIntersecting) {
      var typed2 = new Typed('#typed2', {
        strings: ['{ fill the form }'],
        typeSpeed: 80,
        backSpeed: 25,
        bindInputFocusEvents: true,
        loop: false,
        cursorChar: ' ',
        attr: null,
      });
      observer.unobserve(document.querySelector('#typed2'))
    }
  });
  
  viewp1.observe(document.querySelector('#typed2'));
  