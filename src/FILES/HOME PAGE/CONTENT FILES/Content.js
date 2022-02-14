import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import { AboutMe } from "./AboutMe";
import { ProjectsHeading } from "./PROJECT/ProjectsHeading";
import { ProjectData } from "./PROJECT/ProjectData";
import { useContext } from "react";
import { context } from "../../Links";
import { Link } from "react-router-dom";
import { Footer } from "./Footer";
import ArticleIcon from "@mui/icons-material/Article";

export function Content() {
  // TO TOGGLE HIDE AND SHOW TOPBAR MENU:
  const { TbMenuBar, setTbMenuBar } = useContext(context);
  const styles = { opacity: TbMenuBar ? "0.3" : "1" };

  return (
    <section
      style={styles}
      onClick={() => setTbMenuBar(false)}
      className="TbContentCtnr"
    >
      <article data-aos="zoom-in-right" className="TBBio" id="TbBio-1">
        <p>Hey there!, I'm-</p>
        <p className="TbMyName">Ragavendiran</p>
        <p className="TbMyName">Panchatsharam</p>
      </article>
      <article data-aos="zoom-in-right" className="TBBio" id="TbBio-2">
        <p>
          <span>Full Stack Web Developer</span>
        </p>
      </article>

      <article data-aos="zoom-in-right" className="TbLinkBtnCtnr">
        <Link to={{ pathname: "https://github.com/Ragav1196" }} target="_blank">
          <Button id="TbLinkBtn" variant="outlined" startIcon={<GitHubIcon />}>
            Github
          </Button>
        </Link>
        <Link
          to={{
            pathname:
              "https://drive.google.com/file/d/1e6NULI8fZkqkHThfOvHYGch2oin_zn7D/view?usp=sharing",
          }}
          target="_blank"
        >
          <Button id="TbLinkBtn" variant="outlined" startIcon={<ArticleIcon />}>
            RESUME
          </Button>
        </Link>
        <Link to={{ pathname: "mailto:ragavinrap@gmail.com" }} target="_blank">
          <Button id="TbLinkBtn" variant="outlined" startIcon={<MailIcon />}>
            Email
          </Button>
        </Link>
      </article>

      <>
        <AboutMe />
      </>

      <>
        <ProjectsHeading />
      </>

      <>
        <ProjectData />
      </>

      <>
        <Footer />
      </>
    </section>
  );
}
