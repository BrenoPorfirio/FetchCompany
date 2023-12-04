import { useCallback, useContext, useEffect, useState } from "react";
import { CustomTable } from "../../components/Table/CustomTable";
import EditIcon from "../../assets/editIcon.svg";
import DeleteIcon from "../../assets/deleteIcon.svg";
import { Layout } from "../../utils/Layout/Layout";
import { useNavigate } from "react-router-dom";
import { CompanyContext } from "../../contexts/CompanyContext";
import { BaseContainer } from "../../styles/baseContainer";
import { getLocations } from "./apis/locations.apis";
import { CreateLocationModal } from "./components/CreateLocationModal";
import { DeleteLocationModal } from "./components/DeleteLocationModal";
import { EditLocationModal } from "./components/EditLocationModal";
import { CircularProgress } from "@mui/material";

export interface LocationData {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  email: string;
  street: string;
  cep: string;
  number: string;
  district: string;
}

export const Locations = () => {
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [locationsData, setLocationsData] = useState([]);
  const [currentLocation, setCurrentLocation] = useState({} as LocationData);

  const { currentCompanyData, saveCurrentCompanyName } =
    useContext(CompanyContext);

  const navigate = useNavigate();

  const handleEditCompany = (row) => {
    setCurrentLocation(row);
    setOpenEditModal(true);
  };

  const handleDeleteCompany = (row) => {
    setCurrentLocation(row);
    setOpenDeleteModal(true);
  };

  const loadLocations = async () => {
    setLoading(true);
    await getLocations(currentCompanyData.id)
      .then((response) => {
        setLocationsData(response.data.locations);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onSuccess = () => {
    loadLocations();
  };

  const handleNavigateToCompanies = useCallback(() => {
    saveCurrentCompanyName("");
    navigate("/app");
  }, []);

  useEffect(() => {
    loadLocations();
  }, []);

  return (
    <Layout>
      <>
        <BaseContainer>
          {loading && <CircularProgress />}
          {!loading && (
            <CustomTable
              type="locations"
              tableData={locationsData}
              handleNavigate={() => handleNavigateToCompanies()}
              handleNewObject={() => setOpenCreateModal(true)}
              actions={[
                {
                  onClick: (row) => handleEditCompany(row),
                  renderItem: () => {
                    return <img src={EditIcon} />;
                  },
                },
                {
                  onClick: (row) => handleDeleteCompany(row),
                  renderItem: () => {
                    return <img src={DeleteIcon} />;
                  },
                },
              ]}
            />
          )}
        </BaseContainer>

        <CreateLocationModal
          open={openCreateModal}
          handleClose={() => setOpenCreateModal(false)}
          onCreateSuccess={onSuccess}
        />

        <EditLocationModal
          open={openEditModal}
          handleClose={() => setOpenEditModal(false)}
          companyData={currentLocation}
          onEditSuccess={onSuccess}
        />
        <DeleteLocationModal
          open={openDeleteModal}
          handleClose={() => setOpenDeleteModal(false)}
          locationData={currentLocation}
          onDeleteSuccess={onSuccess}
        />
      </>
    </Layout>
  );
};
