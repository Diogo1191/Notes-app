import { setPesquisaAtual, setFiltroAtual } from "./state.js"
import { renderizarNotas } from "./ui.js"

export const filtrosTodos = document.createElement("button")
export const filtrosFavoritos = document.createElement("button")
const pesquisaInput = document.getElementById("pesquisaInput")
const pesquisaButton = document.getElementById("pesquisaButton")


function pesquisarNotas(){
    setPesquisaAtual(pesquisaInput.value.trim())
    pesquisaInput.value = ""
    renderizarNotas()
}

pesquisaButton.addEventListener("click", pesquisarNotas)

filtrosTodos.addEventListener("click", function(){
    setFiltroAtual("todos")
    renderizarNotas()
})

filtrosFavoritos.addEventListener("click", function(){
    setFiltroAtual("favoritos")
    renderizarNotas()
})
