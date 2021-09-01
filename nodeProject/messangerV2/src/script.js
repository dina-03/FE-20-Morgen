import {users, messages, findMessagesByUserId, addNewMessage} from './data';
import {renderAddMessageForm} from './forms';
import Message, {renderFullInfo} from './messenger';

const usersList = document.querySelector('.users-list')
const leftBox = document.querySelector('.left');
const listMessages = document.querySelector('.message-list');
const messageForm = document.querySelector('.form')
const rightBox = document.querySelector('.right');

const renderUsersList = (array) => {
    array.forEach(item => {
        usersList.innerHTML += item.renderUser()
    })
}

renderUsersList(users)

usersList.onclick = (event) => {
    rightBox.innerHTML = ''
    if(event.target.tagName === 'H3'){
        const userId = +event.target.dataset.id;
        renderLeftPart(userId)
    }
}

function renderLeftPart(userId){
    const userMessages = findMessagesByUserId(userId);
        console.log(userMessages)
        const messageList = (userMessages.length) ? userMessages.map(item => item.renderMessage()).join('') : '<p>No message</p>'
        listMessages.innerHTML = `${messageList}`;
        messageForm.innerHTML = `${renderAddMessageForm(userId)}`;
        const form = leftBox.querySelector('form');
        form.onsubmit = formClickHandler;
}

function formClickHandler(e){
    e.preventDefault();
    const form = e.target;
    const userId = +form.button.dataset.user;
    const message = new Message(
        userId,
        form.title.value,
        form.text.value,
        new Date().toLocaleDateString()
    )
    addNewMessage(message);
    rightBox.innerHTML = '';
    renderLeftPart(userId);
}

listMessages.onclick = (event) => {
    let target = event.target;
    if(target.tagName !== 'DIV'){
        target = event.target.parentNode
    }
    const message = messages.find(m => m.id === +target.dataset.message);
    rightBox.innerHTML = (message) ? renderFullInfo(message) : ''
}