import { renderPalettes } from './dom-helpers.js';
import palettes from './palettes.json';  


let currentPalettes = Object.values(palettes); 

const paletteContainer = document.querySelector('.palette-container');
const form = document.querySelector('#add-palette-form');
const titleInput = document.querySelector('#palette-title');
const colorInputs = [document.querySelector('#color1'), document.querySelector('#color2'), document.querySelector('#color3')];
const temperatureInputs = document.querySelectorAll('input[name="temperature"]');


form.addEventListener('submit', (event) => {
  event.preventDefault();

  
  const newPalette = {
    uuid: crypto.randomUUID(),  
    title: titleInput.value,
    colors: colorInputs.map((input) => input.value),
    temperature: Array.from(temperatureInputs).find((input) => input.checked).value,
  };


  currentPalettes.push(newPalette);
  renderPalettes(currentPalettes, paletteContainer);  
  
  form.reset();

});


renderPalettes(currentPalettes, paletteContainer);
