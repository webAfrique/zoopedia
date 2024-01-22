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
        <p>
          This project is a simple wiki application that displays a collection
          of creatures from five sub-divisions of the animal kingdom. Creatures
          in each collection are displayed as cards in a gallery. The gallery
          also has a searchbar to search for creatures by name within the
          displayed collection. Each card has the name of a creature and a
          random image obtained from unsplash.com. Cards also have a link to an
          article about the creature on the card. The article contains an image
          of the creature and a paragraph of biological information obtained
          from wikipedia.com
        </p>
      </div>
    </main>
  );
};

export default About;
