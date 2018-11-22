function calculadora() {
  var Numero1 = parseFloat(document.getElementById("Numero1").value);
  var Numero2 = parseFloat(document.getElementById("Numero2").value);
  var resultado = 0;
  if (document.getElementsByName("operacao")[0].checked) {
    resultado = Numero1 + Numero2;
  }
  if (document.getElementsByName("operacao")[1].checked) {
    resultado = Numero1 - Numero2;
  }
  if (document.getElementsByName("operacao")[2].checked) {
    resultado = Numero1 * Numero2;
  }
  if (document.getElementsByName("operacao")[3].checked) {
    resultado = Numero1 / Numero2;
  }
  if(document.getElementsByName("operacao")[4].checked){
      resultado = Math.pow(Numero1, Numero2)    ;
  }
  document.getElementById("resultado").value = resultado;
}
