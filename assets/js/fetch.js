// const cep = document.querySelector("#cep");

// // o evento blur significa que clicamos na caixa de texto e saimos dela
// cep.addEventListener("blur", async (e) => {
//     // erro mais comum: capturar o value fora de um evento
//     let search = cep.value.replace("-","");

//     const options = {
//         method: 'GET',
//         mode: 'cors',
//         cache: 'default'
//     };

//     // https://viacep.com.br/ws/01001000/json/

//     // fetch vai gerar uma promise. Promise é uma promessa
//     //se der certo, ele vai retornar o resultado, se der errado ele vai retornar um erro
//     //se der certo nós resolvemos a promisse, se der errado nos rejeitamos a promisse
//     // Promisse é uma intenção
//     const resultado = await fetch(`https://viacep.com.br/ws/${search}/json/`, options);
//     const json = await resultado.json();

//     console.log(json);
// });

// async / await sao primos,onde o await esta o async tem que estar
const cep = document.querySelector("#cep");

const showData = async (result) => {
  for (const campo in result) {
    if (document.querySelector("#" + campo)) {
      document.querySelector("#" + campo).value = result[campo];
    }
  }
};

cep.addEventListener("blur", async (e) => {
  let search = cep.value.replace("-", "");
  console.log(Number(search));
  if (search.length < 8 || isNaN(search)) {
    alert("Cep inválido");
    cep.value = "";
    return;
  }

  //cors - Cross Origin Resource Sharing
  const chocolate = {
    method: "GET",
    mode: "cors",
    cache: "default",
  };

  const resultado = await fetch(
    `https://viacep.com.br/ws/${search}/json/`,
    chocolate
  );
  const json = await resultado.json();

  showData(json);
});