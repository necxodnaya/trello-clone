import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaTrello } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../store/slices/userSlice"
import styled from 'styled-components';


export const Login = () => {
  const navigate = useNavigate();
  const [errrorMessage, setErrorMessage] = useState(null);
  const {
    register,
    reset,
    formState: {
      errors,
    },
    handleSubmit,
  } = useForm({
    mode: "onBlur"
  });

  const dispatch = useDispatch()

  const onSubmit = ({email, password}) => {
    reset()
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken
        }))
        navigate("/")
      })
      .catch(error => setErrorMessage(error.message))
  }

  return (
    <>
      <Main>
        <h1><FaTrello />Trello</h1>
        <p>Программа составления задач и дел</p>
        <FormBlock onSubmit={handleSubmit(onSubmit)}>
          <h3>Введите данные</h3>
          {
            errrorMessage && <ErrorInfo>Неверный логин или пароль</ErrorInfo>
          }
          <input
            type="email"
            placeholder="Электронная почта"

            {
            ...register("email", {
              required: "Поле обязательно к заполнению",

              pattern: {
                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'Адрес электронной почты введен не верно'
              },
            }
            )}
          />
          {errors.email?.message && (
            <ErrorInfo>{errors.email?.message}</ErrorInfo>
          )}
          <input
            type="password"
            autoComplete="on"
            placeholder="Пароль"
            {
            ...register("password", {
              required: true,
              minLength: {
                value: 6,
                message: "Пароль должен состоять из 6 символов"
              },
            }
            )}
          />
          {errors?.password && <ErrorInfo>{errors?.password?.message || "Поле обязательно к заполнению"}</ErrorInfo>}
          <SubmitButton type='submit'>Войти</SubmitButton>
          <p>Если нет аккаунта <Link to={"/register"}>зарегистрируйтесь))</Link></p>
        </FormBlock>
      </Main>
    </>
  )
}

const Main = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #237ecd;
    height: 678px;
        h1 {
            font-size: 30px;
            align-items: center;
            display: flex;
            margin: 20px 0 0 0;
        }
    `
const FormBlock = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #319fff;
    -webkit-box-shadow: 5px 5px 17px -5px rgba(34, 60, 80, 0.6);
    -moz-box-shadow: 5px 5px 17px -5px rgba(34, 60, 80, 0.6);
    box-shadow: 5px 5px 17px -5px rgba(34, 60, 80, 0.6);    
    padding: 30px 70px 50px 70px;
    border-radius: 10px;
        input {
            background: #f1efef;
            margin: 10px;
            padding: 10px 10px;
            border-radius: 8px;
            width: 200px;
            border: none;
            :focus{
        outline: none;
        background-color:#e9e9e9
    }
        }
        
`
const ErrorInfo = styled.span`
    color: #B20600;
    font-size: 13px;
    text-align: center;
`
const SubmitButton = styled.button`
    margin: 10px;
    padding: 10px 45px;
    border-radius: 8px;
    background: #f1efef;
    color: #000;
    transition: all .3s;
    font-size: 14px;
    border: none;

        :hover{
            background: #5e8fd8;
            color: #fff;
        } 
`