import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";
import "./About.css";

const About = ({ setPlayState }) => {
  return (
    <div className="about" id="About">
      <div className="about-left">
        <img src={about_img} alt="" className="about_img" />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>NURTURING Tommorow's Leader Today</h2>

        <p>
          Embark on a transformative educational journey with our university's
          comprehensive programs. Our curriculum is designed to empower students
          with the knowledge, skills, and experiences needed to thrive in a
          rapidly evolving world.
        </p>
        <p>
          With a focus on innovation, hands-on learning, and personalized
          mentorship, our programs help aspiring educators and leaders make a
          meaningful impact in classrooms, schools, and communities.
        </p>
        <p>
          Whether you want to teach, lead, support, or innovate, our diverse
          pathways give you the foundation to grow with purpose and shape the
          future of education.
        </p>
      </div>
    </div>
  );
};
export default About;
