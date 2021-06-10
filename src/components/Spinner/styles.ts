import styled, { keyframes } from "styled-components";

const Rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  display: inline-block;
  position: absolute;
  width: 80px;
  height: 80px;
  right: 50%;
  top: 80px;
`;

export const FirstDiv = styled.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #fff;
  border-radius: 50%;
  animation: ${Rotate} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
`;

export const SecondDiv = styled.div`
  animation-delay: -0.45s;
`;

export const ThirdDiv = styled.div`
  animation-delay: -0.3s;
`;

export const FourthDiv = styled.div`
  animation-delay: -0.15s;
`;
