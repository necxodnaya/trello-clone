import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setTask } from "../../store/slices/taskSlice";
import { AddTask } from "./AddTask";

export const AddCardButton = ({ setColumn }) => {
  const clickHandler = () => {
    setColumn(true);
  };
  return (
    <ButtonBlock>
      <MainButton onClick={clickHandler}>
        Добавить список
      </MainButton>
    </ButtonBlock>
  );
};

const MainButton = styled.button`
  background-color: #237ecd;
  color: white;
  border: none;
  display: flex;
  align-items: center;
  padding: 10px 80px;
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;
  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  :hover {
    -webkit-box-shadow: 0px 5px 19px 11px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 5px 19px 11px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 5px 19px 11px rgba(34, 60, 80, 0.2);
  }
`;
const ButtonBlock = styled.div`
  display: flex;
`;
