import { notas, setNotas } from "./state.js"
import { renderizarNotas } from "./ui.js"
import { guardarNotas } from "./storage.js"
import { abrirModal } from "./modal.js"


export function criarNota(nota){
    const notasDiv = document.createElement("div")
    const titulo = document.createElement("h2")
    const texto = document.createElement("p")
    const apagarButton = document.createElement("button")
    const editarButton = document.createElement("button")
    const buttonsContainer = document.createElement("div")
    const topBar = document.createElement("div")
    const favouriteButton = document.createElement("button")

    titulo.textContent = nota.titulo
    texto.textContent = nota.texto
    apagarButton.textContent = "Apagar"
    editarButton.textContent = "Editar"
    favouriteButton.textContent = nota.favorita ? "🌟" : "⭐"

    topBar.appendChild(titulo)
    topBar.appendChild(favouriteButton)
    buttonsContainer.appendChild(editarButton)
    buttonsContainer.appendChild(apagarButton)
    
    notasDiv.appendChild(topBar)
    notasDiv.appendChild(texto)
    notasDiv.appendChild(buttonsContainer)

    favouriteButton.classList.add("favouriteButton")
    topBar.classList.add("topBar")
    notasDiv.classList.add("nota")
    apagarButton.classList.add("apagarButton")
    editarButton.classList.add("editarButton")
    buttonsContainer.classList.add("buttonsContainer")

    notasDisplay.appendChild(notasDiv)

    apagarButton.addEventListener("click", function(){
        setNotas(notas.filter(n => n !== nota))
        guardarNotas(notas)        
        renderizarNotas()
    })

    editarButton.addEventListener("click", function(){
        abrirModal(nota)
    })

    favouriteButton.addEventListener("click", function(){
        nota.favorita = !nota.favorita
        guardarNotas(notas)
        renderizarNotas()
    })
}

