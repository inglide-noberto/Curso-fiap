const resultado = document.querySelector("#resultado");

// arrow function nao acessa 'arguments'

let myFunc = {
    showArguments() {
        resultado.innerHTML = resultado;
        console.log(arguments);
    }
}
myFunc.showArguments(
    "BMW",
    "AUDI",
    "MERCEDES",
    "BENTLEY",
    "FERRARI",
    "LAMBORGHINI"
);

let myFunc2 = {
    showArguments:() => {
        resultado.innerHTML = arguments;
        console.log(arguments);
    }
}
// myFunc2.showArguments(
//     "Corsa",
//     "Escort",
//     "Uno",
//     "Gol",
//     "Fusca",
//     "Kombi"
// );
// .THIS NAO EXISTE EM ARROW FUNCTION
let user = {
    name: "Inglide",
    usandoArrow: ()=>{
        console.log(`Meu nome é ${this.name}, com Arrow Function`)
    },
    usandoNominal(){
        console.log(`Meu nome é ${this.name}, com Nominal Function`)
    }
}

user.usandoArrow();
user.usandoNominal();

let soma = (a,b) =>{
    console.log(a+b);
}
let soma2 = function(a,b){
    console.log(a+b);
}

// new soma(50,20);  - Erro de tipo, Arrow function não é construtor, não pode ser instanciado
new soma2(50,20);

// uma função anonima precisa de um contexto, ou passamos como parametro - callback , ou atribuimos ela a uma constante


// um array com 5 frases e a cada 5 segundos muda a frase

