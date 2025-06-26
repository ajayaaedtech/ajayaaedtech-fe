import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-[#004EA5]">Contact Us</h1>
        <p className="mt-4 text-gray-600">
          We would  love to hear from you! Fill out the form below and we ll get back to you shortly.
        </p>
      </div>
      <div className="mt-10 max-w-3xl mx-auto">
        <ContactForm />
      </div>
    </main>
  );
}
