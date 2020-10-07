import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  containerStyles: {
    minHeight: "100vh",
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <Grid container direction="column" className={classes.containerStyles}>
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
          <Main />
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
      <Grid item>
      </Grid>
    </Grid>
  );
}
