/* project Messenger
#object User:{id:3, name:'Vasya', city: 'Berlin'}
array from three users: [user1, user2, user3]
array message: [{
    id:0,
    userId:3,
    title:'Some title',
    text: 'Some text',
    data:'01.10.21',
    comments:[{},{},{},{}]
}]
}, {},{}]

comment:{
    id:0,
    userId:3,
    postId:0,
    text: 'some text',
    data:'05.10.21'
}
*/

class User{
    constructor(name, city){
        this.name=name;
        this.city=city;
        this.id=User.id++;
    }
    static id=0;

    renderUser(){
        return `
        <h3 data-id=${this.id}>${this.name},
        <span>${this.city}</span></h3>
        `
    }
}

const users=[new User('Vasya Pupkin', 'Berlin'), new User('Petya Sidorov', 'London'), new User('Sofia Werner', 'Köln'), new User('Alisa Presnjak', 'Berlin'), new User('Gena Baikin', 'Hamburg')]

const usersList=document.querySelector('.users-list'),
        renderUsersList=(array)=>{
            array.forEach(item=>{
                usersList.innerHTML+=item.renderUser()
            })
        }

renderUsersList(users);

class Message{
    constructor(userId, title, text, data){
        this.userId=userId;
        this.title=title;
        this.text=text;
        this.data=data;
        this.comments=[];
        this.id=Message.id++;
    }
    static id=0;

    renderMessage(){
        return `
        <div data-message=${this.id}><h4>${this.title};  Data: ${this.data}</h4>
        </div>
        `
    }

    renderFullInfo(userName){
        return `
        <div>
        <h3>${this.title}</h3>
        <p> ${this.text}</p>
        <h4>Published: ${this.data}</h4>
        ${(this.comments.length===0)?'<p>No comment</p>':this.comments.map(item=>item.renderComment(userName)).join('')}
        </div>
        `
    }
}

class Comment{
    constructor(userId, postId, text, data){
        this.userId=userId;
        this.postId=postId;
        this.text=text;
        this.data=data;
        this.id=Comment.id++;
    }
    static id=0;

    renderComment(userName){
        return `
        <div>
        <h5>${this.text}</h5>
        <p>${this.data}, comment by ${userName}</p>
        </div>
        `
    }
}

/* const comments=[
    new Comment(0, 'Hello', 'Es war gut!', new Date().getDay()),
    new Comment(2, 'Hello', 'Es war gut!', new Date().getDay()),
    new Comment(1, 'Hello', 'Es war gut!', new Date().getDay()),
    new Comment(3, 'Hello', 'Es war gut!', new Date().getDay()),
    new Comment(1, 'Hello', 'Es war gut!', new Date().getDay()),
    new Comment(0, 'Hello', 'Es war gut!', new Date().getDay()),
] */

const messages = [
    new Message(0, 'Hello', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, sed?', new Date().getFullYear()),
    new Message(0, 'Title02', 'Lorem ipsum dolor sit amet consectetur. Odit, sed?', new Date().getFullYear()),
    new Message(0, 'Title03', 'Lorem ipsum dolor adipisicing elit. Odit, sed?', new Date().getFullYear()),
    new Message(0, 'Title04', 'Lorem ipsum dolor sit amet consectetur', new Date().getFullYear()),
    new Message(0, 'About', 'Lorem ipsum dolor adipisicing elit. Odit, sed?', new Date().getFullYear()),
    new Message(0, 'Actor', 'Lorem ipsum dolor. Odit, sed?', new Date().getFullYear()),
    new Message(1, 'Text', 'Info', new Date().getFullYear()),
    new Message(1, 'Doctor', 'Lorem ipsum dolor sit amet', new Date().getFullYear()),
    new Message(1, 'Vector', 'Великий Оксмокс предупреждал ее о злых запятых, диких знаках вопроса и коварных точках с запятой, но текст не дал сбить себя с толку', new Date().getFullYear()),
    new Message(2, 'Comment', 'Lorem ipsum dolor sit amet', new Date().getFullYear()),
    new Message(2, 'Uraaa!', 'Однажды одна маленькая строчка рыбного текста по имени Lorem ipsum ', new Date().getFullYear()),
    new Message(2, 'Visitor', 'Однажды одна маленькая строчка рыбного текста по имени', new Date().getFullYear()),
    new Message(2, 'Graf', 'по дороге встретил текст рукопись. ', new Date().getFullYear()),
    new Message(3, 'Prosto Text', 'Грустный риторический вопрос скатился по его щеке и он продолжил свой путь. ', new Date().getFullYear()),
    new Message(3, 'A Hto ego znaet?', 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.', new Date().getFullYear()),
    new Message(4, 'И такое бывает', 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.', new Date().getFullYear()),
    new Message(4, 'Я делаю все сама!!', 'Вдали от всех живут они в буквенных домах на берегу Семантика', new Date().getFullYear()),
    new Message(3, 'Шутка', ' Даже всемогущая пунктуация не имеет власти над рыбными текстами', new Date().getFullYear()),
]

const leftBox=document.querySelector('.left'),
        rightBox=document.querySelector('.right');

usersList.onclick=(event)=>{
    rightBox.innerHTML='';
    if(event.target.tagName==='H3'){
        const user=users.find(item=>+event.target.dataset.id===item.id), //+вернет строку 
                userMessage=messages.filter(message=>message.userId===user.id)
        leftBox.innerHTML=userMessage.map(item=>item.renderMessage()).join('');
    }
}

leftBox.onclick=(event)=>{
    console.log(event.target.dataset.message)
     //const message = event.target.dataset.message
    const userName=users.find(item=>+event.target.dataset.id===item.id);
    /* const user = users.find(item => message.userId === item.id) */
    const usersMess=messages.filter(item=>+event.target.parentNode.dataset.message===item.id);
    if(event.target.tagName==='H4'){
        rightBox.innerHTML=usersMess.map(item=>item.renderFullInfo(userName)).join('')
    }
}