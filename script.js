let nameTwo = "alex"
let money = 10000
let account = 7777
let nameQuestion = prompt("Как вас зовут?").toLowerCase()
if (nameQuestion === "alex") {
    alert(`Добро пожаловать!`)
    let accountNumber = +prompt("Номер счета?")
    if (accountNumber === 7777) {
        alert("Номер счета найден")
        let cashOut = +prompt("Сколько обналичить?")
        if (cashOut <= money) {
            alert(`Все отлично!`)
            
            alert(`Вы сняли ${cashOut} и на вашем счету осталось ${money - cashOut}`)
        } else (
            alert("Недостаточно средств!")
        )
    } else (
        alert("Номер счета не найден, досвидули")
    )
} else (
    alert("Пользователь не найден, досвидули")
)
alert("Добро пожаловать в клуб, пожалуйста введите свои данные")
let clubName = prompt("Ваше имя").toLowerCase()
if (clubName[0] === "a") {
alert("Первый этап пройден!")
let age = +prompt("Ваш возраст")
if (age >=20 && age <= 40) {
    alert("Второй этап пройден!")
    let cash = +prompt("Сколько у вас денег c собой?(В долларах)")
    if (cash >= 100) {
        alert("Третий этап пройден!")
        let client = +prompt("Сколько вас?(У нас только 10 свободных мест)")
        if  (client >=1 && client <= 10) {
            alert("Последний этап пройден! Можете проходить")
        } else (
            alert("У нас недостаточно мест!")
        )
    } else (
        alert("Доступ запрещен!")
    )
} else (
    alert("Доступ запрещен!")
)
} else (
    alert("Доступ запрещен!")
)
