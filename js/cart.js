const product =
    [
        {
            "img": `../img/rectangle.png`,
            "headline": "B-TIGHT booty Mask",
            "currency": "$",
            "startingPrice": 99,
            "newPrice": null
        },
        {
            "img": `../img/rectangle2.png`,
            "headline": "Body Reshaping Collection",
            "currency": "$",
            "startingPrice": 129,
            "newPrice": 99
        }
    ];

const productUpdate =
    [
        {
            "bestDeal" : 1,
            "category": "BEST VALUE",
            "img": `../img/product1.png`,
            "headline": "2 X B-TIGHT ",
            "info" : "Add another jar of our B-TIGHT Booty Mask and save! ",
            "currency": "$",
            "startingPrice": 98,
            "newPrice": 80,
            "reviews": 10,
            "information": 0,
            "additionalInformation": ""
        },
        {
            "bestDeal" : 0,
            "category": null,
            "img": `../img/product2.png`,
            "headline": "GET-PEACHY",
            "info" : "Booty Scrub",
            "currency": "$",
            "startingPrice": 98,
            "newPrice": 80,
            "reviews": 32,
            "information": 1,
            "additionalInformation": ""
        },
        {
            "bestDeal" : 0,
            "category": null,
            "img": `../img/product3.png`,
            "headline": "GET-PEACHY",
            "info" : "Booty Scrub",
            "currency": "$",
            "startingPrice": 35,
            "newPrice": 29,
            "reviews": 5,
            "information": 0,
            "additionalInformation": ""
        }
    ];

function inCart(data) {
    document.getElementById("cart-product").innerHTML = data.map((e, key) =>
        `<div class="card-product-wrap" id="card-product-${key}">
           <div class="card-product-content">
              <img src="${e.img}" class="card-product-img" alt="${e.headline}">
            <div class="card-product-info">
                <div class="card-product-headline">${e.headline}</div>
                
                <div class="card-product-quantity">
                 <div class="quantity_inner">        
                   <button class="btn btn_minus">
                      <img src="../img/minus.svg" alt="minus">
                   </button>
                   <input type="text" class="quantity" value="1" data-max-count="20">
                   <button class="btn btn_plus">
                     <img src="../img/plus.svg" alt="plus">
                   </button>
                 </div>
                 <div class="cart-price">
                   <div class="new-price ${e.newPrice === null && "none-new-price"}">
                      <p>${e.currency}${e.newPrice}</p>
                   </div>
                   <div class="old-price ${e.newPrice !== null && "update-old-price"}">
                      <p>${e.currency}${e.startingPrice}</p>
                   </div>
                 </div>
               </div>
            </div>
           </div>

            <div class="ard-product-delete">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L11 11" stroke="#C4C4C4" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1 11L11 1" stroke="#C4C4C4" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
           
        </div>`).join("");
}

function numberGoods(data) {
    document.getElementById("number-goods").innerHTML = `(${data.length})`;
}


function cartProductUpdate(data) {
    document.getElementById("cart-product-update").innerHTML = data.map((e, key) =>
        `<div class="cart-update-wrap ${e.bestDeal === 1 ? "cart-update-best" : "card-update-simple"}" id="cart-update-${key}">
          <div class="card-bestDeal ${e.bestDeal === 0 && "none-bestDeal"}">
                 <img src="../img/sale.svg" alt="${e.category}">
                 <p>${e.category}</p>
          </div>
           <div class="card-update-content">
              <div class="card-update-content-left"> 
                 <div class="cart-update-img">
                    <div>         
                      <img src="${e.img}" alt="${e.headline}">
                    </div> 
                 </div>
                 <div>
                   <div class="cart-update-price">
                    <div class="old-update-price ${e.newPrice !== null && "update-old-price"}">
                        <p>${e.currency}${e.startingPrice}</p>
                     </div>
                     <div class="new-update-price ${e.newPrice === null && "none-new-price"}">
                        <p>${e.currency}${e.newPrice}</p>
                     </div>
                   </div>
                 </div>
              </div>
              
              <div class="card-update-content-right">
                 <div class="card-update-content-headline">
                   <h4>${e.headline}</h4>
                   <a class="additional-information ${e.information === 0 && "none"}">
                     <img src="../img/info.png" alt="info">
                   </a>
                 </div>
               
                <p>${e.info}</p>
                <div class="cart-update-rating  ${e.bestDeal === 1 ? "none" : "show"}">
                   <div class="rating-area">
                     <input type="radio" id="star-1" name="rating" value="1">
                     <label for="star-1">
                       <i class="fa"> &#xf005;</i>
                     </label>
                     <input type="radio" id="star-2" name="rating" value="2">
                     <label for="star-2">
                       <i class="fa"> &#xf005;</i>
                     </label>   
                     <input type="radio" id="star-3" name="rating" value="3">
                     <label for="star-3">
                       <i class="fa"> &#xf005;</i> 
                     </label>
                     <input type="radio" id="star-4" name="rating" value="4">
                     <label for="star-4">
                        <i class="fa"> &#xf005;</i>
                     </label>    
                     <input type="radio" id="star-5" name="rating" value="5">
                     <label for="star-5">
                        <i class="fa"> &#xf005;</i>
                     </label>                  
                   </div>
                   <a href="#" class="reviews-title">(${e.reviews} reviews)</a>
                </div>
                <div class="card-update-btn">
                   <button class="card-update-button ${e.bestDeal === 1 ? "card-update-black" : "card-update-pink"}">
                      ${e.bestDeal === 1 ? "UPGRADE" : "+ ADD"}
                   </button>
                </div>
                                              
              </div>
            </div>
           </div>
           
        </div>`).join("");
}

numberGoods(product);
inCart(product);
cartProductUpdate(productUpdate);