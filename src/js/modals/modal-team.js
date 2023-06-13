(() => {
    const refs = {
      openModalBtns: document.querySelectorAll('[data-modal-team-open]'),
      closeModalBtn: document.querySelector('[data-modal-team-close]'),
      modal: document.querySelector('[data-modal-team]'),
      modalBackdrop: document.querySelector('[data-modal-team]'),
      scrollUpBtn: document.querySelector('#back-to-top'),
    };


  
    const disableBodyScroll = () => {
      document.body.style.overflow = 'hidden';
    };
  
    const enableBodyScroll = () => {
      document.body.style.overflow = 'visible';
    };
  
    refs.openModalBtns.forEach(btn => {
      btn.addEventListener('click', modalInteraction);
    });

    refs.closeModalBtn.addEventListener('click', modalInteraction);
    window.addEventListener('keydown', handleKeyDown);
    refs.modalBackdrop.addEventListener('click', handleClickOutside);


    function modalInteraction(event) {
        event.preventDefault();
        toggleModal();

        if(!refs.modal.classList.contains('is-hidden')) {
          refs.scrollUpBtn.style.display = 'none';
        }
      }

    function handleKeyDown(event) {
      if (event.key === 'Escape' && !refs.modal.classList.contains('is-hidden')) {
        toggleModal();
      }
    }

    function handleClickOutside(event) {
      if (event.target === refs.modalBackdrop) {
        toggleModal();
      }
    }
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
      if (refs.modal.classList.contains('is-hidden')) {
        enableBodyScroll();
      } else {
        disableBodyScroll();
      }
    }
  })();