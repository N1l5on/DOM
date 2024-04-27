document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); //evita que que o formulario seja enviado

  const valorCampoA = parseInt(document.getElementById("campoA").value);
  const valorCampoB = parseInt(document.getElementById("campoB").value); // capturar os valores do formulario do campo "A" e do campo "B"

  if (valorCampoB > valorCampoA) {
    alert("O valor do campo B é maior que o valor do campo A.");

    campoA.value = " ";
    campoB.value = " ";
  } else {
    alert("O valor do campo B é menor do que o valor do campo A.");
  }
});
