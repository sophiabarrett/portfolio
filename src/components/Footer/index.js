function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <ul>
        <li>
          <a href="https://github.com/sophiapenate" target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/sophiapenate/" target="_blank">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="mailto:sophia@sophiapenate.com" target="_blank">
            <i className="fa-solid fa-at"></i>
          </a>
        </li>
      </ul>
      <p className="legal">
        © {currentYear} Sophia Peñate. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
