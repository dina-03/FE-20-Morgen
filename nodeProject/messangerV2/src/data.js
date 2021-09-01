import User from "./user";
import Message from "./messenger";
import Comment from "./comment";

const users=[
    new User('Vasya Pupkin', 'Berlin'), 
    new User('Petya Sidorov', 'London'), 
    new User('Sofia Werner', 'Köln'), 
    new User('Alisa Presnjak', 'Berlin'), 
    new User('Gena Balkin', 'Hamburg')]

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

addCommemtToMessage(1,new Comment(0,0, 'very good', new Date().toLocaleDateString()));
addCommemtToMessage(0,new Comment(2,1, 'nice to see you', new Date().toLocaleDateString()));
addCommemtToMessage(0,new Comment(3,0, 'good', new Date().toLocaleDateString()));
addCommemtToMessage(0,new Comment(1,1, 'bad', new Date().toLocaleDateString()));
addCommemtToMessage(2,new Comment(2,1, 'das war schön!', new Date().toLocaleDateString()));
addCommemtToMessage(10,new Comment(2,3, 'круто', new Date().toLocaleDateString()));
addCommemtToMessage(12,new Comment(3,1, 'не могу не согласиться', new Date().toLocaleDateString()));
addCommemtToMessage(3,new Comment(4,1, 'не могу не согласиться', new Date().toLocaleDateString()));
addCommemtToMessage(5,new Comment(2,1, 'не могу не согласиться', new Date().toLocaleDateString()));
addCommemtToMessage(9,new Comment(1,1, 'не могу не согласиться', new Date().toLocaleDateString()));
addCommemtToMessage(9,new Comment(3,1, 'не могу не согласиться', new Date().toLocaleDateString()));
addCommemtToMessage(8,new Comment(1,0, 'проще нужно относиться ко всему', new Date().toLocaleDateString()));
addCommemtToMessage(15,new Comment(0,0, 'это просто чума!!!', new Date().toLocaleDateString()));
addCommemtToMessage(4,new Comment(3,2, 'это просто чума!!!', new Date().toLocaleDateString()));
addCommemtToMessage(6,new Comment(3,2, 'это просто чума!!!', new Date().toLocaleDateString()));
addCommemtToMessage(7,new Comment(3,2, 'это просто чума!!!', new Date().toLocaleDateString()));
addCommemtToMessage(17,new Comment(3,2, 'это просто чума!!!', new Date().toLocaleDateString()));

export function findUserById(id){
    return users.find(user=>user.id===id)
}

export function addNewMessage(message){
    messages.push(message)
}

function addCommemtToMessage(messageId, comment){
    const message=messages.find(m=>m.id===messageId);
    message.comments.push(comment);
}

export function findMessagesByUserId(userId){
    return messages.filter(m=>m.userId===userId);
}

export {users, messages}