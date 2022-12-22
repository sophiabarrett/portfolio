function Resume() {
  return (
    <section id="resume">
      <div className="title-wrapper">
        <h2>Resume</h2>
      </div>
      <div className="content-wrapper">
        <p>
          <span className="paragraph-start">
            Self-motivated full stack web developer
          </span>{" "}
          with background in design, marketing, and visual communication. Over a
          decade of experience in UI/UX design and frontend development.
          Fascinated by the intersection of form and function and passionate
          about uniting intuitive frontend experiences with powerful backend
          performance. Positioned to provide unique perspectives on end-user
          experience by leveraging expertise in digital marketing and user
          experience design.
        </p>
        <p>
          <span className="paragraph-start">Technical Skills:</span> MERN Stack, Spring, Java,
          JavaScript, HTML, CSS, Git, GraphQL, Apollo, Mongoose, Sequelize,
          NoSQL, MySQL, WordPress, Handlebars, Bootstrap, Illustrator,
          Photoshop, InDesign
        </p>
        <p>
          <span className="paragraph-start">Soft Skills:</span> UI/UX Design,
          Marketing, Branding, Customer Journeys, Problem Solving, Critical
          Thinking, Written and Verbal Communication, Leadership, Teamwork,
          Interpersonal Skills, Emotional Intelligence, Time Management,
          Self-Management
        </p>
        <div className="download">
          <a
            href={require("../../assets/downloads/Penate_Sophia_RESUME.pdf")}
            className="button"
            download
          >
            Download Full Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Resume;
