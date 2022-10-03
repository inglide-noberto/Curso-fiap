// var nome; // hoisting - içar, por isso usar o const
// console.log(nome,"chamando a variavel usando o var");

// const nome = 'avanade';

/**
 * Existem 7 tipos de erros no JS
 * --------------------------------------
 * SyntaxError - Escreveu alguma coisa errada.
 * ReferenceError- chamou alguém que não existe.
 * TypeError - Erro de tipo é uma violação do JS
 * EvalError - evite o uso do comando eval, mas se ele for inválido
 * RangeError - Erro de intervalor, loop infinito, ou chamadas inumeras de recursividade
 * URIError - Erro referente a URL - Uniforme Resource Identifier
 * InternalError - Erro interno, falta de memoria, processador...
 */
// função nominal.
//Sofre hoisting - tem um nome
escreve("museu do ipiranga");
function escreve(x) {
    console.log(x);
};

function mudaTitulo(novoTitulo) {
    document.querySelector("h1").innerHTML = '<i>' + novoTitulo + '<i>';
};

mudaTitulo("Vai São Paulo");

// expressão de função
// função anonima - sem nome
const mudaTitulo2 = function (target, novoTitulo) {
    document.querySelector(target).innerHTML = novoTitulo;
};
mudaTitulo2("h2", "Trocando subtitulo");

const relogio = () => {
    const date = new Date();
    mudaTitulo2("h2", date.toLocaleTimeString());
};

setInterval(relogio, 1000);

const frases = [
    "Um banco para 20 milhõs de pessoas",
    "C6 bank o seu banco",
    "Cartão de crédito sem anuidade",
    "Frase 4",
    "Frase 5",
];

const mudarFrases = function (target, frase, tempo) {
    let total =0;
    setInterval(()=>{
        document.querySelector(target).innerHTML = frase[total >= frase.length - 1 ? (total = 0) : (total += 1)];
        console.log(total)
    }, tempo * 1000);
};
mudarFrases("h1", frases , 2);