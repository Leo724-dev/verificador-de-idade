const botao = document.querySelector("#botao");

function verificarIdade(){
    const data = new Date();
    const ano = data.getFullYear();
    const fano = document.querySelector("#ano");
    const res = document.querySelector("#res");

    if(fano.value.length == 0 || fano.value > ano){
        alert("Verifique os dados e tente novamente!")
    }else{
        const fsex = document.getElementsByName("radsex");
        let idade = ano - Number(fano.value);
        let genero = "";
        let img = document.createElement("img");
        img.setAttribute("id", "foto")
        
        if(fsex[0].checked){
            genero = "Homem";
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute("src", "img/homem-crianca.webp")
            } else if(idade < 21){
                //Jovem
                img.setAttribute("src", "img/homem-jovem.jpg")
            } else if(idade < 50){
                //Adulto
                img.setAttribute("src", "img/homem-adulto.jpg")
            }else{
                //Idoso
                img.setAttribute("src", "img/homem-idoso.jpg")
            }
        }else if (fsex[1].checked){
            genero = "Mulher"
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute("src", "img/mulher-crianca.webp")
            } else if(idade < 21){
                //Jovem
                img.setAttribute("src", "img/mulher-jovem.jpg")
            } else if(idade < 50){
                //Adulto
                img.setAttribute("src", "img/mulher-adulta.jpg")
            }else{
                //Idoso
                img.setAttribute("src", "img/mulher-idosa.jpg")
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.style.textAlign = "center"
        res.appendChild(img);
    }
    
}

botao.addEventListener("click", verificarIdade);