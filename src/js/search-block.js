// import flatpickr from "flatpickr";

// flatpickr(".flatpickr-input", {
//     dateFormat: "Y",
//     minDate: "2015",
//     maxDate: "2023",
//     static: true,
//     onOpen: function(selectedDates, dateStr, instance) {
//       const dropdown = instance.calendarContainer;
//       dropdown.style.display = "block";
//     },
//     onClose: function(selectedDates, dateStr, instance) {
//       const dropdown = instance.calendarContainer;
//       dropdown.style.display = "none";
//     },
//     onChange: function(selectedDates, dateStr, instance) {
//       console.log("Обраний рік:", dateStr);
//     }
//   });

// const inputFilmName = document.querySelector('.input-film-name-search-form');
// const inputCloseSvg = document.querySelector('.input-close-svg');
// const searchForm = document.querySelector('.film-name-search-form');

// // При натисканні на інпут
// inputFilmName.addEventListener('input', () => {
//   const inputValue = inputFilmName.value.trim();

//   if (inputValue !== '') {
//     inputCloseSvg.classList.remove('hidden');
//   } else {
//     inputCloseSvg.classList.add('hidden');
//   }
// });

// // При натисканні на кнопку з SVG
// inputCloseSvg.addEventListener('click', () => {
//   inputFilmName.value = '';
//   inputCloseSvg.classList.add('hidden');
// });

// // При натисканні на баттон форми
// searchForm.addEventListener('submit', (event) => {
//   event.preventDefault();

//   // Отримати значення з інпута
//   const searchQuery = inputFilmName.value.trim();

//   // Виконати необхідні дії зі значенням пошукового запиту, наприклад, відправити на сервер або виконати пошук
//   // Ваш код тут

//   // Очистити значення інпута
//   inputFilmName.value = '';
//   inputCloseSvg.classList.add('hidden');
// });