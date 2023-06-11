import { cardMarkup } from './card-markup';
const testForm = document.querySelector('.test-form');
const testInput = document.querySelector('.test-input');
const testCard = document.querySelector('.test-card');

testForm.addEventListener('submit', testOnSubmit);

function testOnSubmit(event) {
    event.preventDefault();
    const typedID = +testInput.value;
    console.log(typedID);

    // cardMarkup(typedID);

    cardMarkup(typedID).then(response => {
        const newMarkup = response;

        console.log(newMarkup);

        testCard.insertAdjacentHTML('beforeend', newMarkup);
    })
    .catch(error => console.log(error));
}