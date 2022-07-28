const products = [
  {
  id: 0,
  name: "the forever after",
  price: 5.99,
  category: "wedding",
  instock: 1000,
  decription: "choclately goodness",
  imgSrc: "../images/weddingcake1.jpg",
},

{
  id: 1,
  name: "the one",
  price: 13.99,
  category: "wedding",
  instock: 1000,
  decription: "choclately goodness",
  imgSrc: "../images/weddingcake2.jpg",
},

{
  id: 2,
  name: "Tiered delight",
  price: 13.99,
  category: "wedding",
  instock: 1000,
  decription: "choclately goodness",
  imgSrc: "../images/weddingcake3.jpg",
},

{
  id: 3,
  name: "Classic",
  price: 13.99,
  category: "wedding",
  instock: 1000,
  decription: "choclately goodness",
  imgSrc: "../images/weddingcake4.jpg",
  
},

{
  id: 4,
  name: "oreo dream",
  price: 15.99,
  category: "birthday",
  instock: 300,
  decription: "choclately goodness",
  imgSrc: "../images/bcake1.jpg",
},

{
  id: 5,
  name: "ice-cream cake",
  price: 15.99,
  category: "birthday",
  instock: 300,
  decription: "choclately goodness",
  imgSrc: "../images/bcake2.jpg",
},

{
  id: 6,
  name: "fruity",
  price: 15.99,
  category: "birthday",
  instock: 300,
  decription: "choclately goodness",
  imgSrc: "../images/bcake3.jpg",
},

{
  id: 7,
  name: "chocoholic",
  price: 7.99,
  category: "birthday",
  instock: 300,
  decription: "choclately goodness",
  imgSrc: "../images/bcake4.jpg",
},



{
  id: 8,
  name: "caramel cupcakes",
  price: 1.99,
  category: "cupcakes",
  instock: 300,
  decription: "choclately goodness",
  imgSrc: "../images/cupcake1.jpg",
},

{
  id: 9,
  name: "carrot cupcakes",
  price: 1.99,
  category: "cupcakes",
  instock: 300,
  decription: "choclately goodness",
  imgSrc: "../images/cupcake2.jpg",
},

{
  id: 10,
  name: "blue swirls",
  price: 1.99,
  category: "cupcakes",
  instock: 300,
  decription: "choclately goodness",
  imgSrc: "../images/cupcake3.jpg",
},

{
  id: 11,
  name: "cherry on top",
  price: 2.99,
  category: "cupcakes",
  instock: 300,
  decription: "choclately goodness",
  imgSrc: "../images/cupcake4.jpg",
},

{
  id: 12,
  name: "lovers muffins",
  price: 2.99,
  category: "cupcakes",
  instock: 300,
  decription: "choclately goodness",
  imgSrc: "../images/cupcake5.jpg",
},

];

const reviews = [{
  identity: 1,
  img: "../images/person1.jpg",
  text: "I needed cakes for my daughters birthday and found simply cakes. They were amazing I can't recommend them any higher"
}, 

{
  identity: 2,
  img: "../images/person2.jpg",
  text: "Put simply they were the best cakes I ever had"
}, 

{
  identity: 3,
  img: "../images/person3.jpg",
  text: "Just for cakes attended to my every need. Quality cakes. Quality service"
}, 

{
  identity: 4,
  img: "../images/person4.jpg",
  text: "My wedding was made perfect by the spendid cake I ordered. I have continued ordering because I love them so much"
}, 

{
  identity: 5,
  img: "../images/person5.webp",
  text: "To say I was dissapointed was an understatement. They had no cookies!!!"
}, 
];

//select review elements

const img = document.querySelector(".carosel-img");
const text = document.querySelector(".review-description");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

//set current item

let currentItem = 0;

//load initial item for reviews

window.addEventListener("DOMContentLoaded", function(){
  
showPerson(currentItem);
})

function showPerson(person){
  const item = reviews[person];
  img.src = item.img;
  text.textContent = item.text;
}

//show next review

nextBtn.addEventListener("click", function(){
  currentItem++;
  if(currentItem > reviews.length - 1){
    currentItem = 0;
  }
  showPerson(currentItem);
})

// show previous review

prevBtn.addEventListener("click", function(){
  currentItem--;
  if(currentItem < 0) {
    currentItem = reviews.length - 1;}
    
  
  showPerson(currentItem);
});




//select elements


const shopItems = document.querySelector(".shop-items-center");
const cartItems = document.querySelector(".cart-items");
const subTotal = document.querySelector(".subtotal");
const totalCartItems = document.querySelector(".cart-number");
const cartUpdate = document.querySelector(".cart-btn");
const buttons = document.querySelectorAll(".btn");

const aside = document.querySelector(".sidebar");
const navbar = document.querySelector(".nav");
const navBtn = document.querySelector(".nav-btn");
const asideClose = document.querySelector(".close-btn-1");

const openFilter = document.querySelector(".open-filter");
const filterBtn = document.querySelector(".filter-btns");

openFilter.addEventListener("click", function(){
filterBtn.classList.toggle("show-filter-btns");
})



