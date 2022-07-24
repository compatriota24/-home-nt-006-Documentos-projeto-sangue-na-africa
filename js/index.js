const dados = [
  {
    doador: "A",
    receptores: ["A", "AB"],
  },
  {
    doador: "B",
    receptores: ["B", "AB"],
  },
  {
    doador: "AB",
    receptores: ["AB"],
  },
  {
    doador: "O",
    receptores: ["A", "B", "AB", "O"],
  },
];

function leiaInputTipoSanguineo() {
  const tipoDoador = document.getElementById("tipoSanguineoDoador");
  const tipoReceptor = document.getElementById("tipoSanguineoReceptor");
  const result = document.getElementById("resultado");

  const doador = buscaDoador(tipoDoador.value);

  const eValido = buscaReceptor(tipoReceptor.value, doador.receptores);

  if (eValido) {
    result.textContent = "É válido";
  } else {

    result.textContent = "Não é válido";
  }
}

function buscaDoador(doador) {
  for (let idoador = 0; idoador < dados.length; idoador++) {
    if (doador == dados[idoador].doador) {
      return dados[idoador]
    }
  }
}

function buscaReceptor(receptor, vetorReceptores) {
  for (let ireceptor = 0; ireceptor < vetorReceptores.length; ireceptor++) {
    if (receptor == vetorReceptores[ireceptor]) {
      return true
    }
  }
  return false
}