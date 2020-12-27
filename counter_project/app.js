var counter = parseInt(document.querySelector(".count").innerHTML);
console.log(counter);
document.querySelector(".lower").addEventListener("click", () => {
    counter--;
    document.querySelector(".count").innerHTML = counter;
    if (counter < 0) {
        document.querySelector("#counter").style.color = "red";
    }
    if (counter === 0) {
        document.querySelector("#counter").style.color = "black";
    }
});

document.querySelector(".add").addEventListener("click", () => {
    counter++;
    document.querySelector(".count").innerHTML = counter;
    if (counter > 0) {
        document.querySelector("#counter").style.color = "green";
    }
    if (counter === 0) {
        document.querySelector("#counter").style.color = "black";
    }
});