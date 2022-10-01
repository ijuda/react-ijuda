import App from "@containers/App/App";
import Home from "@containers/Home";
import Login from "@containers/Login";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { RouteCodes } from "@constants/routes";
import Register from "@containers/Register";

const AppRoutes = () => {
  return (
    <Router>
      <App>
        <Routes>
          <Route path={RouteCodes.HOME} element={<Home />} />
          <Route path={RouteCodes.LOGIN} element={<Login />} />
          <Route path={RouteCodes.REGISTER} element={<Register />} />
        </Routes>
      </App>
    </Router>
  );
};

export default AppRoutes;
