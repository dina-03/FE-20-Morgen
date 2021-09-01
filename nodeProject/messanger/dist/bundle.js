/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/comment.js":
/*!************************!*\
  !*** ./src/comment.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Comment)\n/* harmony export */ });\n/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script */ \"./src/script.js\");\n\nclass Comment{\n    constructor(userId, postId, text, data){\n        this.userId=userId;\n        this.postId=postId;\n        this.text=text;\n        this.data=data;\n        this.id=Comment.id++;\n    }\n    static id=0;\n\n    renderComment(){\n        return `\n        <div>~~~~~~~~~~~~~~~~~~~~~~~~~~~~   \n        <h5>${this.text}</h5>\n        <p>${this.data}, comment by ${(0,_script__WEBPACK_IMPORTED_MODULE_0__.findUserById)(this.userId).name}</p>\n        </div>\n        `\n    }\n}\n\n//# sourceURL=webpack://messenger/./src/comment.js?");

/***/ }),

/***/ "./src/messenger.js":
/*!**************************!*\
  !*** ./src/messenger.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Message)\n/* harmony export */ });\nclass Message{\n    constructor(userId, title, text, data){\n        this.userId=userId;\n        this.title=title;\n        this.text=text;\n        this.data=data;\n        this.comments=[];\n        this.id=Message.id++;\n    }\n    static id=0;\n\n    renderMessage(){\n        return `\n        <div data-message=${this.id}><h3>${this.title};  Data: ${this.data}</h3>\n        </div><hr>\n        `\n    }\n\n    renderUserMessage(){\n        return `\n        <div data-message=${this.id}>\n        <form action=\"#\" id=\"user-message\">\n        <input type=\"text\" id=\"message-title\" placeholder=\"Title\">\n        <textarea name=\"users-messageText\" id=\"\" cols=\"40\" rows=\"2\" placeholder=\"Message\"></textarea><button id=\"addBtn\">Add</button>\n        </form></div>\n        `\n    }\n\n    renderFullInfo(){\n        return `\n        <div>\n        <h3>${this.title}</h3>\n        <p class='messageText'> ${this.text}</p>\n        <h4>Published: ${this.data}</h4><hr><br>\n        ${(this.comments.length===0)?'<p>No comment</p>':this.comments.map(item=>item.renderComment()).join('')}\n        </div>\n        `\n    }\n}\n\n//# sourceURL=webpack://messenger/./src/messenger.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"findUserById\": () => (/* binding */ findUserById)\n/* harmony export */ });\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ \"./src/user.js\");\n/* harmony import */ var _messenger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messenger */ \"./src/messenger.js\");\n/* harmony import */ var _comment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comment */ \"./src/comment.js\");\n\n\n\n\nconst users=[new _user__WEBPACK_IMPORTED_MODULE_0__.default('Vasya Pupkin', 'Berlin'), new _user__WEBPACK_IMPORTED_MODULE_0__.default('Petya Sidorov', 'London'), new _user__WEBPACK_IMPORTED_MODULE_0__.default('Sofia Werner', 'Köln'), new _user__WEBPACK_IMPORTED_MODULE_0__.default('Alisa Presnjak', 'Berlin'), new _user__WEBPACK_IMPORTED_MODULE_0__.default('Gena Balkin', 'Hamburg')]\n\nconst usersList=document.querySelector('.users-list'),\n        renderUsersList=(array)=>{\n            array.forEach(item=>{\n                usersList.innerHTML+=item.renderUser()\n            })\n        }\n\nrenderUsersList(users);\n\nconst messages = [\n    new _messenger__WEBPACK_IMPORTED_MODULE_1__.default(0, 'Hello', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, sed?', new Date().toLocaleDateString()),\n    new _messenger__WEBPACK_IMPORTED_MODULE_1__.default(0, 'Title02', 'Lorem ipsum dolor sit amet consectetur. Odit, sed?', new Date().toLocaleDateString()),\n    new _messenger__WEBPACK_IMPORTED_MODULE_1__.default(0, 'Title03', 'Lorem ipsum dolor adipisicing elit. Odit, sed?', new Date().toLocaleDateString()),\n    new _messenger__WEBPACK_IMPORTED_MODULE_1__.default(0, 'Title04', 'Lorem ipsum dolor sit amet consectetur', new Date().toLocaleDateString()),\n    new _messenger__WEBPACK_IMPORTED_MODULE_1__.default(0, 'About', 'Lorem ipsum dolor adipisicing elit. Odit, sed?', new Date().toLocaleDateString()),\n    new _messenger__WEBPACK_IMPORTED_MODULE_1__.default(0, 'Actor', 'Lorem ipsum dolor. Odit, sed?', new Date().toLocaleDateString()),\n    new _messenger__WEBPACK_IMPORTED_MODULE_1__.default(1, 'Text', 'Info', new Date().toLocaleDateString()),\n    new _messenger__WEBPACK_IMPORTED_MODULE_1__.default(1, 'Doctor', 'Lorem ipsum dolor sit amet', new Date().toLocaleDateString()),\n    new _messenger__WEBPACK_IMPORTED_MODULE_1__.default(1, 'Vector', 'Великий Оксмокс предупреждал ее о злых запятых, диких знаках вопроса и коварных точках с запятой, но текст не дал сбить себя с толку', new Date().toLocaleDateString()),\n    new _messenger__WEBPACK_IMPORTED_MODULE_1__.default(2, 'Постулат жизни', 'Жизнь прекрасна, как ни крути! Главное найти свою точку опоры!', new Date().toLocaleDateString()),\n    new _messenger__WEBPACK_IMPORTED_MODULE_1__.default(2, 'Uraaa!', 'Однажды одна маленькая строчка рыбного текста по имени Lorem ipsum ', new Date().toLocaleDateString()),\n    new _messenger__WEBPACK_IMPORTED_MODULE_1__.default(2, 'Visitor', 'Однажды одна маленькая строчка рыбного текста по имени', new Date().toLocaleDateString()),\n    new _messenger__WEBPACK_IMPORTED_MODULE_1__.default(2, 'Graf', 'по дороге встретил текст рукопись. ', new Date().toLocaleDateString()),\n    new _messenger__WEBPACK_IMPORTED_MODULE_1__.default(3, 'Prosto Text', 'Грустный риторический вопрос скатился по его щеке и он продолжил свой путь. ', new Date().toLocaleDateString()),\n    new _messenger__WEBPACK_IMPORTED_MODULE_1__.default(3, 'A Hto ego znaet?', 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.', new Date().toLocaleDateString()),\n    new _messenger__WEBPACK_IMPORTED_MODULE_1__.default(2, 'И такое бывает', 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.', new Date().toLocaleDateString()),\n    new _messenger__WEBPACK_IMPORTED_MODULE_1__.default(3, 'Я делаю все сама!!', 'Вдали от всех живут они в буквенных домах на берегу Семантика', new Date().toLocaleDateString()),\n    new _messenger__WEBPACK_IMPORTED_MODULE_1__.default(3, 'Шутка', ' Даже всемогущая пунктуация не имеет власти над рыбными текстами', new Date().toLocaleDateString()),\n]\n\nmessages[0].comments.push(new _comment__WEBPACK_IMPORTED_MODULE_2__.default(0,0, 'very good', new Date().toLocaleDateString()));\nmessages[0].comments.push(new _comment__WEBPACK_IMPORTED_MODULE_2__.default(2,1, 'nice to see you', new Date().toLocaleDateString()));\nmessages[10].comments.push(new _comment__WEBPACK_IMPORTED_MODULE_2__.default(3,0, 'good', new Date().toLocaleDateString()));\nmessages[1].comments.push(new _comment__WEBPACK_IMPORTED_MODULE_2__.default(1,1, 'bad', new Date().toLocaleDateString()));\nmessages[3].comments.push(new _comment__WEBPACK_IMPORTED_MODULE_2__.default(2,1, 'das war schön!', new Date().toLocaleDateString()));\nmessages[3].comments.push(new _comment__WEBPACK_IMPORTED_MODULE_2__.default(2,3, 'круто', new Date().toLocaleDateString()));\nmessages[9].comments.push(new _comment__WEBPACK_IMPORTED_MODULE_2__.default(3,1, 'не могу не согласиться', new Date().toLocaleDateString()));\nmessages[9].comments.push(new _comment__WEBPACK_IMPORTED_MODULE_2__.default(4,1, 'не могу не согласиться', new Date().toLocaleDateString()));\nmessages[9].comments.push(new _comment__WEBPACK_IMPORTED_MODULE_2__.default(2,1, 'не могу не согласиться', new Date().toLocaleDateString()));\nmessages[9].comments.push(new _comment__WEBPACK_IMPORTED_MODULE_2__.default(1,1, 'не могу не согласиться', new Date().toLocaleDateString()));\nmessages[9].comments.push(new _comment__WEBPACK_IMPORTED_MODULE_2__.default(3,1, 'не могу не согласиться', new Date().toLocaleDateString()));\nmessages[15].comments.push(new _comment__WEBPACK_IMPORTED_MODULE_2__.default(1,0, 'проще нужно относиться ко всему', new Date().toLocaleDateString()));\nmessages[1].comments.push(new _comment__WEBPACK_IMPORTED_MODULE_2__.default(0,0, 'это просто чума!!!', new Date().toLocaleDateString()));\nmessages[7].comments.push(new _comment__WEBPACK_IMPORTED_MODULE_2__.default(3,2, 'это просто чума!!!', new Date().toLocaleDateString()));\n\nconst leftBox=document.querySelector('.left'),\n        rightBox=document.querySelector('.right');\n\nusersList.onclick=(event)=>{\n    rightBox.innerHTML='';\n    if(event.target.tagName==='H2'){\n        //const user=users.find(item=>+event.target.dataset.id===item.id), //+вернет строку\n    const userMessages=messages.filter(message=>message.userId===+event.target.dataset.id)\n    const addMessage=(userMessages.length)?userMessages.map(item=>item.renderMessage()).join(''):'<p>No message</p>';\n\n    const formUser=createFormUserMessage();       \n    leftBox.innerHTML=`${addMessage}`;\n    leftBox.append(formUser);\n    //onclickBtnHandler(formUser)\n    }\n}\n\nfunction createFormUserMessage(){\n    const form=document.createElement('form');\n    form.classList.add('user-message');\n    form.id='formMessage'\n    form.innerHTML=`<input type=\"text\" id=\"message-title\" placeholder=\"Title\">\n    <textarea id=\"textArea\" cols=\"38\" rows=\"2\" placeholder=\"Message\"></textarea><button id=\"addBtn\">Add</button>`\n    onclickBtnHandler(form)\n    return form\n}\n\nfunction onclickBtnHandler(event){\n    //const form=document.querySelector('#formMessage');\n    if(event.target.tagName==='BUTTON'){\n        console.log('Hi')\n    }\n}\n\nleftBox.onclick=(event)=>{\n    //console.log(event.target.dataset.message)\n     //const message = event.target.dataset.message\n    //const userName=users.find(item=>+event.target.dataset.id===item.id);\n    /* const user = users.find(item => message.userId === item.id) */\n    const usersMess=messages.filter(item=>+event.target.parentNode.dataset.message===item.id);\n    if(event.target.tagName==='H3'){\n        rightBox.innerHTML=usersMess.map(item=>item.renderFullInfo()).join('');\n        const commentForm=createCommentForm();\n        rightBox.append(commentForm)\n    }\n}\n\nfunction findUserById(id){\n    return users.find(user=>user.id===id)\n}\n\nfunction createCommentForm(){\n    const form=document.createElement('form');\n    form.classList.add('user-message')\n    form.innerHTML=`<input type=\"email\" id=\"message-title\" placeholder=\"your email\">\n    <textarea id=\"textArea\" cols=\"38\" rows=\"2\" placeholder=\"Message\"></textarea><button id=\"addBtn\">Add</button>` \n    return form\n}\n\n//# sourceURL=webpack://messenger/./src/script.js?");

/***/ }),

/***/ "./src/user.js":
/*!*********************!*\
  !*** ./src/user.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ User)\n/* harmony export */ });\nclass User{\n    constructor(name, city){\n        this.name=name;\n        this.city=city;\n        this.id=User.id++;\n    }\n    static id=0;\n\n    renderUser(){\n        return `\n        <div class='list-left'>\n        <h2 data-id=${this.id}>${this.name} / <span>${this.city}</span></h2> </div> \n        `\n    }\n}\n\n//# sourceURL=webpack://messenger/./src/user.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;