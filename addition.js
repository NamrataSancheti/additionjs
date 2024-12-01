let first = document.getElementById("firstNumber");
let second = document.getElementById("secondNumber");
let user = document.getElementById("userInput");
let para = document.getElementById("gameResult");

function restartButton() {
    let firstRandomNumber = Math.random() * 100;
    let secondRandomNumber = Math.random() * 100;
    first.textContent = Math.ceil(firstRandomNumber);
    second.textContent = Math.ceil(secondRandomNumber);
    para.textContent = "";
    user.value = "";

}

restartButton();

function checkButton() {
    let first1 = parseInt(first.textContent);
    let second1 = parseInt(second.textContent);
    let value = parseInt(user.value);

    if ((first1 + second1) === value) {
        para.style.backgroundColor = "#028a0f";
        para.textContent = "Congratulations! You got it right.";
    } else {
        para.textContent = "Please Try Again!";
        para.style.backgroundColor = "#1e217c";
    }
}