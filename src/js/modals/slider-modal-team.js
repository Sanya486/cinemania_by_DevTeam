let offset = 0;
const photoSlider = document.querySelector('.photo-slider-modal-team');
const buttonRight = document.querySelector('.btn-to-right-modal-team');
const buttonLeft = document.querySelector('.btn-to-left-modal-team');
let viewportWidth = document.body.clientWidth;


function updateSlider() {
    if (viewportWidth <= 767) {
        buttonRight.addEventListener('click', function () {
            offset += 280;
            if (offset > 280*10) {
                offset = 0;
            }
            photoSlider.style.right = offset + 'px';
            });
            
            buttonLeft.addEventListener('click', function () {
            offset -= 280;
            if (offset < 0) {
                offset = 0;
            }
            photoSlider.style.right = offset + 'px';
            });
    } else if (viewportWidth > 767 && viewportWidth < 1279) {
        buttonRight.addEventListener('click', function () {
            offset += 480;
            if (offset > 480*2) {
                offset = 0;
            }
            photoSlider.style.right = offset + 'px';
            });
            
            buttonLeft.addEventListener('click', function () {
            offset -= 480;
            if (offset < 0) {
                offset = 0;
            }
            photoSlider.style.right = offset + 'px';
            });
    } else {
        buttonRight.addEventListener('click', function () {
            offset += 745;
            if (offset > 745*2) {
                offset = 0;
            }
            photoSlider.style.right = offset + 'px';
            });
            
            buttonLeft.addEventListener('click', function () {
            offset -= 745;
            if (offset < 0) {
                offset = 0;
            }
            photoSlider.style.right = offset + 'px';
            });
    }
}

window.addEventListener('resize', updateSlider);

updateSlider();




