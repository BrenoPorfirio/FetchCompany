import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import BackIcon from "../../assets/backIcon.svg";
import { CustomTableContainer } from "./styles/customTable";
import { Button, TablePagination } from "@mui/material";
import { ReactElement, useState } from "react";

export type ISelectBoxActions = {
  onClick: (
    row: [],
    event?: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void | Promise<void> | undefined;
  renderItem: () => string | ReactElement;
};

interface CustomTableProps {
  type: "companies" | "locations";
  tableData: any[];
  handleNewObject: () => void;
  handleNavigate?: () => void;
  actions: Array<ISelectBoxActions>;
}

export const CustomTable = ({
  type,
  tableData,
  handleNewObject,
  actions,
  handleNavigate,
}: CustomTableProps) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      {type === "locations" && (
        <div className="goBack" onClick={handleNavigate}>
          <img src={BackIcon} />
          <p>Minhas Empresas</p>
        </div>
      )}

      <CustomTableContainer>
        {type === "companies" &&
          (tableData.length === 0 ? (
            <div className="noTableMode">
              <h1>Nenhuma empresa cadastrada!</h1>
              <button onClick={handleNewObject}>Adicionar Empresa</button>
            </div>
          ) : (
            <>
              <div className="tableAdd">
                <button onClick={handleNewObject}>Adicionar Empresa</button>
              </div>
              <TableContainer component={Paper} sx={{ height: "400px" }}>
                <Table stickyHeader aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell width="50%">Empresa</TableCell>
                      <TableCell align="left" width="20%">
                        Qt de Locais
                      </TableCell>
                      <TableCell align="left" width="30%">
                        Ações
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {tableData.map((row) => (
                      <TableRow
                        key={row.id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="left">
                          {row.locations?.length}
                        </TableCell>
                        <TableCell align="left">
                          <div className="actionsRow">
                            {actions.map((action) => {
                              return (
                                <Button
                                  title="Editar"
                                  onClick={() => action.onClick(row)}
                                >
                                  {action.renderItem()}
                                </Button>
                              );
                            })}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </>
          ))}
        {type === "locations" &&
          (tableData.length === 0 ? (
            <>
              <div className="noTableMode">
                <h1>Nenhum local cadastrado!</h1>
                <button onClick={handleNewObject}>Adicionar Local</button>
              </div>
            </>
          ) : (
            <>
              <div className="tableAdd">
                <button onClick={handleNewObject}>Adicionar Local</button>
              </div>
              <TableContainer component={Paper} sx={{ height: "400px" }}>
                <Table stickyHeader aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell width="70%">Local</TableCell>
                      <TableCell align="left" width="30%">
                        Ações
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {tableData.map((row) => (
                      <TableRow
                        key={row.id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="left">
                          <div className="actionsRow">
                            {actions.map((action) => {
                              return (
                                <Button
                                  title="Editar"
                                  onClick={() => action.onClick(row)}
                                >
                                  {action.renderItem()}
                                </Button>
                              );
                            })}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </>
          ))}
      </CustomTableContainer>
    </>
  );
};
