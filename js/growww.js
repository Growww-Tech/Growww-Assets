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
      $('.ab-about-category-title-box').removeClass('mb-40').addClass('mb-10');
      $('.cn-contactform-area').removeClass('pb-100').addClass('pb-50');
      $('.cn-contactform-support-area').removeClass('mb-120').addClass('mb-50');
      $('.cn-contact-2-info-area').removeClass('pb-90').addClass('pb-5');
      $('.tp-project-5-2-area .portfolio-filter').removeClass('mb-60').addClass('mb-15');
      $('.tp-project-5-2-area').removeClass('pb-130').addClass('pb-5');
      // add mobile margin to sv-small-text-box
      $('.sv-small-text-box').addClass('mb-5');
    } else {
      // $('.tp-offcanvas-area .tp-offcanvas-top').removeClass('d-none').addClass('d-flex');
      $('.tp-offcanvas-area .tp-offcanvas-contact, .tp-offcanvas-area .tp-copyright-2-social,.tp-offcanvas-area .tp-offcanvas-top h1,.tp-offcanvas-area .tp-offcanvas-top img, .tp-offcanvas-area .tp-offcanvas-content .tp-offcanvas-title').removeClass('d-none');
      $(".tp-offcanvas-open-btn").addClass("d-none");

      // restore original footer spacing on larger screens
      $('.tp-footer-2-area .col-xl-3, .tp-footer-2-area .col-xl-4').removeClass('mb-5').addClass('mb-50');
      $('.tp-service-5-area .tp-service-5-title-box .ab-inner-subtitle').removeClass('mb-5').addClass('mb-20');
      $('.tp-footer-2-area').removeClass('pb-5').addClass('pb-20');
      $('.ab-about-category-title-box').removeClass('mb-10').addClass('mb-40');
      $('.cn-contactform-area').removeClass('pb-50').addClass('pb-100');
      $('.cn-contactform-support-area').removeClass('mb-50').addClass('mb-120');
      $('.cn-contact-2-info-area').removeClass('pb-5').addClass('pb-90');
      $('.tp-project-5-2-area .portfolio-filter').removeClass('mb-15').addClass('mb-60');
      $('.tp-project-5-2-area').removeClass('pb-5').addClass('pb-130');

      // remove mobile margin from sv-small-text-box
      $('.sv-small-text-box').removeClass('mb-5');
    }
  }

  toggleVisibility(); // run on page load
  $(window).resize(toggleVisibility); // run on resize
});


document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".pvs-track-demo");
    const progressBar = document.querySelector(".pvs-progress-bar-demo");
    const prevBtn = document.querySelector(".pvs-prev-demo");
    const nextBtn = document.querySelector(".pvs-next-demo");

    function updateProgress() {
      const maxScroll = track.scrollWidth - track.clientWidth;
      const scrollPercentage = (track.scrollLeft / maxScroll) * 100;
      progressBar.style.width = scrollPercentage + "%";
    }

    // Scroll left/right
    prevBtn.addEventListener("click", () => {
      track.scrollBy({ left: -track.clientWidth, behavior: "smooth" });
    });
    nextBtn.addEventListener("click", () => {
      track.scrollBy({ left: track.clientWidth, behavior: "smooth" });
    });

    track.addEventListener("scroll", updateProgress);
    window.addEventListener("resize", updateProgress);
    updateProgress();

    document.querySelectorAll('.pvs-video-item-demo video').forEach(video => {
      video.play().catch(err => console.log("Autoplay blocked:", err));
    });

    // Drag scroll
    let isDown = false, startX, scrollLeft;
    track.addEventListener("mousedown", (e) => {
      isDown = true;
      track.classList.add("active");
      startX = e.pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
    });
    track.addEventListener("mouseleave", () => { isDown = false; track.classList.remove("active"); });
    track.addEventListener("mouseup", () => { isDown = false; track.classList.remove("active"); });
    track.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - track.offsetLeft;
      const walk = (x - startX) * 1.5;
      track.scrollLeft = scrollLeft - walk;
    });
});