import picture from "/src/assets/lina-picture.jpg";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <img alt="Picture of Lina." className="contact__picture" src={picture} />
      <div className="contact__content">
        <h1 className="contact__title">Connect with me</h1>
        <ul>
          <li>
            on{" "}
            <a
              href="https://www.linkedin.com/in/carolina-ribeiro-oliveira/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            ,
          </li>
          <li>
            download my{" "}
            <a href="/carolina-oliveira-resume.pdf" download>
              Resume
            </a>
            ,
          </li>
          <li>
            take a look at my{" "}
            <a
              href="https://github.com/Caroliveira"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            ,
          </li>
          <li>
            check out my{" "}
            <a
              href="https://codepen.io/caroliveira"
              target="_blank"
              rel="noreferrer"
            >
              CodePen
            </a>
          </li>
          <li>
            or <a href="mailto:linaribeirooliveira@gmail.com"> Email</a> me
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
