import { criarNota } from "./notas.js"
import { notas, filtroAtual, pesquisaAtual } from "./state.js"
import {filtrosTodos, filtrosFavoritos} from "./filters.js"

const notasDisplay = document.getElementById("notasDisplay")
const filtrosContainer = document.getElementById("filtrosContainer")


function atualizarContador(notasFiltradas){
    const total = notas.length
    const favoritas = notasFiltradas.filter(n => n.favorita).length

    filtrosTodos.textContent = `Todos (${total})`
    filtrosFavoritos.textContent = `Favoritos (${favoritas})`
}

export function renderizarNotas(){
    notasDisplay.innerHTML = ""

    let notasFiltradas = notas

    
    filtrosContainer.classList.add("filtrosContainer")
    
    filtrosContainer.appendChild(filtrosTodos)
    filtrosContainer.appendChild(filtrosFavoritos)
    
    
    if(filtroAtual === "favoritos") notasFiltradas = notas.filter(n => n.favorita)
        
    notasFiltradas = notasFiltradas.filter(n => n.titulo.includes(pesquisaAtual))
    
    atualizarContador(notasFiltradas)



    notasFiltradas.forEach(nota => {
        criarNota(nota)
    });
}

