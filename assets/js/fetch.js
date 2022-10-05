const cep = document.querySelector("#cep");

// o evento blur significa que clicamos na caixa de texto e saimos dela
cep.addEventListener("blur", (e) => {
    // erro mais comum: capturar o value fora de um evento
    let search = cep.value.replace("-","");

    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    };

    // https://viacep.com.br/ws/01001000/json/

    // fetch vai gerar uma promise. Promise é uma promessa
    //se der certo, ele vai retornar o resultado, se der errado ele vai retornar um erro
    //se der certo nós resolvemos a promisse, se der errado nos rejeitamos
    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
        .then(response => {
            response.json().then(result => console.log(result));
        })
        .catch((e) => console.log(e.message));
});
