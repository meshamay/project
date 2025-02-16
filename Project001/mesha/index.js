document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.querySelectorAll('.button'); // Select all buttons
    let input = document.getElementById('inputbox'); // Select input field
    let string = "";

    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            let buttonText = e.target.innerHTML;

            if (buttonText === '=') {
                try {
                    string = string.replace(/X/g, '*'); // Replace "X" with "*" for eval()
                    string = eval(string); // Evaluate the mathematical expression
                    input.value = string;
                } catch (error) {
                    input.value = "Error"; // Handle invalid expressions
                }
            } 
            else if (buttonText === 'AC') {
                string = "";
                input.value = string;
            } 
            else if (buttonText === 'DEL') {  
                string = string.substring(0, string.length - 1);
                input.value = string;
            } 
            else {
                string += buttonText;
                input.value = string;
            }
        });
    });
});
