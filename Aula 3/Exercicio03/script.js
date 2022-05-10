function isPar(valor) {

  if (valor % 2 == 0 ){
    alert("Esse numero é par!");

  } else {
    alert("Esse numero é impar!");
  }
}

function clickButton() {
  let botao = document.getElementById("par");
  let valor = prompt("Digite um numero:");
  
  botao.addEventListener('click', isPar(valor), false)
}