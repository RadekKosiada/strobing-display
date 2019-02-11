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
secondRow.setAttribute("data-wait", 9*typingSpeed
);
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

var firstText = "This week in Berlin";
var secondText ="13.02 - 18.02.2019";
var thirdText = ">> Aleksa <<";

var pos = 0;
var typingSpeed = 100;
function typeLetters(nodeElement, string) {
  if(pos < string.length) {
    nodeElement.innerHTML += string.charAt(pos);
    // console.log(string.charAt(pos));
    pos++;
    setTimeout(typeLetters.bind(null, nodeElement, string), typingSpeed);
  }
}

setTimeout(typeLetters.bind(null, firstRow, firstText), typingSpeed);

// var stroboSpeed = 50;
function makeInvisible(nodeElement) {
  console.log("makeInvisible fired")
  nodeElement.className = "strobo-effect";
}

setTimeout(makeInvisible.bind(null, firstRow), typingSpeed*(firstText.length+1));

var pos2 = 0;
var stroboDelay = 15;

function typeLetters2(nodeElement, string) {
  console.log("fired")
  if(pos2 < string.length) {
    nodeElement.innerHTML += string.charAt(pos2);
    // console.log(string.charAt(pos2));
    pos2++;
    setTimeout(typeLetters2.bind(null, nodeElement, string), typingSpeed);
  }
}

setTimeout(typeLetters2.bind(null, secondRow, secondText), typingSpeed*(firstText.length+stroboDelay));

setTimeout(makeInvisible.bind(null, secondRow), typingSpeed *(secondText.length + firstText.length+stroboDelay));


var pos3 = 0;
function typeLetters3(nodeElement, string) {
  // console.log("fired third function")
  if(pos3 < string.length) {
    nodeElement.innerHTML += string.charAt(pos3);
    console.log(string.charAt(pos3));
    pos3++;
    setTimeout(typeLetters3.bind(null, nodeElement, string), typingSpeed);
  }
}

setTimeout(typeLetters3.bind(null, thirdRow, thirdText), typingSpeed *(secondText.length + firstText.length+stroboDelay*2));
setTimeout(makeInvisible.bind(null, thirdRow), typingSpeed*(secondText.length + firstText.length+stroboDelay*3));

function changeBackground() {
  // document.body.style.backgroundColor = "yellow";
  document.body.className ="on";
  // container.className = "container strobo-container";
}

setTimeout(changeBackground, typingSpeed *(secondText.length + firstText.length+stroboDelay*4));