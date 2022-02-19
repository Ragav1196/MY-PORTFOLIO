import { TopBar } from "./TopBar";
import { Content } from "./CONTENT FILES/Content";
import { TbMenu } from "./TbMenu";
import { context } from "../Links";
import { useContext, useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export function Home() {
  // TO GET PROJECT DETAILS:
  const { PrjDetails } = useContext(context);

  // TO SHOW ERROR MESSAGE WHEN SERVER SIDE HAVING PROBLEM:
  const [error, setError] = useState(true);

  // ANIMATE ON SCROLL:
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (PrjDetails) {
        setError(false);
      }
    }, 500);
  }, [PrjDetails]);

  return (
    <>
      {!error && PrjDetails ? (
        <>
          <TopBar />
          <Content />
          <TbMenu />
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
    </>
  );
}
