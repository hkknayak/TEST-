//TRAVERSING THE DOM //
var itemList = document.querySelector('#items')
//parentNode 
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundcolor = '#f4f4f4';
console.log(itemList.parentNode.parentNode.parentNode);


//parentElement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundcolor = '#f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement);

//childNode
console.log(itemList.childNodes);

console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundcolor = 'yellow';


//firstChild
console.log(itemList.firstChild);

// // firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'hello 1';


//lastChild
console.log(itemList.lastChild);

// // lastElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'hello 4';


// next sibling
console.log(itemList.nextSibling);

// // lastElementSibling
console.log(itemList.nextElementSibling);


//previousSibling
console.log(itemList.previousSibling);
//previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'green';

//createElement

//create a div
var newDiv =  document.createElement('div');


//addclass 
newDiv.className= 'hello';

//add id
newDiv.id = 'hello1';

//add attr
newDiv.setAttribute('title', 'hello Div');

//create text node
var newDivText = document.createTextNode('hello world');

//add text to div
newDiv.appendChild(newDivText);


var container = document.querySelector('header .container');
var h1 = document.querySelector('hea h1');

console.log(newDiv)

container.insertBefore(newDiv, h1);
