$(document).ready(() => {
  // Current User's Cart info
  let allproducts = JSON.parse(localStorage.getItem("Poketo-Products"));
  let usersItems =
      JSON.parse(localStorage.getItem("CurrentUser-cartItems")) || [];
  let currentUser = localStorage.getItem("CurrentUser");

  // fixed nav functionality
  let sticky = $("#d-fixedNav").get(0).offsetTop;
  $(window).on("scroll", function() {
      if (window.pageYOffset > sticky) {
          $("#d-fixedNav").addClass("d-sticky-nav");
          $("#d-shop-family").slideUp();
      } else {
          $("#d-fixedNav").removeClass("d-sticky-nav");
          $("#d-shop-family").slideDown();
      }
  });

  // dropdown menu
  $("#d-left-nav")
      .find("li")
      .each((i, element) => {
          if (element.id === "d-showDropdown") {
              $(element).on("mouseover", function() {
                  $("#d-nav-dropdown-menu").removeClass("d-display-none");
              });
          } else {
              $(element).on("mouseover", function() {
                  $("#d-nav-dropdown-menu").addClass("d-display-none");
              });
          }
      });

  // hide and show dropdown menu
  $("#d-nav-dropdown-menu").on("mouseover", function() {
      $("#d-nav-dropdown-menu").removeClass("d-display-none");
  });

  $("#d-nav-dropdown-menu").on("mouseout", function() {
      $(this).addClass("d-display-none");
  });

  // add class to stars
  $(".d-footer-rating svg").on("mouseover", function() {
      $(this).addClass("d-stars");
  });

  // open and close cart details
  $("#d-cart-nav").click(function() {
      $("#d-cart-modal").css("display", "flex");
      $("#d-cart-info").animate({ left: "0" });
      $("body").css("overflow", "hidden");
  });

  $("#d-close-cart").click(function() {
      $("#d-cart-info").animate({ left: "100%" });
      $("#d-cart-modal").css("display", "none");
      $("body").css("overflow", "visible");
  });

  // select colors
  $(document).on('click', '.d-color-selection', function() {

      $(this).parent().addClass('d-selected-color')
      $(this).parent().siblings().removeClass('d-selected-color')
  })

  $('.d-slider-product-item').mouseover(function() {
      $(this).find('.d-addCart').show()
  })

  $('.d-slider-product-item').mouseout(function() {
      $(this).find('.d-addCart').hide()
  })


  $(document).on('click', '.d-slider-product-item', function() {
          let selectedId = $(this).data('id');
          allproducts.forEach((item) => {
              if (selectedId === item.id) {
                  localStorage.setItem('Selected-Product', JSON.stringify(item))
                  window.location.href = 'product.html'
              }
          })


      })
      // redirect to login
  $("#d-account-nav").click(function() {
      window.location.href = "login.html";
  });
  $("#d-account-logout, #d-login-hamburger").click(function() {
      localStorage.removeItem("CurrentUser");
      localStorage.removeItem('Selected-Product')
      window.location.href = "login.html";
  });

  // for empty cart 
  $(".d-AddBtn-cart").click(function() {
      if (currentUser === null) {
          window.location.href = "login.html";
      } else {
          let itemId = $(this).parents(".d-cart-item-desc").data("id")
          usersItems.forEach((user) => {
              if (user.name === currentUser) {
                  let addedID = {
                      itemId: itemId,
                      quantity: 1
                  }
                  user.cartItems.push(addedID);
                  localStorage.setItem(
                      "CurrentUser-cartItems",
                      JSON.stringify(usersItems)
                  );

                  location.reload(true)
              }
          });


      }
  });


  //add to cart from index and shop page
  $(document).on('click', '.d-addCart, .d-AddBtn-cart', function(e) {
          e.stopPropagation()
          let itemSelected = $(this).parent().data('id')
          let price = allproducts[itemSelected - 1].price
          if (currentUser !== null) {
              usersItems.forEach((user) => {
                  if (user.name === currentUser) {
                      let found = user.cartItems.some(item => item.itemId === itemSelected)
                      if (found) {
                          $("#d-cart-modal").css("display", "flex");
                          $("#d-cart-info").animate({ left: "0" });
                          $("body").css("overflow", "hidden");
                      } else {
                          let addedID = {
                              itemId: itemSelected,
                              quantity: 1,
                              price: price
                          }
                          user.cartItems.push(addedID);
                          localStorage.setItem(
                              "CurrentUser-cartItems",
                              JSON.stringify(usersItems)
                          );
                          location.reload(true)
                      }

                  }
              });
          }

      })
      //redirect to home
  $("#logo").click(function() {
      window.location.href = "index.html";
  });

  $("#logo-responsive").click(function() {
      window.location.href = "index.html";
  });

  $("#d-checkout-btn").click(function() {
      if ($(this).text() === "CONTINUE SHOPPING") {
          window.location.href = "index.html";
      } else {
          console.log("Checkout");
      }
  });
  // open and close hamburger menu
  let clicked = true;
  $("#d-hamburger-menu-icon").click(function() {
      if (clicked) {
          $("#d-hamburger-menu").animate({ left: "0" });
          $("body").css("overflow", "hidden");
      } else {
          $("#d-hamburger-menu").animate({ left: "-100%" });
          $("body").css("overflow", "visible");
      }
      clicked = !clicked;
  });

  // styles for empty cart
  if (currentUser === null) {
      $("#d-checkout-btn").text("CONTINUE SHOPPING");
      $("#d-cart-contents").css("height", "47vh");
      $("#d-account-logout").hide();
      let firstFour = [...allproducts].splice(0, 4)
      firstFour.forEach((product, i) => {
          let productItem = $(`<div class="d-grid d-cart-item-desc">
            <div class="d-flex d-gap-20">
              <img src=${product.img} width="30%">
              <div class="d-flex-col" style="justify-content: space-between">
                <p id="d-title-item">${product.productName}</p>
                
                <p id="d-price-item">$${product.price}</p>
              </div>
            </div> 
            <div class="d-flex-col d-cart-item-desc-left">
            <!-- stars -->
                      <div class="d-cart-stars-rating d-flex">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.99998 13.0852L3.28889 15.4762C3.18255 15.5302 3.05189 15.4891 2.99706 15.3844C2.97577 15.3438 2.96832 15.2975 2.97581 15.2523L3.83017 10.103L0.064192 6.43136C-0.0208179 6.34848 -0.0214783 6.21346 0.062717 6.12978C0.0954128 6.09728 0.137856 6.07599 0.183781 6.06906L5.4229 5.27766L7.80648 0.617401C7.86029 0.512205 7.99054 0.469862 8.09741 0.522826C8.13891 0.543393 8.17259 0.57655 8.19349 0.617401L10.5771 5.27766L15.8162 6.06906C15.9345 6.08692 16.0156 6.19578 15.9975 6.31219C15.9904 6.3574 15.9688 6.39918 15.9358 6.43136L12.1698 10.103L13.0242 15.2523C13.0434 15.3686 12.9634 15.4782 12.8453 15.4972C12.7994 15.5045 12.7524 15.4972 12.7111 15.4762L7.99998 13.0852Z" fill="#dedede"></path></svg>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99998 13.0852L3.28889 15.4762C3.18255 15.5302 3.05189 15.4891 2.99706 15.3844C2.97577 15.3438 2.96832 15.2975 2.97581 15.2523L3.83017 10.103L0.064192 6.43136C-0.0208179 6.34848 -0.0214783 6.21346 0.062717 6.12978C0.0954128 6.09728 0.137856 6.07599 0.183781 6.06906L5.4229 5.27766L7.80648 0.617401C7.86029 0.512205 7.99054 0.469862 8.09741 0.522826C8.13891 0.543393 8.17259 0.57655 8.19349 0.617401L10.5771 5.27766L15.8162 6.06906C15.9345 6.08692 16.0156 6.19578 15.9975 6.31219C15.9904 6.3574 15.9688 6.39918 15.9358 6.43136L12.1698 10.103L13.0242 15.2523C13.0434 15.3686 12.9634 15.4782 12.8453 15.4972C12.7994 15.5045 12.7524 15.4972 12.7111 15.4762L7.99998 13.0852Z"
                          fill="#dedede"></path>
                      </svg>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.99998 13.0852L3.28889 15.4762C3.18255 15.5302 3.05189 15.4891 2.99706 15.3844C2.97577 15.3438 2.96832 15.2975 2.97581 15.2523L3.83017 10.103L0.064192 6.43136C-0.0208179 6.34848 -0.0214783 6.21346 0.062717 6.12978C0.0954128 6.09728 0.137856 6.07599 0.183781 6.06906L5.4229 5.27766L7.80648 0.617401C7.86029 0.512205 7.99054 0.469862 8.09741 0.522826C8.13891 0.543393 8.17259 0.57655 8.19349 0.617401L10.5771 5.27766L15.8162 6.06906C15.9345 6.08692 16.0156 6.19578 15.9975 6.31219C15.9904 6.3574 15.9688 6.39918 15.9358 6.43136L12.1698 10.103L13.0242 15.2523C13.0434 15.3686 12.9634 15.4782 12.8453 15.4972C12.7994 15.5045 12.7524 15.4972 12.7111 15.4762L7.99998 13.0852Z" fill="#dedede"></path></svg>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99998 13.0852L3.28889 15.4762C3.18255 15.5302 3.05189 15.4891 2.99706 15.3844C2.97577 15.3438 2.96832 15.2975 2.97581 15.2523L3.83017 10.103L0.064192 6.43136C-0.0208179 6.34848 -0.0214783 6.21346 0.062717 6.12978C0.0954128 6.09728 0.137856 6.07599 0.183781 6.06906L5.4229 5.27766L7.80648 0.617401C7.86029 0.512205 7.99054 0.469862 8.09741 0.522826C8.13891 0.543393 8.17259 0.57655 8.19349 0.617401L10.5771 5.27766L15.8162 6.06906C15.9345 6.08692 16.0156 6.19578 15.9975 6.31219C15.9904 6.3574 15.9688 6.39918 15.9358 6.43136L12.1698 10.103L13.0242 15.2523C13.0434 15.3686 12.9634 15.4782 12.8453 15.4972C12.7994 15.5045 12.7524 15.4972 12.7111 15.4762L7.99998 13.0852Z"
                              fill="#dedede"></path>
                          </svg>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.99998 13.0852L3.28889 15.4762C3.18255 15.5302 3.05189 15.4891 2.99706 15.3844C2.97577 15.3438 2.96832 15.2975 2.97581 15.2523L3.83017 10.103L0.064192 6.43136C-0.0208179 6.34848 -0.0214783 6.21346 0.062717 6.12978C0.0954128 6.09728 0.137856 6.07599 0.183781 6.06906L5.4229 5.27766L7.80648 0.617401C7.86029 0.512205 7.99054 0.469862 8.09741 0.522826C8.13891 0.543393 8.17259 0.57655 8.19349 0.617401L10.5771 5.27766L15.8162 6.06906C15.9345 6.08692 16.0156 6.19578 15.9975 6.31219C15.9904 6.3574 15.9688 6.39918 15.9358 6.43136L12.1698 10.103L13.0242 15.2523C13.0434 15.3686 12.9634 15.4782 12.8453 15.4972C12.7994 15.5045 12.7524 15.4972 12.7111 15.4762L7.99998 13.0852Z" fill="#dedede"></path></svg>

                          <span>${product.stars}</span><span>(${product.quantity})</span>
                      </div>
              
              <div class="d-flex d-align-center d-justify-center" data-id=${product.id}>
                <button class="d-AddBtn-cart">Add</button>
                </div>
</div>
            </div>
            <hr style="opacity: 0.5">`)

          let productRating = productItem.find('.d-cart-stars-rating').find('svg')
          productRating.each((i, svg) => {

              $(svg).find('path').css('fill', '#ef4043')
              if (i === Math.round(product.stars) - 1) {
                  return false;
              }

          })
          $('#d-cart-contents').append(productItem)

      })

  } else {
      $("#d-account-nav").hide();
      $("#d-login-hamburger").text("Logout / Account");
      usersItems.forEach((user) => {
          if (currentUser === user.name) {
              // check if cart is empty
              let cartItemNumber = user.cartItems.length;
              $("#d-num-items").text(`(${cartItemNumber} items)`);
              $("#d-cart-items-num").text(`${cartItemNumber}`);
              if (cartItemNumber === 0) {
                  $("#d-checkout-btn").text("CONTINUE SHOPPING");
                  $("#d-cart-contents").css("height", "47vh");
                  let firstFour = [...allproducts].splice(0, 4)
                  firstFour.forEach((product, i) => {
                      let productItem = $(`<div class="d-grid d-cart-item-desc">
            <div class="d-flex d-gap-20">
              <img src=${product.img} width="30%">
              <div class="d-flex-col" style="justify-content: space-between">
                <p id="d-title-item">${product.productName}</p>
                
                <p id="d-price-item">$${product.price}</p>
              </div>
            </div> 
            <div class="d-flex-col d-cart-item-desc-left">
            <!-- stars -->
                      <div class="d-cart-stars-rating d-flex">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.99998 13.0852L3.28889 15.4762C3.18255 15.5302 3.05189 15.4891 2.99706 15.3844C2.97577 15.3438 2.96832 15.2975 2.97581 15.2523L3.83017 10.103L0.064192 6.43136C-0.0208179 6.34848 -0.0214783 6.21346 0.062717 6.12978C0.0954128 6.09728 0.137856 6.07599 0.183781 6.06906L5.4229 5.27766L7.80648 0.617401C7.86029 0.512205 7.99054 0.469862 8.09741 0.522826C8.13891 0.543393 8.17259 0.57655 8.19349 0.617401L10.5771 5.27766L15.8162 6.06906C15.9345 6.08692 16.0156 6.19578 15.9975 6.31219C15.9904 6.3574 15.9688 6.39918 15.9358 6.43136L12.1698 10.103L13.0242 15.2523C13.0434 15.3686 12.9634 15.4782 12.8453 15.4972C12.7994 15.5045 12.7524 15.4972 12.7111 15.4762L7.99998 13.0852Z" fill="#dedede"></path></svg>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99998 13.0852L3.28889 15.4762C3.18255 15.5302 3.05189 15.4891 2.99706 15.3844C2.97577 15.3438 2.96832 15.2975 2.97581 15.2523L3.83017 10.103L0.064192 6.43136C-0.0208179 6.34848 -0.0214783 6.21346 0.062717 6.12978C0.0954128 6.09728 0.137856 6.07599 0.183781 6.06906L5.4229 5.27766L7.80648 0.617401C7.86029 0.512205 7.99054 0.469862 8.09741 0.522826C8.13891 0.543393 8.17259 0.57655 8.19349 0.617401L10.5771 5.27766L15.8162 6.06906C15.9345 6.08692 16.0156 6.19578 15.9975 6.31219C15.9904 6.3574 15.9688 6.39918 15.9358 6.43136L12.1698 10.103L13.0242 15.2523C13.0434 15.3686 12.9634 15.4782 12.8453 15.4972C12.7994 15.5045 12.7524 15.4972 12.7111 15.4762L7.99998 13.0852Z"
                          fill="#dedede"></path>
                      </svg>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.99998 13.0852L3.28889 15.4762C3.18255 15.5302 3.05189 15.4891 2.99706 15.3844C2.97577 15.3438 2.96832 15.2975 2.97581 15.2523L3.83017 10.103L0.064192 6.43136C-0.0208179 6.34848 -0.0214783 6.21346 0.062717 6.12978C0.0954128 6.09728 0.137856 6.07599 0.183781 6.06906L5.4229 5.27766L7.80648 0.617401C7.86029 0.512205 7.99054 0.469862 8.09741 0.522826C8.13891 0.543393 8.17259 0.57655 8.19349 0.617401L10.5771 5.27766L15.8162 6.06906C15.9345 6.08692 16.0156 6.19578 15.9975 6.31219C15.9904 6.3574 15.9688 6.39918 15.9358 6.43136L12.1698 10.103L13.0242 15.2523C13.0434 15.3686 12.9634 15.4782 12.8453 15.4972C12.7994 15.5045 12.7524 15.4972 12.7111 15.4762L7.99998 13.0852Z" fill="#dedede"></path></svg>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99998 13.0852L3.28889 15.4762C3.18255 15.5302 3.05189 15.4891 2.99706 15.3844C2.97577 15.3438 2.96832 15.2975 2.97581 15.2523L3.83017 10.103L0.064192 6.43136C-0.0208179 6.34848 -0.0214783 6.21346 0.062717 6.12978C0.0954128 6.09728 0.137856 6.07599 0.183781 6.06906L5.4229 5.27766L7.80648 0.617401C7.86029 0.512205 7.99054 0.469862 8.09741 0.522826C8.13891 0.543393 8.17259 0.57655 8.19349 0.617401L10.5771 5.27766L15.8162 6.06906C15.9345 6.08692 16.0156 6.19578 15.9975 6.31219C15.9904 6.3574 15.9688 6.39918 15.9358 6.43136L12.1698 10.103L13.0242 15.2523C13.0434 15.3686 12.9634 15.4782 12.8453 15.4972C12.7994 15.5045 12.7524 15.4972 12.7111 15.4762L7.99998 13.0852Z"
                              fill="#dedede"></path>
                          </svg>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.99998 13.0852L3.28889 15.4762C3.18255 15.5302 3.05189 15.4891 2.99706 15.3844C2.97577 15.3438 2.96832 15.2975 2.97581 15.2523L3.83017 10.103L0.064192 6.43136C-0.0208179 6.34848 -0.0214783 6.21346 0.062717 6.12978C0.0954128 6.09728 0.137856 6.07599 0.183781 6.06906L5.4229 5.27766L7.80648 0.617401C7.86029 0.512205 7.99054 0.469862 8.09741 0.522826C8.13891 0.543393 8.17259 0.57655 8.19349 0.617401L10.5771 5.27766L15.8162 6.06906C15.9345 6.08692 16.0156 6.19578 15.9975 6.31219C15.9904 6.3574 15.9688 6.39918 15.9358 6.43136L12.1698 10.103L13.0242 15.2523C13.0434 15.3686 12.9634 15.4782 12.8453 15.4972C12.7994 15.5045 12.7524 15.4972 12.7111 15.4762L7.99998 13.0852Z" fill="#dedede"></path></svg>

                          <span>${product.stars}</span><span>(${product.quantity})</span>
                      </div>
              
              <div class="d-flex d-align-center d-justify-center" data-id=${product.id}>
                <button class="d-AddBtn-cart">Add</button>
                </div>
</div>
            </div>
            <hr style="opacity: 0.5">`)

                      let productRating = productItem.find('.d-cart-stars-rating').find('svg')
                      productRating.each((i, svg) => {

                          $(svg).find('path').css('fill', '#ef4043')
                          if (i === Math.round(product.stars) - 1) {
                              return false;
                          }

                      })
                      $('#d-cart-contents').append(productItem)

                  })

              } else {
                  $("#d-taxShiping-info").removeClass("d-display-none");
                  $("#d-freeShipping").removeClass("d-display-none");
                  $("#d-empty-cart").hide();
                  $("#d-cart-contents").empty();
                  $("#d-loveProducts").hide();

                  user.cartItems.forEach((i, index) => {
                      let item = allproducts[i.itemId - 1];

                      $("#d-cart-contents").append(
                          `<div class="d-grid d-cart-item-desc" data-id=${item.id}>
            <div class="d-flex d-gap-20">
              <img
                src=${item.img}
                width="30%"
              />
              <div class="d-flex-col" style="justify-content: space-between">
                <p class="d-title-item">${item.productName}</p>
                <p>$<span class="d-price-item">${
                  item.price * i.quantity
                }</span></p>
              </div>
            </div>

            <div class="d-flex-col d-cart-item-desc-left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-trash3"
                viewBox="0 0 16 16"
                data-id = ${index}
              >
                <path
                  d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"
                />
              </svg>
              <div
                class="d-flex d-align-center d-justify-center"
                id="d-add-remove-num"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-dash"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"
                  />
                </svg>
                <input type="text" name="" class="d-amt-items" value=${i.quantity} />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-plus"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"
                  />
                </svg>
              </div>
            </div>
          </div>
          <hr style="opacity: 0.5;">`
                      );
                  });
              }
          }
      });
  }

  // show total price
  var totalPrice = 0;
  $(".d-price-item").each((index, i) => {
      totalPrice += parseInt(i.innerText);
  });

  $("#d-price").text(`$${totalPrice}`);

  // increase cart items
  $(".bi-plus").click(function() {
      let amount = $(this).prev().val();
      $(this).prev().val(`${++amount}`);
      let itemId = $(this).parents(".d-cart-item-desc").data("id") || $(this).parents('.items-jenny').prev().children().data('id');
      let price = allproducts[itemId - 1].price;
      $(this)
          .parent()
          .parent()
          .prev()
          .find(".d-price-item")
          .text(price * $(this).prev().val());

      // update total price
      var totalPrice = 0;
      $(".d-price-item").each((index, i) => {
          totalPrice += parseInt(i.innerText);
      });
      $("#d-price").text(`$${totalPrice}`);

      // update local storage

      usersItems.forEach((user) => {
          if (user.name === currentUser) {
              user.cartItems.forEach(item => {
                  if (item.itemId === itemId) {
                      item.quantity = amount
                      localStorage.setItem("CurrentUser-cartItems",
                          JSON.stringify(usersItems))
                  }
              })
          }
      });

  });

  // decrease cart items
  $(".bi-dash").click(function() {
      let amount = $(this).next().val();
      if (amount > 1) {
          $(this).next().val(`${--amount}`);
          let itemId = $(this).parents(".d-cart-item-desc").data("id") || $(this).parents('.items-jenny').prev().children().data('id');
          let price = allproducts[itemId - 1].price;
          $(this)
              .parent()
              .parent()
              .prev()
              .find(".d-price-item")
              .text(price * $(this).next().val());

          // update total price
          var totalPrice = 0;
          $(".d-price-item").each((index, i) => {
              totalPrice += parseInt(i.innerText);
          });
          $("#d-price").text(`$${totalPrice}`);

          // update local storage

          usersItems.forEach((user) => {
              if (user.name === currentUser) {
                  user.cartItems.forEach(item => {
                      if (item.itemId === itemId) {
                          item.quantity = amount
                          localStorage.setItem("CurrentUser-cartItems",
                              JSON.stringify(usersItems))
                      }
                  })
              }
          });
      }
  });

  // add item from product page
  $("#addCart-Product").click(function() {

      let addedItemID = $(this).parent().prev().children().data("id");
      let quantity = $(this).prev().find('.d-amt-items').val()
      let price = allproducts[addedItemID - 1].price

      if (currentUser === null) {
          window.location.href = "login.html";
      } else {
          usersItems.forEach((user) => {
              if (user.name === currentUser) {
                  let found = user.cartItems.some(item => item.itemId === addedItemID)
                  if (found) {
                      $("#d-cart-modal").css("display", "flex");
                      $("#d-cart-info").animate({ left: "0" });
                      $("body").css("overflow", "hidden");
                  } else {
                      let addedID = {
                          itemId: addedItemID,
                          quantity: parseInt(quantity),
                          price: price
                      }
                      user.cartItems.push(addedID);
                      localStorage.setItem(
                          "CurrentUser-cartItems",
                          JSON.stringify(usersItems)
                      );
                      location.reload(true)
                  }
              }
          });

      }

  });

  // delete from cart

  $(".bi-trash3").click(function() {
      let itemId = $(this).data("id");
      usersItems.forEach((user) => {
          if (user.name === currentUser) {
              user.cartItems.splice(itemId, 1);
              localStorage.setItem(
                  "CurrentUser-cartItems",
                  JSON.stringify(usersItems)
              );
              location.reload(true);
          }
      });
  });

});