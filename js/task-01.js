

const itemsEl = document.querySelectorAll('.item');
console.log(`В списке ${itemsEl.length} категории`);

Array.prototype.forEach.call(itemsEl, (element) => {
    const title = element.querySelector('h2').innerHTML;
    const itemsLength = element.querySelectorAll('li').length;

    console.log(`Категория: ${title}. 
Количество элементов: ${itemsLength}`)
})


