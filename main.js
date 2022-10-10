const menuEmail = document.querySelector('.navbar-email'); //hace interactivo el menu navbar
const desktopMenu = document.querySelector('.desktop-menu');//interaccion menu escritorio 

const menuHamIcon = document.querySelector('.menu');//menu asociado a imagen burger
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');//menu de shopin card

const mobileMenu  = document.querySelector('.mobile-menu'); //menu mobile
const aside = document.querySelector('.product-detail');//detalle de compras
const cardsContainer = document.querySelector('.cards-container');//detalle de compras


// se crea una variable la cual interactua con querySelector (esto son las class nombradas) estas variables funcionan en pares para hacer interactuar una con otra



menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
//


function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');


    if(!isAsideClosed){
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
    
}

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    
    }

    aside.classList.toggle('inactive');

}
 //crear una lista de producto dinamica en JS
const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',


});
productList.push({
    name: 'Pantalla',
    price: 250,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',


});
productList.push({
    name: 'Compu',
    price: 400,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',


});


/*
<div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
*/

for (product of  productList) {
    //card del producto
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');


    const productImg = document.createElement('img'); //crea elemento imagen
    productImg.setAttribute('src', product.image); //agrega imagen desde el array

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    
    const productName = document.createElement('p');
    productName.innerText =  product.name;

    productInfoDiv.appendChild(productPrice); //appenchild inserta elementos html desde JS
    productInfoDiv.appendChild(productName);



    const productInfoFigure = document.createElement('figure');
    const productInfoImgCard = document.createElement('img');
    productInfoImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productInfoImgCard);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);


    cardsContainer.appendChild(productCard);





}
