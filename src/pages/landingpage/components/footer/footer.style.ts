import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;

  background-color: #000;
  color: #FFF;
`;

export const Image = styled.div`
  width: 100%;
  height: 400px;
  background-image: url(${process.env.PUBLIC_URL}/assets/images/studio.jpg);
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Content = styled.div`
  width: 100%;
  height: 400px;

  padding: 50px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p`
  width: 100%;
  margin: 10px 0;
  text-align: center;
`;