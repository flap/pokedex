import styled from "styled-components";

export const Modal = styled.div`
  width: 800px;
  height: 600px;

  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`;

export const ModalContent = styled.div`
  background-color: red;
`;

export const ButtonClose = styled.button`
  padding: 8px 12px;
  border-radius: 50px;
  border: solid 1px gray;
`;
