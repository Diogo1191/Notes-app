import { notas } from "./state.js";
import { guardarNotas } from "./storage.js";
import { renderizarNotas } from "./ui.js";

const modalOverLay = document.getElementById("modalOverLay")
const modalTitulo = document.getElementById("modalTitulo")
const modalTexto = document.getElementById("modalTexto")
const modalSave = document.getElementById("modalSave")
const modalCancel = document.getElementById("modalCancel")

modalCancel.addEventListener("click", fecharModal)
modalSave.addEventListener("click", guardarEdicao)

let nomeEdicao = null;

export function abrirModal(nota){
    modalOverLay.style.display = "flex"

    nomeEdicao = nota

    modalTitulo.value = nota.titulo
    modalTexto.value = nota.texto
}

function fecharModal(){
    modalOverLay.style.display = "none"

}

function guardarEdicao(){
    nomeEdicao.titulo = modalTitulo.value
    nomeEdicao.texto = modalTexto.value

    if(nomeEdicao.titulo.trim() === "" || nomeEdicao.texto.trim() === ""){
        return
    } 

    guardarNotas(notas)
    fecharModal()
    renderizarNotas()
}