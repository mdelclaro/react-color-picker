import React, { useState } from 'react';

import { Container } from './styles';

export default function Slider({ color, handleColorUpdate, hexColor }) {
  const [value, setValue] = useState(0);

  function onChangeHandler(e) {
    const { value } = e.target;
    handleColorUpdate(hexColor, value);
    setValue(value);
  }

  return (
    <Container color={color} opacity={value > 10 ? value / 255 : 0.1}>
      <input
        className="slider"
        onChange={onChangeHandler}
        type="range"
        min={0}
        max={255}
        value={value}
      />
      <div className="value">{value}</div>
    </Container>
  );
}
