$(document).ready(() => {
  // fixed nav functionality
  let sticky = $("#d-fixedNav").get(0).offsetTop;
  $(window).on("scroll", function () {
    if (window.pageYOffset > sticky) {
      $("#d-fixedNav").addClass("d-sticky-nav");
    } else {
      $("#d-fixedNav").removeClass("d-sticky-nav");
    }
  });

  // dropdown menu
  $("#d-left-nav")
    .find("li")
    .each((i, element) => {
      console.log(element.id);
      if (element.id === "d-showDropdown") {
        $(element).on("mouseover", function () {
          $("#d-nav-dropdown-menu").removeClass("d-display-none");
        });
      } else {
        $(element).on("mouseover", function () {
          $("#d-nav-dropdown-menu").addClass("d-display-none");
        });
      }
    });

  // hide and show dropdown menu
  $("#d-nav-dropdown-menu").on("mouseover", function () {
    $("#d-nav-dropdown-menu").removeClass("d-display-none");
  });

  $("#d-nav-dropdown-menu").on("mouseout", function () {
    $(this).addClass("d-display-none");
  });

  // add class to stars
  $(".d-footer-rating svg").on("mouseover", function () {
    $(this).addClass("d-stars");
  });

 // open and close cart details
  $('#d-cart-nav').click(function(){
    $('#d-cart-modal').css('display', 'flex')
    $('#d-cart-info').animate({'left': '0'})
    $('body').css('overflow', 'hidden')
  })

  $('#d-close-cart').click(function(){
    $('#d-cart-info').animate({'left': '100%'})
    $('#d-cart-modal').css('display', 'none')
    $('body').css('overflow', 'visible')
  })

  
 // open and close hamburger menu
 let clicked = true
 $('#d-hamburger-menu-icon').click(function(){
  if(clicked){
    $('#d-hamburger-menu').animate({'left': '0'})
    $('body').css('overflow', 'hidden')
  }
  else{
    $('#d-hamburger-menu').animate({'left': '-100%'})
    $('body').css('overflow', 'visible')
  }
 clicked =!clicked
})
});
