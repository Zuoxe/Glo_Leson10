const books = document.querySelectorAll(".book");
const body = document.querySelector("body")
const title = document.querySelectorAll("h2 > a")
const adv = document.querySelector(".adv");
const bookChaptrers = document.querySelectorAll("li")
const lists = document.querySelectorAll("ul");

const newElem = document.createElement("li");
newElem.textContent = "Глава 8: За пределами ES6";

body.style.backgroundImage = "url(./image/you-dont-know-js.jpg)"


books.forEach((element, index) => {
    if (index === 0) {

        const listItems = element.querySelectorAll("li");

        listItems[3].after(listItems[6]);
        listItems[6].after(listItems[8]);
    }
});

books.forEach((element, index) => {
    if (index === 5) {

        const listItems = element.querySelectorAll("li");

        listItems[1].after(listItems[9]);
        listItems[9].after(listItems[3]);
        listItems[3].after(listItems[4]);
    }

});

title.forEach((el, index) => {
    if (index === 4)
        el.textContent = "Книга 3. this и Прототипы Объектов"
});

adv.remove();

books[0].before(books[1]);
books[0].after(books[4]);
books[2].before(books[3]);
books[3].after(books[5]);

lists[2].append(newElem);
bookChaptrers[26].before(newElem);







