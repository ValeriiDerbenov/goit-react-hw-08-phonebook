import React, { useEffect, Suspense } from 'react';
import { useDispatch } from 'react-redux';


import Loader from './Loader/Loader';
import {fetchContacts} from '../../src/redux/contacts/contacts.reducer'
import Header from './Header/Header';
import { Route, Routes } from 'react-router';
import { HomePage } from 'pages/HomePage/HomePage';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';

export const App = () => {
  // const contacts = useSelector(state => state.contactsStore.contacts);
  

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Header>
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Suspense>
  </Header>
  );
};
