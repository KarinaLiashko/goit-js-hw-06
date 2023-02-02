const listWithId = document.querySelector("#categories");
const liWithItems = listWithId.querySelectorAll(".item");
console.log(`Number of categories: ${liWithItems.length}`);

for (let liWithItem of liWithItems) {
    console.log("Category:", liWithItem.firstElementChild.textContent);
    console.log("Elements:", liWithItem.lastElementChild.children.length);
}