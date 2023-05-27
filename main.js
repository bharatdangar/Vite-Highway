// import './style.scss'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
import Highway from '@dogstudio/highway';

import Cursors from "./src/js/Cursors";
// import testImage from './src/home.jpg'


import Fade from './fade';

const H = new Highway.Core({
  transitions: {
    default: Fade
  }
});

// Get all menu links
const links = document.querySelectorAll('.nav li a');
console.log(links, "links")

// Listen the `NAVIGATE_IN` event
// This event is sent everytime a `data-router-view` is added to the DOM Tree
H.on('NAVIGATE_IN', ({ to, location }) => {
  // Check Active Link
  for (let i = 0; i < links.length; i++) {
    const link = links[i];

    // Clean class
    // link.classList.remove('is-active');
    link.style.color = ''

    // Active link
    if (link.href === location.href) {
      // link.classList.add('is-active');
      link.style.color = 'red'
    }
  }
});

const loaderContainer = document.querySelector('.loader-wrapper');
const cursors = document.querySelector('.cursor')

const splashScreen = document.querySelector('.splash__screen')
const splashLeft = document.querySelector('.left');
const splashRight = document.querySelector('.right');
const progressBar = document.querySelector('.progress__bar');
const percentage = document.querySelector('.percentage');
let loading = true;

window.addEventListener('load', () => {
  cursors.style.color = 'transparent'
  // cursors.classList.add('hidden')
  setTimeout(() => {
    progressBar.style.height = '40%'
  },2000);

  setTimeout(() => {
    progressBar.style.height = '80%'
  },4000);

  setTimeout(() => {
    progressBar.style.height = '100%'
  },5000);

  setTimeout(() => {
    splashLeft.classList.add('active')
    splashRight.classList.add('active')
    progressBar.classList.add('complete')
    splashScreen.classList.add('complete')
    loading = false
    // cursors.classList.remove('hidden')
    cursors.style.color = ''
  },6000);

  // cursors.classList.add('hidden')
  // setTimeout(() => {
  //   loaderContainer.classList.add('loader-finish')
    
  //   cursors.classList.remove('hidden')
  //   // 
  // }, 3000)
  // console.log(setTimeout, "Time")

  function percentageTracker() {
    if(loading) {
        let { height, top } = progressBar.getBoundingClientRect()
        let p = Math.ceil((height / window.innerHeight) * 100)
        // percentage.style.color = 'white'
        percentage.textContent = `${p}%`
        percentage.style.transform = `translateY(calc(${top - window.innerHeight}px)`
        requestAnimationFrame(percentageTracker)
    }
    // console.log(p, "height")
    // console.log(percentage.innerHTML, "TEXT")
  }
  
  percentageTracker()
})

// function percentageTracker(){
//   if(loading){
//       const {height,top} = progressBar.getBoundingClientRect()
//       const p = Math.ceil((height / window.innerHeight) * 100);
//       percentage.textContent = `${p}%`;
//       percentage.style.transform = `translateY(calc(${top - window.innerHeight}px)`;
//       requestAnimationFrame(percentageTracker)
//   }
//   console.log(height, "height")
//   console.log(percentage.textContent, "TEXT")
// }

// percentageTracker()

const testScene = () => {
  const div = document.createElement('canvas')
}

document.addEventListener("DOMContentLoaded", () => {
  Cursors.init()
  console.log(Cursors, "when")
})

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))
