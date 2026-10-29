import React from "react";

const ContactDetails = () => {
  const details = [
    {
      label: "Email",
      value: "rovard.store@gmail.com",
    },
    {
      label: "Studio",
      value: "Acharya Vihar, Bhubaneswar",
    },
    {
      label: "Hours",
      value: "Mon–Fri, 10:00–18:00",
    },
  ];

  return (
    <div className="flex w-full flex-col gap-6">
      {details.map((detail) => (
        <div
          key={detail.label}
          className="flex flex-col gap-3 border-b border-white/15 pb-5 mb-6"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#ff5a0a]">
            {detail.label}
          </span>

          <p className="text-base font-medium text-white">
            {detail.value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ContactDetails;