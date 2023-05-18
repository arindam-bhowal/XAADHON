import Navbar from "../../components/navbar/Navbar";
import "./about.scss";
import Pic1 from '../../assets/KoushikMohan.jpeg'
import Pic2 from '../../assets/kaushik.jpeg'

const About = () => {
  return (
    <>
      <Navbar />

      <div className="about">
        <h1 style={{ textAlign: "center", paddingTop: 20 }}>Team</h1>
        <>
          <div className="person">
            <div className="person-icon">
              <img
                // className="normal"
                src={Pic1}
              />
            </div>
            <div className="personContainer">
              <h3>Koushik Mohan</h3>
              {/* <strong>Business Development Director</strong> */}
              <div className="personQuote">
                I stand before you today with immense joy and pride as I share
                the exciting news about a groundbreaking initiative that will
                revolutionize the way we access educational resources. It is my
                honor to introduce to you XAADHON, our very own online library
                for AECians. XAADHON, which aptly translates to "the necessary
                equipment for one to do any work," embodies the spirit of
                empowerment and support for our engineering journey. This
                remarkable platform has been meticulously designed to cater to
                the diverse needs of each and every one of us.
              </div>
            </div>
          </div>

          <div className="person">
            <div className="person-icon">
              <img
                // className="normal"
                src={Pic2}
              />
            </div>
            <div className="personContainer">
              <h3>Kaushik Baruah</h3>
              {/* <strong>Business Development Director</strong> */}
              <div className="personQuote">
              Imagine having a one-stop hub where you can access previous year question papers, branch-specific class notes, and PDF textbooks with just a few clicks. That's the vision XAADHON aims to bring to life. With the end semester examinations fast approaching, this invaluable resource will arm us with the tools we need to excel academically and prepare for a successful engineering career.
              </div>
            </div>
          </div>
        </>
      </div>

      <section className="intro">
        <h1>Our Vision</h1>

        <p>
          We are extremely delighted to announce the launch of our online
          library for AECians called "XAADHON." With great pleasure, we unveil
          this platform that has been meticulously crafted to cater to the needs
          of Assam Engineering College students.
        </p>
        <p>
          XAADHON, which means "the necessary equipment for one to do any work,"
          embodies our commitment to providing a comprehensive online library
          experience.
        </p>
        <p>
          To ensure that XAADHON becomes a resounding success, we kindly request
          your invaluable feedback. Your suggestions and input are vital in
          helping us enhance the library and tailor it to meet your needs
          effectively. We have created a student feedback form, accessible at
          the{" "}
          <a
            style={{ color: "blue" }}
            href="https://forms.gle/CV4J59Wq6KyNdQh86"
          >
            link here
          </a>{" "}
          . We sincerely appreciate your time in sharing your thoughts.
        </p>
        <p>
          Furthermore, we encourage you to contribute any useful study
          materials, notes, or PDFs that you believe would benefit your fellow
          students. Our aim is to build a centralized platform that encompasses
          a wide range of resources, including previous year question papers,
          branch-specific class notes, and PDF textbooks. With your support, we
          can arm every AEC student with the necessary tools for a successful
          engineering career.
        </p>

        <p>
          The end semester examinations are fast approaching, and we are
          confident that XAADHON will greatly assist you in your preparations.
          Thank you for joining us on this incredible journey. Your feedback,
          contributions, and enthusiasm are crucial in making XAADHON the
          ultimate online library for AECians. Together, let's revolutionize the
          way students access educational resources.
        </p>
      </section>
    </>
  );
};

export default About;
