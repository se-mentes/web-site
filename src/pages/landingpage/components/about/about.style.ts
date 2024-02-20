import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 80px;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const Info = styled.div`
`;

export const P = styled.p`
  font-size: 18px;
  line-height: 1.2em;
  max-width: 500px;
  color: #D8A790;

  margin: 60px 0;
`;
export const Photos = styled.div`
  display: flex;
  max-width: 500px;
  justify-content: space-between;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`;

export const Picture = styled.img`
  width: 200px;
  width: 200px;

  border-radius: 100%;
`;

export const Name = styled.label`

`;

export const Bottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  >button {
    width: 250px;
    margin-bottom: 50px
  }
`;

export const Text = styled.p`
  width: 100%;

  text-align: center;
  font-size: 20px;
  line-height: 1.2em;
  color: #FFF;
`;
