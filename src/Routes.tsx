import App from "@containers/App/App";
import Home from "@containers/Home";
import Login from "@containers/Login";
import {
  BrowserRouter as Router,
  Route,
  Routes as Rtes,
} from "react-router-dom";
import { RouteCodes } from "@constants/routes";
import Register from "@containers/Register";

const Routes = () => {
  return (
    <Router>
      <App>
        <Rtes>
          <Route path={RouteCodes.HOME} element={<Home />} />
          <Route path={RouteCodes.LOGIN} element={<Login />} />
          <Route path={RouteCodes.REGISTER} element={<Register />} />
        </Rtes>
      </App>
    </Router>
  );
};

export default Routes;
