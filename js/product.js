$(document).ready(() => {
    //get all items
    let products = JSON.parse(localStorage.getItem('Poketo-Products')) || []
        // get selected item
    let selectedProduct = JSON.parse(localStorage.getItem('Selected-Product'))
    let showStars = 'flex'
    if (selectedProduct.quantity === null) {
        showStars = 'none'
    }
    // append to product card


    $('.jenny-item ').css('background-image', `url(${selectedProduct.img})`)
    $('#j-selectedProduct-info').html(
        ` <div data-id = ${selectedProduct.id}>
        <div class="mustard d-align-center" style="background-color: ${selectedProduct.tagColor};">
          <p>${selectedProduct.tag}</p>
    
      </div>
      <h1>${selectedProduct.productName}</h1>
      <div class="jenny-flex">
      
          <h3>$${selectedProduct.price}</h3>
          <div class = "d-flex">
          <div class="star" style = "display: ${showStars}">
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
                </div>
                <span style = "display: ${showStars}" class="d-slider-product-rating">${selectedProduct.stars}(${selectedProduct.quantity})</span>
          </div>
                
           
      </div>
      <!-- <p>color:blue</p> -->
      <div class="jenny-icons d-product-colors">
            <!-- available colors -->

      </div>
      <div class="jenny-b">
          <p style="color: #0085ca;">Free Returns & Free Shipping over $50</p>
      </div>
      </div>
      `)


    let productRating = $('#j-selectedProduct-info').find('.star').find('svg')
    productRating.each((i, svg) => {
        $(svg).find('path').css('fill', '#ef4043')
        if (i === Math.round(selectedProduct.stars) - 1) {
            return false;
        }

    })
    if ('availableImage' in selectedProduct) {
        selectedProduct.availableImage.forEach((img, i) => {
            $('#j-selectedProduct-info').find('.d-product-colors').append(`<div class="d-color-selection-outer">
                          <div class="d-color-selection" data-id=${i}" style="background-image: url(${img}); background-color: transparent"></div>
                      </div>`)
        })
    }
    if ('availableColors' in selectedProduct) {
        selectedProduct.availableColors.forEach((color, i) => {
            $('#j-selectedProduct-info').find('.d-product-colors').append(`<div class="d-color-selection-outer">
                          <div class="d-color-selection" data-id=${i}" style="background-image: url(''); background-color: ${color}"></div>
                      </div>`)
        })
    }

    $('#reviewScore').text(selectedProduct.stars)

    $('.progress-bar').each((index, element)=>{
        let score = (Math.round(selectedProduct.stars))
       let element_value = ($(element).data('count'))
        if(score === element_value){
            $(element).css('width', `${(selectedProduct.stars/ 5)* 100}%`)
        }
        
    })

    $('.color2').click(function() {
        let selectedId = $(this).prev().data('id');
        products.forEach((item) => {
            if (selectedId === item.id) {
                localStorage.setItem('Selected-Product', JSON.stringify(item))
            }
        })

        window.location.href = 'product.html'
    })

    $('.d-product-colors').each((index, i) => {
        if ($(i).children()[0]) {
            $(i).children()[0].classList.add('d-selected-color')
        }  
    })
})