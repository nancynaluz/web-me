import 'normalize.css'

const css = require('./styles/main.sass')

function getRandomColor () {
  let letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

function setBackground () {
  document.body.style.backgroundColor = getRandomColor()
}

function setFont () {
  let fontColor = getRandomColor()
  document.body.style.color = fontColor
  let links = document.getElementsByTagName('a')
  Array.from(links).forEach((tag) => {
    tag.style.color = fontColor
  })
}



window.setInterval(() => {
  setBackground()
  setFont()
}, 5000)

console.log(`c'est fun icitte`)
