import { useCallback, useContext, useEffect, useState } from "react";
import { CustomTable } from "../../components/Table/CustomTable";
import { getCompanies } from "./apis/companies.apis";
import { CreateCompanyModal } from "./components/CreateCompanyModal";
import { DeleteCompanyModal } from "./components/DeleteCompanyModal";
import { BaseContainer } from "../../styles/baseContainer";
import EditIcon from "../../assets/editIcon.svg";
import LocationsIcon from "../../assets/locationsIcon.svg";
import DeleteIcon from "../../assets/deleteIcon.svg";
import { EditCompanyModal } from "./components/EditCompanyModal";
import { Layout } from "../../utils/Layout/Layout";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { CompanyContext } from "../../contexts/CompanyContext";
import { CircularProgress } from "@mui/material";

export interface CompanyData {
  id: number;
  name: string;
  website: string;
  cnpj: string;
  // locations: [];
}

export const Companies = () => {
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [companiesData, setCompaniesData] = useState([]);
  const [currentCompany, setCurrentCompany] = useState({} as CompanyData);

  const { user } = useContext(AuthContext);
  const { saveCurrentCompanyData, saveCurrentCompanyName } =
    useContext(CompanyContext);

  const navigate = useNavigate();

  const handleEditCompany = (row) => {
    setCurrentCompany(row);
    setOpenEditModal(true);
  };

  const handleDeleteCompany = (row) => {
    setCurrentCompany(row);
    setOpenDeleteModal(true);
  };

  const loadCompanies = async () => {
    setLoading(true);
    getCompanies(user.id)
      .then((response) => {
        setCompaniesData(response.data.companies);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onSuccess = () => {
    loadCompanies();
  };

  const handleNavigateToLocations = useCallback((row) => {
    saveCurrentCompanyData(row);
    saveCurrentCompanyName(row.name);
    navigate("/app/locations");
  }, []);

  useEffect(() => {
    loadCompanies();
  }, []);

  return (
    <Layout>
      <>
        <BaseContainer>
          {loading && <CircularProgress />}
          {!loading && (
            <CustomTable
              type="companies"
              tableData={companiesData}
              handleNewObject={() => setOpenCreateModal(true)}
              actions={[
                {
                  onClick: (row) => handleEditCompany(row),
                  renderItem: () => {
                    return <img src={EditIcon} />;
                  },
                },
                {
                  onClick: (row) => handleNavigateToLocations(row),
                  renderItem: () => {
                    return <img src={LocationsIcon} />;
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
        <CreateCompanyModal
          open={openCreateModal}
          handleClose={() => setOpenCreateModal(false)}
          onCreateSuccess={onSuccess}
        />
        <EditCompanyModal
          open={openEditModal}
          handleClose={() => setOpenEditModal(false)}
          companyData={currentCompany}
          onEditSuccess={onSuccess}
        />
        <DeleteCompanyModal
          open={openDeleteModal}
          handleClose={() => setOpenDeleteModal(false)}
          companyData={currentCompany}
          onDeleteSuccess={onSuccess}
        />
      </>
    </Layout>
  );
};
