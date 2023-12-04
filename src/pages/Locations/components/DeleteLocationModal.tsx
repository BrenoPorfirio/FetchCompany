import { toast } from "react-toastify";
import { CustomModal } from "../../../components/CustomModal/CustomModal";
import { deleteLocation } from "../apis/locations.apis";
import { LocationData } from "../Locations";

interface DeleteLocationModal {
  open: boolean;
  handleClose: () => void;
  locationData: LocationData;
  onDeleteSuccess: () => void;
}

export const DeleteLocationModal = ({
  open,
  handleClose,
  locationData,
  onDeleteSuccess,
}: DeleteLocationModal) => {
  const onSubmit = async () => {
    try {
      await deleteLocation(locationData.id).then((response) => {
        onDeleteSuccess();
        toast.success("Local excluído com sucesso!");
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
      deleteDescription={`O local ${locationData.name} será excluído. Tem certeza dessa ação?`}
      title="Confirmação de exclusão"
    />
  );
};
