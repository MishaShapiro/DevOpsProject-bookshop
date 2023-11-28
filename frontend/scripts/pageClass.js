export class Page { // Класс страницы и метод добавления элементов
    constructor(id, imageLinks, autors, title, ratingCount, averageRating, description, saleInfo, buttontype) {
        this.id = id
        this.imageLinks = imageLinks;
        this.autors = autors;
        this.title = title;
        this.ratingCount = ratingCount;
        this.averageRating = averageRating;
        this.description = description;
        this.saleInfo = saleInfo;

        this.buttontype = buttontype
    };

    getHtml() {
        return `
            <div class="book">
                <img class="book__image" src="${this.imageLinks}" alt="">
                <div class="book__main">
                    <p class="book__authors">${this.autors}</p>
                    <p class="book__titles">${this.title}</p>
                    <div class="book__rating">
                        <p class="book__stars">${this.averageRating}</p>
                        <p class="book__ratingcount">${this.ratingCount}</p>
                    </div>
                    <p class="book__description">${this.description}</p>
                    <p class="book__sale">${this.saleInfo}</p>
                    <button class="${this.buttontype} standartbtn bookbtn" data-id="${this.id}"></button>
                </div>
            </div>
        `
    }
}