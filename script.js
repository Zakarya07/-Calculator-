function print_result_multiplication() {

    let number_multiply_1 = prompt(`Enter your first number to multiply`, '');
    if (number_multiply_1 == '' || number_multiply_1 == null) {

        multiply() = undefined;
    }
    let number_multiply_2 = prompt(`Enter your second number to multiply`, '');



    function multiply(a, b) {
        return a * b;

    }

    multiply();
    alert(`The result is : ${multiply(number_multiply_1,number_multiply_2)}`);


}


function print_result_addition() {

    let number_addition_1 = prompt(`Enter your first number to additionnates`, '');
    if (number_addition_1 == '' || number_addition_1 == null) {

        addition() = undefined;
    }

    let number_addition_2 = prompt(`Enter your second number to additionnates`, '');

    function addition(a, b) {
        return +a + +b;

    }

    addition();
    alert(`The result is : ${addition(number_addition_1,number_addition_2)}`);


}


function print_result_substraction() {

    let number_substract_1 = prompt(`Enter your first number to substractes`, '');
    if (number_substract_1 == '' || number_substract_1 == null) {

        substraction() = undefined;
    }

    let number_substract_2 = prompt(`Enter your second number to substractes`, '');

    function substraction(a, b) {
        return a - b;

    }

    substraction();
    alert(`The result is : ${substraction(number_substract_1,number_substract_2)}`);


}

function print_result_division() {

    let number_divided_1 = prompt(`Enter your first number to divides`, '');
    if (number_divided_1 == '' || number_divided_1 == null) {

        division() = undefined;
    }
    let number_divided_2 = prompt(`Enter your second number to divides`, '');

    function division(a, b) {
        return a / b;

    }

    division();
    alert(`The result is : ${division(number_divided_1,number_divided_2)}`);


}

function print_result_remainder() {

    let number_remainder_1 = prompt(`Enter your first number to remaind`, '');
    if (number_remainder_1 == '' || number_remainder_1 == null) {

        remainder() = undefined;
    }
    let number_remainder_2 = prompt(`Enter your second number to remaind`, '');

    function remainder(a, b) {
        return a % b;

    }

    remainder();
    alert(`The result is : ${remainder(number_remainder_1,number_remainder_2)}`);
}

function print_result_exponentiation() {

    let number_exponentiation_1 = prompt(`Enter your first number to exponent`, '');
    if (number_exponentiation_1 == '' || number_exponentiation_1 == null) {

        exponentiation() = undefined;
    }
    let number_exponentiation_2 = prompt(`Enter your second number to exponent`, '');


    function exponentiation(a, b) {
        return a ** b;


    }

    exponentiation();
    alert(`The result is : ${exponentiation(number_exponentiation_1,number_exponentiation_2)}`);


}

function print_result_square() {

    let number_square = prompt(`Enter your number to find your square`, '');
    if (number_square == '' || number_square == null) {

        square() = undefined;
    }

    function square(a) {
        return a * a;

    }

    square();
    alert(`The result is : ${square(number_square)}`);


}

function hour() {
    let hour = prompt('Heure', '');
    let minute = prompt('Minute ', '');

    if (hour == hour && minute == minute) {
        alert(`it's ${hour}:${minute}`)
    }
}



function auth() {

    let idendity = prompt('Choose a username', '');
    let passwordAccount = prompt(`Choose a password`)

    let user = prompt('Username ?', '');

    if (user == idendity) {
        let password = prompt('Password ?');

        if (password == passwordAccount) {
            alert(`Welcome to ElkhattaCorp website ''${user.toUpperCase()}'', your account has been created succefully !  ;)`);

        } else if (password !== passwordAccount || password == null) {
            alert('Wrong Password !')
        }

    } else if (user == null || user !== idendity) {
        alert('Canceled')
    } else {
        alert(`"${user.toUpperCase()}" is not registred`)
    }


}

let i = 0;
while (i) alert(i--);