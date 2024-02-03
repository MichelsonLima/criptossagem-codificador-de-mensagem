/* A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"
 */

const btnClicked = document.querySelector('.btn')
const btnCopy = document.querySelector('.btn-copy')

function criptografarMensagem() {
  const mensagem = document.querySelector(".container-input");
  const mensagemOriginal = mensagem.value;
  function substituirVogais(letra) {
    switch (letra.toLowerCase()) {
      case'á':
        return "ai";
      case 'ã':
        return "ai";
      case 'â':
        return "ai";
      case "a":
        return "ai";
      case "e":
        return "enter";
      case "i":
        return "imes";
      case "o":
        return "ober";
      case "u":
        return "ufat";
      default:
        return letra;
    }
  }

  const mensagemCriptografada = mensagemOriginal
    .split("")
    .map(substituirVogais)
    .join("");
  return atualizaResultado(mensagemCriptografada);
}

function descriptografarMensagem() {
  const mensagem = document.querySelector(".container-input");
  const mensagemCriptografada = mensagem.value;
  const mapeamentoDescriptografar = {
    ai: "a",
    enter: "e",
    imes: "i",
    ober: "o",
    ufat: "u",
  };

  // Função para descriptografar uma sequência criptografada completa
  function descriptografarSequencia(sequencia) {
    return mapeamentoDescriptografar[sequencia] || sequencia;
  }

  // Dividindo a mensagem criptografada em sequências de caracteres
  const sequenciasCriptografadas = mensagemCriptografada.match(
    /(ai|enter|imes|ober|ufat)|./gi
  );

  // Mapeando cada sequência de volta para a letra original
  const mensagemDescriptografada = sequenciasCriptografadas
    .map(descriptografarSequencia)
    .join("");

  return atualizaResultado(mensagemDescriptografada);
}

function atualizaResultado(resultado) {
  const divResultado = document.querySelector(".caixaTexto-resultado");
  divResultado.innerHTML = `<p class="caixaTexto-texto">${resultado}</p>`;
}

function copiarMensagem() {
  const divResultado = document.querySelector(".caixaTexto-resultado");
  const textoParaCopiar = divResultado.textContent;

  navigator.clipboard
    .writeText(textoParaCopiar)
    .then(() => {
      alert("Texto copiado.");
    })
    .catch((error) => {
      console.error(`Erro ao copiar o texto: ${error}`);
    });
}

btnClicked.addEventListener('click', ()=>{
  btnCopy.style.display = 'block'
})