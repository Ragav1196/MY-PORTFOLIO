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
          <p>{data.project_name}</p>
          <div className="ProjectsTitle" id="ProjectsTitle">
            <div>
              <Link
                to={{
                  pathname: `${data.git_link_frn_end}`,
                }}
                target="_blank"
              >
                <Button
                  id="ProjectGitIcon"
                  aria-label="Front End"
                  variant="outlined"
                  startIcon={<GitHubIcon />}
                >
                  FRONT END
                </Button>
              </Link>

              {data.git_link_bck_end ? (
                <Link
                  to={{
                    pathname: `${data.git_link_bck_end}`,
                  }}
                  target="_blank"
                >
                  <Button
                    id="ProjectGitIcon"
                    aria-label="Back End"
                    variant="outlined"
                    startIcon={<GitHubIcon />}
                  >
                    BACK END
                  </Button>
                </Link>
              ) : (
                ""
              )}

              <Link
                to={{
                  pathname: `${data.netlify_link}`,
                }}
                target="_blank"
              >
                <Button
                  id="ProjectLaunchIcon"
                  aria-label="Launch"
                  variant="outlined"
                  startIcon={<LaunchIcon />}
                >
                  LIVE
                </Button>
              </Link>
            </div>
          </div>

          <div className="projectsDescription">
            <p>{data.project_description}</p>
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
        </div>
      </article>
    </section>
  );
}
