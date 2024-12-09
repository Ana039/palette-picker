
export function createPaletteElement(palette) {
 
  const paletteDiv = document.createElement('div');
  paletteDiv.classList.add('palette');

  const title = document.createElement('h3');
  title.textContent = palette.title;
  paletteDiv.appendChild(title);

  const colorsDiv = document.createElement('div');
  colorsDiv.classList.add('colors');
  
  palette.colors.forEach(color => {
    const colorBox = document.createElement('div');
    colorBox.classList.add('color-box');
    colorBox.style.backgroundColor = color; 
    colorsDiv.appendChild(colorBox);
  });
  
  paletteDiv.appendChild(colorsDiv);

  const temperature = document.createElement('p');
  temperature.textContent = `Temperature: ${palette.temperature}`;
  paletteDiv.appendChild(temperature);

  return paletteDiv;
}
