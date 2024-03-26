var carregando = document.getElementById("carregando")
var desfoque = document.getElementById("desfoque")
carregando.showModal()
var nome = localStorage.getItem("nome")

if (!nome) {
  
  var nome = prompt("Nos fale seu NOME:","Digite aqui seu nome...")
  
  if (nome.length <= 10) {
    
    localStorage.setItem("nome",nome)
    
  } else {
    
    alert("Ouve um problema, seu nome é muito Grande...")
location.reload()
    
  }
  
}

function livro1() {
  
  window.location.href = "livro1.html"
  
}

function livro2() {
  
  window.location.href = "livro2.html"
  
}

function livro3() {
  
  window.location.href = "livro3.html"
  
}
function livro4() {
  
  window.location.href = "livro4.html"
  
}

window.addEventListener("load",function() {
  
  carregando.close()
  desfoque.style.display = "none"
})

setTimeout(()=> {

carregando.close()
desfoque.style.display = "none"

},30000)