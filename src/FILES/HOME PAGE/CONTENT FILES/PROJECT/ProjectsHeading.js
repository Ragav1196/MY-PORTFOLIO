import { useHistory } from "react-router-dom";

export function ProjectsHeading() {
  const history = useHistory();
  return (
    <section data-aos="flip-up" className="PHCntr">
      <article>
        <h1>All Creative Works</h1>
        <p>Here's some of my projects that i have worked on</p>
      </article>
      <p onClick={() => history.push("./projects")}>Explore more →</p>
    </section>
  );
}
