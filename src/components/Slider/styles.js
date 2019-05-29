import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  color: #888;
  margin-top: 1rem;
  margin-bottom: 2rem;

  .value {
    flex: 1;
    font-size: 2rem;
  }

  .slider {
    flex: 6;
    -webkit-appearance: none;
    width: 100%;
    height: 15px;
    border-radius: 5px;
    background: #efefef;
    outline: none;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      ${props => SliderThumb(props)};
    }

    &::-moz-range-thumb {
      ${props => SliderThumb(props)};
    }
  }
`;

const SliderThumb = props => `
  width: 25px;
  height: 25px;
  background: ${props.color}
  cursor: pointer;
  outline: 5px solid #333;
  opacity: ${props.opacity};
  webkit-transition: .2s;
  transition: opacity .2s;
`;
