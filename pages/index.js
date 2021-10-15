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
      <div className="container">
        <div style={{ gridColumn: 1, gridRow: 1 / 2 }}>
          <Intro profile={intro.profile} />
        </div>
        <div style={{ gridColumn: 2, gridRow: 1 }}>
          <SocialMedia socialMedia={intro.socialMedia} />
        </div>
        <IntroSocial intro={intro} />
      </div>
    </>
  );
}
