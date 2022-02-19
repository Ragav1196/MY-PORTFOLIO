import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import ArticleIcon from "@mui/icons-material/Article";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import { Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import emailjs from "@emailjs/browser";
import { useState } from "react";

export function Contacts() {
  const [mailSent, setMailSent] = useState(false);
  const [errorMailSent, setErrorMailSent] = useState(false);
  const mailSentStyles = { opacity: mailSent ? 1 : 0 };
  const errorMailSentStyles = { opacity: errorMailSent ? 1 : 0 };
  const errorMailSentBorderStyles = {
    border: errorMailSent ? "5px solid red" : "1px solid black",
  };
  const sendEmail = (e) => {
    e.preventDefault();

    if (
      e.target.name.value &&
      e.target.email.value &&
      e.target.subject.value &&
      e.target.message.value
    ) {
      emailjs
        .sendForm(
          "gmail",
          "template_tm4hyau",
          e.target,
          "user_Mibb2L9wdTLL3ywXvOx9V"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      setMailSent(true);
      setTimeout(() => setMailSent(false), 5000);
      e.target.reset();
      return;
    }
    setErrorMailSent(true);
    setTimeout(() => setErrorMailSent(false), 5000);
  };

  return (
    <section className="ContactCntr" id="contactMe">
      <h1>CONTACT</h1>
      <article>
        <article data-aos="flip-left" className="ContactDetailsCntr">
          <h3>CONTACT DETAIlS</h3>
          <article>
            <div>
              <PersonIcon />
              <div>
                <h3>NAME</h3>
                <p>Ragavendiran Panchatsharam</p>
              </div>
            </div>
            <div>
              <HomeIcon />
              <div>
                <h3>ADDRESS</h3>
                <p>
                  No: 16A, Govindhaswamy Street, Jolarpet, Tirupattur(DIST),
                  Tamil Nadu - 635851
                </p>
              </div>
            </div>
            <div>
              <EmailIcon />
              <div>
                <h3>E-MAIL</h3>
                <p>ragavinrap@gmail.com</p>
              </div>
            </div>
            <div>
              <CallIcon />
              <div>
                <h3>MOBILE</h3>
                <p>+91-9444249040</p>
              </div>
            </div>
          </article>
        </article>

        <article data-aos="flip-right" className="contactMeCntr">
          <h3>CONTACT ME</h3>
          <form onSubmit={sendEmail}>
            <div>
              <div>
                <input
                  style={errorMailSentBorderStyles}
                  type="text"
                  placeholder="Enter Your Name"
                  name="name"
                />
                <input
                  style={errorMailSentBorderStyles}
                  type="email"
                  placeholder="Enter Your E-mail"
                  name="email"
                />
              </div>
              <input
                style={errorMailSentBorderStyles}
                type="text"
                placeholder="Subject"
                name="subject"
              />
              <textarea
                style={errorMailSentBorderStyles}
                type="text"
                placeholder="Message....."
                name="message"
                cols="30"
                rows="5"
              />
              <button type="submit">{mailSent ? "SENDING...." : "SEND"}</button>
            </div>
          </form>
          <p style={mailSentStyles} className="CMC_MessageRes">
            MESSAGE SENT SUCCESSFULLY
          </p>

          <p style={errorMailSentStyles} className="CMC_MessageRes">
            MESSAGE NOT SENT SUCCESSFULLY. TRY TO FILL ALL THE MANDATORY FIELDS
          </p>
        </article>
      </article>

      <article data-aos="zoom-in-up" className="KeepInTouchCntr">
        <h1>Keep In Touch</h1>
        <article>
          <p>I'm currently open to work as a</p>
          <p>Full Stack Developer</p>
        </article>
        <p>Let's get in touch and talk more about your projects</p>
        <article className="TbLinkBtnCtnr keepInTouchBtnCtnr">
          <Link
            to={{ pathname: "https://github.com/Ragav1196" }}
            target="_blank"
          >
            <Button
              id="TbLinkBtn"
              variant="outlined"
              startIcon={<GitHubIcon />}
            >
              Github
            </Button>
          </Link>
          <Link
            to={{
              pathname:
                "https://drive.google.com/file/d/1W_AWUXGF5kRI1zQunoxRbRcWGc_9l-TV/view?usp=sharing",
            }}
            target="_blank"
          >
            <Button
              id="TbLinkBtn"
              variant="outlined"
              startIcon={<ArticleIcon />}
            >
              RESUME
            </Button>
          </Link>
          <Link
            to={{ pathname: "mailto:ragavinrap@gmail.com" }}
            target="_blank"
          >
            <Button id="TbLinkBtn" variant="outlined" startIcon={<MailIcon />}>
              Email
            </Button>
          </Link>
          <Link
            to={{
              pathname:
                "https://www.linkedin.com/in/ragav-ragavendiran-215781116/",
            }}
            target="_blank"
          >
            <Button
              id="TbLinkBtn"
              variant="outlined"
              startIcon={<LinkedInIcon />}
            >
              LinkedIn
            </Button>
          </Link>
        </article>

        <p>
          Developed by <span>Ragavendiran Panchatsharam</span>
        </p>
        <p>
          Built with <span>React JS</span>
        </p>
        <p>
          Hosted on <span>Netlify</span>
        </p>
      </article>
    </section>
  );
}
