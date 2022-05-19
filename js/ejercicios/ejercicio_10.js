/*10.- Escribe un programa que pida un número y nos diga si es divisible 
por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)*/
let numero = prompt('Escriba un numero'); // divisible por 2,3,5,7
if((numero%2) == 0 || (numero%3) == 0 || (numero%5) == 0 || (numero%7) == 0){
    document.write('EL numero\n'+ numero+ '\n es divisible por uno de estos numeros: 2,3,5,7');
}
if((numero%2) != 0 && (numero%3) != 0 && (numero%5)!= 0 && (numero%7) != 0 ){
    document.write('EL numero\n'+ numero+ '\n no es divisible por 2,3,5 ni 7');
}