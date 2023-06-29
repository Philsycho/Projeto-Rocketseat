function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // Pegar a tag IMG
  const img = document.querySelector("#profile img")

  //  substituir a imagem
  if (html.classList.contains("light")) {
    //  se tiver light adicionar/trocar imagem
    img.setAttribute("src", "./assets/Philipinho-2.jpeg")
    img.setAttribute("alt", "Avatar do perfil com oculos escuro")
  } else {
    //  se tiver dark manter a imagem.
    img.setAttribute("src", "./assets/Philipinho-oculos.png")
    img.setAttribute("alt", "Avatar do perfil sem oculos escuro")
  }
}
