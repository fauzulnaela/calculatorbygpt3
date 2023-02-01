const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");

buttons.forEach(button => {
button.addEventListener("click", () => {
let value = button.getAttribute("value");
if (value === "C") {
display.textContent = "0";
} else if (value === "=") {
display.textContent = eval(display.textContent);
} else {
display.textContent === "0"
? (display.textContent = value)
: (display.textContent += value);
}
});
});