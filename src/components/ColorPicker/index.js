import React from 'react';

import { Container } from './styles';

import Slider from '../Slider';

export default function ColorPicker() {
  return (
    <Container>
      <h1>Color Picker</h1>
      <Slider color="#0074d9" />
      <Slider color="#3d9970" />
      <Slider color="#ff4136" />
    </Container>
  );
}
