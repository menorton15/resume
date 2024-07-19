import ContactForm from "./ContactForm";

const Contact = () => (
  <div>
    <section className="text-white">
      <h3 className="my-5 text-xl font-bold text-center">LinkedIn</h3>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/matthew-norton-programmer"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.linkedin.com/in/matthew-norton-programmer
          </a>
        </li>
      </ul>
    </section>
    <div className="my-10">
      <ContactForm />
    </div>
  </div>
);

export default Contact;
