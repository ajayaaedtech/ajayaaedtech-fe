export default function AdvancedSection() {
    const phases = [
        {
            title: "Phase 1 / Month 1-2",
            description: "Content development, LMS setup"
        },
        {
            title: "Phase 2 / Month 3-4",
            description: "Instructor hiring, marketing, partnerships"
        },
        {
            title: "Phase 3 / Month 5-8",
            description: "Program launch in 5 states (pilot)"
        },
        {
            title: "Phase 4 / Month 9-12",
            description: "Feedback, assessment, and expansion planning"
        }
    ];



    const highlights = [
        {
            title: "Online Platform",
            description: "Dedicated LMS with recorded and live sessions."
        },
        {
            title: "Mobile App",
            description: "Android/iOS support with offline sync."
        },
        {
            title: "Physical Centers",
            description: "In partnership with local schools, Academic Institutions, NGOs, etc."
        },
        {
            title: "Instructors",
            description: "Industry professionals, certified trainers, trained interns."
        }
    ];

    const advantages = [
        "Online + Hybrid Training Sessions",
        "Access via mobile app and web platform",
        "Recorded sessions for revision and flexible learning",
        "Certification on course completion"
    ];
    return (
        <>



            <div className='text-center mt-11'>
                <h1 className="text-4xl font-black text-gray-900 mb-6 leading-tight">
                    Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004EA5] to-[#5598B5]">Timeline</span>
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {phases.map((phase, idx) => (
                        <div
                            key={idx}
                            className="relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-t-xl"></div>
                            <div className="p-6 flex flex-col h-full">
                                <h3 className="text-xl font-semibold mb-3 text-gray-800">{phase.title}</h3>
                                <p className="text-gray-600 flex-grow">{phase.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='text-center mt-11'>
                <h1 className="text-4xl font-black text-gray-900 mb-6 leading-tight">
                    Delivery <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004EA5] to-[#5598B5]">Model</span>
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {highlights.map((item, idx) => (
                        <div
                            key={idx}
                            className="relative bg-white/30 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-500"
                        >
                            {/* gradient background circle */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-30 pointer-events-none"></div>
                            <div className="p-8 relative z-10">
                                <h3 className="text-2xl font-semibold mb-3 text-gray-800">{item.title}</h3>
                                <p className="text-gray-700">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>






            {/* Advantages section */}
            <div className='text-center mt-11'>
                <h1 className="text-4xl font-black text-gray-900 mb-6 leading-tight">
                    Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004EA5] to-[#5598B5]">Advantages</span>
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                    {advantages.map((item, idx) => (
                        <div
                            key={idx}
                            className="flex items-start space-x-4 p-5 rounded-xl hover:bg-white hover:shadow transition-all duration-300"
                        >
                            <div className="flex-shrink-0">
                                <CheckCircleIcon className="h-8 w-8 text-gray-700" />
                            </div>
                            <p className="text-lg text-gray-700">{item}</p>
                        </div>
                    ))}
                </div>
            </div>

        </>

    )
}