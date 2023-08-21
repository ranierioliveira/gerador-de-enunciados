function gerarEnunciado(){
    let numeroTp = document.getElementById("itp");
    let numeroExe = document.getElementById("iexe");
    let mostrar = document.getElementById("mostrar");

    mostrar.innerHTML = "";
    if (numeroTp.value.length == 0 || numeroExe.value.length == 0){
        alert("Digite os números para gerar o enunciado!");
    } else {
        let tp = numeroTp.value;
        let exe = numeroExe.value;
        
       for(let c = 0; c <= exe; c++){
            mostrar.innerHTML += `Exercício ${tp}.${c} - <br> <br>`
        }
        
    }
}