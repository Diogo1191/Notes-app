const titleInput = document.getElementById("titleInput")
const textInput = document.getElementById("textInput")
const submitInput = document.getElementById("submitInput")
const notasDisplay = document.getElementById("notasDisplay")
const pesquisaInput = document.getElementById("pesquisaInput")
const pesquisaButton = document.getElementById("pesquisaButton")
const filtrosContainer = document.getElementById("filtrosContainer")
const filtrosTodos = document.createElement("button")
const filtrosFavoritos = document.createElement("button")

let pesquisaAtual = ""
let filtroAtual = "todos"
let notas = JSON.parse(localStorage.getItem("notas")) || []

textInput.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        submitInput.click()
    }
})
submitInput.addEventListener("click", enviar)

pesquisaButton.addEventListener("click", notasPesquisadas)

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

    localStorage.setItem("notas", JSON.stringify(notas))

    titleInput.value = ""
    textInput.value = ""

    renderizarNotas()
}

function criarNota(nota){
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
        notasDiv.remove()
        notas = notas.filter(n => n !== nota)
        localStorage.setItem("notas", JSON.stringify(notas))
        renderizarNotas()
    })

    editarButton.addEventListener("click", function(){
        editarNota(nota)
    })

    favouriteButton.addEventListener("click", function(){
        nota.favorita = !nota.favorita
        localStorage.setItem("notas", JSON.stringify(notas))
        renderizarNotas()
    })
}

function editarNota(nota){
    const novoTitulo = window.prompt("Novo Titulo")
    const novoTexto = window.prompt("Novo Texto")
    
    if(novoTitulo.trim() === "" || novoTexto.trim() === ""){
        window.alert("Dados Invalidos")
        return
    }
    
    nota.titulo = novoTitulo.trim()
    nota.texto = novoTexto.trim()
    
    localStorage.setItem("notas", JSON.stringify(notas))
    renderizarNotas()
}

function notasPesquisadas(){
    pesquisaAtual = pesquisaInput.value.trim()
    
    renderizarNotas()
}

function atualizarContador(notasFiltradas){
    const total = notas.length
    const favoritas = notasFiltradas.filter(n => n.favorita).length

    filtrosTodos.textContent = `Todos (${total})`
    filtrosFavoritos.textContent = `Favoritos (${favoritas})`

}

filtrosTodos.addEventListener("click", function(){
    filtroAtual = "todos"
    renderizarNotas()
})

filtrosFavoritos.addEventListener("click", function(){
    filtroAtual = "favoritos"
    renderizarNotas()
})


function renderizarNotas(){
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

renderizarNotas()