asideClose.addEventListener("click", function(){
  aside.classList.toggle("show-aside");
  })
  
  navBtn.addEventListener("click", function(){
      aside.classList.toggle("show-aside");
      })

      console.log(asideClose)













window.addEventListener("DOMContentLoaded", function(){
  displayAll(products)});
  
function displayAll(menuItems){
    let displayProducts = menuItems.map(function(item) {

      
        return `

        
          
        <!--single item-->
        
     
    <article class="shop-items">
    
    
         <div class="shop-item">
       
            <p class="shop-item-title">${item.name}</p>
            <img class="shop-item-img" src="${item.imgSrc}" width = "150" height="150">

    <!--button and price-->
        <div class="price-button">
         <button class="add-btn btn increase" onclick="addToCart(${item.id})" "popUp()"</button>
      <p class="shop-price">£${item.price}</p>
        </div>

        </div>
        </div>
      </article>
             `;
             
             
      });
      
      displayProducts = displayProducts.join("");
      shopItems.innerHTML = displayProducts;

      

      function popUp(){
        const pop = document.getElementById("popup");
        pop.classList.toggle("active");

        

      
          
        };
        

const clickBtn = document.querySelectorAll(".add-btn");
const xBtn = document.querySelector(".x");


xBtn.addEventListener("click", function(){
  const filterBtns = document.querySelectorAll("filter-btn");
  popUp();
})

clickBtn.forEach(function(btn){
  btn.addEventListener("click", function(e){
    let open = e.currentTarget;
    open = popUp();
  })
  
})


filterBtns.forEach(function(btn){
  btn.addEventListener("click", function(e){
    const category = e.currentTarget.dataset.id;
    const menuCategory = products.filter(function(menuItem){

      if(menuItem.category === category){
        return menuItem;
      }

    });
    if (category==="all"){
      displayAll(products);
    }
    else{displayAll(menuCategory);
    }
  })

  
  
})




};
      


const filterBtns = document.querySelectorAll(".filter-btn")

filterBtns.forEach(function(btn){
  btn.addEventListener("click", function(e){
    const category = e.currentTarget.dataset.id;
    const menuCategory = products.filter(function(menuItem){

      if(menuItem.category === category){
        return menuItem;
      }
    });
    
    if (category==="all"){
      displayAll(products);
    }
    else{displayAll(menuCategory);
    }
  })});      

       
        

    

    //cart array
    let cart = [];


    //add to cart function

function addToCart(id){

  //check if product already in cart

  if(cart.some((newItem) => newItem.id===id)){
    changeNumberOfUnits("plus", id);
    
    
   }

   else{
    const newItem = products.find((item) => item.id === id);

    cart.push({
      ...newItem,
      numberOfUnits: 1,
    });
   }
   updateCartTotal();
}

function updateCartTotal(){
  renderCartItems();
  renderSubTotal();
  
}

//render subtotal

function renderSubTotal(){
  let totalPrice = 0, totalItems = 0;

  cart.forEach((item) => {
    totalPrice += item.price * item.numberOfUnits;
    totalItems += item.numberOfUnits;
  })
subTotal.innerHTML = 

`
Subtotal (${totalItems} items): £${totalPrice.toFixed(2)}
`;
totalCartItems.innerHTML = totalItems;


}

//render cart items

function renderCartItems(){
  cartItems.innerHTML = "";
cart.forEach((item) => {
 cartItems.innerHTML += `
 
 
          
 <!--single item-->
     
    
         <div class="cart-item">
            <p class="cart-item-title">cake</p>
            <img class="shop-item-img" src="${item.imgSrc}" width = "150" height="150">

    <!--button and price-->
        <div class="price-button">
         <button class="add-btn btn increase" onclick="removeItemFromCart(${item.id})">remove from cart</button>
      <p class="cart-price">£${item.price}</p>
        </div>

        <div class="units">
          <span class="btn-minus" onclick="changeNumberOfUnits('minus', ${item.id})">-</span>
          <span class="numbers">${item.numberOfUnits}</span>
          <span class="btn-plus" onclick="changeNumberOfUnits('plus', ${item.id})">+</span>

        </div>
        
      </article>
      <!-- end of single item-->`;

});
}

//add alert



//remove items from cart

function removeItemFromCart(id){
  cart = cart.filter( (item) => item.id !== id)

  updateCartTotal();

  }


//changenumber of units 

function changeNumberOfUnits(action, id){
cart = cart.map((item) => {

  let numberOfUnits = item.numberOfUnits;

  if(item.id === id){
    if(action === "minus" && numberOfUnits > 1){
      numberOfUnits --;
    }
    else if(action==="plus" && numberOfUnits < item.instock) {
      numberOfUnits ++;
    }
  }
  return {
    ...item,
    numberOfUnits,
  };

});
updateCartTotal();
}

//open close side bar

const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
let sidebar = document.querySelector(".cart")

openBtn.addEventListener("click", function () {
sidebar.classList.add("show-sidebar");
});
closeBtn.addEventListener("click", function () {
sidebar.classList.remove("show-sidebar");
});


//alert
