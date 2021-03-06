<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jogo da Forca</title>
    <script src="./scripts/controles.js" defer></script>
    <link rel="stylesheet" href="css/estilos.css">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</head>

<body>
    <div id="titulo1"> 2C3R - Sistemas & Soluções - Jogo Da Forca</div>
    <!-- <div id="titulo2"> Jogo Da Forca</div>-->
    <br>
    <div class="divPalavraEscondida" id="divPalavraEscondida">
        <div class="divTextoLetrasDigitadas">Palavra escondida ==> </div>
        <!-- Aqui será criada as divs "divPalavraEscondidaLetra"que receberam as letras da palavra sorteada, a ser descoberta -->
    </div>
    <br>
    <div id="divLetrasDigitadas" class="divLetrasDigitadas">
        <div class="divTextoLetrasDigitadas">Letras erradas ==> </div>
        <!-- Aqui será criada as divs "divLetrasRecebidas"que receberam as letras informadas -->
    </div>
    <br>
    <div id="divRecebeLetra" class="divRecebeLetra">
        <div class="divTextoLetraRecebida">Digite a letra ==></div>
        <div class="divLetraJogador" id="divLetraJogador">
            <input type="text" onkeyup="keyUpFunction()" id="inputRecebeLetra" name="inputRecebeLetra"
                autofocus="autofocus" onfocus="this.value=''" maxlength="1" required autocomplete="off">
        </div>
    </div>

    <div id="iniciarJogo">
        <button onclick="iniciaJogo">Iniciar Jogor</button>
    </div>

    <div id="divImagemForca" class="divImagemForca">
        <div id="divImagemForcaEsquerda">DIV ESQUERDA</div>
        <div id="divImagemForcaFoto" class="divImagemForcaFoto">
            <img id="imagemForca" src="imagens/forca_0.jpg" alt="Imagem da forca">
        </div>
        <div id="divImagemForcaDireita">
            <p id="tentativas">Tentativas : 000</p>
            <p id="acertos">Acertos : 000</p>
            <p id="erros">Erros : 000</p>
        </div>
    </div>



</body>

</html>