var container = document.createElement("div");
container.className = "container"
document.body.appendChild(container);

var firstRow = document.createElement("h3");
var firstRowText = document.createTextNode("");
firstRow.className = "first-row";
firstRow.appendChild(firstRowText);

var secondRow = document.createElement("h3");
var secondRowText = document.createTextNode("");
secondRow.className = "second-row";
secondRow.setAttribute("data-wait", 9*speed);
secondRow.appendChild(secondRowText);

var thirdRow = document.createElement("h3");
var thirdRowText = document.createTextNode("");
thirdRow.className = "third-row";
thirdRow.appendChild(thirdRowText);

var line = document.createElement("hr");
var lineTwo =  document.createElement("hr");

container.appendChild(firstRow);
// container.appendChild(lineTwo);
container.appendChild(secondRow);
// container.appendChild(line);
container.appendChild(thirdRow);


console.log(firstRow.innerText.length);

// firstRow.style.display = "none";
// secondRow.style.display = "none";
// line.style.display = "none";
// lineTwo.style.display = "none";
// thirdRow.style.display = "none";


// var turn = 0;
// var texts = ["Berlinale, 07.02 - 17.02.2019, >> Preview <<"];

var firstText = "Berlinale";
var secondText ="07.02 - 17.02.2019";
var thirdText = ">> Preview <<";

// function typeLetters(nodeElement) {
//   if(pos < texts[turn].length) {
//     nodeElement.innerHTML += texts[turn].charAt(pos);
//     console.log(texts[turn].charAt(pos));
//     pos++;
//     setTimeout(typeLetters.bind(null, nodeElement), speed);
//   }
// }

// setTimeout(typeLetters.bind(null, firstRow), speed);

var pos = 0;
var speed = 100;
function typeLetters(nodeElement, string) {
  if(pos < string.length) {
    nodeElement.innerHTML += string.charAt(pos);
    console.log(string.charAt(pos));
    pos++;
    setTimeout(typeLetters.bind(null, nodeElement, string), speed);
  }
}

setTimeout(typeLetters.bind(null, firstRow, firstText), speed);

// setTimeout(typeLetters.bind(null, secondRow, "whatever"), speed);

var pos2 = 0;
function typeLetters2(nodeElement, string) {
  // console.log("fired")
  if(pos2 < string.length) {
    nodeElement.innerHTML += string.charAt(pos2);
    console.log(string.charAt(pos2));
    pos2++;
    setTimeout(typeLetters2.bind(null, nodeElement, string), speed);
  }
}

setTimeout(typeLetters2.bind(null, secondRow, secondText), speed*(firstText.length+1));


var pos3 = 0;
function typeLetters3(nodeElement, string) {
  console.log("fired third function")
  if(pos3 < string.length) {
    nodeElement.innerHTML += string.charAt(pos3);
    console.log(string.charAt(pos3));
    pos3++;
    setTimeout(typeLetters3.bind(null, nodeElement, string), speed);
  }
}

setTimeout(typeLetters3.bind(null, thirdRow, thirdText), speed * (secondText.length + firstText.length+1));

function changeBackground() {
  // document.body.style.backgroundColor = "yellow";
  document.body.className ="on";
}

setTimeout(changeBackground, speed * (secondText.length + firstText.length + thirdText.length +1));