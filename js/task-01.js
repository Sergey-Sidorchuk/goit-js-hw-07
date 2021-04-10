

const itemsEl = document.querySelectorAll('.item');
console.log(`В списке ${itemsEl.length} категории`);

Array.prototype.forEach.call(itemsEl, (element) => {
    const title = element.querySelector('h2').innerHTML;
    const itemsLength = element.querySelectorAll('li').length;

    console.log(`Категория: ${title}. 
Количество элементов: ${itemsLength}`)
})


// const categoriesEl = document.querySelector("#categories");
// const allItemsEl = categoriesEl.querySelectorAll(".item");

// console.log(`В списке ${allItemsEl.length} категории`);

// const list = (item) => {
//   console.log(`Категория: ${item.firstElementChild.textContent}`);
//   console.log(
//     `Количество элементов: ${
//       item.lastElementChild.querySelectorAll("li").length
//     }`
//   );
// };

// list(allItemsEl[0]);
// list(allItemsEl[1]);
// list(allItemsEl[2]);

// const allLiItems = document.querySelectorAll(".item");
// console.log(`В списке ${allLiItems.length} категории.`);

// allLiItems.forEach((category) => {
//   console.log(`Категория: ${category.children[0].textContent}`);
//   console.log(`Количество элементов: ${category.children[1].children.length}`);
// });