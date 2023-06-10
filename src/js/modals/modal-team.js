(() => {
    const refs = {
      openModalBtns: document.querySelectorAll('[data-modal-team-open]'),
      closeModalBtn: document.querySelector('[data-modal-team-close]'),
      modal: document.querySelector('[data-modal-team]'),
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

    function modalInteraction(event) {
        event.preventDefault();

        toggleModal();
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