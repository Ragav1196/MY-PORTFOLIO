import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";

export function Projects({ data }) {
  const projLang = data.project_languages;

  return (
    <section data-aos="zoom-in" className="projectsCtnr homeProjectsCtnr">
      <article>
        <div>
          <Link to={{ pathname: `${data.netlify_link}` }} target="_blank">
            <img className="ProjectImg" src={data.project_img} alt="project" />
          </Link>
        </div>

        <div className="ProjectsTitleCtnr">
          <div className="ProjectsTitle">
            <p>{data.project_name}</p>
            <div>
              <Link
                to={{
                  pathname: `${data.git_link}`,
                }}
                target="_blank"
              >
                <IconButton id="ProjectGitIcon" aria-label="GitHub">
                  <GitHubIcon />
                </IconButton>
              </Link>
              <Link
                to={{
                  pathname: `${data.netlify_link}`,
                }}
                target="_blank"
              >
                <IconButton id="ProjectLaunchIcon" aria-label="Launch">
                  <LaunchIcon />
                </IconButton>
              </Link>
            </div>
          </div>
          <div className="projectLanguageBtn">
            {projLang.map((data, i) => (
              <Button
                id={`${data.split(" ").join("").toLowerCase().trim()}Icon`}
                variant="outlined"
                key={i}
              >
                {data}
              </Button>
            ))}           
          </div>
          <div className="projectsDescription">
            <p>{data.project_description}</p>
          </div>
        </div>
      </article>
    </section>
  );
}