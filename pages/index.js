import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";

import { Grid } from "@material-ui/core";

export default function Home() {
  return (
    <Grid container direction="column">
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
        <Footer />
      </Grid>
    </Grid>
  );
}
