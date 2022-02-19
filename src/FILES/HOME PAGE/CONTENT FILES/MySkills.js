export function MySkills() {

  return (
    <section className="mySkillsCntr" id="MySkills">
      <h1>MY SKILLS</h1>
      <h2>MERN STACK DEVELOPER</h2>
      <article>
        <article className="FR_Cntr" data-aos="flip-left">
          <h3>FRONT END</h3>
          <div>
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png?20220125121207"
                alt=""
              />
              <p>REACT</p>
            </div>

            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/640px-HTML5_Badge.svg.png"
                alt=""
              />
              <p>HTML</p>
            </div>

            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Javascript_Logo.png/640px-Javascript_Logo.png"
                alt=""
              />
              <p>JAVASCRIPT</p>
            </div>

            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/640px-CSS3_logo.svg.png"
                alt=""
              />
              <p>CSS</p>
            </div>
          </div>
        </article>

        <article className="BE_Cntr" data-aos="flip-up">
          <h3>BACK END</h3>
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/640px-Node.js_logo.svg.png"
              alt=""
            />
            <p>NODE JS</p>
          </div>
        </article>

        <article className="DB_Cntr" data-aos="flip-right">
          <h3>DATABASE</h3>
          <div>
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sql_data_base_with_logo.png/640px-Sql_data_base_with_logo.png"
                alt=""
              />
              <p>SQL</p>
            </div>
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Mongo-db-logo.png/640px-Mongo-db-logo.png"
                alt=""
              />
              <p>MONGO DB</p>
            </div>
          </div>
        </article>
      </article>
    </section>
  );
}
