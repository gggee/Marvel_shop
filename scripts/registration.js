function registerUser(email, password) {
    const users = JSON.parse(localStorage.getItem("users")) || []
    const subtitle = document.querySelector('.subtitle')

    const existingUser = users.find(user => user.email === email)
    if (existingUser) {
        subtitle.textContent = 'Пользователь с такой почтой уже зарегистрирован'
        return;
    }
    if (password.length < 6) {
        subtitle.textContent = 'Пароль не может быть меньше 6 знаков'
        return;
    }

    //добавление нового пользователя в массив
    const newUser = { email, password }
    users.push(newUser)

    //обновить локалсторедж и записать массив
    localStorage.setItem('users', JSON.stringify(users))
    subtitle.textContent ='Регистрация успешна'
    window.location.href = 'authorization.html'
}


document.querySelector('.btn_register').addEventListener('click', function (event) {
    event.preventDefault() //не должна обновляться

    const email = document.getElementById('emailInput').value
    const password = document.getElementById('passwordInput').value

    registerUser(email, password)
})