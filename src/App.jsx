import React, { Fragment } from 'react';
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import Events from './Components/Events';
import Pagination from './Components/pagination';
import NextPage from './Components/NextPage';
import Form from './Components/Form';
import { Toaster } from 'react-hot-toast';
import UseFormik from './Components/UseFormik';

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route path='' Component={Pagination} />
            <Route path='form' Component={Form} />
            <Route path='formik' Component={UseFormik} />
          </Route>
          <Route path='Next-Page/:id' Component={NextPage}></Route>
        </Routes>
      </BrowserRouter>
      <Toaster position='top-right' />
    </Fragment>

  );
}

export default App;
