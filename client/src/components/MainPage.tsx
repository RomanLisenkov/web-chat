import { Button } from "@mui/material";
import { useAppDispatch } from "../hooks/redux";
import { fetchLogout } from "../store/reducers/ActionCreators";
import Chat from "./commons/Chat/Chat";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { io } from "socket.io-client";
import { useEffect } from "react";
import { addMessage } from "../store/reducers/MessageSlice";

const MainPage = (): JSX.Element => {
  const dispatch = useAppDispatch();

  
  return (
    <>
      <Button
        sx={{ margin: "10px", borderRadius: "20px" }}
        variant="contained"
        onClick={() => dispatch(fetchLogout())}
        endIcon={<ExitToAppIcon />}
      >
        Выйти
      </Button>
      <Chat/>
    </>
  );
};

export default MainPage;
