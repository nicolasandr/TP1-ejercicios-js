let numero = prompt('Escriba un numero'); // divisible por 2,3,5,7
if((numero%2) == 0){
    document.write('EL numero\n'+ numero+ '\n es divisible por 2<br>');
}
if((numero%3) == 0){
    document.write('EL numero\n'+ numero+ '\n es divisible por 3<br>');
}
if((numero%5) == 0){
    document.write('EL numero\n'+ numero+ '\n es divisible por 5<br>');
}
if((numero%7) == 0){
    document.write('EL numero\n'+ numero+ '\n es divisible por 7<br>');
}
if((numero%2) != 0 && (numero%3) != 0 && (numero%5)!= 0 && (numero%7) != 0 ){
    document.write('EL numero\n'+ numero+ '\n no es divisible por 2,3,5 ni 7');
}