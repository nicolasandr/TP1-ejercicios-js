/*9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
*/
let frase = prompt('Ingrese una frase de 5 caracteres');
let tamanioFrase=frase.length; /*se le asigna el tamaño de la palabra escrita en la variable tamañoFrase*/
console.log(frase.length); // te devuelve el tamaño de la palabra 
console.log(frase.substring(0,1)); //toma solamente la primera letra

/*lo que hace cada if es comparar cada letra de la palabra con las vocales. para poder posiconarnos en la letra
que queremos comparar, utilizamos la funcion substring (posicion inicial,posicion final)*/
// if(frase.substring(0,1) === 'a'|| frase.substring(0,1)=== 'e'|| frase.substring(0,1)=== 'i' || frase.substring(0,1)=== 'o' || frase.substring(0,1)==='u'){
//     document.write(frase.substring(0,1))
// }
// if(frase.substring(1,2) === 'a'|| frase.substring(1,2)=== 'e'|| frase.substring(1,2)=== 'i' || frase.substring(1,2)=== 'o' || frase.substring(1,2)==='u'){
//     document.write(frase.substring(1,2))
// }
// if(frase.substring(2,3) === 'a'|| frase.substring(2,3)=== 'e'|| frase.substring(2,3)=== 'i' || frase.substring(2,3)=== 'o' || frase.substring(2,3)==='u'){
//     document.write(frase.substring(2,3))
// }
// if(frase.substring(3,4) === 'a'|| frase.substring(3,4)=== 'e'|| frase.substring(3,4)=== 'i' || frase.substring(3,4)=== 'o' || frase.substring(3,4)==='u'){
//     document.write(frase.substring(3,4))
// }
// if(frase.substring(4,5) === 'a'|| frase.substring(4,5)=== 'e'|| frase.substring(4,5)=== 'i' || frase.substring(4,5)=== 'o' || frase.substring(4,5)==='u'){
//     document.write(frase.substring(4,5))
// } 


/*HACER EL MISMO EJERCICIO UTILIZANDO BUCLE: */

for(let contador=0; contador < tamanioFrase ; contador++){
    if(frase.charAt(contador) === 'a'|| frase.charAt(contador) === 'e'|| frase.charAt(contador) === 'i' || frase.charAt(contador) === 'o' || frase.charAt(contador) ==='u'){
         document.write(frase.charAt(contador))
        }
}