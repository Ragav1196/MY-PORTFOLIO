import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { useContext } from "react";
import { context } from "../Links";

export function TbMenu() {
  // TO TOGGLE HIDE AND SHOW TOPBAR MENU:
  const { TbMenuBar, setTbMenuBar } = useContext(context);
  const styles = {
    transform: TbMenuBar ? "translate(0px)" : "translate(240px)",
  };

  return (
    <section style={styles} className="TbMenuCtnr">
      <article>
        <h3>MENU BAR</h3>
        <IconButton
          id="closeMenuBar"
          onClick={() => setTbMenuBar(false)}
          aria-label="closeMenuBar"
        >
          <CloseIcon />
        </IconButton>
      </article>
      <article>
        <a href="#home">HOME</a>
        <a href="#aboutMe">ABOUT</a>
        <a href="#MySkills">SKILLS</a>
        <a href="#project">PROJECTS</a>
        <a href="#contactMe">CONTACT</a>
      </article>
    </section>
  );
}
