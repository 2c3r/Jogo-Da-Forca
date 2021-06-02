# Jogo-Da-Forca
javaScript / Php / Css - Jogo da Forca, em desenvolvimento....
---------------------------------------------
Referências :
https://sweetalert2.github.io/
http://www.codeprestige.com.br
http://www.diegopinho.com.br
---------------------------------------------
---------------------------------------------
Inicialize o plug-in fazendo referência aos arquivos cessários:
<script src="sweetalert2.all.min.js"></script>
-------------------------------------------------------------------------------------
Você também pode incluir a folha de estilo separadamente, se desejar:
<script src="sweetalert2.min.js"></script>
<link rel="stylesheet" href="sweetalert2.min.css">
ou
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'
// CommonJS
const Swal = require('sweetalert2')
--------------------------------------------
É possível importar JS e CSS separadamente, por exemplo se você precisar personalizar estilos:
import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'
----------------------------------------------------------
Chame a função sweetAlert2 após o carregamento da página
Swal.fire({
  title: 'Error!',
  text: 'Do you want to continue',
  icon: 'error',
  confirmButtonText: 'Cool'
})
-------------------------------------
