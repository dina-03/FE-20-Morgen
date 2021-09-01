export default class Message{
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
        <div data-message=${this.id}>
        <h3>${this.title};  
        Data: ${this.data}</h3>
        </div><hr>
        `
    }
}

export function renderFullInfo(message){
    return `
    <div>
    <h3>${message.title}</h3>
    <p class='messageText'> ${message.text}</p>
    <h4>Published: ${message.data}</h4><hr><br>
    ${(message.comments.length===0) ? '<p>No comment</p>' : message.comments.map(item=>item.renderComment()).join('')}
    </div>
    `
}