import React from 'react';

const WhyChooseUs = () => {
  const features = [
    {
      number: "1",
      title: "Tech-Focused Education",
      description: "Deliver tech-focused, skill-based education. Bridge the digital divide between urban and rural students.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      number: "2", 
      title: "Computational Thinking & AI",
      description: "Promote computational thinking and AI literacy from an early stage. Contribute to the goals of NEP 2020.",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      number: "3",
      title: "Industry 4.0 Skills",
      description: "Equip students with skills relevant to Industry 4.0.",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            WHY CHOOSE US?
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              We bring deep experience in designing and delivering tech-driven educational programs tailored 
              for school and college students. Our content is developed by industry experts and educators who 
              understand both academic and real-world skill requirements.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Number Circle */}
              <div className="relative mb-6">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl font-bold text-white">
                    {feature.number}
                  </span>
                </div>
                {/* Decorative ring */}
                <div className="absolute inset-0 w-16 h-16 rounded-full border-2 border-gray-200 group-hover:border-blue-300 transition-colors duration-300 animate-pulse"></div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Hover Effect Background */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Education?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join thousands of students already benefiting from our innovative approach
            </p>
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors duration-300 hover:shadow-lg transform hover:scale-105">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;