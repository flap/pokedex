import React from "react";
import Modal from "react-modal";

import * as S from "./styles";

const ModalInfo = ({ modalIsOpen, closeModal }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={S.Modal}
      contentLabel="vai lá"
    >
      <S.ModalContent>
        safado
      </S.ModalContent>
      <S.ButtonClose onClick={closeModal}>close</S.ButtonClose>
    </Modal>
  );
};

export default ModalInfo;
