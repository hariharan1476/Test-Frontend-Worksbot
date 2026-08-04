let counter = 0;
function showAlert() {
    alert("Welcome to JavaScript!!!!!!!!");
}
function changeHeading() {
    document.getElementById("title").innerHTML = "Heading Changed Successfully";
}
function changeBackground() {
    let colors = ["lightblue","lightgreen","lightyellow","lightpink","orange","lightgray"];
    let random = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[random];
}
function showDate() {
    document.getElementById("date").innerHTML = new Date();
}
function increaseCounter() {
    counter++;
    document.getElementById("counter").innerHTML =counter;
}
function resetCounter() {
    counter = 0;
    document.getElementById("counter").innerHTML =counter;
}
function hideText() {
    document.getElementById("text").style.display ="none";
}
function showText() {
    document.getElementById("text").style.display ="block";
}
function changeTextColor() {
    let colors = ["red","blue","green","purple","brown","orange"];
    let random = Math.floor(Math.random() * colors.length);
    document.getElementById("title").style.color = colors[random];
}
function changeParagraph() {
    document.getElementById("text").innerHTML ="Paragraph changed successfully using JavaScript.";
}
function changeFontSize() {
    document.getElementById("title").style.fontSize ="40px";
}
function changeButtonText(button) {
    button.innerHTML = "Clicked";
}
function countCharacters() {
    let text =document.getElementById("text").innerHTML;
    document.getElementById("result").innerHTML ="Total Characters : " + text.length;
}
function uppercaseHeading() {
    let heading =document.getElementById("title");
    heading.innerHTML =heading.innerHTML.toUpperCase();
}