import { CustomModal } from "../../../components/CustomModal/CustomModal";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { CustomInput } from "../../../components/Input/CustomInput";
import { Grid } from "@mui/material";
import { useContext, useEffect } from "react";
import { createLocation } from "../apis/locations.apis";
import { toast } from "react-toastify";
import { CompanyContext } from "../../../contexts/CompanyContext";
import { zipCodeMask } from "../../../utils/utils";

const schema = Yup.object().shape({
  name: Yup.string()
    .required("Campo obrigatório")
    .min(6, "Insira no mínimo 6 caracteres"),
  cep: Yup.string()
    .required("Campo obrigatório")
    .min(9, "Insira no mínimo 8 caracteres"),
  street: Yup.string()
    .required("Campo obrigatório")
    .min(6, "Insira no mínimo 6 caracteres"),
  number: Yup.string().required("Campo obrigatório"),
  district: Yup.string().required("Campo obrigatório"),
  city: Yup.string().required("Campo obrigatório"),
  state: Yup.string().required("Campo obrigatório"),
});

interface IFormInput {
  name: string;
  city: string;
  state: string;
  street: string;
  cep: string;
  number: string;
  district: string;
}

interface CreateLocationModal {
  open: boolean;
  handleClose: () => void;
  onCreateSuccess: () => void;
}

export const CreateLocationModal = ({
  open,
  handleClose,
  onCreateSuccess,
}: CreateLocationModal) => {
  const { currentCompanyData } = useContext(CompanyContext);

  const {
    control,
    handleSubmit,
    formState,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      city: "",
      state: "",
      street: "",
      cep: "",
      number: "",
      district: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      let formattedCep = "";
      if (data.cep.length > 9) {
        formattedCep = data.cep.slice(0, -1);
      } else {
        formattedCep = data.cep;
      }
      const formattedData = {
        ...data,
        name: data.name,
        city: data.city,
        state: data.state,
        street: data.street,
        cep: formattedCep,
        number: data.number,
        district: data.district,
        companyId: currentCompanyData.id,
      };
      await createLocation(formattedData).then((response) => {
        toast.success("Local criado com sucesso!");
        onCreateSuccess();
      });
      handleClose();
    } catch (err) {
      console.log(err);
      toast.error("Ops! Erro Inesperado");
    }
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        name: "",
        city: "",
        state: "",
        street: "",
        cep: "",
        number: "",
        district: "",
      });
    }
    reset();
  }, [open]);

  return (
    <CustomModal
      isOpen={open}
      handleClose={handleClose}
      onSubmit={handleSubmit(onSubmit)}
      mode="create"
    >
      <Grid item xl={12} lg={12} xs={12} md={12} sm={12} key={"name"}>
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
      </Grid>
      <Grid item xl={6} lg={6} xs={12} md={6} sm={12} key={"cep"}>
        <Controller
          name="cep"
          control={control}
          render={({ field }) => {
            console.log(field);
            const { onChange } = field;
            return (
              <CustomInput
                label="CEP"
                type="text"
                error={!!errors.cep}
                errorMessage={errors.cep?.message}
                value={zipCodeMask(field.value)}
                onChange={(val) => {
                  onChange(val);
                }}
              />
            );
          }}
        />
      </Grid>
      <Grid item xl={6} lg={6} xs={12} md={6} sm={12} key={"street"}>
        <Controller
          name="street"
          control={control}
          render={({ field }) => (
            <CustomInput
              label="Rua"
              type="text"
              error={!!errors.street}
              errorMessage={errors.street?.message}
              {...field}
            />
          )}
        />
      </Grid>
      <Grid item xl={6} lg={6} xs={12} md={6} sm={12} key={"number"}>
        <Controller
          name="number"
          control={control}
          render={({ field }) => (
            <CustomInput
              label="Número"
              type="text"
              error={!!errors.number}
              errorMessage={errors.number?.message}
              {...field}
            />
          )}
        />
      </Grid>
      <Grid item xl={6} lg={6} xs={12} md={6} sm={12} key={"district"}>
        <Controller
          name="district"
          control={control}
          render={({ field }) => (
            <CustomInput
              label="Bairro"
              type="text"
              error={!!errors.district}
              errorMessage={errors.district?.message}
              {...field}
            />
          )}
        />
      </Grid>
      <Grid item xl={6} lg={6} xs={12} md={6} sm={12} key={"city"}>
        <Controller
          name="city"
          control={control}
          render={({ field }) => (
            <CustomInput
              label="Cidade"
              type="text"
              error={!!errors.city}
              errorMessage={errors.city?.message}
              {...field}
            />
          )}
        />
      </Grid>
      <Grid item xl={6} lg={6} xs={12} md={6} sm={12} key={"state"}>
        <Controller
          name="state"
          control={control}
          render={({ field }) => (
            <CustomInput
              label="Estado"
              type="text"
              error={!!errors.state}
              errorMessage={errors.state?.message}
              {...field}
            />
          )}
        />
      </Grid>
    </CustomModal>
  );
};
