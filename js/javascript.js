function calcular() {
    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value;
    var resultado = parseFloat(numero1) + parseFloat(numero2);
    document.getElementById("resultado").innerHTML = resultado;
  }

  //algoritmo con condicional
  function main() {
    const n = Number(prompt("Introduce un número: "));
    if (n % 2 === 0) {
      console.log("holasoygerman");
    } else {
      console.log("alv");
    }
  }
  
  main();
  
  
  
  