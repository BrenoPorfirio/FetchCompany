import { toast } from "react-toastify";
import { CustomModal } from "../../../components/CustomModal/CustomModal";
import { deleteCompany } from "../apis/companies.apis";
import { CompanyData } from "../Companies";

interface CreateCompanyModal {
  open: boolean;
  handleClose: () => void;
  companyData: CompanyData;
  onDeleteSuccess: () => void;
}

export const DeleteCompanyModal = ({
  open,
  handleClose,
  companyData,
  onDeleteSuccess,
}: CreateCompanyModal) => {
  const onSubmit = async () => {
    try {
      await deleteCompany(companyData.id).then((response) => {
        onDeleteSuccess();
        toast.success("Empresa excluída com sucesso!");
      });
      handleClose();
    } catch (err) {
      toast.error("Ops! Erro Inesperado");
      handleClose();
      console.log(err);
    }
  };
  return (
    <CustomModal
      isOpen={open}
      handleClose={handleClose}
      onSubmit={onSubmit}
      mode="delete"
      deleteDescription={`A empresa ${companyData.name} será excluída. Tem certeza dessa ação?`}
      title="Confirmação de exclusão"
    />
  );
};
