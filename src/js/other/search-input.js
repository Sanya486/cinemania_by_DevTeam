import debounce from "lodash.debounce";

const refs  = {
    inputEl: document.querySelector(".input-film-name-search-form"),
    closeBtnEl: document.querySelector('.input-close-svg'),
}

refs.inputEl.addEventListener('input', debounce(onInput, 300))

refs.closeBtnEl.addEventListener('click', onCloseBtnClick)

function onInput (e) {
    console.log("12")
    if(e.target.value !== ""){
        refs.closeBtnEl.classList.remove('hidden');
    }
    else{
        refs.closeBtnEl.classList.add('hidden')
    }
}

function onCloseBtnClick (e) {
    refs.inputEl.value = ""
    refs.closeBtnEl.classList.add('hidden')
}