import Head from "next/head";
import IntroSocial from "../components/introSocial";
import data from "../data/db.json";

export default function Home() {
  const { intro } = data;
  return (
    <>
      <Head>
        <title>{intro?.profile?.name}</title>
      </Head>
      <IntroSocial intro={intro} />
    </>
  );
}
