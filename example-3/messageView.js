class MessageView {
  constructor() {
    this.mainContainerEl = document.querySelector('#main-container');

    this.buttonEl = document.querySelector('#show-message-button');

    this.buttonEl.addEventListener('click', () => {
       this.displayMessage();
    });

    this.hideButtonEl = document.querySelector('#hide-message-button');

    this.hideButtonEl.addEventListener('click', () => {
       this.hideMessage();
    });
  }

  displayMessage() {
    const messageElement = document.createElement('div');
    messageElement.id = 'message'; // another way: messageElement.setAttribute('id','message');
    messageElement.innerText = document.querySelector('#message-input').value;
    this.mainContainerEl.append(messageElement);
  }

  hideMessage(){
    this.mainContainerEl.remove('message');
  }
}

module.exports = MessageView;