import me from "../images/me.jpeg";

const About = () => {
  return (
    <main className="about">
      <img src={me} className="about-image" />
      <div className="about-text">
        <p>
          &ldquo;Backend developers are animals. <br />
          Frontend developers are birds. <br />
          Prompt engineers are fish. <br />
          WordPress designers are insects. <br />
          Code testers are reptiles. <br />
          ...I&rsquo;m Fullstack.&rdquo;
        </p>
      </div>
    </main>
  );
};

export default About;
