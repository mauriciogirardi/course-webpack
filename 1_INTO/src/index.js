import { faBacon, faAnchor } from '@fortawesome/free-solid-svg-icons'
import { library, dom } from '@fortawesome/fontawesome-svg-core'

import { Title } from './components/Title'
import { Image } from './components/Image'
import { Button } from './components/Button'
import warning from './template/warning.html'
import testTxt from './files/test.txt'
import descriptionsJson from './files/descriptions.json'

import './template/warning.css'
import './styles/global.css'

const title = new Title()
const image = new Image()
const button = new Button()

title.create('Trabalhando com Webpack')
image.insertImage()
button.createButton('Click here!!')

// Import HTML
const body = document.querySelector('body')
body.innerHTML += warning

// Babel Spread
const obj = { a: 1, b: 2, c: 3, d: 45 }

let { a, b, ...rest } = obj

// Import txt
const test = testTxt
console.log('TXT', test.toUpperCase())

//Import JSON
const person = descriptionsJson
console.log('JSON', descriptionsJson)

// Global variables
console.log('VAR version:', VERSION)
console.log('VAR port:', PORT)
console.log('.ENV:', process.env.API_KEY)

// Icons
library.add(faBacon)
library.add(faAnchor)
dom.watch()
