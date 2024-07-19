const ContactForm = () => (
  <section>
    <h3 className="my-5 text-xl font-bold text-center text-white">Message Me</h3>
    <form className="flex flex-col">
      <label className="text-white">
        Name
      </label>
      <input className="my-2" type="text" required={true}></input>
      <label className="text-white">
        Company
      </label>
      <input className="my-2" type="text" required={true}></input>
      <label className="text-white">
        Email
      </label>
      <input className="my-2" type="email" required={true}></input>
      <label className="text-white">Message</label>
      <textarea className="my-2 resize-none h-64" required={true}></textarea>
      <input
        className="bg-indigo-400 border-indigo-400 button mt-5 py-2 px-5 cursor-pointer duration-500 ease-in-out hover:bg-transparent hover:border-primary hover:shadow-button w-auto self-center rounded-2xl border-2 border-solid text-white"
        type="submit"
        value="Send"
      />
    </form>
  </section>
);

export default ContactForm;
