import React, { useState } from 'react';
import copy from 'copy-to-clipboard';

import { Container } from './styles';

import Slider from '../Slider';

export default function ColorPicker() {
  const [stateColor, setColor] = useState('000000');
  const [showCopyText, setShowCopyText] = useState(false);

  function handleColorUpdate(color, value) {
    const red = stateColor.slice(0, 2).toUpperCase();
    const green = stateColor.slice(2, 4).toUpperCase();
    const blue = stateColor.slice(4, 6).toUpperCase();

    const hexColor = Number(value)
      .toString(16)
      .padStart(2, '0')
      .toUpperCase();

    if (color === 'red') {
      setColor(`${hexColor}${green}${blue}`);
    } else if (color === 'green') {
      setColor(`${red}${hexColor}${blue}`);
    } else if (color === 'blue') {
      setColor(`${red}${green}${hexColor}`);
    }
  }

  function handleCopyToClipboard() {
    copy('#' + stateColor);
    setShowCopyText(true);
    setTimeout(() => setShowCopyText(false), 1000);
  }

  return (
    <Container color={stateColor}>
      <h1>Color Picker</h1>
      <button onClick={handleCopyToClipboard}>
        <input
          type="text"
          value={showCopyText ? 'Copied!' : `#${stateColor}`}
          disabled="disabled"
        />
      </button>
      <Slider
        color="#ff4136"
        hexColor="red"
        handleColorUpdate={handleColorUpdate}
      />
      <Slider
        color="#3d9970"
        hexColor="green"
        handleColorUpdate={handleColorUpdate}
      />
      <Slider
        color="#0074d9"
        hexColor="blue"
        handleColorUpdate={handleColorUpdate}
      />
    </Container>
  );
}
