import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.modal = this.createModal();
    this._keydownEventListener();
    this._crossClickEventListener();
  }

  setTitle(title){
    const modalTitle = this.modal.querySelector('.modal__title');
    if(modalTitle){
      modalTitle.textContent = title;
    }
  }

  setBody(node){
    const modalBody = this.modal.querySelector('.modal__body');
    if(modalBody){
      modalBody.appendChild(node);
    }
  }

  createModal(){
    const html = `
    <div class="modal">
      <div class="modal__overlay"></div>
      <div class="modal__inner">
        <div class="modal__header">
          <button type="button" class="modal__close">
            <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
          </button>
  
          <h3 class="modal__title"></h3>
        </div>
  
        <div class="modal__body"></div>
      </div>
    </div>`

   return createElement(html);
  }

  open(){
    document.body.classList.add('is-modal-open');
    document.body.appendChild(this.modal);
  }

  _keydownEventListener(){
    document.addEventListener('keydown', (event) => {
      if(event.code === 'Escape'){
        event.preventDefault();
        this.close()
      }
    })
  }

  _crossClickEventListener(){
    const closeBtn = this.modal.querySelector('.modal .modal__close');

    closeBtn.addEventListener('click', () => {
        this.close();
    })
  }

  close(){
    document.removeEventListener('keydown', this._keydownEventListener);
    document.body.classList.remove('is-modal-open');
    this.modal.remove();
  }
}
