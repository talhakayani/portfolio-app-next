import Head from 'next/head';
import Intro from '../components/intro';
import IntroSocial from '../components/introSocial';
import SocialMedia from '../components/social-media';
export const getStaticProps = async () => {
  const res = await fetch('http://localhost:8000/intro');
  const data = await res.json();
  return {
    props: { intro: data },
  };
};

export default function Home({ intro }) {
  return (
    <>
      <Head>
        <title>{intro.profile.name}</title>
      </Head>
      <IntroSocial intro={intro} />
    </>
  );
}
