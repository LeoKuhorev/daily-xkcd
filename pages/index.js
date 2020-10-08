import Head from "next/head";
import Layout from "../components/Layout/Layout";
import Main from "../components/Main";

export default function Home(props) {
  return (
    <Layout>
      <Main comic={props.comic} />
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://xkcd.com/info.0.json");
  const comic = await res.json();
  return {
    props: {
      comic,
    },
  };
}
