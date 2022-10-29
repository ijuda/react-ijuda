import App from "@containers/App/App";
import Home from "@containers/Home";
import Login from "@containers/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { RouteCodes } from "@constants/routes";
import Register from "@containers/Register";
import RequireAuth from "@containers/RequireAuth";
import Profile from "@containers/Profile";
import RegisterClient from "@containers/RegisterClient";
import RegisterEmployee from "@containers/RegisterEmployee";

const AppRoutes = () => {
  return (
    <Router>
      <App>
        <Routes>
          <Route path={RouteCodes.HOME} element={<Home />} />
          <Route path={RouteCodes.LOGIN} element={<Login />} />
          <Route path={RouteCodes.REGISTER} element={<Register />} />
          <Route
            path={RouteCodes.PROFILE}
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />
          <Route
            path={RouteCodes.REGISTER_CLIENT}
            element={<RegisterClient />}
          />
          <Route
            path={RouteCodes.REGISTER_EMPLOYEE}
            element={<RegisterEmployee />}
          />
        </Routes>
      </App>
    </Router>
  );
};

export default AppRoutes;
