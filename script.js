const titleInput = document.getElementById("titleInput")
const textInput = document.getElementById("textInput")
const submitInput = document.getElementById("submitInput")
const notaTitulo = document.getElementById("notaTitulo")
const notaTexto = document.getElementById("notaTexto")
const notas = JSON.parse(localStorage.getItem("notas")) || []

submitInput.addEventListener("click", criarNota)



function criarNota(){
    const novoTitulo = titleInput.value.trim()
    const novoTexto = textInput.value.trim()

    if(novoTitulo === "" || novoTexto === ""){
        window.alert("Preencha todos os campos")
        return
    }

    const novaNota = {
        titulo: novoTitulo,
        texto: novoTexto
    }

    notas.push(novaNota)

    localStorage.setItem("notas", JSON.stringify(notas))

    titleInput.value = ""
    textInput.value = ""
    
}