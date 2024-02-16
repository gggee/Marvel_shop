/*---------------------------------------------------------------------------------------------------------------*/

//переход в магазин по ссылке
const link_shop = document.querySelector('.link_shop')
link_shop.addEventListener('click', (e) => {
    e.preventDefault()
    console.log("check")
    window.location.href = 'shop.html'
})

/*---------------------------------------------------------------------------------------------------------------*/

//переход в магазин по значку
const shop = document.querySelector('.shop')
shop.addEventListener('click', () => {
    window.location.href = 'shop.html'
})

/*---------------------------------------------------------------------------------------------------------------*/

const card_container = document.querySelector('.card_items')
const savedCartItems = JSON.parse(localStorage.getItem('cart_item'))
const basket_null = document.querySelector('.basket_null')
const total = document.querySelector('.total')
const total_price = document.querySelector('.total_price');
let totalPrice = 0;

if (localStorage.length > 0) {
    basket_null.style.display = 'none'
    total.style.display = 'block'
} else {
    basket_null.style.display = 'block'
    total.style.display = 'none'
}

/*---------------------------------------------------------------------------------------------------------------*/

savedCartItems.forEach(item => {
    const { title, imageUrl, price, quantity } = item
    const itemTotalPrice = price * quantity; // Calculate the total price for the item
    totalPrice += itemTotalPrice;

    const card_item_html = `
    <div class= "card_item">
        <img src="${imageUrl}">
        <div class="card_info">
            <h2 class="card_name"> ${title}</h2>
            <p class="charaster_txt">Price: ${price} $</p>
            <div class="card_line">
                    <div class="count">
                        <button class="count_minus">-</button>
                        <span>${quantity}</span>
                        <button class="count_plus">+</button>
                    </div>
                <img class="card_dlt" src="img/dlt_hover.png">
            </div>
        </div>
    </div>
    `
    card_container.innerHTML += card_item_html
});

/*---------------------------------------------------------------------------------------------------------------*/

//количество карт и обновление итоговой суммы
const totalElement = document.querySelector('.sum');
totalElement.innerHTML = `Итоговая сумма: ${totalPrice} $`;

// Update the total price whenever the quantity changes
const quantityElements = document.querySelectorAll('.count span');
const countMinusButtons = document.querySelectorAll('.count_minus');
const countPlusButtons = document.querySelectorAll('.count_plus');

quantityElements.forEach((quantityElement, index) => {
    countMinusButtons[index].addEventListener('click', () => {
        if (savedCartItems[index].quantity > 1) {
            savedCartItems[index].quantity--;
            quantityElement.textContent = savedCartItems[index].quantity;
            updateTotalPrice();
        }
    });

    countPlusButtons[index].addEventListener('click', () => {
        savedCartItems[index].quantity++;
        quantityElement.textContent = savedCartItems[index].quantity;
        updateTotalPrice();
    });
});

function updateTotalPrice() {
    totalPrice = savedCartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    totalElement.innerHTML = `Итоговая сумма: ${totalPrice} $`;
    localStorage.setItem('cart_item', JSON.stringify(savedCartItems));
}

/*---------------------------------------------------------------------------------------------------------------*/

//удаление
const dlt_btn = document.querySelectorAll('.card_dlt');
dlt_btn.forEach(button => {
    button.addEventListener('click', () => {
        const cardItem = button.closest('.card_item');
        const title = cardItem.querySelector('.card_name').textContent;

        const update_cart = savedCartItems.filter(item => item.title !== title);
        localStorage.setItem('cart_item', JSON.stringify(update_cart));
        cardItem.remove();
    });
});

/*---------------------------------------------------------------------------------------------------------------*/

//количество - плюс/минус
// Add click 
countPlusButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Get the corresponding quantity element and increase the value
        const quantityElement = document.querySelectorAll('.count span')[index];
        let quantity = parseInt(quantityElement.textContent);
        quantity++;
        quantityElement.textContent = quantity;
    });
});

// Minus click 
countMinusButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Get the corresponding quantity element and decrease the value
        const quantityElement = document.querySelectorAll('.count span')[index];
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 0) {
            quantity--;
            quantityElement.textContent = quantity;
        }
    });
});

/*---------------------------------------------------------------------------------------------------------------*/
//кнопка купить

const buyButton = document.querySelector('.buy_btn');
const watch_list = document.querySelector('.watch_list')

buyButton.addEventListener('click', function () {
    // Очищаем localStorage
    const modal = document.querySelector('.modal');
    modal.style.display = 'block';
    total.style.display = 'none';
    card_container.style.display = 'none';

    modal.textContent = 'Покупка совершена! Ожидайте заказ в течение 5 дней';

    setTimeout(function () {
        localStorage.removeItem('cart_item');
    }, 1000);
});

/*-------------------------------------------------------------------------------------------------------------*/

const logo = document.querySelector('.logo')
logo.addEventListener('click',()=>{
    window.location.href='page.html'
})