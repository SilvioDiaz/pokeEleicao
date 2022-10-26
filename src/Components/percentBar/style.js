import styled from "styled-components";

const radio = 20;

export const BarArea = styled.div`
  background-color: black;
  border-radius: ${radio}px;
  width: 80%;
  height: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #e67959;
  justify-content: space-between;
`;

export const WhiteBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${radio}px;
  background-color: white;
  height: 93%;
  width: 90%;
  margin-right: 1px;
`;

export const PercentProgressBar = styled.div`
  background-color: black;
  height: 50%;
  width: 98%;
`;

export const PercentProgress = styled.div`
  background-color: #6edaa3;
  height: 100%;
  width: ${(props) => props.percent}%;
`;
