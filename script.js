//------------------------------------------Function Multiplication
function print_result_multiplication() {

    let number_multiply_1 = Number(prompt(`Entrez un premier chiffre pour multiplier `, ''));
    if (number_multiply_1 == '' || number_multiply_1 == null) {

        multiply() = undefined;
    }
    let number_multiply_2 = Number(prompt(`Entrez un second chiffre pour multiplier `, ''));

    function multiply(a, b) {
        return a * b;
    }

    multiply();
    resultOfCurrentOperation(`Le résultat de la multiplication est: ${multiply(number_multiply_1,number_multiply_2)}`);
}

//------------------------------------------Function Addition
function print_result_addition() {

    let number_addition_1 = Number(prompt(`Entrez un premier chiffre pour additioner`, ''));
    if (number_addition_1 == '' || number_addition_1 == null) {

        addition() = undefined;
    }

    let number_addition_2 = Number(prompt(`Entrez un second chiffre pour additionner`, ''));

    function addition(a, b) {
        return +a + +b;

    }

    addition();
    resultOfCurrentOperation(`Le résulat de l'addition est: ${addition(number_addition_1,number_addition_2)}`);


}

//------------------------------------------Function Soustraction
function print_result_substraction() {

    let number_substract_1 = Number(prompt(`Entrez un premier chiffre pour soustraire`, ''));
    if (number_substract_1 == '' || number_substract_1 == null) {

        substraction() = undefined;
    }

    let number_substract_2 = Number(prompt(`Entrez un second chiffre pour soustraire`, ''));

    function substraction(a, b) {
        return a - b;

    }

    substraction();
    resultOfCurrentOperation(`Le résultat de la soustraction est: ${substraction(number_substract_1,number_substract_2)}`);
}

//------------------------------------------Function Division
function print_result_division() {

    let number_divided_1 = Number(prompt(`Entrez un premier chiffre pour diviser`, ''));
    if (number_divided_1 == '' || number_divided_1 == null) {

        division() = undefined;
    }
    let number_divided_2 = Number(prompt(`Entrez un premier chiffre pour diviser`, ''));

    function division(a, b) {
        return a / b;

    }

    division();
    resultOfCurrentOperation(`Le résultat de la division est: ${division(number_divided_1,number_divided_2)}`);

}

//------------------------------------------Function Reste (Modulo)
function print_result_remainder() {

    let number_remainder_1 =Number(prompt(`Entrez un premier chiffre pour calculer le reste`, ''));
    if (number_remainder_1 == '' || number_remainder_1 == null) {

        remainder() = undefined;
    }
    let number_remainder_2 = Number(prompt(`Entrez un second chiffre pour calculer le reste`, ''));

    function remainder(a, b) {
        return a % b;
    }

    remainder();
    resultOfCurrentOperation(`Le résultat du modulo est: ${remainder(number_remainder_1,number_remainder_2)}`);
}

//------------------------------------------Function Puissance
function print_result_exponentiation() {

    let number_exponentiation_1 = Number(prompt(`Entrez un premier chiffre pour trouver la puissance`, ''));
    if (number_exponentiation_1 == '' || number_exponentiation_1 == null) {

        exponentiation() = undefined;
    }
    let number_exponentiation_2 = Number(prompt(`Entrez un second chiffre pour trouver la puissance`, ''));

    function exponentiation(a, b) {
        return a ** b;
    }

    exponentiation();
    resultOfCurrentOperation(`Le résulat  de ${number_exponentiation_1} exposant ${number_exponentiation_2} est: ${exponentiation(number_exponentiation_1,number_exponentiation_2)}`);

}

//------------------------------------------Function Carré d'un nombre
function print_result_square() {

    let number_square = Number(prompt(`Entrez un nombre pour trouver le carré de votre chiffre`, ''));
    if (number_square == '' || number_square == null) {

        square() = undefined;
    }

    function square(a) {
        return a * a;

    }

    square();
    resultOfCurrentOperation(`Le carré de ${number_square} est: ${square(number_square)}`);
}



function resultOfCurrentOperation(currentOperation) 
      {
        document.getElementById("final_result").innerHTML=`${currentOperation}`;
      }



// let gett= document.getElementById("g-p");

// function growThings(items){

//     let elemWithId= document.getElementById(`${items}`);
//     let elemWithClass= document.getElementsByClassName(`${items}`);
//     let elemWithTag=document.getElementsByTagName(`${items}`);

//     if (elemWithId) {
//         elemWithId.style.color="yellow";
//         }
//     else if(elemWithClass){
//         elemWithClass.style.color="yellow";

//     }
//     else if(elemWithTag){

//         elemWithTag.style.color="yellow";
//     }

// }

// growThings(gett);