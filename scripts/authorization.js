function loginUser(email, password) {
    const users = JSON.parse(localStorage.getItem('users')) || []
    const subtitle = document.querySelector('.msg_error')

    const authenticatedUser = users.find(user=>user.email===email && user.password ===password)
    if(authenticatedUser){
        subtitle.textContent='Вход выполнен успешно'
        window.location.href= 'page_for_user.html'
    }
    else{
        subtitle.textContent='Неверный пароль либо почта'
    }
}

document.querySelector('.authorization_btn').addEventListener('click', function(event){
    event.preventDefault()

    const email = document.getElementById('emailInput').value
    const password = document.getElementById('passwordInput').value

    loginUser(email,password)
})

document.querySelector('.link').addEventListener('click', function(event){
    event.preventDefault()
    window.location.href= 'registration.html'
})