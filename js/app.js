import { notas } from "./state.js"
import { guardarNotas } from "./storage.js"
import {renderizarNotas} from "./ui.js"
import "./theme.js"

const titleInput = document.getElementById("titleInput")
const textInput = document.getElementById("textInput")
const submitInput = document.getElementById("submitInput")

 

textInput.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        submitInput.click()
    }
})
submitInput.addEventListener("click", enviar)

renderizarNotas()

function enviar(){
    const novoTitulo = titleInput.value.trim()
    const novoTexto = textInput.value.trim()

    if(novoTitulo === "" || novoTexto === ""){
        window.alert("Preencha todos os campos")
        return
    }

    const novaNota = {
        titulo: novoTitulo,
        texto: novoTexto,
        favorita: false
    }

    notas.push(novaNota)

    guardarNotas(notas)

    titleInput.value = ""
    textInput.value = ""

    renderizarNotas()
}