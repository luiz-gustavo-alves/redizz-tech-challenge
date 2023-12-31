import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100dvw;
  height: 100dvh;
  position: relative;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-around;
  position: absolute;
  bottom: 80px;
  left: 0;
`;

export const Button = styled.button`
  width: 125px;
  height: 80px;
  font-size: 22px;
  border-radius: 25px;
  color: #FFF;
  border: none;
  cursor: pointer;
  background-color: #000000;

  &:hover {
    opacity: 0.7;
  }
`;
