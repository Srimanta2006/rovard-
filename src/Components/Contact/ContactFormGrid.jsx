import React from 'react'
import ContactDetails from './ContactDetails'
import ContactForm from './ContactForm'

const ContactFormGrid = () => {
  return (
    <div className="max-h-screen w-full px-6 py-16 text-white md:px-10 lg:px-8">
  <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 gap-16 md:grid-cols-[1.3fr_2fr] md:gap-12 lg:gap-12">

    <ContactDetails />

    <ContactForm />
  </div>
</div>
  )
}

export default ContactFormGrid