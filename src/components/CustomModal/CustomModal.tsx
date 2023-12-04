import {
  Button,
  Divider,
  Grid,
  Modal,
  ClickAwayListener,
  Fade,
} from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { CustomModalContainer } from "./styles/customModal";

interface CustomModalProps {
  isOpen: boolean;
  mode: "delete" | "create" | "edit";
  deleteDescription?: string;
  title?: string;
  handleClose: () => void;
  children?: React.ReactNode;
  onSubmit: (data: any) => void;
}

export const CustomModal = ({
  isOpen,
  mode,
  title,
  deleteDescription,
  handleClose,
  children,
  onSubmit,
}: CustomModalProps) => {
  const switchButtonText = (mode: string) => {
    switch (mode) {
      case "create":
        return "Adicionar";
      case "delete":
        return "Excluir";
      case "edit":
        return "Salvar";
    }
  };

  return (
    <Modal open={isOpen}>
      <Fade unmountOnExit mountOnEnter timeout={300} in={isOpen}>
        <CustomModalContainer mode={mode} onSubmit={onSubmit}>
          <ClickAwayListener onClickAway={handleClose}>
            <div className="contentContainer">
              <>
                <div className="modalHeader">
                  <p>{title || "Adicionar"}</p>
                  <Button onClick={handleClose} className="modalCloseButton">
                    <CloseOutlinedIcon />
                  </Button>
                </div>
                <Divider color="#EBEDF2" />
                {children && (
                  <Grid
                    container
                    spacing={3}
                    style={{
                      padding: "1.5rem 2rem",
                      alignItems: "flex-start",
                    }}
                  >
                    {children}
                  </Grid>
                )}

                {mode === "delete" && (
                  <div className="description">
                    <p>{deleteDescription}</p>
                  </div>
                )}
                <Divider color="#EBEDF2" />
                <div className="modalFooter">
                  <Button type="submit" className="submitModal">
                    <p>{switchButtonText(mode)}</p>
                  </Button>
                </div>
              </>
            </div>
          </ClickAwayListener>
        </CustomModalContainer>
      </Fade>
    </Modal>
  );
};
