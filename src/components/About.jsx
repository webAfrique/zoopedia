import me from "../images/me.jpeg";

const About = () => {
  return (
    <main className="about">
      <img src={me} className="about-image" />
      <div className="about-text">
        <p>
          &ldquo;Backend developers are animals, Frontend developers are birds
          ... I&rsquo;m Fullstack, and I eat them both. That&rsquo;s all about
          me. &rdquo;
        </p>
      </div>
    </main>
  );
};

export default About;
