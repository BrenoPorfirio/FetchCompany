import { CustomModal } from "../../../components/CustomModal/CustomModal";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { CustomInput } from "../../../components/Input/CustomInput";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { CompanyData } from "../Companies";
import { editCompany } from "../apis/companies.apis";
import { toast } from "react-toastify";
import { cnpjMask } from "../../../utils/utils";

const schema = Yup.object().shape({
  name: Yup.string()
    .required("Campo obrigatório")
    .min(6, "Insira no mínimo 6 caracteres"),
  website: Yup.string()
    .required("Campo obrigatório")
    .min(6, "Insira no mínimo 6 caracteres"),
  cnpj: Yup.string()
    .required("Campo obrigatório")
    .min(18, "Insira no mínimo 18 caracteres"),
});

interface IFormInput {
  name: string;
  website: string;
  cnpj: string;
}

interface EditCompanyModal {
  open: boolean;
  handleClose: () => void;
  companyData: CompanyData;
  onEditSuccess: () => void;
}

export const EditCompanyModal = ({
  open,
  handleClose,
  companyData,
  onEditSuccess,
}: EditCompanyModal) => {
  const {
    control,
    handleSubmit,
    formState,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: companyData.name,
      website: companyData.website,
      cnpj: companyData.cnpj,
    },
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      let formattedCNPJ = "";
      if (data.cnpj.length > 18) {
        formattedCNPJ = data.cnpj.slice(0, -1);
      } else {
        formattedCNPJ = data.cnpj;
      }
      const formattedData = {
        ...data,
        name: data.name,
        website: data.website,
        cnpj: formattedCNPJ,
      };
      await editCompany(companyData.id, formattedData).then((response) => {
        toast.success("Empresa editada com sucesso!");
        onEditSuccess();
      });
      handleClose();
    } catch (err) {
      console.log(err);
      toast.error("Ops! Erro Inesperado!");
    }
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ name: "", website: "", cnpj: "" });
      handleClose();
    }
    reset(companyData);
  }, [open]);

  return (
    <CustomModal
      isOpen={open}
      handleClose={handleClose}
      onSubmit={handleSubmit(onSubmit)}
      mode="edit"
      title={`Editar: ${companyData.name}`}
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
      <Grid item xl={6} lg={6} xs={12} md={6} sm={12} key={"website"}>
        <Controller
          name="website"
          control={control}
          render={({ field }) => (
            <CustomInput
              label="Website"
              type="text"
              error={!!errors.website}
              errorMessage={errors.website?.message}
              {...field}
            />
          )}
        />
      </Grid>
      <Grid item xl={6} lg={6} xs={12} md={6} sm={12} key={"cnpj"}>
        <Controller
          name="cnpj"
          control={control}
          render={({ field }) => {
            const { onChange } = field;
            return (
              <CustomInput
                label="CNPJ"
                type="text"
                error={!!errors.cnpj}
                errorMessage={errors.cnpj?.message}
                value={cnpjMask(field.value)}
                onChange={(val) => {
                  onChange(val);
                }}
              />
            );
          }}
        />
      </Grid>
    </CustomModal>
  );
};
