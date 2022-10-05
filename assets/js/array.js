const carros = document.querySelector("#carros");
// document.getElementById - sempre existiu.
const carrosArray = [
  "Chevrolet",
  "Fiat",
  "Ford",
  "Honda",
  "Hyundai",
  "Kia",
  "Mazda",
  "Mercedes-Benz",
  "Nissan",
  "Peugeot",
  "Renault",
  "Toyota",
  "Volkswagen",
];

carrosArray.forEach((value, key) => {
  carros.innerHTML += `<option value="${key}">${value}</option>`;
});

// carrosArray.forEach((value) => console.log(value));

const importados = [
  ["BMW", "320i", "M3", "M4", "X5", "X6", "z4 m40i"],
  ["Audi", "a4", "s4", "s4 avanti", "Q7", "RS7", "e-Tron"],
  ["Mercedes", "gtr", "e63", "s63", "brabus gle", "AMG G63"],
];

importados.forEach((marcas) => {
  const select = document.createElement("select");
  select.setAttribute("id", marcas[0]);
  marcas.forEach((carros, key) => {
    select.innerHTML += `<option value="${carros}">${carros}</option>`;
  });
  document.querySelector("body").appendChild(select);
});

const aereas = [
  "Latam",
  "Gol",
  "Azul",
  "Delta",
  "American Airlines",
  "Emirates",
  "Qatar",
];

const comboAereas = document.createElement("select");
comboAereas.setAttribute("id", "aereas");

aereas.forEach((aerea, key) => {
  comboAereas.innerHTML += `<option value="${key}">${aerea}</option>`;
});
//adicione este combo como um filho no body, no final de todas as tags.
document.querySelector("body").appendChild(comboAereas);
const menu = [
  "Todos",
  "Venda na Amazon",
  "Ofertas do Dia",
  "Prime",
  "Eletrônicos",
  "Ideias para Presente",
  "Brinquedos e Jogos",
  "Computadores",
  "eBooks Kindle",
  "Games",
  "Ferramentas e Construção",
  "Livros",
];

const ulMenu = document.createElement("ul");
ulMenu.setAttribute("id", "menu");
ulMenu.setAttribute("class", "menu-site");

menu.forEach((value, index) => {
  ulMenu.innerHTML += `<li>${value}</li>`;
});

document.querySelector("nav").appendChild(ulMenu);
/////////////////////////////////////////

const newCarros = ["Corsa", "Uno", "Gol", "Palio", "Kombi", "208"];

//adicionar um elemento NO FINAL do array. Push
newCarros.push("Celta", "Monza");

//adicionar um elemento NO INÍCIO do array. Unshift
newCarros.unshift("Fusca");

//remover um elemento do FINAL do array. Pop
const ultimo = newCarros.pop(); //retorna o elemento removido

const primeiro = newCarros.shift(); //retorna o elemento removido

const nomeCompleto = "Inglide Noberto dos Santos";
const nomeArray = nomeCompleto.split(" ");
const americanName = [nomeArray.at(-1), nomeArray[0]].join(", ");

const removeUm = newCarros.splice(0, 3);

// console.log(removeUm, "Remove um, splice");
// console.log(americanName, "Formato americano");
// console.log(newCarros, "NewCarros");
console.log("----------------------------------------");

//push, pop
//shift, unshift
//splice remove do array original
//split pega texto e transforma em array
//join pega um array e gera string

// Programação funcional - Imutabilidade os dados nao mudam

//slice gera um novo array, o segundo parametro é o fim, mas noa esta incluso
const frutas = ["Banana", "Maça", "Pera", "Uva", "Melância"];
const primeiras = frutas.slice(1,3);
console.log(primeiras, "Slice o array original nao muda");

//map - retorna um novo array com os items filtrados 
/* Vantagens do array map, ele passa em todas as posiçoes do array*/
const filtro =  function(item){
   return item === "Pera"|| item === "Maça";
  //return item.toLowerCase(); 
}
// console.log(filtro("Chocolate meio amargo toblerone"));
const frutasMap = frutas.map(filtro);
console.log(frutasMap);

//filter tbm vai do inicio ao fim, mas só retorna oque for true
const frutasFilter = frutas.filter(filtro);
console.log(frutasFilter);

//find - retorna apenas uma informação, assim que encontra, de primeira
const frutasFind = frutas.find(filtro);
console.log(frutasFind);
console.log('------------------------------------');

const idades = [12, 4, 26, 32, 1, 5, 7, 9, 10, 84, 78, 12, 13, 14, 15, 16, 17];
const validaIDade = function(idade){
  if(idade <= 2){
    return "bebe";
  }
  else if( idade > 2 && idade < 13){
    return "criança";
  }
  else if( idade > 13 && idade < 19){
    return "adolescente";
  }
  else if( idade > 19 && idade < 61){
    return "adulto";
  }
  else{
    return "idoso";
  }
}
const idadesMap = idades.map(validaIDade);
console.log(idadesMap , "MAP");

const idadesFilter = idades.filter((idade) => idade > 18 && idade < 60);
console.log(idadesFilter, "Filtro de adulto");

const idadesFind = idades.find((idade)=> idade > 60);
console.log(idadesFind, "idoso");