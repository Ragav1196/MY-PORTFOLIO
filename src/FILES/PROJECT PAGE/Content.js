import { useContext, useEffect, useState } from "react";
import { TbMenu } from "../HOME PAGE/TbMenu";
import { TopBar } from "../HOME PAGE/TopBar";
import { context } from "../Links";
import { ProjectData } from "./ProjectData";
import Aos from "aos";
import "aos/dist/aos.css";

export function Content() {
  // ANIMATE ON SCROLL:
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  // TO GET PROJECT DETAILS:
  const { PrjDetails } = useContext(context);

  // TO TOGGLE HIDE AND SHOW TOPBAR MENU:
  const { TbMenuBar, setTbMenuBar } = useContext(context);
  const styles = { opacity: TbMenuBar ? "0.3" : "1" };

  // TO SHOW ERROR MESSAGE WHEN SERVER SIDE HAVING PROBLEM:
  const [error, setError] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      if (PrjDetails) {
        setError(false);
      }
    }, 1000);
  }, [PrjDetails]);

  return (
    <section className="projContentCntr">
      {!error && PrjDetails ? (
        <>
          <TopBar />
          <article>
            <TbMenu />
            <div
              style={styles}
              onClick={() => setTbMenuBar(false)}
              className="TbContentCtnr"
            >
              <ProjectData />
            </div>
          </article>
        </>
      ) : (
        ""
      )}

      {error ? (
        <article className="homeError">
          <div>
            <img
              src="https://thumbs.gfycat.com/UnhappyEnchantedBellsnake-max-1mb.gif"
              alt="Loading"
            />
          </div>
        </article>
      ) : (
        ""
      )}
    </section>
  );
}
