import { Page } from "./pageClass.js"
import { getLocal } from "./localStorage.js";

const container = document.querySelector(".books__container")
const onloadpage = document.querySelector('.windows8')

export function addPage(predata) { 
    predata.items.forEach(data => { // Проходимся по всем 6 элементам
        const id = data.id
        const infodata = data.volumeInfo
        // console.log(data)
        let price = ""
        if (data.saleInfo.retailPrice) { // Выводим корректную цену (Если её нет, то ничего не выводим)
            price = `${data.saleInfo.retailPrice.amount} ${data.saleInfo.retailPrice.currencyCode}`
        } else {
            price = ""
        }

        // Проверяем, чтоб все элементы были и сокращаем текста (Чтоб всё влезло)

        let description = ""
        let title = ""
        let thumbnail = "./images/nophoto.png"
        let averageRating = ""
        let ratingsCount = ""
        let buttontype = "buybutton"

        if (infodata.description) {
            infodata.description.length > 100 ? description = infodata.description.slice(0, 100) + "..." : description = infodata.description
        }

        if (infodata.title) {
            infodata.title.length > 25 ? title = infodata.title.slice(0, 25) + "..." : title = infodata.title
        }

        if (infodata.imageLinks) {
            thumbnail = infodata.imageLinks.thumbnail
        }

        if (infodata.averageRating) {
            averageRating = `<img src="./images/${infodata.averageRating}stars.png" alt="" style="width: 100px">`
        }

        if (infodata.ratingsCount) {
            ratingsCount = infodata.ratingsCount + "M review"
        }

        if (getLocal(data.id)) {
            buttontype = "sellbutton"
        }

        // Создаём экземпляр класса
        const page = new Page(id, thumbnail, infodata.authors, title, ratingsCount, averageRating, description, price, buttontype)
        container.innerHTML += page.getHtml() // Добавляем в контейнер экземпдяр
        // убираем часть загрузки
        onloadpage.classList.add("load_display_none")
        onloadpage.classList.remove("load_display_block")
    });
}


export function addOnloadPage() { // Показываем часть загрузки
    onloadpage.classList.add("load_display_block")
    onloadpage.classList.remove("load_display_none")
}