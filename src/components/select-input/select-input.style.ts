import styled from 'styled-components';

export const Input = styled.select`
  display: block;
  color: #000;
  padding: 5px 10px;
  border-radius: 6px;

  &:focus, &:active {
    color: #000;
    padding: 5px 10px;
    border-radius: 6px;
  }
  &::placeholder{
    color: #000
  }
  option {
    color: #000
  }
`; 