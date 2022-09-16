import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { FaTrello } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {setUser} from "../store/slices/userSlice"
import styled from 'styled-components';

export const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState()

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

  const onSubmit = ({ email, password }) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user)
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken,
        }))
        navigate("/")
      })
      .catch(error => setErrorMessage(error.message))
  }

  return (
    
    <Main>
      <h1><FaTrello />Trello</h1>
      <p>Добро пожаловать на страницу регистрации</p>
      <FormBlock onSubmit={handleSubmit(onSubmit)}>
        <h3>Введите данные</h3>
        {
          errorMessage && <ErrorInfo>Данные введены неверно</ErrorInfo>
        }
        <input
          type="text"
          placeholder="Ваше имя"
          {
          ...register("nickname", {
            required: "Введите имя",
            minLength: {
              value: 3,
              message: "Имя должно быть больше 3 символов"
            }
          }
          )}
        />
        {errors.nickname?.message && (
          <ErrorInfo>{errors.nickname?.message}</ErrorInfo>
        )}
        <input
          type="email"
          placeholder="Электронная почта"
          {
          ...register("email", {
            required: "Поле обязательно к заполнению",
            pattern: {
              value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'Адрес электронной почты введен не верно',
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
              message: "Пароль должен состоять из более 6 символов"
            },
          }
          )}
        />
        {errors?.password && <ErrorInfo>{errors?.password?.message || "Поле обязательно к заполнению"}</ErrorInfo>}
        <SubmitButton type='submit'>Зарегистрироваться</SubmitButton>
        <p>У меня уже есть аккаунт, <Link to={"/login"}>войти</Link></p>
      </FormBlock>
    </Main>
  )
}

const Main = styled.div`
  background-color: #237ecd;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 677px;
        h1 {
            display: flex;
            font-size: 30px;
            align-items: center;
            margin: 20px 0 0 0;
        }
    `
const FormBlock = styled.form`
    display: flex;
    background-color: #319fff;
    align-items: center;
    flex-direction: column;
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
            background: #5da8e4;
            color: #fff;
            border: none;
        } 
`