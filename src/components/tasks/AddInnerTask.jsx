import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addInnerTask } from "../../store/slices/taskSlice";

export const AddInnerTask = ({ id, setOpenText }) => {
  const dispatch = useDispatch();
  const [innerTaskValue, setInnerTaskValue] = useState("");

  const addCard = () => {
    dispatch(addInnerTask({ id, innerTaskValue }));
    setInnerTaskValue("");
  };

  return (
    <InnerTaskMain>
      <textarea
        value={innerTaskValue}
        onChange={(e) => setInnerTaskValue(e.target.value)}
        placeholder="Введите подзадачу..."
      />
      <button onClick={() => addCard()}>Добавить подзадачу</button>
    </InnerTaskMain>
  );
};

const InnerTaskMain = styled.div`
  display: flex;
  flex-direction: column;
  textarea {
    padding-left: 5px;
    padding-top: 5px;
    font-size: 14px;
    resize: none;
    border: none;
    :focus {
      outline: none;
      background-color: #e9e9e9;
    }
  }
  button {
    display: flex;
    justify-content: center;
    width: 120px;
    margin-top: 5px;
    padding: 3px;
    cursor: pointer;
    transition: all 0.3s;
    border: none;
    border-radius: 5px;
    :hover {
      color: #fff;
      background: #3b5ca9;
    }
  }
`;
