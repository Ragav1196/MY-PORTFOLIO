import { useContext } from "react";
import { useParams } from "react-router-dom";
import { context } from "../Links";
import { Projects } from "./Projects";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { useHistory } from "react-router-dom";

export function ProjectData() {
  // TO GET PROJECT DETAILS:
  const { PrjDetails } = useContext(context);

  const { project } = useParams();
  const history = useHistory();

  return (
    <section className="projPagePjDataContr">
      {project ? (
        <article data-aos="slide-right" className="projectPageHeading">
          <Button
            onClick={() => history.push("/")}
            id="TbLinkBtn"
            variant="outlined"
            startIcon={<HomeIcon />}
          >
            GO HOME
          </Button>

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
            Built with <span>React JS</span>
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
