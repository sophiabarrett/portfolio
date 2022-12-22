import { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import emailjs from "@emailjs/browser";

function Contact() {
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [inputErrors, setInputErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState("");

  const handleInputChange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  // validate input and return appropriate validation message
  const validateInput = (inputName, inputValue) => {
    if (inputName === "email") {
      const validEmail = validateEmail(inputValue);
      if (!validEmail) {
        return "Please provide a valid email address.";
      }
    }
    if (!inputValue.length) {
      if (inputName === "name") {
        return "Please tell me your name.";
      }
      if (inputName === "message") {
        return "Please let me know how I can help you.";
      }
    }
  };

  // get validation message for individual input and display to user
  const updateInputError = (e) => {
    const validationMessage = validateInput(e.target.name, e.target.value);
    setInputErrors({ ...inputErrors, [e.target.name]: validationMessage });
  };

  async function handleSubmit(e) {
    e.preventDefault();

    // create object to hold error messages for all inputs
    const updatedInputErrors = {};
    // create variable to indicate if there are input errors
    let inputErrorsExists;

    // loop through each input to validate and retrieve error message
    for (let input in inputValues) {
      const errMsg = validateInput(input, inputValues[input]);
      if (errMsg) {
        updatedInputErrors[input] = errMsg;
        inputErrorsExists = true;
      } else {
        updatedInputErrors[input] = "";
      }
    }

    // after retrieving all validation messages, update inputErrors state
    setInputErrors({ ...inputErrors, ...updatedInputErrors });

    // only submit if there are no input errors
    if (!inputErrorsExists) {
      // set submit message to pending
      setSubmitStatus("pending");

      emailjs
        .sendForm(
          "sophia@sophiapenate.com",
          "portfolio_contact_form",
          e.target,
          "user_WZsDCzpVv3pWVCWOteguY"
        )
        .then(
          (result) => {
            // update status displayed to user
            setSubmitStatus("Thank you! You'll hear from me soon.");
            // clear form
            setInputValues({
              name: "",
              email: "",
              message: "",
            });
            // remove focus from submit button
            document.querySelector("#submit").blur();
          },
          (error) => {
            setSubmitStatus(
              "Sorry, something went wrong. Try again or email me directly at sophia@sophiapenate.com."
            );
            console.error(error.text);
          }
        );
    }
  }

  return (
    <section id="contact">
      <div className="title-wrapper">
        <h2>Contact</h2>
      </div>
      <div className="content-wrapper">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              className={inputErrors.name && "error"}
              type="text"
              name="name"
              value={inputValues.name}
              onChange={handleInputChange}
              onBlur={updateInputError}
            />
            <p className="error-message">
              {inputErrors.name ? inputErrors.name : <br />}
            </p>
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              className={inputErrors.email && "error"}
              type="text"
              name="email"
              value={inputValues.email}
              onChange={handleInputChange}
              onBlur={updateInputError}
            />
            <p className="error-message">
              {inputErrors.email ? inputErrors.email : <br />}
            </p>
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              className={inputErrors.message && "error"}
              name="message"
              rows="6"
              value={inputValues.message}
              onChange={handleInputChange}
              onBlur={updateInputError}
            />
            <p className="error-message">
              {inputErrors.message ? inputErrors.message : <br />}
            </p>
          </div>
          <div>
            <button id="submit" type="submit">
              Send
            </button>
            {submitStatus === "pending" && (
              <i className="fa-solid fa-spinner"></i>
            )}
          </div>
          {submitStatus.length > 0 && submitStatus !== "pending" && (
            <div>
              <p className="success-message">{submitStatus}</p>
            </div>
          )}
        </form>
      </div>
      {/* <div>
        <h4>Contact me directly at:</h4>
        <ul>
          <li>
            <a href="mailto:sophia@sophiapenate.com" target="_blank">
              <i className="fas fa-paper-plane"></i> sophia@sophiapenate.com
            </a>
          </li>
          <li>
            <a href="https://github.com/sophiapenate" target="_blank">
              <i className="fab fa-github"></i> github.com/sophiapenate
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/sophiapenate/"
              target="_blank"
            >
              <i className="fab fa-linkedin"></i> linkedin.com/in/sophiapenate
            </a>
          </li>
        </ul>
      </div> */}
    </section>
  );
}

export default Contact;
