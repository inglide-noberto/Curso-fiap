const tooltip = document.querySelector("#tooltip");
const body = document.querySelector("body");
const header = document.querySelector(".top-site");

tooltip.addEventListener('mouseover',(e)=>{
    // e.preventDefault();
    console.log(e);
    console.log("A Altura da página", body.clientHeight);
    console.log("A Largura da página", body.clientWidth);
    console.log("A Altura do tooltip", tooltip.clientHeight);
    console.log("A Largura do tooltip", tooltip.clientWidth);
    console.log("A Altura do mouse", e.clientY);
    console.log("A Largura do mouse", e.clientX);

    if(document.querySelector(".tooltip")){
        document.querySelector(".tooltip").remove();
    }
    const newDiv = document.createElement("div");

    newDiv.classList.add("tooltip");
    newDiv.innerHTML = "Meu tooltip com dicas muito tops demais, aparece e desaparece.";
    
    newDiv.style.position = 'absolute';
    newDiv.style.top = e.clientY + "px";
    newDiv.style.left =( e.clientX  + 200 > body.clientWidth? e.clientX- 210 : e.clientX + 200) + "px";
    newDiv.style.display = "flex";
    header.appendChild(newDiv);
});

tooltip.addEventListener("mouseout", (e)=>{
    e.preventDefault();
    if(document.querySelector(".tooltip")){
        document.querySelector(".tooltip").remove();
    }
});