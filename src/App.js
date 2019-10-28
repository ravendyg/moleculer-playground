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

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Contacts/>
        </Route>
        <Route path='/create'>
          <CreateContact/>
        </Route>
        <Route path='/:page'>
          <Contacts/>
        </Route>
        <Route path='/*'>
          <Redirect to='/'/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
