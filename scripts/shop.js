function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

/*-----------------------------------------------------------------------------------------------------------------*/

let cartItems = []
fetch('https://gateway.marvel.com/v1/public/characters?ts=1&apikey=7b2f968ff0148ce90ba855709d58a99e&hash=bf220d8fb150974b0a60668431e67c38')
    .then(responce => responce.json())
    .then(data => {
        const marvel_container = document.querySelector('.marvel_container')
        for (var i = 0; i < data.data.results.length; i++) {
            var element = data.data.results[i]
            const title = element.name
            const imageUrl = `${element.thumbnail.path}/portrait_fantastic.${element.thumbnail.extension}`
            const price = getRandomInt(1080, 3560)
            const itemHtml =
                `<div class="charaster">
                <img src="${imageUrl}">
                <h2>${title}</h2>
                    <div class="charaster_info">
                    <p class="charaster_txt">Price: ${price} $</p> 
                    <div class="shop_bag"><img class="img_bag" src="img/corzina.png" alt=""></div>
                    </div>
            </div>`
            const item = document.createElement('div')
            item.innerHTML = itemHtml
            marvel_container.append(item)

            const addBtn = item.querySelector('.shop_bag')
            addBtn.addEventListener('click', () => {
                const existingItemIndex = cartItems.findIndex(item => item.title == title)
                if (existingItemIndex !== -1) {
                    cartItems[existingItemIndex].quantity++;
                } else {
                    cartItems.push({ title, imageUrl, price, quantity: 1 })
                }
                localStorage.setItem('cart_item', JSON.stringify(cartItems))
            })
        }
    })

/*-----------------------------------------------------------------------------------------------------------------*/

//авторизация
const authorization = document.querySelector('.user')
authorization.addEventListener('click', () => {
    window.location.href = 'authorization.html'
})

/*-----------------------------------------------------------------------------------------------------------------*/

//корзина
const shop_bag = document.querySelector('.shop_bag')
shop_bag.addEventListener('click', () => {
    window.location.href = 'bag.html'
})

/*-----------------------------------------------------------------------------------------------------------------*/

//поиск
const search = document.querySelector('.input_search')
const btn = document.querySelector('.btn_search')

function search_card() {
    const searchName = search.value.toLowerCase()
    const charasters = document.querySelectorAll('.charaster')

    charasters.forEach(hero => {
        const hero_name = hero.querySelector('h2').innerText.toLowerCase()
        if (hero_name.includes(searchName)) {
            hero.style.display = 'block'
            hero.style.cssText = `
            img{
                width:240;
                height:360;
            }`
        } else {
            hero.style.display = 'none'
        }
    });
    search.value = ' '
}
btn.addEventListener('click', search_card)

/*-----------------------------------------------------------------------------------------------------------------*/
const sortInput = document.querySelector('.sort_input');
sortInput.options[1].classList.add('up'); // Добавляет класс 'up' к первому <option>
sortInput.options[2].classList.add('down');

const sortButton = document.querySelector('.btn_sort');
sortButton.addEventListener('click', () => {
    const sortInput = document.querySelector('.sort_input');
    const selectedOption = sortInput.options[sortInput.selectedIndex];

    if (selectedOption.classList.contains('up')) {
        sortByPriceAscending();
    } else if (selectedOption.classList.contains('down')) {
        sortByPriceDescending();
    } else {
        // По умолчанию не выполняется сортировка
    }
});

function sortByPriceAscending() {
    const marvelContainer = document.querySelector('.marvel_container');
    const sortedItems = Array.from(marvelContainer.children).sort((a, b) => {
        const priceA = getPriceFromItem(a);
        const priceB = getPriceFromItem(b);
        return priceA - priceB;
    });
    marvelContainer.innerHTML = '';
    sortedItems.forEach(item => {
        marvelContainer.appendChild(item);
    });
}

function sortByPriceDescending() {
    const marvelContainer = document.querySelector('.marvel_container');
    const sortedItems = Array.from(marvelContainer.children).sort((a, b) => {
        const priceA = getPriceFromItem(a);
        const priceB = getPriceFromItem(b);
        return priceB - priceA;
    });
    marvelContainer.innerHTML = '';
    sortedItems.forEach(item => {
        marvelContainer.appendChild(item);
    });
}

function getPriceFromItem(item) {
    const priceText = item.querySelector('.charaster_txt').textContent;
    const price = parseInt(priceText.replace('Price: ', '').replace(' $', ''));
    return price;
}

/*------------------------------------------------------------------------------------------------------------*/

const logo= document.querySelector('.logo')
logo.addEventListener('click',()=>{
    window.location.href='page.html'
})