$(document).ready(function () {
  function toggleVisibility() {
    $('#back_to_top').on('click', function(e) {
    e.preventDefault(); // prevent any default button or link behavior
    window.location.href = 'https://api.whatsapp.com/send/?phone=919866662226';
  });
    if ($(window).width() <= 768) { // mobile breakpoint
      // $('.tp-offcanvas-area .tp-offcanvas-top').removeClass('d-flex').addClass('d-none');
      $('.tp-offcanvas-area .tp-offcanvas-contact, .tp-offcanvas-area .tp-copyright-2-social, .tp-offcanvas-area .tp-offcanvas-top h1, .tp-offcanvas-area .tp-offcanvas-top img, .tp-offcanvas-area .tp-offcanvas-content .tp-offcanvas-title').addClass('d-none');
      
      $(".tp-offcanvas-open-btn").removeClass("d-none");

      // replace footer spacing for smaller screens
      $('.tp-footer-2-area .col-xl-3, .tp-footer-2-area .col-xl-4').removeClass('mb-50').addClass('mb-5');
      $('.tp-service-5-area .tp-service-5-title-box .ab-inner-subtitle').removeClass('mb-20').addClass('mb-5');
      $('.tp-footer-2-area').removeClass('pb-20').addClass('pb-5');
    } else {
      // $('.tp-offcanvas-area .tp-offcanvas-top').removeClass('d-none').addClass('d-flex');
      $('.tp-offcanvas-area .tp-offcanvas-contact, .tp-offcanvas-area .tp-copyright-2-social,.tp-offcanvas-area .tp-offcanvas-top h1,.tp-offcanvas-area .tp-offcanvas-top img, .tp-offcanvas-area .tp-offcanvas-content .tp-offcanvas-title').removeClass('d-none');
      $(".tp-offcanvas-open-btn").addClass("d-none");

      // restore original footer spacing on larger screens
      $('.tp-footer-2-area .col-xl-3, .tp-footer-2-area .col-xl-4').removeClass('mb-5').addClass('mb-50');
      $('.tp-service-5-area .tp-service-5-title-box .ab-inner-subtitle').removeClass('mb-5').addClass('mb-20');
      $('.tp-footer-2-area').removeClass('pb-5').addClass('pb-20');
    }
  }

  toggleVisibility(); // run on page load
  $(window).resize(toggleVisibility); // run on resize
});
