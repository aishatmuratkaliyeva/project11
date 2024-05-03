// RegistrationForm.js
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useMutation, gql } from '@apollo/client';
import './RegistrationForm.css'; 

const schema = yup.object().shape({
  name: yup.string().required('Имя обязательно для заполнения'),
  email: yup.string().email('Некорректный email').required('Email обязателен для заполнения'),
  password: yup.string().min(6, 'Пароль должен содержать минимум 6 символов').required('Пароль обязателен для заполнения'),
  passwordConfirmation: yup.string().oneOf([yup.ref('password'), null], 'Пароли должны совпадать').required('Подтверждение пароля обязательно для заполнения'),
});

const CREATE_USER = gql`
  mutation CreateUser($name: String!, $email: String!, $password: String!) {
    createUser(name: $name, email: $email, password: $password) {
      id
      name
      email
    }
  }
`;

function RegistrationForm() {
  const { register, handleSubmit, formState: { errors }, watch } = useForm({
    resolver: yupResolver(schema)
  });
  const [createUser] = useMutation(CREATE_USER);
  const [message, setMessage] = useState('');

  const onSubmit = async (data) => {
    const { password, passwordConfirmation } = data;
    if (password !== passwordConfirmation) {
      setMessage('Пароли не совпадают');
      return;
    }

    try {
      const response = await createUser({ variables: { name: data.name, email: data.email, password: data.password } });
      if (response.data && response.data.createUser) {
        setMessage('Регистрация прошла успешно!');
      }
    } catch (error) {
      console.error(error);
      setMessage('Произошла ошибка при регистрации. Пожалуйста, попробуйте снова.');
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register('name')} />
        {errors.name && <span>{errors.name.message}</span>}
        <input type="email" {...register('email')} />
        {errors.email && <span>{errors.email.message}</span>}
        <input type="password" {...register('password')} />
        {errors.password && <span>{errors.password.message}</span>}
        <input type="password" {...register('passwordConfirmation')} />
        {errors.passwordConfirmation && <span>{errors.passwordConfirmation.message}</span>}
        <button type="submit">Регистрация</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default RegistrationForm;












 


