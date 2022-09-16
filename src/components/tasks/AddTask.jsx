import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addTask } from "../../store/slices/taskSlice";
import { AddCardButton } from "./AddCardButton";
import { AddInnerTask } from "./AddInnerTask";
import { FaTimes } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";
import { Modal } from "./Modal";

export const AddTask = ({ id, innerTasks, title }) => {
  const dispatch = useDispatch();
  const [titleValue, setTitleValue] = useState();
  const [showButton, setShowButton] = useState(false);
  const [openText, setOpenText] = useState(false);
  const [column, setColumn] = useState(false);
  const [modalActive, setModalActive] = useState(false);

  const submitHandler = () => {
    if (titleValue.trim().length !== 0) {
      dispatch(
        addTask({
          value: titleValue,
          id: Math.random().toString(),
          innerTasks: [],
        })
      );
      setShowButton(true);
    } else alert("error");
  };

  const denyHandler = () => {
    setColumn(false);
  };

  return (
    <>
      <>{!column && <AddCardButton setColumn={setColumn} />}</>

      {column && (
        <MainForm>
          <TitleInput
            type="text"
            placeholder="Ввести заголовок задачи"
            value={titleValue || ""}
            onChange={(event) => setTitleValue(event.target.value)}
          />
          {innerTasks.map((element) => (
            <>
              <ShowInnerTask
                onClick={() => setModalActive(true)}
                key={element.id}
              >
                {" "}
                {element.text} <BiEdit />{" "}
              </ShowInnerTask>
              <Modal
                modalActive={modalActive}
                text={element.text}
                setModalActive={setModalActive}
              />
            </>
          ))}
          {openText && <AddInnerTask id={id} setOpenText={setOpenText} />}
          <ButtonBlock>
            {showButton && !openText && (
              <button
                onClick={() => {
                  setOpenText(true);
                }}
              >
                Добавить карточку
              </button>
            )}
            {!showButton && (
              <>
                <button onClick={submitHandler}>Добавить задачу</button>
                <DenyButton onClick={denyHandler}>
                  <FaTimes />
                </DenyButton>
              </>
            )}
          </ButtonBlock>
        </MainForm>
      )}
    </>
  );
};

const MainForm = styled.div`
  padding: 5px 10px;
  border-radius: 5px;
  background-color: #3387d1;
  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
`;

const TitleInput = styled.input`
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
const ButtonBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px;
  button:first-child {
    border: none;
    border-radius: 5px;
    background-color: #fff;
    padding: 2px 20px;
    cursor: pointer;
    transition: all 0.3s;
    padding: 0 10px;
    -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    :hover {
      color: #fff;
      background: #2200bb;
    }
  }
`;

const ShowInnerTask = styled.p`
  margin: 3px;
  display: flex;
  cursor: pointer;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  border-radius: 5px;
  border: none;
  background: #ffffff;
  font-weight: lighter;
  :hover {
    background-color: #ffffffd1;
  }
`;

const DenyButton = styled.button`
  text-align: center;
  padding: 0 4px;
  transition: all 0.3s;
  border: none;
  background: #fff;
  border-radius: 5px;
  :hover {
    color: #fff;
    background: #7b0000;
  }
`;
