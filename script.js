// (function(){
//     var marvelAPI = 'https://gateway.marvel.com/v1/public/comics';
//     $.getJSON( marvelAPI, {
//         apikey: '7b2f968ff0148ce90ba855709d58a99e'
//       })
//         .done(function( response ) {
//           var results = response.data.results;
//           var resultsLen = results.length;
//           var output = '<ul>'; 

//           for(var i=0; i<resultsLen; i++){
//             if(results[i].images.length > 0) {
//               var imgPath = results[i].images[0].path + '/standard_xlarge.' + results[i].images[0].extension;
//               output += '<li><img src="' + imgPath + '"><br>'+results[i].title+'</li>';
//             }
//           }  
//           output += '</ul>'
//           $('#results').append(output);
//       });

//     });
//public key
//7b2f968ff0148ce90ba855709d58a99e

//private key
//a0e0fdf1cef9389ad93b598bfdfa520f438ee6cd

//1a0e0fdf1cef9389ad93b598bfdfa520f438ee6cd7b2f968ff0148ce90ba855709d58a99e

//hash
//bf220d8fb150974b0a60668431e67c38

//https://gateway.marvel.com/v1/public/comics?ts=1&apikey=7b2f968ff0148ce90ba855709d58a99e&hash=bf220d8fb150974b0a60668431e67c38
// var marvel = {
//     render: function () {
//         const marvelcontainer = document.querySelector('.marvel_container')
//         const msg = document.querySelector('.msg')
//         const p_footer = document.querySelector('.p_footer')
//         const url_marvel = 'https://gateway.marvel.com/v1/public/characters?ts=1&apikey=7b2f968ff0148ce90ba855709d58a99e&hash=bf220d8fb150974b0a60668431e67c38'

//         $.ajax({
//             url: url_marvel,
//             type: "GET",
//             beforeSend: function () {
//                 msg.innerHTML = 'Загрузка...'
//             },
//             complete: function () {
//                 msg.innerHTML = 'Успешно выполнено...'
//             },
//             success: function (data) {
//                 p_footer.innerHTML = data.attributionHTML
//                 for (var i = 0; i < data.data.results.length; i++) {
//                     var element = data.data.results[i]
//                     console.log(element.name)
//                 }
//             },
//             error: function () { }
//         });
//     }
// };
// marvel.render()
const marvel_container = document.querySelector('.marvel_container')

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
//магазин
const shop = document.querySelector('.shop')
shop.addEventListener('click', () => {
    fetch('https://gateway.marvel.com/v1/public/characters?ts=1&apikey=7b2f968ff0148ce90ba855709d58a99e&hash=bf220d8fb150974b0a60668431e67c38')
        .then(response => response.json())
        .then(data => {
            for (var i = 0; i < data.data.results.length; i++) {
                var element = data.data.results[i]
                console.log(element)
                marvel_container.innerHTML +=
                `<div class="charaster">
                 <img src="${element.thumbnail.path}/portrait_fantastic.${element.thumbnail.extension}">
                 <h2>${element.name}</h2>
                 <p>Price: ${getRandomInt(980,3560)} $</p>
                 <div>`
            }
        })
})


//авторизация
const header = document.querySelector('header')
const user = document.querySelector('.user')
user.addEventListener('click', () => {
    header.style.visibility = 'hidden'

})
