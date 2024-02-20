import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 5px
`; 

export const GringoButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  padding: 5px 10px;
  text-decoration: underline;
`; 

export const NegativeButton = styled.button`
  background-color: red;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 6px
`; 