import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Contacts } from './pages/Contacts';
import { CreateContact } from './pages/CreateContact';
import './App.css';
import { api } from './api';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Contacts api={api}/>
        </Route>
        <Route path='/create'>
          <CreateContact api={api}/>
        </Route>
        <Route path='/:page'>
          <Contacts api={api}/>
        </Route>
        <Route path='/*'>
          <Redirect to='/'/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
