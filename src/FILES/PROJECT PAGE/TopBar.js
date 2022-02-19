import ProfilePic from "../../FILES/ProfilePic.jpg";

export function TopBar() {
  return (
    <section data-aos="slide-left" className="topBarCntr ProjPG_TB_Cntr">
      <p style={{ marginRight: "auto", fontWeight: "bold" }} onClick={() => {}}>
        PROJECTS
      </p>

      <img src={ProfilePic} alt="Profile" />
    </section>
  );
}
