import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "o auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    color: "#fff",
    background: "tomato",
    lineHeight: 1,
    padding: "0.5rem 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "#fff",
    padding: 0,
    textTransform: "uppercase",
  },
  body1: {
    color: "tomato",
  },
  subtitle1: {
    color: "tan",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        Working Experience
      </Typography>
      <Box component="div" className={classes.timeLine}>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2016
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Full Stack Developer
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            <a href="http://www.zocdoc.com/" target="_blank" style={{color: "tomato"}}>ZocDoc</a>
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Zocdoc is the leading healthcare marketplace that aims to help every patient find and book every type of care. 
            Each month, millions of patients visit Zocdoc.com or use the Zocdoc app to find quality, in-network doctors, see their real-time availability, 
            and instantly book appointments for in-person or virtual care. 
            Zocdoc doesn't just make healthcare easier, it also accelerates patients' access to care with the typical appointment happening within 24 to 72 hours of booking.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2018
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Full Stack Developer
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            <a href="https://www.redfin.com/" target="_blank" style={{color: "tomato"}}>Redfin</a>
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Redfin got its start inventing map-based search. Today, we’re a technology-powered real estate broker, lender, title insurer, and renovations company. 
            We serve more than 100 markets across the U.S. and Canada and employ over 4,000 people.
            In 2021, we acquired RentPath which operates leading rental sites including ApartmentGuide.com, Rent.com, and Rentals.com. 
            Combined with RentPath, we can now be a destination for all North American consumers looking for a home.
            From the technology we build to the real estate services we provide, every Redfinnian plays a part. 
            Whether you’re starting your career, perfecting your skills, or changing gears, there’s a place for you at Redfin.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2021
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Senior Front End Developer
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            <a href="http://www.airnewzealand.com/" target="_blank" style={{color: "tomato"}}>Air New Zealand</a>
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Air New Zealand is one of the world's leading airlines, known around the world, not just for our name and our innovation but also for our reputation. 
            We are recognised as "New Zealand's Most Reputable Organisation"​ for our strong leadership, customer service orientation, innovation, brand, 
            corporate values, and our role as a strong ambassador for New Zealand. 
            Each year we make sure our passengers who fly to, from and within New Zealand enjoy our uniquely Kiwi way of doing things.
            At Air New Zealand, we are all about people. 
            Ambitious, helpful, proud, down-to-earth, caring people, who look after the needs of more than 13 million people every year. 
            We look at ways of making the experience better for our customers and allowing people to experience our New Zealand.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2023
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Technical Leader
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            <a href="https://venusglobal.co.uk/" target="_blank" style={{color: "tomato"}}>Venus Global</a>
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Venus is the ultimate one-stop destination for anyone from anywhere in the world thats looking for a platform to either learn or get earning opportunities on. 
            We also operate a global software development agency trusted by thousands of clients across the world.
            Create financially viable alternatives to a traditional job or learning path for young people across Africa & the world that are looking to empower and sustain themselves.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Resume;
