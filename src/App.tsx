import React from 'react';

function App() {
  return (
    <div className="bg-[#f5f5fb] min-h-screen font-sans">
      {/* Header */}
      <header className="sticky top-0 w-full bg-white/80 shadow-sm z-50 backdrop-blur-[2px] transition-all">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src="/logo.jpeg"
              alt="Bin Bros Elite Logo"
              className="h-16 w-16 md:h-20 md:w-20 rounded-full shadow-sm border-2 border-[#87cae7] bg-[#f5f5fb]"
            />
            <span className="text-2xl md:text-3xl font-black text-[#87cae7]">Bin Bros Elite</span>
          </div>
          <nav className="hidden md:flex space-x-8 text-base font-medium">
            <a href="#services" className="text-black hover:text-[#87cae7] transition-colors duration-200">Services</a>
            <a href="#about" className="text-black hover:text-[#87cae7] transition-colors duration-200">About</a>
            <a href="#booking" className="text-black hover:text-[#87cae7] transition-colors duration-200">Book Now</a>
            <a href="#contact" className="text-black hover:text-[#87cae7] transition-colors duration-200">Contact</a>
          </nav>
        </div>
      </header>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center pt-32 pb-20">
        <h1 className="text-5xl md:text-6xl font-bold text-[#87cae7] mb-4">Bin Bros Elite</h1>
        <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto text-black">Oakhurst's #1 Bin Cleaning Service - Because Your Trash Deserves Respect!</p>
        <a href="#booking" className="px-8 py-3 rounded-full bg-[#87cae7] text-white font-semibold text-lg shadow hover:bg-[#4eb7d8] transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">Book Your Clean Now!</a>
      </section>

      {/* Our Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-[#87cae7]">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-2xl shadow p-8 text-left flex flex-col transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:scale-105">
              <div className="flex justify-center mb-4">
                <div className="h-10 w-10 rounded-full bg-[#87cae7] flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">+</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">The Bin Clean</h3>
              <p className="text-gray-700 mb-4">Perfect for one-time cleanouts. We'll make your bin(s) sparkle!</p>
              <p className="text-gray-500 mb-1">* $19.99 per bin *</p>
              <div className="text-[#87cae7] text-xl font-bold">$19.99</div>
            </div>
            {/* Service 2 */}
            <div className="bg-white rounded-2xl shadow p-8 text-left flex flex-col transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:scale-105">
              <div className="flex justify-center mb-4">
                <div className="h-10 w-10 rounded-full bg-[#87cae7] flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">+</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">&quot;Mr Unlimited&quot;</h3>
              <p className="text-gray-700 mb-4">Our most popular package - One price; unlimited bins!</p>
              <p className="text-gray-500 mb-1">* Minimum 5 bins required *</p>
              <div className="text-[#87cae7] text-xl font-bold">$129.99</div>
            </div>
            {/* Service 3 */}
            <div className="bg-white rounded-2xl shadow p-8 text-left flex flex-col transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:scale-105">
              <div className="flex justify-center mb-4">
                <div className="h-10 w-10 rounded-full bg-[#87cae7] flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">+</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Custom plan</h3>
              <p className="text-gray-700 mb-4">We will create a custom plan tailored to your needs!</p>
              <div className="text-[#87cae7] text-xl font-bold">Text for pricing!</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Bin Bros Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-14 items-center">
          <div className="mb-10 md:mb-0 flex justify-center">
            <img src="/about.jpeg" alt="About Bin Bros" className="rounded-2xl shadow-lg w-full max-w-md object-cover" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#87cae7]">Why Choose Bin Bros?</h2>
            <ul className="space-y-5 text-lg">
              <li className="flex items-start space-x-3">
                <span className="text-[#87cae7] text-2xl">✓</span>
                <span>Local Oakhurst Experts - We know your area inside out!</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#87cae7] text-2xl">✓</span>
                <span>Eco-Friendly Cleaning Products - Because your bin deserves to be clean, not toxic!</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#87cae7] text-2xl">✓</span>
                <span>Ran and owned by your hard working Oakhurst teens!</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Book Your Clean Section */}
      <section id="booking" className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-[#87cae7]">Book Your Clean</h2>
          <div
            className="bg-gradient-to-br from-[#e0f7fa] via-[#f5f5fb] to-[#b2ebf2] rounded-2xl shadow-2xl p-8 md:p-12 border-2 border-[#87cae7]/30"
            style={{
              minHeight: '650px',
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <div
              id="SIMBLA_APPOINTMENT"
              className="w-full h-[650px] bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm flex justify-center items-center"
            >
              <div className="animate-pulse">
                <div className="flex justify-center">
                  <svg className="w-10 h-10 text-[#87cae7]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-center mt-4 text-gray-500">Loading booking calendar...</p>
              </div>
            </div>

            {/* Fallback in case widget script fails */}
            <div id="booking-fallback" className="hidden">
              <div className="flex flex-col items-center">
                <a
                  href="https://binbros.simplybook.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#87cae7] text-white rounded-lg text-lg font-semibold hover:bg-[#4eb7d8] transition mb-8"
                >
                  Book on our scheduling page
                </a>
                <p className="text-center mb-6">Or view our booking calendar below:</p>
                <div className="w-full h-[650px] border border-gray-200 rounded-lg overflow-hidden">
                  <iframe
                    src="https://binbros.simplybook.me/v2/"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    title="Bin Bros Elite Booking System"
                  ></iframe>
                </div>
              </div>
            </div>

            <script
              dangerouslySetInnerHTML={{
                __html: `
                  // Check if the SimplyBook widget loaded properly
                  setTimeout(function() {
                    const appointmentDiv = document.getElementById('SIMBLA_APPOINTMENT');
                    const fallbackDiv = document.getElementById('booking-fallback');

                    if (appointmentDiv && appointmentDiv.childElementCount === 0) {
                      // If no children were added to the appointment div, show fallback
                      if (fallbackDiv) {
                        fallbackDiv.classList.remove('hidden');
                      }
                    }
                  }, 3000);
                `
              }}
            />
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section id="contact" className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#87cae7]">Get in Touch</h2>
          <p className="text-gray-600 mb-8">We're here to help with all your bin cleaning needs in Oakhurst!</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="tel:2487943388" className="flex items-center text-[#87cae7] hover:text-[#4eb7d8] transition font-semibold">
              (248) 794-3388
            </a>
            <a href="mailto:binbroselite@gmail.com" className="flex items-center text-[#87cae7] hover:text-[#4eb7d8] transition font-semibold">
              binbroselite@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#87cae7] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2025 Bin Bros Elite - Oakhurst's Finest Bin Cleaning Service</p>
          <p className="mt-2">We clean bins so you don't have to!</p>
        </div>
      </footer>

      <style>{`
          a, button {
            transition: background 0.3s cubic-bezier(.4,0,.2,1), color 0.3s cubic-bezier(.4,0,.2,1), box-shadow 0.3s cubic-bezier(.4,0,.2,1), transform 0.3s cubic-bezier(.4,0,.2,1);
          }
        `}</style>
    </div>
  );
}

export default App;
