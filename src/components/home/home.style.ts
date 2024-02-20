import styled from 'styled-components';

export const Wrapper = styled.section`
  height: 100vh;
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const NameWrapper = styled.div`
  width: 100%;
  font-size: 190px;
  padding: 0 20px;
  position: relative;
`;

export const Name = styled.span`
  font-family: 'DM Serif Display', serif;
  text-transform: uppercase;
  overflow-wrap: break-word;

  font-size: 190px;
  display: block;
  max-width: 400px;
  max-height: 560px;

  
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  color: #DDDCDA;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Text = styled.p`
  font-size: 18px;
  line-height: 1.2em;
  max-width: 500px;
  color: #D8A790;
`;
