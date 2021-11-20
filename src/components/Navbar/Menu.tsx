import { Fragment, useState } from "react";
import { IconButton, Menu as MuiMenu, MenuItem } from "@material-ui/core";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import routes from "../../routes";

const listRoutes = ["dashboard", "categories.list"];
export const Menu = () => {
  const menuRoutes = routes.filter((route) => listRoutes.includes(route.name));
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event: any) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  return (
    <Fragment>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <MuiMenu
        id="menu-appbar"
        open={!!anchorEl}
        anchorEl={anchorEl}
        keepMounted
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        getContentAnchorEl={null}
      >
        {listRoutes.map((routeName, key) => {
          const route = menuRoutes.find((route) => route.name === routeName);
          return (
            <MenuItem
              key={key}
              component={Link}
              to={route?.path as string}
              onClick={handleClose}
            >
              {menuRoutes[key].label}
            </MenuItem>
          );
        })}
      </MuiMenu>
    </Fragment>
  );
};
