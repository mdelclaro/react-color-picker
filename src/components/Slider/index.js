import React, { useState } from 'react';

import { Container } from './styles';

export default function Slider(props) {
  const [value, setValue] = useState(0);

  function onChangeHandler(e) {
    setValue(e.target.value);
  }

  return (
    <Container color={props.color} opacity={value > 10 ? value / 255 : 0.1}>
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
