$(document).ready(() => {
  
  let currentUser = localStorage.getItem("CurrentUser");
  let allproducts = JSON.parse(localStorage.getItem("Poketo-Products"));
  let userDetails = JSON.parse(localStorage.getItem('Poketo-users'))?.find((user)=> user.firstName === currentUser) 
console.log(userDetails)
  $("#d-userBioDetails").html(`
    <span>${userDetails?.firstName}</span> <span>${userDetails?.lastName}</span>
    <p>${userDetails?.Email}</p>
    <p>${userDetails?.Phone}</p>
    `);

    // get customer's orders
  let cartItems = JSON.parse(localStorage.getItem("CurrentUser-cartItems"));
  if (cartItems !== null) {
    cartItems.forEach((user) => {
      if (user.name === currentUser) {
        if (user.cartItems.length > 0) {
          $("#no-orders").addClass("d-display-none");          
          let total = 0;
          user.cartItems.forEach((product) => {
            let productID = product.itemId;
            total += product.quantity * product.price;
            const found_product = allproducts?.find(({id})=> productID === id)
           
            $("#user-order-historyInfo").append(
              `<div class="d-grid d-align-center d-gap-20 d-listOrders" style = "margin-top: 10px;">
<div class="d-flex-col d-gap-10">
<div class="d-likedProductIMG" style="background-image: url(${found_product.img})">
<div class='OrderQ d-flex d-align-center d-justify-center'>${product.quantity}</div>
</div>

</div>                               
<p class="d-orderedProductName">${found_product.productName}</p>

<b class="d-priceItem">$${product.price}</b>
</div>`
            );
          });

          $("#d-TotalOrders").text(`$${total}`);
         
        }
        else{
          $("#divTotal").addClass("d-display-none");
        }
      }
    });
  }


  //remove logged users details
  $("#d-userslogout-link").click(function () {
    localStorage.removeItem("LoggedUser");
    localStorage.removeItem("Selected-Product");
  });
});
