// -----------------------------------------------------------------------------------//
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
// Número do indice da palavra sorteada
var nome_numero = Math.floor(Math.random() * tamanhoDoGrupoPalavras) - 1;
console.log(" nome_numero : " + nome_numero); // Tirar depois
// Nome da palavra sorteada, transformada em caixa alta
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
// A Função abaixo, verifica se a letra informada, faz parte da palavra a ser descoberta.
function verificaLetraTeclada(xLetra) {
  temLetra = false;
  // Percorre a palavra a ser descoberta.
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
        "A palavra contém a Letra ",
        nome_palavra[i],
        ", na posição ",
        i,
        "Acertos : ",
        qtdAcertos,
      );
      // -----------------------------------------------------------------------------------//
      // A linha abaixo mostra no console as divs formadas, de acordo com cada letra informada (tempo de teste TIRAR)
      console.log("Divs criadas sugestão       : ", divLetrasRecebidasUnicas);
      console.log("Divs qtdDivUnica            : ", qtdDivUnica + 1); // Tirar depois
    }
  }
  //
  if (!temLetra) {
    // A linha abaixo, verifica no array 'letrasInseridas', se a letra já foi informada. Se não foi, inclui.
    if (letrasInseridas.indexOf(xLetra) < 0) {
      // Cria a div (posição) que vai mostrar a Letra informada pelo jogador
      criarDivLetrasRecebidas(1);
      var divLetrasRecebidasUnicas =
        document.getElementsByClassName("divLetrasRecebidas");
      // Número de divs (posições) a serem criadas, para receber as letras da palavra.
      qtdDivUnica++;
      // Coloca a letras na div "letras digitadas" (tempo de teste).
      divLetrasRecebidasUnicas[qtdDivUnica].innerHTML = xLetra;
    }
  }
  console.log("Tem a Letra, é verdadeiro"); // Tirar depois
  // Insere a Letra informada no array 'LetrasInseridas'.
  letrasInseridas.push(xLetra);
}
// Função que verifica quando uma tecla pressionada, é liberada (solta).
function keyUpFunction() {
  // Verifica se foi pressionada alguma tecla.
  if (document.getElementById("inputRecebeLetra").value != "") {
    // Esta função é ativada ao soltar a tecla pressionada.
    var pressionada = document.querySelector("#inputRecebeLetra");
    // Transforma em maiúscula, a letra informada.
    teclaPressionada = document
      .getElementById("inputRecebeLetra")
      .value.toUpperCase();
    // A função abaixo, verifica se a letra informada ja foi digitada. Menor que 0, significa que ainda não foi.
    if (letrasInseridas.indexOf(teclaPressionada) < 0) {
      verificaLetraTeclada(teclaPressionada);
    } else {
      alert("Esta Letra, ja foi informada ! Tente outra ....");
    }
    // Aqui, limpa o campo input, e lhe da o focus novamente.
    pressionada.value = "";
  }
}
//
// -----------------------------------------------------------------------------------//
//  AQUI, O FIM DE TODAS AS FUNÇÕES.
// -----------------------------------------------------------------------------------//
