let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
            string = ""; // Clear the string after evaluation
        } else if (e.target.innerHTML == 'AC') {
            string = ""; // Clear string when 'C' button is pressed
            input.value = string;
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});
