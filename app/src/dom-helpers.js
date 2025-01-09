export const renderPalettes = (palettes, container) => {
  container.innerHTML = '';  
  palettes.forEach((palette) => {
    const paletteElement = createPaletteElement(palette, palettes);  
    container.appendChild(paletteElement);
  });
};

const createPaletteElement = (palette, palettes) => {
  const paletteElement = document.createElement('li');
  paletteElement.classList.add('palette');

  const title = document.createElement('h3');
  title.textContent = palette.title;
  paletteElement.appendChild(title);
  

  const colors = createColorElements(palette.colors);
  paletteElement.appendChild(colors);

  const temperatureBanner = createTempBanner(palette.temperature);
  paletteElement.appendChild(temperatureBanner);

  const deleteButton = createDeleteButton(palette.uuid, palettes);  
  paletteElement.appendChild(deleteButton);

  return paletteElement;
};

const createDeleteButton = (uuid, palettes) => {
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => {
    
    const updatedPalettes = [];
    for (let i = 0; i < palettes.length; i++) {
 if (palettes[i].uuid !== uuid) {
        updatedPalettes.push(palettes[i]);
      }
    }

    renderPalettes(updatedPalettes, document.querySelector('.palette-container'));
  });

  return deleteButton;
};

const createColorElements = (colors) => {
  const colorsDiv = document.createElement('div');
  colorsDiv.classList.add('colors');
  
  colors.forEach((color) => {
    const colorDiv = document.createElement('div');
    colorDiv.classList.add('color');
    colorDiv.style.backgroundColor = color;

    
    const exampleText = document.createElement('span');
    exampleText.textContent = 'Test Example'; 
  
    colorDiv.appendChild(exampleText);

    
    colorsDiv.appendChild(colorDiv);

    
    const copyButton = createCopyButton(color);
    const copyButtonContainer = document.createElement('div');
    copyButtonContainer.classList.add('copy-button-container');
    copyButtonContainer.appendChild(copyButton);
    colorsDiv.appendChild(copyButtonContainer);
  });

  return colorsDiv;
};


const createCopyButton = (color) => {
  const button = document.createElement('button');
  button.textContent = color;
  button.addEventListener('click', () => copyToClipboard(color, button));
  return button;
};

const createTempBanner = (temperature) => {
  const tempBanner = document.createElement('div');
  tempBanner.classList.add('temperature');
  tempBanner.textContent = temperature;
  tempBanner.style.backgroundColor = getTempColor(temperature);
  return tempBanner;
};

const getTempColor = (temp) => {
  switch (temp) {
    case 'Warm':
      return 'red';
    case 'Cool':
      return 'blue';
    case 'Neutral':
      return 'gray';
    default:
      return 'gray';
  }
};

const copyToClipboard = (color, button) => {
  navigator.clipboard.writeText(color).then(() => {
    const originalText = button.textContent;
    button.textContent = 'Copied hex!';
    setTimeout(() => {
      button.textContent = originalText;
    }, 1000);
  });
};
