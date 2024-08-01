$(document).ready(function() {

    function createProducts() {
        const products = [{
                id: 1,
                img: 'https://www.poketo.com/cdn/shop/files/PK-Nav-Spectrum_Wall_Planner.gif?v=1679067757&width=300',
                imgHover: 'https://www.poketo.com/cdn/shop/files/PK-PDP-SpectrumWallPlanner-Gradient.jpg?v=1708606361&width=500',
                tag: 'Best Seller',
                tagColor: '#ffc845',
                productName: 'Spectrum Wall Planner',
                stars: '4.8',
                quantity: 53,
                price: 48,
                availableImage: ['https://www.poketo.com/cdn/shop/files/Screenshot_2024-02-22_at_18.05.40.png?v=1708605361',
                    'https://www.poketo.com/cdn/shop/files/Vibrant.png?v=1679422696',
                    'https://www.poketo.com/cdn/shop/files/Earthy.png?v=1679422738',
                    'https://www.poketo.com/cdn/shop/files/Grey.png?v=1679422774',
                    'https://www.poketo.com/cdn/shop/files/Screenshot_2024-01-19_at_17.55.14.png?v=1705667178'

                ]

            },
            {
                id: 2,
                img: 'https://www.poketo.com/cdn/shop/files/earthy-mini-planner.gif?v=1711386043&width=500',
                imgHover: 'https://www.poketo.com/cdn/shop/files/PK-PDP-ATF-SpectrumMiniPlanner-earthy.webp?v=1711386098&width=500',
                tag: 'New Color',
                tagColor: '#ffc845',
                productName: 'Spectrum Mini Planner',
                stars: '3.8',
                quantity: 5,
                price: 24,
                availableImage: [
                    'https://www.poketo.com/cdn/shop/files/Earthy.png?v=1679422738',
                    'https://www.poketo.com/cdn/shop/files/Screenshot_2024-01-19_at_17.55.14.png?v=1705667178',
                    'https://www.poketo.com/cdn/shop/files/Grey.png?v=1679422774',
                ]

            },
            {
                id: 3,
                img: 'https://www.poketo.com/cdn/shop/files/PK-ProjectPLanner-SpringCollection-Red-Front-Product_80543c51-26df-4902-a4a9-dcc413031897.webp?v=1708514466&width=600',
                imgHover: 'https://www.poketo.com/cdn/shop/files/PK-ProjectPLanner-SpringCollection-Red-Back-Product.webp?v=1708514422&width=600',
                tag: 'Best Seller',
                tagColor: '#ffc845',
                productName: 'Project Planner',
                stars: '4.3',
                quantity: 13,
                price: 38,
                availableColors: [
                    '#DD1313',
                    '#EACA0A',
                    '#4B995C',
                    '#101010',
                    '##A38AC1',
                    '##AE7251',
                ],
                availableImage: [
                    'https://www.poketo.com/cdn/shop/files/Midnight.png?v=1679423522'

                ]

            },
            {
                id: 4,
                img: 'https://www.poketo.com/cdn/shop/files/PK-ConceptPLanner-SpringCollection-Blocks-Front-Product.webp?v=1708515727&width=500',
                imgHover: 'https://www.poketo.com/cdn/shop/files/PK-ConceptPLanner-SpringCollection-Blocks-Back-Product.webp?v=1708515753&width=600',
                tag: 'Best Seller',
                tagColor: '#ffc845',
                productName: 'Concept Planner',
                stars: '5.0',
                quantity: 13,
                price: 36,
                availableColors: [
                    '#DD1313',
                    '#0000FF',
                    '#4B995C',
                    '##A38AC1'

                ],
                availableImage: [
                    'https://www.poketo.com/cdn/shop/files/Screenshot_2024-02-21_at_17.13.27.png?v=1708515814',
                    'https://www.poketo.com/cdn/shop/files/Midnight.png?v=1679423522'
                ]

            },
            {
                id: 5,
                img: 'https://www.poketo.com/cdn/shop/files/Pk-AccordionFiler-Large-Product-Front.webp?v=1719497013&width=356',
                imgHover: 'https://www.poketo.com/cdn/shop/files/Pk-AccordionFiler-Large-Product-2.webp?v=1717070233&width=600',
                tag: 'Best Seller',
                tagColor: '#ffc845',
                productName: 'Accordion Pro Filer',
                stars: '5.0',
                quantity: 2,
                price: 38,
                availableColors: [
                    '#101010'
                ],
                availableImage: [
                    'https://www.poketo.com/cdn/shop/files/Screenshot_2024-06-12_at_19.22.39.png?v=1718200383'
                ],
                size: ['Large', 'Small']

            },

            {
                id: 6,
                img: 'https://www.poketo.com/cdn/shop/products/Everything-Desk-Pad-01.jpg?v=1651186991&width=330',
                imgHover: 'https://www.poketo.com/cdn/shop/products/Everyday-Desk-Pad-Stop-Motion-01.gif?v=1651186991&width=500',
                tag: 'Best Seller',
                tagColor: '#ffc845',
                productName: 'Everything Desk Pad',
                stars: '5.0',
                quantity: 8,
                price: 18


            },
            {
                id: 7,
                img: 'https://www.poketo.com/cdn/shop/products/PK-D-PDP-Wallet-Dome-Navy-ATF-01-2x_14117993-bc68-43fc-9469-1e38db9cbd75.jpg?v=1666990517&width=424',
                imgHover: 'https://www.poketo.com/cdn/shop/products/Dome-Wallet-Navy-Open.jpg?v=1583867392&width=424',
                tag: 'Best Seller',
                tagColor: '#ffc845',
                productName: 'Dome Wallets',
                stars: '3.9',
                quantity: 10,
                price: 38,
                availableColors: [
                    '#0000FF',
                    '#1ABE40',
                    '#A9D69E',
                    '#F2A8C4',
                    '#DD1313',
                    '#EACA0A',
                    '#101010'
                ]


            },
            {
                id: 8,
                img: 'https://www.poketo.com/cdn/shop/files/PK-doublewall-groovycup-product-teal.webp?v=1710509984&width=500',
                imgHover: 'https://www.poketo.com/cdn/shop/files/PK-Lookbook-FW23-Glassware-GroovyCup-Teal-hand_copy.webp?v=1710510010&width=220',
                tag: 'New Color',
                tagColor: '#ffc845',
                productName: 'Double Wall Groovy Glass',
                stars: '4.9',
                quantity: 7,
                price: 28,
                availableColors: [
                    '#38B5C6',
                    '#0000FF',
                    '#4B995C',
                    '#F2A8C4'
                ]

            },
            {
                id: 9,
                img: 'https://www.poketo.com/cdn/shop/files/PK-doublewall-mug-product-teal.webp?v=1710510149&width=500',
                imgHover: 'https://www.poketo.com/cdn/shop/files/PK-Lookbook-FW23-Glassware-DoubleWallMug-Teal_TEA_copy.webp?v=1710510171&width=500',
                tag: 'New Color',
                tagColor: '#ffc845',
                productName: 'Double Wall Mug',
                stars: '5.0',
                quantity: 3,
                price: 28,
                availableColors: [
                    '#38B5C6',
                    '#0000FF',
                    '#4B995C',
                    '#F2A8C4'
                ]

            },
            {
                id: 10,
                img: 'https://www.poketo.com/cdn/shop/files/1-PK-Headspace-MindfulnessCards.jpg?v=1706712273&width=356',
                imgHover: 'https://www.poketo.com/cdn/shop/files/PK-Headspace-MindfulnessCards-1.jpg?v=1707153855&width=310',
                tag: 'Best Seller',
                tagColor: '#ffc845',
                productName: 'Headspace x Poketo Mindfulness Cards',
                stars: '5.0',
                quantity: 1,
                price: 8

            },
            {
                id: 11,
                img: 'https://www.poketo.com/cdn/shop/files/YieldXHeadspace-instantsunshine-product_fff05d45-23c0-4ad2-b641-829248bd9d18.webp?v=1707228411&width=500',
                imgHover: 'https://www.poketo.com/cdn/shop/files/HeadspaceCollabPoketoandyield1940-pdpv1copia_6772a246-58c9-4f18-902f-fc2ba7e9e561.jpg?v=1707141507&width=600',
                tag: 'New!',
                tagColor: '#73ccf3',
                productName: 'Headspace x YIELD Instant Sunshine Candle',
                stars: '4.0',
                quantity: 1,
                price: 32

            },
            {
                id: 12,
                img: 'https://www.poketo.com/cdn/shop/files/YieldXHeadspace-miniretreat-product.webp?v=1706538267&width=500',
                imgHover: 'https://www.poketo.com/cdn/shop/files/HeadspaceCollabPoketoandyield1940-pdpv1copia_6772a246-58c9-4f18-902f-fc2ba7e9e561.jpg?v=1707141507&width=600',
                tag: 'New!',
                tagColor: '#73ccf3',
                productName: 'Headspace x YIELD Mini Retreat Candle',
                stars: null,
                quantity: null,
                price: 32

            },
            {
                id: 13,
                img: 'https://www.poketo.com/cdn/shop/files/YieldXHeadspace-unwindmind-product.webp?v=1706538292&width=500',
                imgHover: 'https://www.poketo.com/cdn/shop/files/HeadspaceCollabPoketoandyield1940-pdpv1copia_6772a246-58c9-4f18-902f-fc2ba7e9e561.jpg?v=1707141507&width=600',
                tag: 'New!',
                tagColor: '#73ccf3',
                productName: 'Headspace x YIELD Unwind Your Mind Candle',
                stars: null,
                quantity: null,
                price: 32

            },
            {
                id: 14,
                img: 'https://www.poketo.com/cdn/shop/files/YieldXHeadspaceproduct0595copia.webp?v=1707228412&width=500',
                imgHover: 'https://www.poketo.com/cdn/shop/files/YieldXHeadspace-instantsunshine-product_fff05d45-23c0-4ad2-b641-829248bd9d18.webp?v=1707228411&width=500',
                tag: 'New!',
                tagColor: '#73ccf3',
                productName: 'Headspace x YIELD Candle Trio',
                stars: null,
                quantity: null,
                price: 32

            },
            {
                id: 15,
                img: 'https://www.poketo.com/cdn/shop/files/PK-EverydayMindfulnessCalendar-Product-1.webp?v=1697459428&width=500',
                imgHover: 'https://www.poketo.com/cdn/shop/files/PK-EverydayMindfulnessCalendar-Product-2.webp?v=1697459429&width=424',
                tag: '',
                tagColor: 'transparent',
                productName: 'Headspace x Poketo Calendar',
                stars: '2.0',
                quantity: 1,
                price: 24

            },
            {
                id: 16,
                img: 'https://www.poketo.com/cdn/shop/files/PK-FeelItAllGelPens-Product-1.webp?v=1697459494&width=500',
                imgHover: 'https://www.poketo.com/cdn/shop/files/PK-FeelItAllGelPens-Product-2.webp?v=1697459494&width=500',
                tag: '',
                tagColor: 'transparent',
                productName: 'Headspace x Poketo Pens',
                stars: '5.0',
                quantity: 2,
                price: 14

            },
            {
                id: 17,
                img: 'https://www.poketo.com/cdn/shop/files/PK-loveYourMindJournal-Product-1.webp?v=1697459559&width=500',
                imgHover: 'https://www.poketo.com/cdn/shop/files/PK-loveYourMindJournal-Product-2.webp?v=1697459558&width=424',
                tag: 'Best Seller',
                tagColor: '#ffc845',
                productName: 'Headspace x Poketo Journal',
                stars: '4.8',
                quantity: 4,
                price: 28

            },
            {
                id: 18,
                img: 'https://www.poketo.com/cdn/shop/files/PK-MentalNotes-Product-1.webp?v=1697459632&width=500',
                imgHover: 'https://www.poketo.com/cdn/shop/files/PK-MentalNotes-Product-2.webp?v=1697459633&width=500',
                tag: '',
                tagColor: 'transparent',
                productName: 'Headspace x Poketo Sticky Notes',
                stars: '5.0',
                quantity: 1,
                price: 8

            },
        ]

        // set products in local storage
        localStorage.setItem('Poketo-Products', JSON.stringify(products))
    }

    // get all products
    let products = JSON.parse(localStorage.getItem('Poketo-Products'))
        // call function to load products
    if (products === null) {
        createProducts();
    }



    //slick functions
    $('.slider-nav1').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024, // at 1024px and below
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768, // at 768px and below
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480, // at 480px and below
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        prevArrow: '.d-prev-arrow',
        nextArrow: '.d-next-arrow'
    });
    $('.slider-nav2').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024, // at 1024px and below
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768, // at 768px and below
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480, // at 480px and below
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        prevArrow: '.d-prev-arrow',
        nextArrow: '.d-next-arrow'
    });



    // get products for each slider
    let products1 = JSON.parse(localStorage.getItem('Poketo-Products')).splice(0, 9)
    let products2 = JSON.parse(localStorage.getItem('Poketo-Products')).splice(9)

    products1.forEach((product) => {
        let showSize = 'none'
        if ('size' in product) {
            showSize = 'flex'
        }
        let productItem1 = $(` <div class="d-slick-items d-grid d-justify-center">
                <div class="d-slider-product-item d-flex" data-id =${product.id} style="background-image: url(${product.img})" onMouseOver="this.style.backgroundImage='url(${product.imgHover})'" onMouseOut="this.style.backgroundImage='url(${product.img})'">
                    <div class="d-item-tag" style="background-color: ${product.tagColor}">${product.tag}</div>
                    <button class="d-addCart d-display-none">Add to Cart</button>
                </div>
                <div class="d-slider-product-desc">
                    <p class="d-product-title-slider">${product.productName}</p>
                    <div class="d-flex d-justify-between d-align-center">
                        <div class="star">
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
                            <span class="d-slider-product-rating">${product.stars}(${product.quantity})</span>
                        </div>
                        <p class="d-slider-product-price">$${product.price}</p>
                    </div>
                    <div class="d-gap-20 d-product-selected-size" style="display: ${showSize};">
                        <div class="d-selected-size">Large</div>
                        <div> Small</div>
                    </div>
                    <div class="d-product-colors d-flex d-gap-10">
                        
                    </div>
                </div>
            </div>`)


        let productRating = productItem1.find('.star').find('svg')
        productRating.each((i, svg) => {
            $(svg).find('path').css('fill', '#ef4043')
            if (i === Math.round(product.stars) - 1) {
                return false;
            }

        })
        if ('availableImage' in product) {
            product.availableImage.forEach((img, i) => {
                productItem1.find('.d-product-colors').append(`<div class="d-color-selection-outer">
                            <div class="d-color-selection" data-id=${i}" style="background-image: url(${img}); background-color: transparent"></div>
                        </div>`)
            })
        }
        if ('availableColors' in product) {
            product.availableColors.forEach((color, i) => {
                productItem1.find('.d-product-colors').append(`<div class="d-color-selection-outer">
                            <div class="d-color-selection" data-id=${i}" style="background-image: url(''); background-color: ${color}"></div>
                        </div>`)
            })
        }
        $('.slider-nav1').slick('slickAdd', productItem1)
    })

    products2.forEach((product) => {
        let showStars = 'flex'
        if (product.quantity === null) {
            showStars = 'none'
        }
        let productItem2 = $(`<div class="d-slick-items d-grid d-justify-center">
            <div class="d-slider-product-item d-flex" data-id = ${product.id} style="background-image: url(${product.img})" onMouseOver="this.style.backgroundImage='url(${product.imgHover})'" onMouseOut="this.style.backgroundImage='url(${product.img})'">
                <div class="d-item-tag" style ="background-color: ${product.tagColor}">${product.tag}</div>
                <button class="d-addCart d-display-none">Add to Cart</button>
            </div>
            <div class="d-slider-product-desc">
                <p class="d-product-title-slider">${product.productName}</p>
                <div class="d-flex d-justify-between d-align-center">
                    <div class="star" style="display:${showStars}">
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
                        <span class="d-slider-product-rating">${product.stars}(${product.quantity})</span>
                    </div>
                    <p class="d-slider-product-price">$${product.price}</p>
                </div>

            </div>
        </div>`)

        let productRating = productItem2.find('.star').find('svg')
        productRating.each((i, svg) => {
            $(svg).find('path').css('fill', '#ef4043')
            if (i === Math.round(product.stars) - 1) {
                return false;
            }

        })
        $('.slider-nav2').slick('slickAdd', productItem2)
    })
    $('.d-product-colors').each((index, i) => {
        if ($(i).children()[0]) {
            $(i).children()[0].classList.add('d-selected-color')
        }  
    })

    $('.d-slider-product-item').mouseover(function() {
        $(this).find('.d-addCart').show()
    })

    $('.d-slider-product-item').mouseout(function() {
        $(this).find('.d-addCart').hide()
    })


});