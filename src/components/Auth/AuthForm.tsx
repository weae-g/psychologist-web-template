import { useState, ChangeEvent, useEffect } from "react";
import { Button } from "../../ui/Button";
import Card, { CardContent, CardTitle } from "../../ui/Card";
import Input from "../../ui/Input";
import useAuthStore from "../../store/authStore";
import { useNavigate } from "react-router-dom";

interface AuthFormProps {
  closeModal?: () => void;
}

const AuthForm = ({ closeModal }: AuthFormProps) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { accesToken, onLogin } = useAuthStore((state) => ({
    onLogin: state.onLogin,
    accesToken: state.accesToken,
  }));

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (accesToken) navigate("/profile");
  }, [accesToken]);

  const handleLogin = async () => {
    await onLogin(email, password).then(() => {
      if (closeModal) closeModal();
    });
  };

  return (
    <Card width="320px">
      <CardContent>
        <CardTitle>Авторизация</CardTitle>
        <Input
          placeholder="Email"
          type="email"
          value={email}
          onChange={handleEmailChange}
        />
        <Input
          placeholder="Пароль"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <Button onClick={handleLogin}>Войти</Button>
      </CardContent>
    </Card>
  );
};

export default AuthForm;
