import { useEffect } from "react";
import AppRoutes from "./components/AppRoutes";

import { fetchCheckAuth } from "./store/reducers/ActionCreators";
import { useAppDispatch } from "./hooks/redux";

const App = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(fetchCheckAuth());
    }
  }, [dispatch]);

  return <AppRoutes />;
};

export default App;
