import { carregarNotas } from "./storage.js"

export let pesquisaAtual = ""
export let filtroAtual = "todos"
export let notas = carregarNotas()

export function setFiltroAtual(novoFiltro){
    filtroAtual = novoFiltro
}

export function setPesquisaAtual(novaPesquisa){
    pesquisaAtual = novaPesquisa
}

export function setNotas(novasNotas){
    notas = novasNotas
}