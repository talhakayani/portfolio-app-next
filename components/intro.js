import Link from "next/link";
const Intro = ({ profile }) => {
  return (
    <div className="container-div">
      <p>
        <span className="name">{profile?.name}</span> is a Software Engineer
        experienced in developing web and mobile. I have the skills, knowledge,
        and experience to develop solutions for technical problems and possess a
        good understanding of different application architecture styles.
      </p>
      <Link href="https://docs.google.com/document/d/1om-sySa5TXU1S6a8GzVTAqR5U7y6IxmtzUgUjGZwtc4/edit?usp=sharing">
        <a target="_blank" className="email-a">
          about
        </a>
      </Link>
    </div>
  );
};
export default Intro;
