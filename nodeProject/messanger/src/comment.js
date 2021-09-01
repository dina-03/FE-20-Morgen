import { findUserById } from "./script";
export default class Comment{
    constructor(userId, postId, text, data){
        this.userId=userId;
        this.postId=postId;
        this.text=text;
        this.data=data;
        this.id=Comment.id++;
    }
    static id=0;

    renderComment(){
        return `
        <div>~~~~~~~~~~~~~~~~~~~~~~~~~~~~   
        <h5>${this.text}</h5>
        <p>${this.data}, comment by ${findUserById(this.userId).name}</p>
        </div>
        `
    }
}