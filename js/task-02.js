
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
//     после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = ingredients.map(element => {
    const liEl = document.createElement('li');
    liEl.textContent = element;

    return liEl;
});
document.querySelector('#ingredients').append(...ingredientsList);

console.log(ingredientsList);


