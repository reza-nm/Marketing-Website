import {
  Box,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Button,
  ButtonBase,
  Grid,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./Header.css";
import { useState } from "react";
import Logo from "../assets/images-icons/logo.png";

const pageItems = ["Home", "Services", "About", "Contact"];
function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenuClick = () => {
    setOpenMenu(!openMenu);
  };
  const drawerContent = (
    <>
      <Button onClick={handleMenuClick}>
        <CloseIcon />
      </Button>
      <List>
        {pageItems.map((item) => {
          return (
            <div key={item}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText sx={{ textAlign: "center" }}>
                    {item}
                  </ListItemText>
                </ListItemButton>
              </ListItem>
              <Divider />
            </div>
          );
        })}
      </List>
    </>
  );

  return (
    <>
      <AppBar
        position="static"
        style={{
          background: "transparent",
          boxShadow: "none",
          display: "block",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            component="img"
            sx={{ maxWidth: "35%", height: "auto" }}
            alt="Logo"
            src={Logo}
          />
          {/*  */}
          <IconButton
            id="app-nav-button"
            size="large"
            edge="end"
            sx={{ mr: 2, display: { sm: "none" } }}
            onClick={handleMenuClick}
          >
            <MenuIcon></MenuIcon>
          </IconButton>

          <List sx={{ display: { xs: "none", sm: "block" } }}>
            {pageItems.map((item) => {
              return (
                <Button
                  sx={{
                    fontSize: { sm: "0.8rem", md: "1rem", color: "black" },
                  }}
                  key={item}
                >
                  {item}
                </Button>
              );
            })}
          </List>

          <Drawer
            open={openMenu}
            anchor="right"
            variant="temporary"
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawerContent}
          </Drawer>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
