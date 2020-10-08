import React from "react";
import { Container } from "@material-ui/core";
import Links from "./Links";
import MainContentCard from "./MainContentCard";

export default function Main(props) {
  return (
    <Container maxWidth="sm">
      <MainContentCard comic={props.comic} />
      <Links num={props.comic.num} />
    </Container>
  );
}
