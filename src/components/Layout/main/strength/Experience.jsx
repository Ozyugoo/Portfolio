import "./experience.css";

function Experience() {
  return (
    <>
      <section className="expContainer">
        <section className="expHeader">
          <h2>MY EXPERIENCE</h2>
        </section>
        <section className="expBody">
          <div className="bodyInfo">
            <div className="bodyHeader">
              <h3>Software Engineer</h3>
              <span>Mar 2024 - Apr 2024</span>
            </div>
            <div>
              <p>
                <ul className="listing">
                  <li>
                    I had the privilege of contributing to OCaml.org during the
                    Outreachy contribution phase for the summer internship
                    application.
                  </li>
                  <li>
                    This open-source project focused on the &#39;Run OCaml
                    Exercise Everywhere&#39; initiative.
                  </li>
                  <li>
                    Through my involvement, I gained invaluable experience in
                    collaboration and teamwork within version control systems.
                  </li>
                </ul>
              </p>
              
              <br />
              <p>
                <ul className="listing">
                  <li>
                    Working alongside a diverse team, I not only contributed to
                    the project&#39;s objectives but also honed my skills in
                    effective communication, problem-solving, and navigating
                    collaborative workflows.
                  </li>
                  <li>
                    This experience provided me with a deeper understanding of
                    the importance of version control in facilitating seamless
                    collaboration and project management within a distributed
                    team environment.
                  </li>
                </ul>
              </p>
            </div>
            <div>
              <div className="bodyHeader">
                <h3>Frontend Developer</h3>
                <span>Apr 2024</span>
              </div>

              <p>
                <ul className="listing">
                  <li>
                    I had the privilege of leading a team of fellow developers
                    in the creation of a responsive and interactive web
                    application using HTML Tailwind CSS, and JavaScript.
                  </li>
                  <li>
                    In my role, I was responsible for ensuring that every team
                    member was fully engaged and aligned with our objectives,
                    while also ensuring that we adhered to best practices
                    throughout the development process.
                  </li>
                </ul>
              </p>
              
              <br />
              <p>
                <ul className="listing">
                  <li>
                    Through effective communication and guidance, I facilitated
                    a collaborative environment where ideas could flourish and
                    contributions were valued.
                  </li>
                  <li>
                    By emphasizing the importance of best practices, I helped
                    ensure the quality and efficiency of our work, ultimately
                    leading to the successful completion of our project.
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </section>
      </section>
      <hr />
    </>
  );
}

export default Experience;
