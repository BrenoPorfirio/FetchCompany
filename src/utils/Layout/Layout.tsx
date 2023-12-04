import { useContext, useEffect, useRef, useState } from "react";

import Fade from "@mui/material/Fade";
import {
  Avatar,
  ClickAwayListener,
  MenuItem,
  Popper,
  Typography,
} from "@mui/material";

import InfoIcon from "@mui/icons-material/Info";
import LogoutIcon from "@mui/icons-material/Logout";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import CompaniesIcon from "../../assets/companiesIcon.svg";
import AvatarProfile from "../../assets/avatar.png";

import { motion } from "framer-motion";

import { LayoutContainer } from "../../styles/layout";
import { AuthContext } from "../../contexts/AuthContext";
import { CompanyContext } from "../../contexts/CompanyContext";

interface LayoutProps {
  children?: React.ReactElement;
}

export const Layout = ({ children }: LayoutProps) => {
  const [isHover, setHover] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const { user, signOut } = useContext(AuthContext);
  const { currentCompanyName } = useContext(CompanyContext);
  const animate = true;

  const anchorRef = useRef(null);

  const handleToggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleClose = () => {
    setOpenMenu(false);
  };

  const handleSignOut = () => {
    signOut();
  };

  return (
    <LayoutContainer>
      <div className="header">
        <div className="headerDescription">
          <img src={CompaniesIcon} alt="Empresas" />
          <p>{currentCompanyName ? currentCompanyName : "Minhas Empresas"}</p>
        </div>

        <ClickAwayListener onClickAway={() => handleClose()}>
          <motion.div
            className="userMenu"
            ref={anchorRef}
            onClick={handleToggleMenu}
            animate={{
              backgroundColor:
                isHover === true || openMenu === true ? "#0385FD" : "#EAEAEA",
              color:
                isHover === true || openMenu === true ? "#FFFFFF" : "#000000",
            }}
            transition={{ duration: 0.3 }}
            onHoverStart={() => setHover(true)}
            onHoverEnd={() => setHover(false)}
          >
            <div className="userInfos">
              <Avatar
                alt="Usuário"
                src={AvatarProfile}
                sx={{ width: 54, height: 54 }}
              />
              <p>{user.name}</p>
            </div>
            <ExpandMoreIcon />

            <Popper id="fadeMenu" anchorEl={anchorRef.current} open={openMenu}>
              <Fade in={animate} timeout={1000}>
                <div className="popper">
                  <MenuItem onClick={handleSignOut}>
                    Sair <LogoutIcon />
                  </MenuItem>
                </div>
              </Fade>
            </Popper>
          </motion.div>
        </ClickAwayListener>
      </div>

      {children}
    </LayoutContainer>
  );
};
