import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { context } from "../Links";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import ProfilePic from "../../FILES/ProfilePic.jpg";

export function TopBar() {
  // TO TOGGLE HIDE AND SHOW TOPBAR MENU:
  const { TbMenuBar, setTbMenuBar } = useContext(context);

  const { project } = useParams();
  return (
    <section data-aos="slide-left" className="topBarCntr">
      {project !== "project" ? (
        <p style={{ marginRight: "auto" }}>HOME</p>
      ) : (
        <p>PROJECT</p>
      )}

      <div className="TB-NavBar">
        <a href="#home">HOME</a>
        <a href="#aboutMe">ABOUT</a>
        <a href="#MySkills">SKILLS</a>
        <a href="#project">PROJECTS</a>
        <a href="#contactMe">CONTACT</a>
        <img src={ProfilePic} alt="Profile" />
      </div>

      <IconButton
        onClick={() => setTbMenuBar(!TbMenuBar)}
        id="TbMenuIcon"
        aria-label="delete"
      >
        <MenuIcon />
      </IconButton>
    </section>
  );
}
