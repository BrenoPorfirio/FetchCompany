import { Input, InputProps, InputLabel } from "@mui/material";
import { CustomInputContainer } from "./styles/input";

interface CustomInputProps extends InputProps {
  label: string;
  errorMessage?: string;
}

export const CustomInput = ({
  label,
  name,
  error,
  errorMessage,
  ...rest
}: CustomInputProps) => {
  return (
    <CustomInputContainer error={error}>
      <InputLabel>{label}</InputLabel>
      <Input disableUnderline {...rest} />
      <span>{error && errorMessage}</span>
    </CustomInputContainer>
  );
};
