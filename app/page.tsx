import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* HERO - Big Bold Quote */}
      <section className="bg-black-primary min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-gray-900"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-8">
            <span className="text-gold-500">&ldquo;When you want to CHANGE</span>
            <br />
            as bad as you want to BREATHE,
            <br />
            <span className="text-gold-500">then you&apos;ll be RENOVATED&rdquo;</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Vince Nepolitan | Bestselling Author & Motivational Speaker
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/speaking"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold-500 hover:bg-gold-600 text-black font-black text-lg uppercase tracking-wider rounded transition-colors"
            >
              Book Vince to Speak
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-black font-bold text-lg uppercase tracking-wider rounded transition-colors"
            >
              Meet Vince
            </Link>
          </div>
        </div>
      </section>

      {/* MEET VINCE */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-gold-600 font-black text-sm uppercase tracking-[0.3em] mb-4">Meet</h2>
            <h3 className="text-4xl md:text-5xl font-black text-gray-900">VINCE NEPOLITAN</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/5] bg-gradient-to-br from-gray-900 to-black rounded-lg flex items-center justify-center">
              <div className="text-center text-white p-8">
                <p className="text-gold-500 text-sm uppercase tracking-wider mb-2">Photo</p>
                <p className="text-gray-500">Vince Nepolitan</p>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Vince Nepolitan is a <strong>critically acclaimed author</strong> and 
                <strong>motivational speaker</strong> who has taken the world by storm 
                with his raw, authentic approach to overcoming adversity.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Raised in the underprivileged streets of Las Vegas, Vince lost most of 
                his family to drug overdose and faced abandonment. Yet against all odds, 
                he transformed his pain into purpose — becoming a bestselling author 
                and inspiration to thousands.
              </p>

              <div className="pt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center text-gold-600 hover:text-gold-700 font-bold uppercase tracking-wider"
                >
                  Read Full Story →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE BOOK */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-gold-600 font-black text-sm uppercase tracking-[0.3em] mb-4">Order Vince&apos;s</h2>
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">BESTSELLING BOOK!</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              You owe it to yourself to recognize your power, your strength, and your place in the world.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="bg-black p-12 flex items-center justify-center">
                <div className="text-center text-white">
                  <h4 className="text-4xl md:text-5xl font-black mb-2">RENOVATE</h4>
                  <h4 className="text-4xl md:text-5xl font-black text-gold-500 mb-4">ME</h4>
                  <p className="text-gray-400">By Vince Nepolitan</p>
                </div>
              </div>

              <div className="p-12 flex flex-col justify-center">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Transform Your Life From The Inside Out</h4>
                
                <p className="text-gray-600 mb-6">
                  A powerful memoir of overcoming adversity, finding forgiveness, 
                  and discovering the strength within. Vince takes you on his journey 
                  from the streets to success.
                </p>

                <ul className="space-y-2 mb-8 text-gray-700">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-gold-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Hardcover & Paperback
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-gold-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Kindle & Audiobook
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-gold-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    International Shipping
                  </li>
                </ul>

                <a
                  href="#"
                  className="inline-flex items-center justify-center w-full px-8 py-4 bg-gold-500 hover:bg-gold-600 text-black font-black text-lg uppercase tracking-wider rounded transition-colors"
                >
                  Get Your Copy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPEAKING */}
      <section className="py-24 bg-black-primary">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-gold-500 font-black text-sm uppercase tracking-[0.3em] mb-4">Bring The Energy</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white">BOOK VINCE TO SPEAK</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { title: "Renovate Your Life", desc: "Transform adversity into advantage" },
              { title: "From Streets to Success", desc: "Real talk on beating the odds" },
              { title: "The Power of Forgiveness", desc: "Let go and level up" },
            ].map((topic, i) => (
              <div key={i} className="bg-gray-900 p-8 rounded-lg border border-gray-800">
                <h4 className="text-xl font-bold text-white mb-2">{topic.title}</h4>
                <p className="text-gray-400">{topic.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/speaking"
              className="inline-flex items-center justify-center px-10 py-5 bg-gold-500 hover:bg-gold-600 text-black font-black text-xl uppercase tracking-wider rounded transition-colors"
            >
              Check Availability
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
