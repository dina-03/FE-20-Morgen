export default class User{
    constructor(name, city){
        this.name=name;
        this.city=city;
        this.id=User.id++;
    }
    static id=0;

    renderUser(){
        return `
        <div class='list-left'>
        <h3 data-id=${this.id}>${this.name} / <span>${this.city}</span></h3> </div> 
        `
    }
}