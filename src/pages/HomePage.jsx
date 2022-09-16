import { useDispatch } from "react-redux";
import { useAuth } from "../use-auth";
import { Header } from "../components/style/Header";
import { removeUser } from "../store/slices/userSlice";
import { Navigate } from "react-router-dom";
import { ListTasks } from "../components/tasks/ListTasks";
import styled from "styled-components";

export const HomePage = () => {
  const { isAuth, email } = useAuth();
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(removeUser());
  };

  return isAuth ? (
    <Body>
      <>
        <Header removeUser={clickHandler} email={email} />
        <ListTasks />
      </>
    </Body>
  ) : (
    <Navigate to={"/login"} />
  );
};
const Body = styled.body`
  height: 1000px;
  background-color: #7ec7fe;
`;
