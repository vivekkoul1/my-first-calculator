
//declare variables for left operand, operator, right operand and output.
let leftOperand;
let rightOperand;
let operator;
let result;


/*defining functions :
to get the input text from the screen*/
function getInput() {
    return document.querySelector(".input").innerText;
}

//to print the input text on the screen
function printInput(num) {
    document.querySelector('.input').innerText = num;
}

//to print the output on the screen
function printOutput(num) {
    document.querySelector('.output').innerText = num;
}

//defining click event function for all the keys using for loop
let buttons = document.querySelectorAll(".key")
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener ('click', function () {
        
        //if 'C' is pressed then empty everyting on screen
        if (this.innerText === 'C') {
            printInput("");
            printOutput("");
        }

        //otherwise print the clicked key on screen
        else {
            let key = this.innerText;
            key = getInput() + key;
            printInput(key);

            //if the user presses equal to without clicking any operator or entering the right operand.
            if (this.id === 'equal') {
                printOutput(getInput().slice(0, getInput().length-1)); 
            }
            
            //if any operator is pressed then that means end of left operand
            if (this.id === 'operator') {
                leftOperand = getInput().slice(0, getInput().length-1);
                operator = this.innerText;                             
            }

            //if equal key is pressed then that means end of right operand
            if (this.id === 'equal') {
                
                rightOperand = getInput().slice(leftOperand.length+1,getInput().length-1);

                //output the result according to operator type.
                switch(operator) {
                    case('+') :
                        result = Number(leftOperand) + Number(rightOperand);
                        printOutput(result);
                        break;

                    case('-') :
                        result = Number(leftOperand) - Number(rightOperand);
                        printOutput(result);
                        break;

                    case('x') :
                        result = Number(leftOperand) * Number(rightOperand);
                        printOutput(result);
                        break;

                    case('/') :
                        result = Number(leftOperand) / Number(rightOperand);
                        printOutput(result);
                        break;
                    }
                            
            }
        }
    })

}
