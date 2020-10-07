import React from "react";
import Links from "./Links";
import MainContentCard from "./MainContentCard";
import { Container, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  containerStyles: {
    minHeight: "100vh",
  },
}));

export default function Main() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <MainContentCard />
      <Links />
    </Container>
  );
}
