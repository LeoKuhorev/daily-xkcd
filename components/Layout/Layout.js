import React from 'react'
import Header from "./Header"
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  containerStyles: {
    minHeight: "100vh",
  },
}));

export default function Layout(props) {
  const classes = useStyles();

  return (
    <Grid container direction="column" className={classes.containerStyles}>
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid item xs={1} sm={3} />
        <Grid item xs={10} sm={6}>
          {props.children}
        </Grid>
        <Grid item xs={1} sm={3} />
      </Grid>
      <Grid item>
      </Grid>
    </Grid>
  )
}
