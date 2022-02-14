import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { context } from "../Links";
import { useContext } from "react";
import { useParams } from "react-router-dom";

export function TopBar() {
  // TO TOGGLE HIDE AND SHOW TOPBAR MENU:
  const { TbMenuBar, setTbMenuBar } = useContext(context);

  const {project} = useParams();
  return (
    <section className="topBarCntr">
      {project !== "project" ? <p>HOME</p> : <p>PROJECT</p>}
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
