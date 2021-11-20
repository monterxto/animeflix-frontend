import {
  AppBar,
  makeStyles,
  Button,
  Theme,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { FC } from "react";
import logo from "../../static/img/logo.png";
import { Menu } from "./Menu";

const useStyles = makeStyles((theme: Theme) => {
  return {
    menuButton: {
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    toolbar: {
      backgroundColor: "#000000",
    },
    title: {
      flexGrow: 1,
      textAlign: "center",
    },
    logo: {
      width: 100,
      [theme.breakpoints.up("sm")]: {
        width: 200,
      },
      cursor: "pointer",
    },
  };
});

export const Navbar: FC = () => {
  const classes = useStyles();
  return (
    <AppBar>
      <Toolbar className={classes.toolbar}>
        <Menu />
        <Typography variant="h6" className={classes.title}>
          <img src={logo} alt="AnimeFlix" className={classes.logo} />
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};
