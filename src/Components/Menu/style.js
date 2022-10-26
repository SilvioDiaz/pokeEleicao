import styled from "styled-components";

export const MenuGrid = styled.div`
  width: 95%;
  height: 95%;
  background-color: #ffffff;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  border-radius: 10px;
`;

export const BorderMenu = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;

  width: 50%;
  height: 150px;
  background-color: #747691;
  border-radius: 5px;
`;
