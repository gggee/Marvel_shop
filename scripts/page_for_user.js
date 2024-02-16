//магазин
const shop = document.querySelector('.shop')
shop.addEventListener('click', () => {
  window.location.href = 'shop.html'
})

//корзина
const shop_bag = document.querySelector('.shop_bag')
shop_bag.addEventListener('click', () => {
    window.location.href = 'bag.html'
})

//выход с аккаунта
//const user_log = document.querySelector('.user')

// user_log.addEventListener('click', () => {
//   user_log.innerHTML +=
//     `<div class="modal_window">
//         <h4 class="question_about_logout">Выйти из аккаунта?</h4>
//         <div class="button_wrap">
//           <button class="btn_logout">Да</button>
//           <button class="btn_cansel">Нет</button>
//         </div>
//       </div>`
// })
