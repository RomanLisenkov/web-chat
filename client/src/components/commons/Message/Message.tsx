import { useAppSelector } from "../../../hooks/redux";


type messageProps = {
  login: string;
  message: string;
  userId: number;
};

const Message = (props: messageProps): JSX.Element => {
  const { login } = useAppSelector((state) => state.userReducer);
  return (
    <div
      style={
        login === props.login
          ? { display: "flex", justifyContent: "flex-end" }
          : { display: "flex", justifyContent: "flex-start" }
      }
    >
      <div
        style={
          login === props.login
            ? {
                display: "flex",
                flexDirection: "column",
                backgroundColor: "rgb(238,255,222)",
                borderRadius: "12px 8px 0px 8px",
                padding: "6px 10px",
                margin: "4px",
              }
            : {
                display: "flex",
                flexDirection: "column",
                backgroundColor: "rgb(252,240,241)",
                borderRadius: "8px 12px 8px 0px",
                padding: "6px 10px",
                margin: "4px",
              }
        }
      >
        <div style={{ fontSize: "8pt", textAlign: "left" }}>{props.login}</div>
        <div style={{ fontSize: "16pt", textAlign: "left" }}>
          {props.message}
        </div>
      </div>
    </div>
  );
};

export default Message;
