import { sendFetch } from "./loader.js";

export function getLink() { 
    const bookContainer = document.querySelector(".books__container")
    const currentTheam = document.querySelector(".books__theam_active").textContent // Тема книги
    const count = bookContainer.getAttribute("data-count") // Выбираем ключ для запроса
    // console.log(Values[currentTheam])
    return `https://www.googleapis.com/books/v1/volumes?q="${Values[currentTheam]}"&key=AIzaSyAexjbpLfy3hCwvXn4wrNa3RiBW_VrkDG8&printType=books&startIndex=${count}&maxResults=6&langRestrict=en`
}

export function clickTheam() { // Вешаем обработчики на ссылки
    const theams = document.querySelectorAll(".books__theam")

    theams.forEach((elem) => { // Проходимся по всем
        elem.addEventListener("click", () => {
            const bookContainer = document.querySelector(".books__container")
            bookContainer.setAttribute("data-count", "0") // Если меняется ссылка, изменяем и количество книг
            const container = document.querySelector(".books__container")
            container.innerHTML = "" // Чистим контейнер


            // Изменяем активную тему
            theams.forEach((elem) => {
                elem.classList.remove("books__theam_active")
            })
            elem.classList.add("books__theam_active")
            sendFetch(getLink(bookContainer)) // Запрашиваем новые данные
        })
    })
}

const Values = {
    "Architecture": "subject:Architecture",
    "Art & Fashion": "subject:Art",
    "Biography": "subject:Biography & Autobiography",
    "Business": "subject:Business",
    "Crafts & Hobbies": "subject:Crafts & Hobbies",
    "Drama": "subject:Drama",
    "Fiction": "subject:Fiction",
    "Food & Drink": "subject:Cooking",
    "Health & Wellbeing": "subject:Health & Fitness",
    "History & Politics": "subject:History",
    "Humor": "subject:Humor",
    "Poetry": "subject:Poetry",
    "Psychology": "subject:Psychology",
    "Science": "subject:Science",
    "Technology": "subject:Technology",
    "Travel & Maps": "subject:Travel",
}
