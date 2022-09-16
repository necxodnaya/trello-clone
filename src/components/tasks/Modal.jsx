import React from "react";
import styled from "styled-components";

export const Modal = ({ modalActive, setModalActive, text }) => {
  return (
    <>
      {modalActive && (
        <MainModal onClick={() => setModalActive(false)}>
          <ModalBlock onClick={(e) => e.stopPropagation()}>
            <TitileBLock>
              <p>{text}</p>
            </TitileBLock>
            <label>
              Добавить комментарий
              <Description type="text" placeholder="Введите текст" />
            </label>
          </ModalBlock>
        </MainModal>
      )}
    </>
  );
};

const MainModal = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  transition: 0.5s;
`;
const ModalBlock = styled.div`
  box-sizing: border-box;
  padding: 20px;
  border-radius: 25px;
  background-color: #3c91dc;
  width: 800px;
  height: 500px;
  text-align: center;
  font-size: 50px;
  transform: scale(0.5);
  transition: 0.4s all;
  color: black;
`;
const Description = styled.textarea`
  border-radius: 5px;
  text-align: center;
  padding-top: 10px;
  width: 400px;
  resize: none;
  font-size: 30px;
`;
const TitileBLock = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #000;
  justify-content: center;
  p {
    margin-left: 5px;
  }
`;
const InnerTaskInput = styled.input`
  font-size: 16px;
  display: flex;
  text-align: center;
  padding: 5px 32px;
  border-radius: 5px;
  margin-bottom: 3px;
  width: 200px;
  border: none;
  :focus {
    outline: none;
    background-color: #e9e9e9;
  }
`;
