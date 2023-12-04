import HubLogo from "../../assets/hubLocalLogo.png";

import { Button } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { CustomInput } from "../Input/CustomInput";
import { LoginContainer } from "../styles/login";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Insira um email válido")
    .required("Campo obrigatório")
    .min(6, "Insira no mínimo 6 caracteres"),
  password: Yup.string()
    .required("Campo obrigatório")
    .min(6, "Insira no mínimo 6 caracteres"),
});

interface IFormInput {
  email: string;
  password: string;
}

interface LoginProps {
  handleToggleMode: () => void;
}

export const Login = ({ handleToggleMode }: LoginProps) => {
  const { signIn } = useContext(AuthContext);

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await signIn(data);
  };

  return (
    <LoginContainer
      animate={{ y: [-100, 0, 0], opacity: [0.2, 0.5, 1] }}
      transition={{ ease: "easeOut", duration: 1.5 }}
    >
      <img src={HubLogo} alt="HubLocal" />

      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <CustomInput
              label="Email"
              type="text"
              error={!!errors.email}
              errorMessage={errors.email?.message}
              {...field}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <CustomInput
              label="Senha"
              type="password"
              error={!!errors.password}
              errorMessage={errors.password?.message}
              {...field}
            />
          )}
        />

        <LoadingButton type="submit" variant="outlined" loading={isSubmitting}>
          Logar
        </LoadingButton>
        <Button type="button" onClick={handleToggleMode}>
          Criar conta
        </Button>
      </form>
    </LoginContainer>
  );
};
