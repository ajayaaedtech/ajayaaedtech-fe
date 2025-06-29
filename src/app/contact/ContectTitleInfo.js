export default function ContactTitleInfo() {
  return (
    <div className="max-w-4xl mx-auto text-center mt-24 mb-16">
      <div className="relative inline-block">
        <h1 className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-900 tracking-tight">
          Contact Us
        </h1>
        <div className="absolute -bottom-4 left-0 right-0 mx-auto w-3/4 h-2 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full opacity-80"></div>
      </div>
      <p className="mt-8 text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed p-4">
        We&#39;d love to hear from you! Fill out the form below and we&#39;ll get back to you shortly.
      </p>

    </div>
  );
}