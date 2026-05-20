const themeButton = document.getElementById("themeButton")

const temaGuardado = localStorage.getItem("tema")

console.log(localStorage.getItem("tema"))

if(temaGuardado === "dark"){
    document.body.classList.add("dark-mode")
}

themeButton.addEventListener("click", function(){
    document.body.classList.toggle("dark-mode")

    if(document.body.classList.contains("dark-mode")){
        localStorage.setItem("tema", "dark")
    }
    else{
        localStorage.setItem("tema", "light")
    }
})