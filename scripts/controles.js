// -----------------------------------------------------------------------------------//
Swal.fire({ title: "Seja bem vindo !!!", timer: 1000 });
// jogo da forca //
// Abaixo, Array's que contém os tipos e nomes das palavras a serem descobertas
// tipos de Grupo de palavras
var grupoDePalavras = [
  "ANIMAIS",
  "AUTOMÓVEIS",
  "CIDADES_BR",
  "CORES",
  "DIAS_DA_SEMANA",
  "ESTADOS_BR",
  "FLORES",
  "FRUTAS",
  "MESES_DO_ANO",
  "MONTADORAS",
  "NUMEROS_ORDINAIS",
  "PAÍSES",
  "PALAVRAS_DIVERSAS",
  "RELIGIÃO",
  "TIMES_DE_FUTEBOL",
];
// -----------------------------------------------------------------------------------//
// Abaixo os grupos de PALAVRAS ( 15 )
var nomeDoGrupoDePalavrasTxt = [
  "animais.txt",
  "automoveis.txt",
  "cidades_br_estado.txt",
  "cores.txt",
  "dias_da_semana.txt",
  "estados_br.txt",
  "flores.txt",
  "frutas.txt",
  "meses_do_ano.txt",
  "montadoras.txt",
  "numeros_ordinais.txt",
  "paises.txt",
  "palavras_diversas.txt",
  "religiao.txt",
  "times_de_futebol.txt",
];
//
// Abaixo, retirar depois
var nomes = [
  "número",
  "randômico",
  "máximo",
  "qualquer",
  "sabemos",
  "receitas",
  "gerar",
  "aleatórios",
  "código",
  "seguinte",
  "abaixo",
  "unidade",
  "peixe",
  "camarão",
  "pintado",
  "surubim",
  "traíra",
  "verdade",
  "multiplicando",
  "somando",
  "dividindo",
  "subtraindo",
];
// -----------------------------------------------------------------------------------//
// Abaixo as variáveis do programa
// A linha abaixo, armazena a quantidade máxima de nomes do array.
var tamanhoDoGrupoPalavras = grupoDePalavras.length - 1;
// A linha abaixo, armazena todas as letras informadas.
var letrasInseridas = [];
//  A linha abaixo, armazena todas as letras erradas.
var letrasErradas = [];
// A linha abaixo, armazena a quantidade de tentativas.
var qtdTentativas = 0;
// A linha abaixo, armazena a quantidade de letras erradas.
var qtdErros = 0;
// A linha abaixo, armazena a quantidade de letras corretas.
var qtdAcertos = 0;
// A linha abaixo, armazena se a letra está ou não contida na palavra.
var temLetra = false;
//  A linha abaixo, armazena o número de divs 'divLetrasRecebidasUnicas'.
var qtdDivUnica = -1;
// Armazena a letra recebida no input
var letraRecebida = document.getElementById("inputRecebeLetra").value;
// Armazena a letra recebida no input
var xLetra = "";
// Número do indice da palavra sorteada
var nome_numero = Math.floor(Math.random() * tamanhoDoGrupoPalavras) - 1;
console.log(
  "TAMANHO DO GRUPO : " +
    tamanhoDoGrupoPalavras +
    " nome_numero : " +
    nome_numero,
); // Tirar depois
console.log("Número RND da palavra : " + nome_numero); // tirar depois
if (nome_numero < 0) {
  nome_numero = 0;
  console.log("Novo número da palavra : " + nome_numero); // tirar depois
}
// Nome da palavra sorteada, transformada em caixa alta,
var nome_palavra = nomes[nome_numero].toUpperCase();
// Quantidade de Letras da palavra sorteada
var qtdLetrasDaPalavra = nome_palavra.length;
// Onde serão mostradas as letras informadas.
var divLetrasRecebidasUnicas;
// A linha abaixo, cria a quantida de divs no tamanho da palavra
criarDivLetras(qtdLetrasDaPalavra);
// A linha abaixo cria um Array com o conteúdo de todas as letras, com o nome de 'divPalavraEscondidaLetra'
var divsPalavraFormada = document.getElementsByClassName(
  "divPalavraEscondidaLetra",
);
// -----------------------------------------------------------------------------------//
// TIRAR TUDO, DEPOIS DO PROGRAMA CONCLUIDO !!!
// A linha abaixo mostra a palavra sorteada (tempo de teste)
console.log("Palavra sorteada é : ", nome_palavra);
// A linha abaixo mostra no console o tamanho da palavra. (tempo de teste)
console.log("Tamanho da palavra : ", nome_palavra.length);
// A linha abaixo mostra no console as divs formadas, de acordo com o tamanho da palavra (tempo de teste)
console.log("Divs criadas        : ", divsPalavraFormada);
// -----------------------------------------------------------------------------------//
//  Abaixo todas as funções do programa.
// -----------------------------------------------------------------------------------//
// A função abaixo, cria as divs de cada Letra da palavra sorteada
function criarDivLetras(qtd) {
  for (var i = 0; i < qtd; i++) {
    var criarDiv = document.createElement("div"); // Elemento(TAG) a ser criadA
    criarDiv.classList = "divPalavraEscondidaLetra"; // Da nome a classe
    var container = document.querySelector("#divPalavraEscondida"); //
    container.appendChild(criarDiv); // Inserindo elemento filho
  }
}
// A função abaixo, cria as divs de cada letra inserida, informadas pelo jogador
function criarDivLetrasRecebidas(qtd) {
  for (var i = 0; i < qtd; i++) {
    var criarDiv = document.createElement("div"); // Elemento(TAG) a ser criada
    criarDiv.classList = "divLetrasRecebidas"; // Da nome a classe
    var container = document.querySelector("#divLetrasDigitadas"); //
    container.appendChild(criarDiv); // Inserindo elemento filho
  }
}
//  Esta função, verifica se ja foi informada a letra
function letraJaDigitada(xLetra) {
  if (letrasInseridas.indexOf(xLetra) !== -1) {
    return true;
  }
  return false;
}
// A Função abaixo, verifica se a letra informada, faz parte da palavra a ser descoberta.
function verificaLetraTeclada(xLetra) {
  if (!letraJaDigitada(xLetra)) {
    temLetra = false;
    // Percorre a palavra a ser descoberta,  para verificar se possui a letra inserida.
    for (var i in nome_palavra) {
      // Verifica, letra por letra, se a letra informada, faz parte da palavra a ser descoberta.
      if (xLetra === nome_palavra[i]) {
        // Torna verdadeira, a variável abaixo.
        temLetra = true;
        // Soma-se mais 1, no número de letras corretas.
        qtdAcertos++;
        // Mostra a letra, na palavra escondida.
        divsPalavraFormada[i].innerHTML = nome_palavra[i];
        // Mostra a letra, se estiver contida na palavra. Tirar depois o bloco abaixo
        console.log(
          "Letra " +
            nome_palavra[i] +
            ", na posição " +
            i +
            "Acertos : " +
            qtdAcertos,
        );
        // -----------------------------------------------------------------------------------//
        // A linha abaixo mostra no console as divs formadas, de acordo com cada letra informada (tempo de teste TIRAR)
        console.log("Divs criadas sugestão       : ", divLetrasRecebidasUnicas);
        console.log("Divs qtdDivUnica            : ", qtdDivUnica + 1); // Tirar depois
      }
    }
    //  Se não tem a letra informada...
    if (!temLetra) {
      // Soma-se 1 , a quantidade de letras erradas.
      qtdErros++;
      // A linha abaixo, verifica no array 'letrasInseridas', se a letra já foi informada. Se não foi, inclui.
      if (letrasInseridas.indexOf(xLetra) == -1) {
        // Cria a div (posição) que vai mostrar a Letra informada pelo jogador
        criarDivLetrasRecebidas(1);
        var divLetrasRecebidasUnicas =
          document.getElementsByClassName("divLetrasRecebidas");
        // Número de divs (posições) a serem criadas, para receber as letras da palavra.
        qtdDivUnica++;
        // Coloca a letras na div "letras digitadas" (tempo de teste).
        divLetrasRecebidasUnicas[qtdDivUnica].innerHTML = xLetra;
      }
      mudaFiguraForca(qtdErros);
    }
    console.log("Tem a Letra, é verdadeiro"); // Tirar depois
    // Insere a Letra informada no array 'LetrasInseridas'.
    letrasInseridas.push(xLetra);
    document.getElementById("inputRecebeLetra").value = "";
  } //   Se a letra ainda não foi digitada - tirar depois
} // Final da verificação da letra na palavra - TIRAR este comentário
// Função que verifica quando uma tecla pressionada, é liberada (solta).
function keyUpFunction() {
  // -----------------------------------------------------------------------------------//
  // Verifica se foi pressionada alguma tecla.
  if (document.getElementById("inputRecebeLetra").value != "") {
    // Esta função é ativada ao soltar a tecla pressionada.
    //var teclaPressionada = document.querySelector("#inputRecebeLetra");  tirar DEPOIS
    // document.getElementById("inputRecebeLetra").focus();
    // Transforma em maiúscula, a letra informada.
    var teclaPressionada = document
      .getElementById("inputRecebeLetra")
      .value.toUpperCase();
    // A função abaixo, verifica se a letra informada ja foi digitada. Menor que 0, significa que ainda não foi.
    console.log("Letras inseridas : " + letrasInseridas.length); //  TIRAR DEPOIS
    if (letrasInseridas.indexOf(teclaPressionada) == -1) {
      qtdTentativas++;
      verificaLetraTeclada(teclaPressionada);
      atualizaInfo();
    } else {
      msgLetraJaInformada();
    }
    // Aqui, limpa o campo input, e lhe da o focus novamente.
    teclaPressionada.value = "";
  }
}
// Função que verifica quantidade de erros, e muda a figura da forca
function mudaFiguraForca(erros) {
  var trocaFiguraForca = document.querySelector("#imagemForca");
  switch (erros) {
    case 1:
      //Swal.fire({ type: "error", title: "Erro de número --> " + erros, timer: 2000 });
      msgLetraErrada(xLetra);
      trocaFiguraForca.setAttribute("src", "imagens/forca_1.jpg");
      break;
    case 2:
      msgLetraErrada(xLetra);
      trocaFiguraForca.setAttribute("src", "imagens/forca_2.jpg");
      break;
    case 3:
      msgLetraErrada(xLetra);
      trocaFiguraForca.setAttribute("src", "imagens/forca_3.jpg");
      break;
    case 4:
      msgLetraErrada(xLetra);
      trocaFiguraForca.setAttribute("src", "imagens/forca_4.jpg");
      break;
    case 5:
      msgLetraErrada(xLetra);
      trocaFiguraForca.setAttribute("src", "imagens/forca_5.jpg");
      break;
    case 6:
      msgLetraErrada(xLetra);
      trocaFiguraForca.setAttribute("src", "imagens/forca_6.jpg");
      break;
    case 7:
      msgLetraErrada(xLetra);
      trocaFiguraForca.setAttribute("src", "imagens/forca_7.jpg");
      fimDoJogo();
      break;
    default:
      break;
  }
  atualizaInfo();
}
// -----------------------------------------------------------------------------------//
//  Função verifica fim de jogo
function fimDoJogo() {
  if (qtdAcertos === qtdLetrasDaPalavra) {
    swal.fire({
      title:
        "Parabéns, você completou a palavra com sucesso !!! \n\n        Em " +
        qtdTentativas +
        " Tente outra ....",
      icon: "success",
      timer: 5000,
    });
  }

  if (qtdErros == 7 || qtdAcertos) {
    swal.fire({
      title:
        "Lamento, mas você foi WNFORCADO !!!",
      icon: "error",
      timer: 15000,
    });
  }
}
// -----------------------------------------------------------------------------------//
//  Função atualiza informações do jogo
function atualizaInfo() {
  document.querySelector("#tentativas").innerHTML =
    "Tentativas : " + zerosEsquerda(qtdTentativas);
  document.querySelector("#acertos").innerHTML =
    "Acertos : " + zerosEsquerda(qtdAcertos);
  document.querySelector("#erros").innerHTML =
    "Erros : " + zerosEsquerda(qtdErros);
}
// -----------------------------------------------------------------------------------//
//   Funções para formatar zeros a esquerda
function zerosEsquerda(v1) {
  var v2 = v1.toString();
  while (v2.length < 2) {
    v2 = "0" + v2;
  }
  return v2;
}
// -----------------------------------------------------------------------------------//
//   Funções para envio de mensagens ao uuário
function msgLetraErrada(letra) {
  console.log("Letra no sweet : " + letra);
  Swal.fire({
    icon: "error",
    title:
      "A letra " +
      letra +
      ", não faz parte da palavra. /                         Tente outra letra.",
    confirmButtonText: "Continuar",
    timer: 2000,
  });
}
// -----------------------------------------------------------------------------------//
function msgLetraJaInformada() {
  swal.fire({
    title: "Esta Letra, ja foi informada ! \n                 Tente outra ....",
    icon: "warning",
    timer: 5000,
  });
}
// -----------------------------------------------------------------------------------//
//  AQUI, O FIM DE TODAS AS FUNÇÕES.
// -----------------------------------------------------------------------------------//
