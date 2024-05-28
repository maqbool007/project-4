let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
             {
                 input.value = string;
                string = calculate(string);
            } 
        } else if (e.target.innerHTML === 'AC') {
            string = "";
            input.value = "";
        } else if (e.target.innerHTML === 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});
function calculate(expression) {
    return Function('return ' + expression)();
}
