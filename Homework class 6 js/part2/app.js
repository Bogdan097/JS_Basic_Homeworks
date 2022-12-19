let arrayNumbers = [2,5,4];
 

let sum = 0;

for (const value of arrayNumbers) {
  sum += value;
}

console.log(sum);




//first two lists i put to show only and to have a starting point,the next three i put with appendChild


let lister = document.getElementById('myList'); 
let newList = document.createElement('li');
let newTag = document.createElement ('a');
lister.appendChild(newList);
newList.appendChild(newTag);
newTag.innerHTML = 2;

let lister1 = document.getElementById('myList'); 
let newList1 = document.createElement('li');
let newTag1 = document.createElement ('a');
lister1.appendChild(newList1);
newList1.appendChild(newTag1);
newTag1.innerHTML = 5;


let lister2 = document.getElementById('myList'); 
let newList2= document.createElement('li');
let newTag2 = document.createElement ('a');
lister2.appendChild(newList2);
newList2.appendChild(newTag2);
newTag2.innerHTML = 4;

let valueSum = document.getElementById('myList');
let newParagraph = document.createElement('p');
valueSum.appendChild(newParagraph);
newParagraph.innerHTML = ('The sum of all numbers is 11');//this is hardcored :)




















