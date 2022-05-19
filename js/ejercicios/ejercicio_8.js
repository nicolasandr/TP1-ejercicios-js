/*8.- Escribe un programa que pida un número y diga si es divisible por 2*/
let numero1 =parseInt( prompt('Escriba un numero entero'));

numprimo=(numero1 % 2);

if(numprimo == 0)
{
    document.write('EL numero\n'+ numero1 + '\n es divisible por 2');
}
else{
    document.write('EL numero\n'+ numero1 + '\n NO es divisible por 2');
}

