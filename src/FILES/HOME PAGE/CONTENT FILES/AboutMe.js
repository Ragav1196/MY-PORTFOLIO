import ProfilePic from "../../ProfilePic.jpg";

export function AboutMe() {

  return (
    <section
      onScroll={() => console.log("ARAG")}
      id="aboutMe"
      className="AbtMeCtnr"
    >
      <article data-aos="fade-up">
        <h1>⚡ About Me</h1>
        <p>
          Hey! I'm <span>Ragav</span>, I've been fascinated by{" "}
          <span>technology</span> and <span>gadgets</span> since I was a kid,
          and I think this is what pushed me to become a{" "}
          <span>full stack developer</span>. I prefer to learn new things rather
          than repeat the same types of tasks, and this sector allows me to do
          so.
        </p>

        <p className="pageBrk">
          When I'm not coding, I like to <span>cook</span>, go on{" "}
          <span>bike rides</span> to some new places, and
          <span> binge watch movies</span>.
        </p>
      </article>
      <article data-aos="flip-left">
        <img src={ProfilePic} alt="Profile" />
      </article>
    </section>
  );
}
