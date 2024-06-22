import { useAppDispatch } from "../hooks/redux";
import { fetchLogout } from "../store/reducers/ActionCreators";

const MainPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  return (
    <>
      <div>Main Page</div>
      <button onClick={()=>dispatch(fetchLogout())}>Выйти</button>
    </>
  );
};

export default MainPage;
