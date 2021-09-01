export function renderAddMessageForm(userId){
    return`
    <h4><b>Write new message</b></h4>
    <form name = 'message' action = '#'>
    <input 
        id ='title' 
        class = 'message-title'
        type = 'text'
        name = 'title'
        placeholder = 'Title'
        /><br>
        <textarea 
        id ='text' 
        class = 'textArea'
        type = 'text'
        name = 'text'
        cols="40" rows="2"
        placeholder = 'Text message'></textarea><br>
    <button class = 'add-btn' name = 'button' data-user = ${userId}>add message</button>
    </form>
    `
}