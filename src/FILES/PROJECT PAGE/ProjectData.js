import { useContext } from "react";
import { useParams } from "react-router-dom";
import { context } from "../Links";
import { Projects } from "./Projects";

export function ProjectData() {
  // TO GET PROJECT DETAILS:
  const { PrjDetails } = useContext(context);

  const { project } = useParams();

  return (
    <section className="projPagePjDataContr">
      {project ? (
        <article data-aos="slide-left" className="projectPageHeading">
          <h1>LIST OF ALL PROJECTS</h1>
          <p>
            I love building projects and practice my engineering skills, here's
            an archive of things that I've worked on.
          </p>
        </article>
      ) : (
        ""
      )}

      <article className="ProjPgMap">
        {PrjDetails.map((data, i) => (
          <Projects data={data} key={i} />
        ))}
      </article>

      {project ? (
        <article data-aos="flip-right" className="projectFooter">
          <p>
            Developed by <span>Ragavendiran Panchatsharam</span>
          </p>
          <p>
            Built with <span>React JS</span>, <span>Node JS</span> &
            <span>Mongo DB</span>
          </p>
          <p>
            Hosted on <span>Netlify</span>
          </p>
        </article>
      ) : (
        ""
      )}
    </section>
  );
}
