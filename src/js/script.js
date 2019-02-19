// Need Use ES6

window.addEventListener('DOMContentLoaded', () => {
      const cartWrapper = document.querySelector('.cart__wrapper'),
        cart = document.querySelector('.cart'),
        close = document.querySelector('.cart__close'),
        open = document.querySelector('#cart'),
        goodsBtn = document.querySelectorAll('.goods__btn'),
        products = document.querySelectorAll('.goods__item'),
        confirm = document.querySelector('.confirm'),
        badge = document.querySelector('.nav__bage'),
        totalCost = document.querySelector('.cart__total > span'),
        titles = document.querySelectorAll('.goods__title');

      function openCart() {
        cart.style.display = 'block';
        document.body.style.overflow = 'hidden';
      }

      function closeCart() {
        cart.style.display = 'none';
        document.body.style.overflow = '';
      }

      open.addEventListener('click', openCart);
      close.addEventListener('click', closeCart);

      //add Button for item(cards)
      goodsBtn.forEach(function (btn, i) {
        btn.addEventListener('click', () => {
          let item = products[i].cloneNode(true),
            trigger = item.querySelector('button'),
            removeBtn = document.createElement('div'),
            empty = cartWrapper.querySelector('.empty');

          trigger.remove();

          removeBtn.classList.add('goods__item-remove'); //build Class for button
          removeBtn.innerHTML = '&times';
          item.appendChild(removeBtn); // Adding item > div which has removeBtn

          cartWrapper.appendChild(item);
          if (empty) {
            empty.remove();
          }
        });
      });