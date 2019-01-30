let navbar = document.getElementById("navbar")
window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;
  if (fromTop > 1000) {
    navbar.classList.add("scroll");
  } else {
    navbar.classList.remove("scroll");

  }
});

/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 100) {
      $('#back2Top').fadeIn();
    } else {
      $('#back2Top').fadeOut();
    }
  });
  $(document).ready(function () {
    $("#back2Top").click(function (event) {
      event.preventDefault();
      $("html, body").animate({
        scrollTop: 0
      }, "fast");
      return false;
    });

  });
  /*Scroll to top when arrow up clicked END*/