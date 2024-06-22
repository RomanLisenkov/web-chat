import { useNavigate } from "react-router-dom";
import { useIsAuth } from "../../hooks/redux";
import { useEffect } from "react";

const RequireIsNotAuth = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  const navigate = useNavigate();
  const isAuth = useIsAuth();

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth, navigate]);

  return children;
};

export default RequireIsNotAuth;
