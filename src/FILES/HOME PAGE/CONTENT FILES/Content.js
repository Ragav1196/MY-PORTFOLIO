import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import { AboutMe } from "./AboutMe";
import { ProjectsHeading } from "./PROJECT/ProjectsHeading";
import { ProjectData } from "./PROJECT/ProjectData";
import { useContext } from "react";
import { context } from "../../Links";
import { Link } from "react-router-dom";
import { Contacts } from "./Contacts";
import ArticleIcon from "@mui/icons-material/Article";
import { useHistory } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { MySkills } from "./MySkills";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export function Content() {
  // TO TOGGLE HIDE AND SHOW TOPBAR MENU:
  const { TbMenuBar, setTbMenuBar } = useContext(context);
  const styles = { opacity: TbMenuBar ? "0.3" : "1" };

  const history = useHistory();

  return (
    <section
      style={styles}
      onClick={() => setTbMenuBar(false)}
      className="TbContentCtnr"
      id="home"
    >
      <article className="TBBioCntr">
        {/* TOP BAR BIO CONTAINER */}
        <article data-aos="zoom-in-right" className="TBBio" id="TbBio-1">
          <p>Hey there!, I'm-</p>
          <p className="TbMyName">Ragavendiran Panchatsharam</p>
        </article>
        <article data-aos="zoom-in-right" className="TBBio" id="TbBio-2">
          <Typewriter
            loop={100}
            cursor
            cursorStyle="_"
            typeSpeed={120}
            deleteSpeed={50}
            delaySpeed={1000}
            words={[
              "FULL STACK DEVELOPER",
              "FRONT-END DEVELOPER",
              "BACK-END DEVELOPER",
            ]}
          />
        </article>
        {/* TOP BAR LINK BUTTONS CONTAINER */}
        <article data-aos="zoom-in-right" className="TbLinkBtnCtnr">
          <Link
            to={{ pathname: "https://github.com/Ragav1196" }}
            target="_blank"
          >
            <Button
              id="TbLinkBtn"
              variant="outlined"
              startIcon={<GitHubIcon />}
            >
              Github
            </Button>
          </Link>

          <Link
            to={{
              pathname:
                "https://drive.google.com/file/d/1N63xRT82-fGpRRUAIgyxGV0-h-9aPYeL/view?usp=sharing",
            }}
            target="_blank"
          >
            <Button
              id="TbLinkBtn"
              variant="outlined"
              startIcon={<ArticleIcon />}
            >
              RESUME
            </Button>
          </Link>

          <Link
            to={{ pathname: "mailto:ragavinrap@gmail.com" }}
            target="_blank"
          >
            <Button id="TbLinkBtn" variant="outlined" startIcon={<MailIcon />}>
              Email
            </Button>
          </Link>

          <Link
            to={{
              pathname:
                "https://www.linkedin.com/in/ragav-ragavendiran-215781116/",
            }}
            target="_blank"
          >
            <Button
              id="TbLinkBtn"
              variant="outlined"
              startIcon={<LinkedInIcon />}
            >
              LinkedIn
            </Button>
          </Link>
        </article>
      </article>

      {/* ABOUT ME CONTAINER */}
      <AboutMe />

      {/* MY SKILLS CONTAINER */}
      <MySkills />

      {/* PROJECT CONTAINER */}
      <article className="ProjectMainCntr" id="project">
        <ProjectsHeading />
        <ProjectData />

        <p className="moreProjects" onClick={() => history.push("/projects")}>
          Explore more →
        </p>
      </article>

      {/* KEEP IN TOUCH CONTAINER */}
      <Contacts />
    </section>
  );
}
