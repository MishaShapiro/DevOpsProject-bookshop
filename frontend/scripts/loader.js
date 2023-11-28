import { addPage, addOnloadPage } from "./addPage.js";

export function sendFetch(link) { // Функция отправки запроса
    addOnloadPage()
    fetch(link)
    .then((response) => {return response.json()})
    .then((data) => {
        addPage(data) // выполняем addPage по полученнуму объекту
    })
    .catch(e => console.log(`Error! ${e}`))
}