import { Button, TextField } from "@mui/material";
import styles from "./chat.module.css";
import { useEffect, useState } from "react";
import io from "socket.io-client";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import Message from "../Message/Message";
import SendIcon from "@mui/icons-material/Send";
import { v4 as uuidv4 } from "uuid";
import { addMessage } from "../../../store/reducers/MessageSlice";
import { fetchGetMessages } from "../../../store/reducers/ActionCreators";
const socket = io("http://localhost:3000");

const Chat = (): JSX.Element => {
  const [message, setMessage] = useState<string>("");

  const { id, login } = useAppSelector((state) => state.userReducer);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchGetMessages());
    socket.on("recive_message", (message) => {
      dispatch(addMessage(message));
    });
    return () => {
      socket.removeAllListeners("recive_message");
    };
  }, []);

  const { messages } = useAppSelector((state) => state.messageReducer);

  const sendMessageHandler = () => {
    if (message) {
      socket.emit("send_message", { message, userId: id, login });
      setMessage("");
    }
    return;
  };

  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.messageContainer}>
          {messages.map((message) => (
            <Message key={uuidv4()} {...message} />
          ))}
        </div>
        <div className={styles.inputArea}>
          <TextField
            sx={{
              padding: "10px",
            }}
            variant="standard"
            InputProps={{
              disableUnderline: true,
            }}
            id="outlined-multiline-static"
            multiline
            rows={2}
            fullWidth
            placeholder="Сообщение"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <Button
            sx={{ margin: "10px", borderRadius: "20px" }}
            variant="contained"
            onClick={sendMessageHandler}
            endIcon={<SendIcon />}
          >
            Отправить
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
