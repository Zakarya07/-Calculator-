//------------------------------------------Function Multiplication
function print_result_multiplication() {

    let number_multiply_1 = prompt(`Entrez un premier chiffre pour multiplier `, '');
    if (number_multiply_1 == '' || number_multiply_1 == null) {

        multiply() = undefined;
    }
    let number_multiply_2 = prompt(`Entrez un second chiffre pour multiplier `, '');

    function multiply(a, b) {
        return a * b;
    }

    multiply();
    alert(`Le résultat de la multiplication est: ${multiply(number_multiply_1,number_multiply_2)}`);
}

//------------------------------------------Function Addition
function print_result_addition() {

    let number_addition_1 = prompt(`Entrez un premier chiffre pour additioner`, '');
    if (number_addition_1 == '' || number_addition_1 == null) {

        addition() = undefined;
    }

    let number_addition_2 = prompt(`Entrez un second chiffre pour additionner`, '');

    function addition(a, b) {
        return +a + +b;

    }

    addition();
    alert(`Le résulat de l'addition est: ${addition(number_addition_1,number_addition_2)}`);


}

//------------------------------------------Function Soustraction
function print_result_substraction() {

    let number_substract_1 = prompt(`Entrez un premier chiffre pour soustraire`, '');
    if (number_substract_1 == '' || number_substract_1 == null) {

        substraction() = undefined;
    }

    let number_substract_2 = prompt(`Entrez un second chiffre pour soustraire`, '');

    function substraction(a, b) {
        return a - b;

    }

    substraction();
    alert(`Le résultat de la soustraction est: ${substraction(number_substract_1,number_substract_2)}`);
}

//------------------------------------------Function Division
function print_result_division() {

    let number_divided_1 = prompt(`Entrez un premier chiffre pour diviser`, '');
    if (number_divided_1 == '' || number_divided_1 == null) {

        division() = undefined;
    }
    let number_divided_2 = prompt(`Entrez un premier chiffre pour diviser`, '');

    function division(a, b) {
        return a / b;

    }

    division();
    alert(`Le résultat de la division est: ${division(number_divided_1,number_divided_2)}`);

}

//------------------------------------------Function Reste (Modulo)
function print_result_remainder() {

    let number_remainder_1 = prompt(`Entrez un premier chiffre pour calculer le reste`, '');
    if (number_remainder_1 == '' || number_remainder_1 == null) {

        remainder() = undefined;
    }
    let number_remainder_2 = prompt(`Entrez un second chiffre pour calculer le reste`, '');

    function remainder(a, b) {
        return a % b;
    }

    remainder();
    alert(`Le résultat du modulo est: ${remainder(number_remainder_1,number_remainder_2)}`);
}

//------------------------------------------Function Puissance
function print_result_exponentiation() {

    let number_exponentiation_1 = prompt(`Entrez un premier chiffre pour trouver la puissance`, '');
    if (number_exponentiation_1 == '' || number_exponentiation_1 == null) {

        exponentiation() = undefined;
    }
    let number_exponentiation_2 = prompt(`Entrez un second chiffre pour trouver la puissance`, '');

    function exponentiation(a, b) {
        return a ** b;
    }

    exponentiation();
    alert(`Le résulat de ${number_exponentiation_1} exposant ${number_exponentiation_2} est: ${exponentiation(number_exponentiation_1,number_exponentiation_2)}`);

}

//------------------------------------------Function Carré d'un nombre
function print_result_square() {

    let number_square = prompt(`Entrez un nombre pour trouver le carré de votre chiffre`, '');
    if (number_square == '' || number_square == null) {

        square() = undefined;
    }

    function square(a) {
        return a * a;

    }

    square();
    alert(`Le carré de ${number_square} est: ${square(number_square)}`);
}

// TESTING  FOR IMPROVING SKILLS WITH AN ''SIGN IN LOGICAL FUNCTION''
function authentification() {

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
