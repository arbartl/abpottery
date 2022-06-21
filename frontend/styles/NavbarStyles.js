import styled from "styled-components";

export const NavbarStyles = styled.nav`
  min-height: 15vh;
  width: 100%;
  margin: 2rem 0rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  background: white;
  padding: 1rem 5%;
  box-shadow: 8px 8px 8px gray;
  border-radius: 8px;
  a {
    font-size: 1.2rem;
  }
  img {
    width: 30%;
    cursor: pointer;
  }
`;

export const NavItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  div {
    margin-left: 3rem;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h3 {
    font-size: 1rem;
    padding: 0.25rem;
  }
  svg {
    font-size: 1.5rem;
  }
`;
