export default function AdditonalInfo(){
    return (
         <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-8">
        <div className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-[#004EA5] mb-4">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900">Email Us</h3>
          <p className="mt-2 text-gray-600">info@ajayaaedtech.com</p>
        </div>

        <div className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-[#004EA5] mb-4">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900">Call Us</h3>
          <p className="mt-2 text-gray-600">+91 98765 43210</p>
        </div>

        <div className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-[#004EA5] mb-4">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900">Visit Us</h3>
          <p className="mt-2 text-gray-600">Bengaluru, Karnataka, India</p>
        </div>
      </div>
    )
}