import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import LinkedIn from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#222",
    height: "55px",
    overflow: "hidden",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <a href="https://www.linkedin.com/in/kostiantyn-sukhorukov-a70299276/" target="_blank"> <BottomNavigationAction icon={<LinkedIn />} className={classes.root} /> </a>
    </BottomNavigation>
  );
};
export default Footer;
