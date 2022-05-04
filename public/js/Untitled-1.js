let calculo = "";
const txt = document.getElementById('txt');

function funcao(param) {
    txt.innerHTML = param;
    calculo += param;
}

function resultado() {
    txt.innerHTML = eval(calculo);
}

function limpar() {
    calculo = "";
    txt.innerHTML = " ";
}
<!DOCTYPE html>
<html lang="pt-br">
<head>

    <title>Calculadora</title>

    <meta charset="utf-8">
    <style type="text/css">
        #tela {
            border: 1px solid #000;
            width:200px;
            padding:10px;
            text-align:right;
            margin-bottom:5px;
        }

        button {
            border:none;
            margin:2px;
            padding:10px;
            width:49px;
            height:50px;
        }
    </style>
</head>
<body>
    <!-- dentro do paragrafo foi adicionado um espaço em branco por questões visuais (alt+255) -->
    <div id='tela'><p id='txt'> </p></div>

    <!-- cada botao chama a função funcao() com o seu valor, sendo números ou operadores -->
    <button onclick="funcao('1')">1</button>
    <button onclick="funcao('2')">2</button>
    <button onclick="funcao('3')">3</button>
    <button onclick="funcao('+')">+</button><br>

    <button onclick="funcao('4')">4</button>
    <button onclick="funcao('5')">5</button>
    <button onclick="funcao('6')">6</button>
    <button onclick="funcao('-')">-</button><br>

    <button onclick="funcao('7')">7</button>
    <button onclick="funcao('8')">8</button>
    <button onclick="funcao('9')">9</button>
    <button onclick="funcao('*')">*</button><br>

    <!-- as funções limpar() e resultado() são para zerar a calculadora e mostrar o resultado, respectivamente-->
    <button onclick="limpar()">c</button>
    <button onclick="funcao('0')">0</button>
    <button onclick="resultado()">=</button>
    <button onclick="funcao('/')">/</button>
</body>