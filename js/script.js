window.addEventListener('DOMContentLoaded', function(){

    let products = document.querySelectorAll('.product'),
    buttons = document.querySelectorAll('button'),
    openBtn = document.querySelecto('.open');

    function createCart (){
        let cart = document.createElement('div'),
            field= document.createElement('div'),
            heading= document.createElement('h2'),
            closeBtn = document.createElement('button');

        cart.classList.add('cart');
        field.classList.add('cart-field');
        closeBtn.classList.add('close');

        heading.textContent('В нашей корзине:');
        closeBtn.textContent('Закрыть');

        document.body.appendChild(cart);
        cart.appendChild(heading);
        cart.appendChild(field);
        cart.appendChild(closeBtn);

    }
    createCart();


});



