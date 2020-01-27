import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom"; //importa bliblioteca de rotas

import Main from "./pages/main";
import Person from "./pages/person";
import CreatePerson from "./pages/createPerson";
import UpdatePerson from "./pages/updatePerson";
import NotFoundPage from './pages/notFoundPage';

/*Com essa bliblioteca e esses componentes so abrir uma rota da aplica por vez */
const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/person/:id" component={Person} />
      <Route path="/create/person" component={CreatePerson} />
      <Route exact path="/update/person/:id" component={UpdatePerson} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
