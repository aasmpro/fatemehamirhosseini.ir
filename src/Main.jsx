import React from "react";
import { Switch, Route } from "react-router-dom";

import { Home } from "./views/Home";
import { NotFound } from "./views/NotFound";

export const Main = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/*" component={NotFound} />
    </Switch>
  );
};
