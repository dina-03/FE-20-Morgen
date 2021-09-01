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
        <div data-message=${this.id}><h3>${this.title};  Data: ${this.data}</h3>
        </div><hr>
        `
    }

    renderUserMessage(){
        return `
        <div data-message=${this.id}>
        <form action="#" id="user-message">
        <input type="text" id="message-title" placeholder="Title">
        <textarea name="users-messageText" id="" cols="40" rows="2" placeholder="Message"></textarea><button id="addBtn">Add</button>
        </form></div>
        `
    }

    renderFullInfo(){
        return `
        <div>
        <h3>${this.title}</h3>
        <p class='messageText'> ${this.text}</p>
        <h4>Published: ${this.data}</h4><hr><br>
        ${(this.comments.length===0)?'<p>No comment</p>':this.comments.map(item=>item.renderComment()).join('')}
        </div>
        `
    }
}