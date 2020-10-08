import React from "react";
import Layout from "../../components/Layout/Layout";
import { Container } from "@material-ui/core";
import Links from "../../components/Links";
import MainContentCard from "../../components/MainContentCard";

export default function Comic(props) {
  return (
    <Layout>
      <Container maxWidth="sm">
        <MainContentCard comic={props.comic} />
        <Links num={props.comic.num} />
      </Container>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const num = context.query.id;
  const res = await fetch(`http://xkcd.com/${num}/info.0.json`);
  const comic = await res.json();

  return {
    props: {
      comic,
    },
  };
}
