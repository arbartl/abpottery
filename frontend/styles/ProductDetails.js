import styled from "styled-components";

export const DetailsStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  img {
    width: 40%;
    box-shadow: 16px 16px 10px gray;
    border-radius: 8px;
  }
`;

export const ProductInfo = styled.div`
  width: 40%;
  background: white;
  padding: 2rem 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 16px 16px 10px gray;
  border-radius: 8px;
  button {
    font-size: 1rem;
    font-weight: medium;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0rem;

  button {
    background: transparent;
    border: none;
    display: flex;
    font-size: 1.5rem;
  }

  p {
    width: 1rem;
    text-align: center;
  }

  span {
    color: var(--secondary);
  }
`;

export const Buy = styled.button`
  width: 100%;
  background: var(--primary);
  color: white;
  font-weight: 500;
`;
