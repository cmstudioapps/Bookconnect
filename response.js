var style = document.createElement("style")
document.head.appendChild(style)

if (innerWidth < 690) {
  
  style.innerHTML = `
  
  body {
    
 background-image: url("fundo.png");
    background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  }
  
  `
  
}