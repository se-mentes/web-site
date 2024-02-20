import styled from 'styled-components';

export const Wrapper = styled.div<{ customStyle?: string }>`
  
  ${({ customStyle }) => customStyle}
`;

export const Label = styled.label`
  display: flex;
  font-size: 16px;
  line-height: 1.2em;
  color: #D8A790;
`;

export const Error = styled.label`
  display: inline-block;
  font-size: 14px;
  line-height: 1.2em;
  color: red;
  
  background-color: #D8A790;
  padding: 2px 4px;
  border-radius: 7px;
  font-weight: bold;
  margin: 3px 4px;
`;

export const Hint = styled.label`
  display: inline-block;
  font-size: 14px;
  line-height: 1.2em;
  color: green;

  background-color: #D8A790;
  padding: 2px 4px;
  border-radius: 6px;
  font-weight: bold;
`;