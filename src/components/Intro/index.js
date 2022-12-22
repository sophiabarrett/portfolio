function About() {
  return (
    <>
      <section id="intro">
        <div className="img-wrapper">
          <img
            src={require("../../assets/images/sophia-penate.png")}
            alt="Sophia Peñate"
          />
        </div>
        <p>
          Hi, I'm Sophia.
          <br />I design and build intuitive web applications and user
          experiences.
        </p>
      </section>
    </>
  );
}

export default About;
