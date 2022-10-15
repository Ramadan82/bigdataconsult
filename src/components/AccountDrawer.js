import { makeStyles } from "@mui/styles";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import {
  Avatar,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

const drawerwidth = 240;

const useStyles = makeStyles({
  drawer: {
    width: drawerwidth,
  },
  drawerpaper: {
    width: drawerwidth,
    background: "orange",
  },
  topbar: {
    height: "80px",
  },
  root: {
    display: "flex",
  },
  headerBox: {
    marginBottom: "20px",
    marginTop: "40px",
  },
  headerImage: {
    display: "flex",
    justifyContent: "flex-end",
  },
});
const menuItems = [
  {
    text: "My Services",
    icon: (
      <img
        src="/images/services-icon.png"
        alt="services"
        style={{ height: "30px", width: "30px", background: "white" }}
      />
    ),
    path: "/myservices",
  },
  {
    text: "Edit Services",
    icon: <EditIcon />,
    path: "/editservice",
  },
  {
    text: "Delete Services",
    icon: <DeleteIcon sx={{ color: "red" }} />,
    path: "/deleteservice",
  },
  {
    text: "Delete My Account",
    icon: <AccountBoxIcon sx={{ color: "red" }} />,
    path: "/deletemyaccount",
  },
];
const AccountDrawer = ({ isOpen, user }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        classes={{ paper: classes.drawerpaper }}
        open={isOpen}
        PaperProps={{
          sx: {
            backgroundColor: "darkred",
          },
        }}
      >
        <div className={classes.topbar} />
        <div>
          <List>
            <Box className={classes.headerBox}>
              <Link to="/editaccount">
                <ListItem
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <Avatar />
                  <ListItemText sx={{ color: "white" }}>
                    {user.name}
                  </ListItemText>
                  <ListItemText sx={{ color: "white" }}>edit</ListItemText>
                </ListItem>
              </Link>

              <Divider sx={{ color: "white" }} />
            </Box>
            <Box sx={{ background: "white" }}>
              {menuItems.map((item) => (
                <>
                  <ListItem
                    sx={{ height: "20px", backgroundColor: "darkred" }}
                  />

                  <ListItem
                    button
                    sx={{ height: "80px" }}
                    component={Link}
                    to={item.path}
                  >
                    <ListItemIcon sx={{ background: "white" }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText sx={{ color: "black", marginLeft: "20px" }}>
                      {item.text}
                    </ListItemText>
                  </ListItem>
                </>
              ))}
            </Box>
          </List>
        </div>
      </Drawer>
    </div>
  );
};

export default AccountDrawer;
