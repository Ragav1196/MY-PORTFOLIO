import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { useContext } from "react";
import { context } from "../Links";
import { useHistory } from "react-router-dom";

export function TbMenu() {
  const history = useHistory();

  // TO TOGGLE HIDE AND SHOW TOPBAR MENU:
  const { TbMenuBar, setTbMenuBar } = useContext(context);
  const styles = {
    transform: TbMenuBar ? "translate(0px)" : "translate(240px)",
  };

  return (
    <section style={styles} className="TbMenuCtnr">
      <article>
        <h1>MENU BAR</h1>
        <IconButton
          id="closeMenuBar"
          onClick={() => setTbMenuBar(false)}
          aria-label="closeMenuBar"
        >
          <CloseIcon />
        </IconButton>
      </article>
      <article>
        <Button
          onClick={() => {
            setTbMenuBar(false);
            history.push("/");
          }}
          id="tbMenuHomeBtn"
          variant="text"
        >
          HOME
        </Button>
        <Button
          onClick={() => {
            setTbMenuBar(false);
            history.push("/project");
          }}
          id="tbMenuProjectsBtn"
          variant="text"
        >
          PROJECTS
        </Button>
      </article>
    </section>
  );
}
