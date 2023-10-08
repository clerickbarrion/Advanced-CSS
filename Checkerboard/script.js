const checker = i => {
    let piece = document.createElement('img')
    piece.setAttribute('width','25px')
    piece.setAttribute('height','25px')
    piece.setAttribute('src','checker.png')
    document.divs[i].appendChild(piece)

}

divs = document.getElementsByTagName('div')
console.log(divs)
for (let i = 0; i++; i<divs.length) {
    divs[i].addEventListener('click', checker(i))
}