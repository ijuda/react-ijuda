import App from "@containers/App/App";
import Home from "@containers/Home";
import Login from "@containers/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { RouteCodes } from "@constants/routes";
import Register from "@containers/Register";
import RequireAuth from "@containers/RequireAuth";
import Profile from "@containers/Profile";

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
        </Routes>
      </App>
    </Router>
  );
};

export default AppRoutes;
