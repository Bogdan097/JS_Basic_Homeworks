console.log('test');


// let myBody = document.getElementsByTagName('body');

// myBody[0].innerHTML;
// console.log(myBody);


let myHeader = document.getElementById('myTitle');
console.log(myHeader);
// let myDiv = document.getElementsByClassName('aDiv');
// console.log(myDiv);


//Changing Title
myHeader.innerText = 'This is my changed Ttitle'
console.log(myHeader.textContent);
console.log(myHeader.innerText);


// Changing Paragraphs with indexing
let paragraphOne = document.getElementsByClassName('paragraph')
console.log(paragraphOne);

paragraphOne[0].innerText = 'This is my changed paragraph';

paragraphOne[1].innerText = 'This is my second changed paragraph';
console.log(paragraphOne);

//Changing text

let changingText = document.querySelector('text')
changingText.innerText = 'This has also changed ! ';
console.log(changingText);

//Changing Headers with indexing
let lastChangeHeader = document.getElementsByTagName('div');
console.log(lastChangeHeader);



let headerOne = document.getElementsByTagName('h1');
headerOne[1].innerText = 'This should be changed,AND IT HAS !';
console.log(headerOne);



let headerThree = document.getElementsByTagName('h3');
headerThree[0].innerText = 'And also this,CHANGED ! ';
console.log(headerThree);




















