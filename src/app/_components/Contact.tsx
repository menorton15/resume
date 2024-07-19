import ContactForm from "./ContactForm";

const Contact = () => (
  <div className="max-md:w-3/4">
    <section className="text-white flex flex-col">
      <h3 className="my-5 text-xl font-bold text-center">LinkedIn</h3>
      
          <a className="text-center"
            href="https://www.linkedin.com/in/matthew-norton-programmer"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.linkedin.com/in/matthew-norton-programmer
          </a>
    </section>
    <div className="my-10 ">
      <ContactForm />
    </div>
  </div>
);

export default Contact;
