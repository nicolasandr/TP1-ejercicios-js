let numero1 =parseInt( prompt('Escriba un numero entero'));
let numero2 =parseInt( prompt('Escriba un segundo numero entero'));
let numero3 =parseInt( prompt('Escriba un tercer numero entero'));

    if(numero1>numero2)
    {
      if(numero1>numero3){
          document.write("el mayor es:",numero1);
      }
      else{
          document.write("el mayor es:",numero3);
      }
    }
    if(numero2>numero3)
    {
        document.write("el mayor es:",numero2);
    }
    else {
        document.write("el mayor es:",numero3);
    }
    

