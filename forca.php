<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jogo da Forca</title>
    <script src="./scripts/controles.js" defer></script>
    <link rel="stylesheet" href="css/estilos.css">
</head>

<body>
   <div id="tiutlo1"> 2C3R - SISTEMAS & SOLUÇÕES</div>   
   <div id="titulo2"> JOGO DA FORCA</div>

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
        <div id="divImagemForcaFoto" class="divImagemForcaFoto">
            <img src="imagens/forca_0.jpg" alt="Imagem da forca">
        </div>
    </div>










</body>

</html>
