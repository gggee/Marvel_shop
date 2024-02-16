//магазин
const shop = document.querySelector('.shop')
shop.addEventListener('click', ()=>{
    window.location.href = 'shop.html'
})

//регистрация
const authorization = document.querySelector('.user')
authorization.addEventListener('click', () => {
    window.location.href = 'authorization.html'
})

//корзина
const shop_bag = document.querySelector('.shop_bag')
shop_bag.addEventListener('click', () => {
    window.location.href = 'bag.html'
})

