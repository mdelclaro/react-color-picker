import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 20vh;
  width: 50%;

  input {
    background-color: #${props => props.color};
    text-align: center;
    color: #fff;
    border: 0;
    outline: 0;
    padding: 0.5rem 0 0.5rem 0;
    font-size: 1.2em;
    user-select: none;
    cursor: pointer;

    &:focus {
      outline: none;
    }
  }
`;
