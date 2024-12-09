import { createPaletteElement } from './dom-helpers';
import palettes from './Palettes.json';  

const paletteContainer = document.querySelector('.palette-container');
const addPaletteForm = document.getElementById('add-palette-form');

function loadPalettes() {
  try {
    paletteContainer.innerHTML = ''; 

   
    Object.values(palettes).forEach(palette => {
      const paletteElement = createPaletteElement(palette);
      paletteContainer.appendChild(paletteElement);
    });
  } catch (error) {
    console.error("Error loading palettes:", error);
  }
}


addPaletteForm.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const title = document.getElementById('palette-title').value;
  const color1 = document.getElementById('color1').value;
  const color2 = document.getElementById('color2').value;
  const color3 = document.getElementById('color3').value;
  const temperature = document.querySelector('input[name="temperature"]:checked').value;

  
  const newPalette = {
    uuid: crypto.randomUUID(),  
    title: title,
    colors: [color1, color2, color3],
    temperature: temperature,
  };


  const newPaletteElement = createPaletteElement(newPalette);
  paletteContainer.appendChild(newPaletteElement);

  addPaletteForm.reset();
});


loadPalettes();
