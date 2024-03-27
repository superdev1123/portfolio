import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import project1 from "../images/zocdoc.png";
import project2 from "../images/redfin.png";
import project3 from "../images/airnewzealand.png";
import project4 from "../images/venus.png";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
}));

const projects = [
  {
    name: "Zocdoc",
    image: project1,
  },
  {
    name: "Project 2",
    image: project2,
  },
  {
    name: "Project 3",
    image: project3,
  },
  {
    name: "Project 4",
    image: project4,
  },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <div style={{marginBottom:"30px"}}>
        {/* Projects */}
        {projects.map((project, i) => (
          <div>
            <div style={{width: "60%", margin:"0 auto", marginTop:"30px"}}>
              <CardActionArea style={{borderRadius:"16px"}}>
                <div style={{backgroundImage:`url(${project.image})`, height: "240px", backgroundSize:"cover", boxShadow:"rgba(255, 255, 255, 0.45) 0px 25px 20px -20px", borderRadius:"16px"}}>
                </div>
              </CardActionArea>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Portfolio;
