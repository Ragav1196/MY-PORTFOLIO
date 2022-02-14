import { useContext } from "react";
import { context } from "../../../Links";
import { Projects } from "./Projects";

export function ProjectData() {
  // TO GET PROJECT DETAILS:
  const { PrjDetails } = useContext(context);

  // TO FILTER ONLY 3 PROJECTS:
  const updatedPrjDetails = PrjDetails.filter((data, i) => i < 4);

  return (
    <section className="projDataContr homeProjDataContr">
      <article>
        {updatedPrjDetails.map((data, i) => (
          <Projects data={data} key={i} />
        ))}
      </article>
    </section>
  );
}
