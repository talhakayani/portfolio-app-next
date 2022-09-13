import DisplayProject from "./displayProject";
import Intro from "./intro";
import SocialMedia from "./social-media";

const IntroSocial = ({ intro }) => {
  const { projects } = intro;
  const odd = projects?.filter((_, index) => (index + 1) % 2 != 0);
  const even = projects?.filter((_, index) => (index + 1) % 2 == 0);

  return (
    <>
      <div className="container">
        <div>
          <Intro profile={intro?.profile} />
        </div>
        <SocialMedia socialMedia={intro?.socialMedia} />
        <div style={{ gridColumn: 1, gridRow: 2 }}>
          {odd?.map((oddProject) => (
            <DisplayProject project={oddProject} />
          ))}
        </div>
        <div style={{ gridColumn: 2, gridRow: 2, position: "relative" }}>
          {even?.map((evenProject) => (
            <DisplayProject project={evenProject} />
          ))}
        </div>
      </div>
    </>
  );
};

export default IntroSocial;
