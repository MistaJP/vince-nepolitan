"use client";

import { useState } from "react";

export default function SpeakingPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="bg-black-primary py-32">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gold-500 font-black text-sm uppercase tracking-[0.3em] mb-4">Book Vince to Speak</p>
          
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            INSPIRE YOUR AUDIENCE
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Bring Vince&apos;s powerful story of resilience to your next event
          </p>
        </div>
      </section>

      {/* TOPICS */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-gold-600 font-black text-sm uppercase tracking-[0.3em] mb-4">Speaking Topics</h2>
            <h3 className="text-4xl font-black text-gray-900">CHOOSE YOUR EXPERIENCE</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              { title: "Renovate Your Life", desc: "Transform adversity into advantage. Learn the blueprint for turning pain into purpose.", audience: "Corporate & General" },
              { title: "From Streets to Success", desc: "Real talk on beating the odds when everything is stacked against you.", audience: "Youth & Schools" },
              { title: "The Power of Forgiveness", desc: "How letting go of past pain unlocks your true potential.", audience: "Religious & Community" },
              { title: "Breaking the Cycle", desc: "End generational trauma and create a new legacy for your family.", audience: "Community Groups" },
            ].map((topic, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-lg border-l-4 border-gold-500">
                <span className="text-xs font-bold text-gold-600 uppercase tracking-wider">{topic.audience}</span>
                <h4 className="text-2xl font-black text-gray-900 mt-2 mb-3">{topic.title}</h4>
                <p className="text-gray-600">{topic.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING FORM */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-black text-gray-900">Request Booking</h3>
              <p className="text-gray-600 mt-2">Fill out the form below and we&apos;ll respond within 24-48 hours.</p>
            </div>

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-2xl font-black text-gray-900 mb-2">Thank You!</h4>
                <p className="text-gray-600">Your request has been received. We&apos;ll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">First Name *</label>
                    <input type="text" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Last Name *</label>
                    <input type="text" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email *</label>
                  <input type="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Organization/Event Name *</label>
                  <input type="text" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Event Type</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent">
                    <option>Select type...</option>
                    <option>Corporate Event</option>
                    <option>School Assembly</option>
                    <option>Church/Religious</option>
                    <option>Community Event</option>
                    <option>Conference</option>
                    <option>Private Event</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Preferred Date</label>
                    <input type="date" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Audience Size</label>
                    <input type="number" placeholder="100" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Additional Details</label>
                  <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent" placeholder="Tell us about your event..."></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gold-500 hover:bg-gold-600 text-black font-black text-lg uppercase tracking-wider rounded-lg transition-colors"
                >
                  Submit Booking Request
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
