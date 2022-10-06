let userName = prompt('Как Вас зовут?')
let userAge = prompt('Сколько Вам лет?')

alert(
  `Вас зовут ${userName.toLowerCase().trim()} и Вам ${Number(
    userAge.trim()
  )} лет`
)
