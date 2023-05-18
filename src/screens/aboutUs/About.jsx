import Navbar from "../../components/navbar/Navbar";
import "./about.scss";

const About = () => {
  return (
    <>
      <Navbar />
      <section className="intro">
  <h1>Introduction</h1>
  <p>
    I'm a future Front End developer who loves{" "}
    <span className="bold">good design</span>,{" "}
    <span className="bold">good food</span> and{" "}
    <span className="bold">good people</span>. I work in totally different
    industry now, but I am now in trasition of my new career!. I am so excited
    about learning that make interactive webpage and design.
  </p>
  <p>
    I love the web and all the awesome new technologies. I'm excited to learn a
    new things that make the web more beautiful, functional, and perfect.
  </p>
  <p>
    I love learning a new thing! Expecially in tech industries. I am so happy
    that I can learn at Thinkful and as student of Thinkful community!
  </p>
</section>

      <div className="about">
        <>
          <div className="person">
            <div className="person-badge">
              <img
                className="normal"
                src="http://tech.custom-media.com/pics/t1.png"
              />
              <img
                className="peculiar"
                src="http://tech.custom-media.com/pics/t2.png"
              />
            </div>
            <h3>Sam Müller</h3>
            <strong>Business Development Director</strong>
            <div>
              Sam has over five years’ experience providing strategic direction
              on marketing and communications projects, and is responsible for
              ensuring clients' projects are delivered on time and within
              budget. Sam has an MBA from McBro University.
            </div>
          </div>
          <div className="person">
            <div className="person-badge">
              <img
                className="normal"
                src="http://tech.custom-media.com/pics/joy1.png"
              />
              <img
                className="peculiar"
                src="http://tech.custom-media.com/pics/joy2.png"
              />
            </div>
            <h3>Joy Johnson</h3>
            <strong>Client Services Manager</strong>
            <div>
              By combining experience in strategy and multi-media management
              with a solid technical background, Joy provides campaign and
              creative direction to a diverse array of projects.
            </div>
          </div>
          <div className="person">
            <div className="person-badge">
              <img
                className="normal"
                src="http://tech.custom-media.com/pics/i1.png"
              />
              <img
                className="peculiar"
                src="http://tech.custom-media.com/pics/i2.png"
              />
            </div>
            <h3>Christopher Dolan</h3>
            <strong>Senior Editor</strong>
            <div>
              A 20-year veteran of media and publishing, Christopher is an
              award-winning writer, editor, and designer who has worked on
              magazines and directed marketing and communications in England and
              the United States.
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default About;
