export function carregarNotas(){
    try {
        const dados = localStorage.getItem("notas")
        if (!dados) return []
        
        const notas = JSON.parse(dados)
        
        // Verifica se é realmente um array
        if (Array.isArray(notas)) {
            return notas
        }
        
        throw new Error("Dados não são um array")
        
    } catch (erro) {
        console.error("Erro ao carregar notas:", erro)
        localStorage.removeItem("notas")
        return []
    }
}

export function guardarNotas(notas){
    try {
        if (Array.isArray(notas)) {
            localStorage.setItem("notas", JSON.stringify(notas))
        }
    } catch (erro) {
        console.error("Erro ao guardar notas:", erro)
    }
}