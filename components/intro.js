const Intro = ({ profile }) => {
  return (
    <div className="container-div">
      <p>
        <span className="name">{profile.name}</span> is a Software Engineer
        experienced in developing web and mobile. I have the skills, knowledge,
        and experience to develop solutions for technical problems and possess a
        good understanding of different application architecture styles.
      </p>
      <button className="btn">about</button>
    </div>
  );
};
export default Intro;
