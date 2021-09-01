import User from "./user";
import Message from "./messenger";
import Comment from "./comment";

const users=[new User('Vasya Pupkin', 'Berlin'), new User('Petya Sidorov', 'London'), new User('Sofia Werner', 'Köln'), new User('Alisa Presnjak', 'Berlin'), new User('Gena Balkin', 'Hamburg')]

const usersList=document.querySelector('.users-list'),
        renderUsersList=(array)=>{
            array.forEach(item=>{
                usersList.innerHTML+=item.renderUser()
            })
        }

renderUsersList(users);

const messages = [
    new Message(0, 'Hello', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, sed?', new Date().toLocaleDateString()),
    new Message(0, 'Title02', 'Lorem ipsum dolor sit amet consectetur. Odit, sed?', new Date().toLocaleDateString()),
    new Message(0, 'Title03', 'Lorem ipsum dolor adipisicing elit. Odit, sed?', new Date().toLocaleDateString()),
    new Message(0, 'Title04', 'Lorem ipsum dolor sit amet consectetur', new Date().toLocaleDateString()),
    new Message(0, 'About', 'Lorem ipsum dolor adipisicing elit. Odit, sed?', new Date().toLocaleDateString()),
    new Message(0, 'Actor', 'Lorem ipsum dolor. Odit, sed?', new Date().toLocaleDateString()),
    new Message(1, 'Text', 'Info', new Date().toLocaleDateString()),
    new Message(1, 'Doctor', 'Lorem ipsum dolor sit amet', new Date().toLocaleDateString()),
    new Message(1, 'Vector', 'Великий Оксмокс предупреждал ее о злых запятых, диких знаках вопроса и коварных точках с запятой, но текст не дал сбить себя с толку', new Date().toLocaleDateString()),
    new Message(2, 'Постулат жизни', 'Жизнь прекрасна, как ни крути! Главное найти свою точку опоры!', new Date().toLocaleDateString()),
    new Message(2, 'Uraaa!', 'Однажды одна маленькая строчка рыбного текста по имени Lorem ipsum ', new Date().toLocaleDateString()),
    new Message(2, 'Visitor', 'Однажды одна маленькая строчка рыбного текста по имени', new Date().toLocaleDateString()),
    new Message(2, 'Graf', 'по дороге встретил текст рукопись. ', new Date().toLocaleDateString()),
    new Message(3, 'Prosto Text', 'Грустный риторический вопрос скатился по его щеке и он продолжил свой путь. ', new Date().toLocaleDateString()),
    new Message(3, 'A Hto ego znaet?', 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.', new Date().toLocaleDateString()),
    new Message(2, 'И такое бывает', 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.', new Date().toLocaleDateString()),
    new Message(3, 'Я делаю все сама!!', 'Вдали от всех живут они в буквенных домах на берегу Семантика', new Date().toLocaleDateString()),
    new Message(3, 'Шутка', ' Даже всемогущая пунктуация не имеет власти над рыбными текстами', new Date().toLocaleDateString()),
]

messages[0].comments.push(new Comment(0,0, 'very good', new Date().toLocaleDateString()));
messages[0].comments.push(new Comment(2,1, 'nice to see you', new Date().toLocaleDateString()));
messages[10].comments.push(new Comment(3,0, 'good', new Date().toLocaleDateString()));
messages[1].comments.push(new Comment(1,1, 'bad', new Date().toLocaleDateString()));
messages[3].comments.push(new Comment(2,1, 'das war schön!', new Date().toLocaleDateString()));
messages[3].comments.push(new Comment(2,3, 'круто', new Date().toLocaleDateString()));
messages[9].comments.push(new Comment(3,1, 'не могу не согласиться', new Date().toLocaleDateString()));
messages[9].comments.push(new Comment(4,1, 'не могу не согласиться', new Date().toLocaleDateString()));
messages[9].comments.push(new Comment(2,1, 'не могу не согласиться', new Date().toLocaleDateString()));
messages[9].comments.push(new Comment(1,1, 'не могу не согласиться', new Date().toLocaleDateString()));
messages[9].comments.push(new Comment(3,1, 'не могу не согласиться', new Date().toLocaleDateString()));
messages[15].comments.push(new Comment(1,0, 'проще нужно относиться ко всему', new Date().toLocaleDateString()));
messages[1].comments.push(new Comment(0,0, 'это просто чума!!!', new Date().toLocaleDateString()));
messages[7].comments.push(new Comment(3,2, 'это просто чума!!!', new Date().toLocaleDateString()));

const leftBox=document.querySelector('.left'),
        rightBox=document.querySelector('.right');

usersList.onclick=(event)=>{
    rightBox.innerHTML='';
    if(event.target.tagName==='H2'){
        //const user=users.find(item=>+event.target.dataset.id===item.id), //+вернет строку
    const userMessages=messages.filter(message=>message.userId===+event.target.dataset.id)
    const addMessage=(userMessages.length)?userMessages.map(item=>item.renderMessage()).join(''):'<p>No message</p>';

    const formUser=createFormUserMessage();       
    leftBox.innerHTML=`${addMessage}`;
    leftBox.append(formUser);
    //onclickBtnHandler(formUser)
    }
}

function createFormUserMessage(){
    const form=document.createElement('form');
    form.classList.add('user-message');
    form.id='formMessage'
    form.innerHTML=`<input type="text" id="message-title" placeholder="Title">
    <textarea id="textArea" cols="38" rows="2" placeholder="Message"></textarea><button id="addBtn">Add</button>`
    onclickBtnHandler(form)
    return form
}

function onclickBtnHandler(event){
    //const form=document.querySelector('#formMessage');
    if(event.target.tagName==='BUTTON'){
        console.log('Hi')
    }
}

leftBox.onclick=(event)=>{
    //console.log(event.target.dataset.message)
     //const message = event.target.dataset.message
    //const userName=users.find(item=>+event.target.dataset.id===item.id);
    /* const user = users.find(item => message.userId === item.id) */
    const usersMess=messages.filter(item=>+event.target.parentNode.dataset.message===item.id);
    if(event.target.tagName==='H3'){
        rightBox.innerHTML=usersMess.map(item=>item.renderFullInfo()).join('');
        const commentForm=createCommentForm();
        rightBox.append(commentForm)
    }
}

export function findUserById(id){
    return users.find(user=>user.id===id)
}

function createCommentForm(){
    const form=document.createElement('form');
    form.classList.add('user-message')
    form.innerHTML=`<input type="email" id="message-title" placeholder="your email">
    <textarea id="textArea" cols="38" rows="2" placeholder="Message"></textarea><button id="addBtn">Add</button>` 
    return form
}