import { BrowserRouter, Route, Routes } from "react-router-dom";
import RequireIsAuth from "./commons/RequireIsAuth";
import MainPage from "./MainPage";
import RequireIsNotAuth from "./commons/RequireIsNotAuth";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";

const AppRoutes = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <RequireIsAuth>
              <MainPage />
            </RequireIsAuth>
          }
        />
        <Route
          path="/login"
          element={
            <RequireIsNotAuth>
              <LoginPage />
            </RequireIsNotAuth>
          }
        />

        <Route
          path="/registration"
          element={
            <RequireIsNotAuth>
              <RegisterPage />
            </RequireIsNotAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
