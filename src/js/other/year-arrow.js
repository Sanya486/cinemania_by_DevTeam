import {ClassWatcher} from './classWatcher'
const yearpickerInputEl = document.querySelector('.yearpicker-container')
const arrowEl = document.querySelector('.year-drop-arrow-icon')



function workOnClassAdd() {
    arrowEl.classList.remove('hidden')
}

function workOnClassRemoval() {
    arrowEl.classList.add('hidden')
   
}
let classWatcher = new ClassWatcher(yearpickerInputEl, 'hide', workOnClassAdd, workOnClassRemoval)