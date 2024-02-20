import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

`;

export const PhotoWrapper = styled.div`

`;
export const Photo = styled.img`

`;

export const FormWrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p`
  font-size: 18px;
  line-height: 1.2em;
  max-width: 500px;
  color: #D8A790;
 
`;

export const Button = styled.input`
  font-size: 16px;
  margin-top: 15px;
  background-color: transparent;
  border: 1px solid #000;
  border-radius: 6px;
  cursor: pointer;
  &:focus, &:active {
    font-size: 16px;
    margin-top: 15px;
    background-color: transparent;
    border: 1px solid #000;
    border-radius: 6px;
    cursor: pointer;
  }
`;

export const StepWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;