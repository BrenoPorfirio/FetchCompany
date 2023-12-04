import HubLogo from "../../assets/hubLocalLogo.png";

import { Button } from "@mui/material";
import { CustomInput } from "../Input/CustomInput";
import LoadingButton from "@mui/lab/LoadingButton";
import { LoginContainer } from "../styles/login";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { createUser } from "../../pages/AuthPage/apis/createUser.api";
import { toast } from "react-toastify";

const schema = Yup.object().shape({
  name: Yup.string()
    .required("Campo obrigatório")
    .matches(/^[aA-zZ\s]+$/, "Formato inválido")
    .min(6, "Insira no mínimo 6 caracteres"),
  email: Yup.string()
    .email("Insira um email válido")
    .required("Campo obrigatório")
    .min(6, "Insira no mínimo 6 caracteres"),
  password: Yup.string()
    .required("Campo obrigatório")
    .min(6, "Insira no mínimo 6 caracteres"),
  confirmPassword: Yup.string()
    .required("Campo obrigatório")
    .min(6, "Insira no mínimo 6 caracteres")
    .oneOf([Yup.ref("password")], "Your passwords do not match."),
});

interface IFormInput {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface RegisterProps {
  handleToggleMode: () => void;
}

export const Register = ({ handleToggleMode }: RegisterProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const formattedData = {
        ...data,
        name: data.name,
        email: data.email,
        password: data.password,
      };
      await createUser(formattedData).then((response) => {
        toast.success("Usuário criado com sucesso!");
        handleToggleMode();
      });
    } catch (err) {
      console.log(err);
      toast.error("Ops! Erro Inesperado!");
    }
  };

  return (
    <LoginContainer
      animate={{ y: [-100, 0, 0], opacity: [0.2, 0.5, 1] }}
      transition={{ ease: "easeOut", duration: 1.5 }}
    >
      <img src={HubLogo} alt="HubLocal" />

      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <CustomInput
              label="Nome"
              type="text"
              error={!!errors.name}
              errorMessage={errors.name?.message}
              {...field}
            />
          )}
        />
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
        <Controller
          name="confirmPassword"
          control={control}
          render={({ field }) => (
            <CustomInput
              label="Repetir Senha"
              type="password"
              error={!!errors.confirmPassword}
              errorMessage={errors.confirmPassword?.message}
              {...field}
            />
          )}
        />
        <LoadingButton type="submit" variant="outlined" loading={isSubmitting}>
          Registrar
        </LoadingButton>
        <Button type="submit" onClick={handleToggleMode}>
          Logar
        </Button>
      </form>
    </LoginContainer>
  );
};
