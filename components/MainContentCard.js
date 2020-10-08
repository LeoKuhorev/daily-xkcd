import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  imgStyles: {
    width: "100%",
    padding: 5,
    minHeight: 240,
  },
  cardStyles: {
    marginTop: "2rem",
  },
});

function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.cardStyles}>
      <CardActionArea>
        <img
          className={classes.imgStyles}
          src={props.comic.img}
          alt={props.comic.safe_title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.comic.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.comic.alt}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default MediaCard;
