import React from "react";
import styled from "styled-components";
import { FaTrello } from "react-icons/fa";

export const Header = ({ removeUser, email }) => {
  return (
    <>
      <>
        <NavBar>
          <LogOutButton onClick={removeUser}>Выйти</LogOutButton>
          <TitleTrello>
            {" "}
            <h1>
              <FaTrello /> Trello
            </h1>
          </TitleTrello>

          <UserBlock>
            <p>{email}</p>
          </UserBlock>
        </NavBar>
      </>
    </>
  );
};

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
  padding: 0 25px;
  margin: 0;
  height: 70px;
  background: #237ecd;
`;
const TitleTrello = styled.h1`
  font-size: 26px;
`;
const UserBlock = styled.div`
  display: flex;
  padding: 8px 10px;
  border-radius: 8px;
  background: #ffffff;
  color: #000;
  p {
    margin-right: 10px;
  }
  p:last-child {
    margin-right: 0;
  }
`;

const LogOutButton = styled.button`
  padding: 8px 28px;
  border-radius: 5px;
  background: #ffffff;
  color: #000;
  border: none;
  cursor: pointer;
  :hover {
    background: #9ea4d0;
    color: #fff;
  }
`;
