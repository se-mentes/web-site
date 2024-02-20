import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  
  background-image: url(${process.env.PUBLIC_URL}/assets/images/background-history.jpg);
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Content = styled.div`
  width: 500px;
  margin-top: 100px;
  margin-left: 100px;

  display: flex;
  align-items: center;
  flex-direction: column;

  >button {
    max-width: 250px;
  }
`;
export const By = styled.div`
  position: absolute;
  right: 20px;
  bottom: 100px;
  
  display: flex;
  flex-direction: column;

  font-family: 'DM Serif Display', serif;
  font-weight: normal;
  text-transform: uppercase;

  letter-spacing: 6px;

  
`;
export const Name = styled.label`
  font-size: 16px;
  text-shadow: 1px 1px rgba(0,0,0,0.75);
`;

export const Class = styled.label`
  font-size: 12px;
  text-shadow: 1px 1px rgba(0,0,0,0.75);
`;

export const Text = styled.p`
  font-size: 18px;
  line-height: 1.2em;
  max-width: 500px;
  color: #D8A790;
 
  margin-top: 50px;
`;
