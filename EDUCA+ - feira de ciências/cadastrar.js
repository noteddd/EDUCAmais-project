document.querySelector("button.btn-login").onclick = () => {
    const nome = document.getElementById("name").value
    const password = document.getElementById("pw").value

    fetch("./bancodedados.json").then(resp=>resp.json()).then(data=>{
        data.forEach(e => {
            if(e.nome == nome && e.senha == password){
                console.log("existe");
                window.localStorage.setItem("nome",nome)
                window.localStorage.setItem("senha",password)
                window.location.href = "login.html"
            }else{
                console.log("não existe");
                // insira código para criar dados no json local
            }
        });
    })
}