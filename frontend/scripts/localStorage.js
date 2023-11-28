export function getLocal(name) {
    if (localStorage.getItem(name)) {
        return true
    }
    return false
}

function addLocal(name) {
    localStorage.setItem(name, "BUY")
}

function removeLocal(name) {
    localStorage.removeItem(name)
}

export function uploadBin() { // Обновление иконки с корзиной
    const iconCircle = document.getElementById('icon_circle')
    const sheets = document.styleSheets[1] // Заходим в стили 
    sheets.deleteRule(0) // Убираем переменную
    sheets.insertRule(`:root{--bugcontent:"${localStorage.length}"}`) // Добавляем обновлённую
    if (localStorage.length == 0) { // Меняем класс в зависимости от переменной
        iconCircle.classList.remove("icon_circle_active")
    } else {
        iconCircle.classList.add("icon_circle_active")
        if (localStorage.length < 10) {
            iconCircle.classList.add("icons_circle_1")
            iconCircle.classList.remove("icons_circle_10")
        } else {
            iconCircle.classList.add("icons_circle_10")
            iconCircle.classList.remove("icons_circle_1")
        }
    }
}

export function findClick() {
    document.addEventListener('click', (e) => { // Проверяем, какой элемент на странице нажат
        if (e.target.classList.contains("bookbtn")) {
            const id = e.target.getAttribute("data-id") // Смотрим id кнопки
            console.log("Clicked!", e.target.getAttribute("data-id"))
            console.log(localStorage)
            if (getLocal(id)) { // Проверяем, есть ли этот ID в LocalStorage
                removeLocal(id) // Удаляем, если есть
                e.target.classList.remove("sellbutton")
                e.target.classList.add("buybutton")
            } else {
                addLocal(id) // Добавляем, если нет
                e.target.classList.remove("buybutton")
                e.target.classList.add("sellbutton")
            }
            uploadBin()
        }
    })
}
