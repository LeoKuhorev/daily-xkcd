import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";


const useStyles = makeStyles({
  media: {
    minHeight: 240,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://via.placeholder.com/800x400"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
