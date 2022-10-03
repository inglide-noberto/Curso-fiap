// const aereasBR = [
//     "LATAM" , 
//     "GOL" , 
//     "AZUL"
// ];
// const airCompanys = [...aereasBR, "Delta", "United Airlines", "Emirates"];
// // console.log(airCompanys);

const lista = [
    "Venda na amazon",
    "Livros",
    "Mais vendidos",
    "Eletronicos",
    "Brinquedos e jogos",
    "Ideias para presentes",
    "Musicas"
];

const ul = document.querySelector(".ul");

lista.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML += `<a href="#">${item}</a>`;
    ul.appendChild(li);
});

