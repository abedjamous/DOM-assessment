let button = document.createElement("button");
button.id = 1; 
button.append("click me");
let bodyElement = document.querySelector("body");
bodyElement.append(button);


// this is the main element....

let mainElement  = document.createElement("main");
mainElement.id = 2;

bodyElement.append(mainElement);

// creat IMG inside the main element...

let imageElement = document.createElement('img');
imageElement.id = 3;
imageElement.src = "MoneyHeist.jpg";
mainElement.append(imageElement);
document.getElementById("3").height = "400";
document.getElementById("3").width = "400";


// creat a link inside the main element...

let linkElement = document.createElement("a");
linkElement.id = 4;
let linkText = document.createTextNode("netflix");
linkElement.appendChild(linkText);
linkElement.href = "https://www.netflix.com/title/80192098?source=35";
linkElement.target = "_blank";
mainElement.append(linkElement);

// function the button to remove main element....

button.onclick = function() {
    mainElement.remove();
}










