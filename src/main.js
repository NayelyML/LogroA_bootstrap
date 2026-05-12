import './style.css'
import javascriptLogo from './assets/javascript.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { setupCounter } from './counter.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './style.css'

document.querySelector('#app').innerHTML = `
<section id="center">
  
  
`

setupCounter(document.querySelector('#counter'))
