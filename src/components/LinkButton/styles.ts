import styled from "styled-components";

export const LinkButtonContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  border-style: solid;
  border-radius: 4px;
  border-color: #bb99dd;
  border-width: 2px;
  height: 50px;
  width: 326px;
  text-decoration: none !important;
  color: #bb99dd;

  :hover {
    background-color: #bb99dd;
    color: #ffffff;
  }

  @media (max-width: 512px) {
    width: 100%;
    height: 50px;
  }
`;

export const LinkButtonContent = styled.text`
  text-align: center;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.5rem;
`;
