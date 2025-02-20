function verificar() {
  let numero = parseInt(document.querySelector("#n1").value) || 0;
  let resto = numero % 2;
  let parTexto = document.querySelector("#par");
  let imparTexto = document.querySelector("#impar");

  parTexto.classList.remove("verde", "vermelho");
  imparTexto.classList.remove("verde", "vermelho");

  if (resto === 0) {
    parTexto.classList.add("verde");
    imparTexto.classList.add("vermelho");
  } else {
    parTexto.classList.add("vermelho");
    imparTexto.classList.add("verde");
  }
}
function reiniciar() {
  document.querySelector("#n1").value = "";
  let parTexto = document.querySelector("#impar");
  let imparTexto = document.querySelector("#par");

  parTexto.classList.remove("verde", "vermelho");
  imparTexto.classList.remove("verde", "vermelho");
}

document.querySelector("#botao").addEventListener("click", verificar);
document.querySelector("#botao_reiniciar").addEventListener("click", reiniciar);
