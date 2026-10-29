
import React from "react";

const ContactForm = () => {
  const inputStyle =
    "w-full border-b border-white/30 bg-transparent py-5 text-sm text-white outline-none transition-colors placeholder:text-white/40 focus:border-[#ff5a0a]";

  const labelStyle =
    "text-[10px] uppercase tracking-[0.2em] text-white/60";

  const handleSubmit = (e) => {
    e.preventDefault();
    // Connect your email service here to send messages.
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col">
      {/* Name */}
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className={labelStyle}>
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          className={inputStyle}
          required
        />
      </div>

      {/* Email */}
      <div className="mt-7 flex flex-col gap-2">
        <label htmlFor="email" className={labelStyle}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className={inputStyle}
          required
        />
      </div>

      {/* Message */}
      <div className="mt-7 flex flex-col gap-2">
        <label htmlFor="message" className={labelStyle}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={`${inputStyle} resize-y`}
          required
        />
      </div>

      {/* Submit button */}
      <button
        type="submit"
        className="mt-7 w-fit bg-[#ff5a0a] px-9 py-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-black transition-colors duration-300 hover:bg-white"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
