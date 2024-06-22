import { useEffect } from "react";
import { useIsAuth } from "../../hooks/redux";

import { useNavigate } from "react-router-dom";

const RequireIsAuth = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  const navigate = useNavigate();
  const isAuth = useIsAuth();

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, [isAuth, navigate]);

  return children;
};

export default RequireIsAuth;
