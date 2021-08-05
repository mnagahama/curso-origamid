const menu = document.querySelector('.menu')

menu.classList.add('ativo', 'teste')
menu.classList.remove('azul')

if(menu.classList.toggle('azul')) {
  menu.classList.add('possui-azul')
} else {
  menu.classList.add('nao possui azul')
}

menu.className += ' vermelho'

console.log(menu.className)

//console.log(menu.classList)

const animais = document.querySelector('.animais')
console.log(animais.attributes['data-texto'])

const img = document.querySelector('img')

const srcImg = img.getAttribute('alt')

img.setAttribute('alt', 'É uma raposa') //atualiza um atributo

const possuiAlt = img.hasAttribute('alt') //true ou false 
console.log(possuiAlt)

console.log(srcImg)
