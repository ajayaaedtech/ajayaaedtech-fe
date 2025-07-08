import React from "react";

const FutureReadyKids = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-blue-800 mb-12">
          This Is What Future-Ready Kids Learn
        </h1>
        
        <p className="text-lg text-center text-gray-700 mb-16 max-w-4xl mx-auto">
          Watch your child create websites, videos, and games using real-world AI tools.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-700 mb-3">Build Your Own Website</h3>
              <p className="text-gray-600 mb-4">
                Create pages that showcase your stories, graphics, and form a portfolio with customized templates.
              </p>
              <div className="bg-blue-100 rounded-lg p-3 text-sm text-blue-800">
                Learn to make a website to showcase your content, hobbies, or school projects.
              </div>
            </div>
          </div>
          
          {/* Feature 2 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-700 mb-3">Make AI Assistants That Talk Like You</h3>
              <p className="text-gray-600 mb-4">
                Create your own chatbot for quick answers to questions about school, activities, or hobbies.
              </p>
              <div className="bg-blue-100 rounded-lg p-3 text-sm text-blue-800">
                Train it to respond just like you with personality, humor, or helpfulness.
              </div>
            </div>
          </div>
          
          {/* Feature 3 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-700 mb-3">Design Posters, Images & More with AI</h3>
              <p className="text-gray-600 mb-4">
                Create stunning visuals for your brand, posters, sketches, or digital art using AI tools.
              </p>
              <div className="bg-blue-100 rounded-lg p-3 text-sm text-blue-800">
                Use AI to bring your imagination to life with unique designs and artwork.
              </div>
            </div>
          </div>
          
          {/* Feature 4 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-700 mb-3">Build Chatbots That Answer</h3>
              <p className="text-gray-600 mb-4">
                Make your own chatbot to answer questions from friends and family about your interests.
              </p>
              <div className="bg-blue-100 rounded-lg p-3 text-sm text-blue-800">
                Create interactive experiences that showcase your knowledge and creativity.
              </div>
            </div>
          </div>
          
          {/* Feature 5 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-700 mb-3">Record Podcasts & Experiment with Video AI</h3>
              <p className="text-gray-600 mb-4">
                Create your own mini podcast show or use AI to enhance your videos with special effects.
              </p>
              <div className="bg-blue-100 rounded-lg p-3 text-sm text-blue-800">
                Explore video editing and watch your AI-enhanced creations come to life.
              </div>
            </div>
          </div>
          
          {/* Feature 6 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-700 mb-3">Develop Market-Ready Skills</h3>
              <p className="text-gray-600 mb-4">
                Learn in-demand skills like coding, design, and content creation that prepare you for the future.
              </p>
              <div className="bg-blue-100 rounded-lg p-3 text-sm text-blue-800">
                Gain hands-on experience with real-world tools used by professionals.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureReadyKids;