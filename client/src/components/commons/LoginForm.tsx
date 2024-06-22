import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchLogin } from "../../store/reducers/ActionCreators";

const LoginForm = (): JSX.Element => {
  const { error } = useAppSelector((state) => state.userReducer);
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useAppDispatch();
  const [errorLoginValidationMessage, setErrorLoginValidationMessage] =
    useState<string>("");

  const [errorPasswordValidationMessage, setErrorPasswordValidationMessage] =
    useState<string>("");

  const handleLogin = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setErrorLoginValidationMessage("");
    setLogin(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setErrorPasswordValidationMessage("");
    setPassword(e.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (!login) {
      setErrorLoginValidationMessage("Поле должно быть заполнено!");
    } else if (!password) {
      setErrorPasswordValidationMessage("Поле должно быть заполнено!");
    } else {
      dispatch(fetchLogin({ login, password }));
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Войти
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="login"
            label="Имя пользователя"
            name="login"
            autoFocus
            value={login}
            onChange={handleLogin}
            error={!!errorLoginValidationMessage}
            helperText={errorLoginValidationMessage}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Пароль"
            type="password"
            id="password"
            autoComplete="new-password"
            value={password}
            onChange={handlePassword}
            error={!!errorPasswordValidationMessage}
            helperText={errorPasswordValidationMessage}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Войти
          </Button>

          <Link to="/registration">У вас нет аккаунта? Зарегистрироваться</Link>
        </Box>
      </Box>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </Container>
  );
};

export default LoginForm;
