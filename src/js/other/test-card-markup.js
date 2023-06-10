// import { fetchMovieDetails } from './fetches/fetch-movie-details.js';
import { cardMarkup } from './other/card-markup';
const testForm = document.querySelector('.test-form');
const testInput = document.querySelector('.test-input');
// const testButton = document.querySelector('.test-button');
const testCard = document.querySelector('.test-card');

testForm.addEventListener('submit', testOnSubmit);

function testOnSubmit(event) {
    event.preventDefault();
    const typedID = +testInput.value;
    console.log(typedID);

    cardMarkup(typedID)


    // console.log(typeof(typedID));

    cardMarkup(typedID).then(response => {
        const newMarkup = response;

        console.log(newMarkup);

        testCard.insertAdjacentHTML('beforeend', newMarkup);
    })
    .catch(error => console.log(error));

    // console.dir(cardMarkup(typedID));

    // const newMarkup = cardMarkup(typedID);
    // console.log(newMarkup);

    // testCard.insertAdjacentHTML('beforeend', newMarkup);
}