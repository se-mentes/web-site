import styled from 'styled-components';

export const Wrapper = styled.nav<{ showLogo?: boolean }>`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 10px 30px;

  ${
    ({ showLogo }) => (
      showLogo ? `
        justify-content: space-between;
      ` : '')
  }
`;

export const Menu = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  display: flex;

`;

export const Item = styled.li`
  
`;

export const LogoArea = styled.div`
  font-family: 'DM Serif Display', serif;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;

  svg {
    height: 30px;
    width: 30px;
  }
`;

export const Link = styled.a`
  padding: 0 14px;
  cursor: pointer;
  letter-spacing: 0.2em;
  font-size:0.8em;

  color: #EFE7DD; /* blue colors for links too */
  text-decoration: underline; /* no underline */
`;

export const Logo = styled.img`
  
`;