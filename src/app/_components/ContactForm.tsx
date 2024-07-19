"use client";

import { useState } from 'react';
import { api } from "~/trpc/react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
  });

  const sendEmail = api.email.sendEmail.useMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await sendEmail.mutateAsync(formData);
      alert('Email sent successfully');
      setFormData({ name: '', company: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email');
    }
  };

  return (
    <section>
      <h3 className="mt-5 text-xl font-bold text-center text-white">Message Me</h3>
      <p className='my-2 text-white text-sm text-center'>* Indicates required field</p>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <label className="text-white">
          Name*
        </label>
        <input className="my-2" type="text" name="name" value={formData.name} onChange={handleChange} required />
        <label className="text-white">
          Company
        </label>
        <input className="my-2" type="text" name="company" value={formData.company} onChange={handleChange} />
        <label className="text-white">
          Email*
        </label>
        <input className="my-2" type="email" name="email" value={formData.email} onChange={handleChange} required />
        <label className="text-white">Message*</label>
        <textarea className="my-2 resize-none h-64" name="message" value={formData.message} onChange={handleChange} required />
        <input
          className="bg-indigo-400 border-indigo-400 button mt-5 py-2 px-5 cursor-pointer duration-500 ease-in-out hover:bg-transparent hover:border-primary hover:shadow-button w-auto self-center rounded-2xl border-2 border-solid text-white"
          type="submit"
          value="Send"
        />
      </form>
    </section>
  );
};

export default ContactForm;
