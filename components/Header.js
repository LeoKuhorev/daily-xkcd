import {
  AppBar,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import MenuIcon from "@material-ui/icons/Menu";
import Link from "next/link";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    [theme.breakpoints.down("xs")]: {
      flexGrow: 1,
    },
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "#81ecec",
      color: "#2d3436",
      padding: 5,
      borderRadius: "5px",
    },
  },
  headerStyles: {
    width: "100%",
    display: "flex",
    flex: 1,
    justifyContent: "start",
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            XKCD
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                className={classes.menuButton}
                onClick={handleMenu}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link href="about/">
                    <a>About</a>
                  </Link>
                </MenuItem>
              </Menu>
            </>
          ) : (
            <div className={classes.headerStyles}>
              <IconButton
                // edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <Link href="/">
                  <a>Home</a>
                </Link>
              </IconButton>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <Link href="about/">
                  <a>About</a>
                </Link>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
