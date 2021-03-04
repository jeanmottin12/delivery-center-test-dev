import { Switch } from "react-router-dom";

import Route from './Route';

import SignIn from "../pages/SignIn";

import Home from '../pages/Home';
import OrderDetail from '../pages/OrderDetail';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/home" exact component={Home} isPrivate />
      <Route path="/order-detail/:id" exact component={OrderDetail} isPrivate />
    </Switch>
  )
}