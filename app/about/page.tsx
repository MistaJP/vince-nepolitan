export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="bg-black-primary py-32">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gold-500 font-black text-sm uppercase tracking-[0.3em] mb-4">About The Author</p>
          
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            VINCE NEPOLITAN
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From the streets of Las Vegas to bestselling author
          </p>
        </div>
      </section>

      {/* STORY WITH PHOTO */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/vince.jpg" 
                alt="Vince Nepolitan" 
                className="w-full rounded-lg shadow-2xl"
              />
            </div>

            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                I was raised in an underprivileged area in Las Vegas. I had a tough time 
                growing up – losing most of my family members to drug overdose and dealing 
                with my parents&apos; abandonment. Even though I did not have it easy growing up 
                – my father even convinced me to sell drugs at school – I continued to struggle 
                and made something of myself.
              </p>
              
              <p className="text-xl text-gray-700 leading-relaxed">
                Today, I&apos;m a bestselling author and inspirational speaker, sharing my story 
                to help others understand that no matter how hard things may seem, no matter 
                how many things have gone wrong in their life, they can change the outcome 
                and become successful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <blockquote className="border-l-4 border-gold-500 pl-8 py-4">
            <p className="text-3xl md:text-4xl italic text-gray-900 font-light leading-relaxed">
              &ldquo;Holding on to past pain is also detrimental to your physical and mental health. 
              Thus remember that forgiveness is a priceless gift that you give to both others 
              and yourself.&rdquo;
            </p>
            <cite className="text-gold-600 font-black mt-6 block not-italic text-lg">— Vince Nepolitan</cite>
          </blockquote>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="py-24 bg-black-primary">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-gold-500 font-black text-sm uppercase tracking-[0.3em] mb-4">The Journey</h2>
            <h3 className="text-4xl font-black text-white">FROM PAIN TO PURPOSE</h3>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { num: "01", title: "The Beginning", desc: "Born into struggle" },
              { num: "02", title: "The Streets", desc: "Surviving Vegas" },
              { num: "03", title: "The Loss", desc: "Family taken by drugs" },
              { num: "04", title: "The Rise", desc: "Bestselling author" },
            ].map((step, i) => (
              <div key={i} className="bg-gray-900 p-8 rounded-lg border border-gray-800 text-center">
                <span className="text-5xl font-black text-gold-500">{step.num}</span>
                <h4 className="text-xl font-bold text-white mt-4 mb-2">{step.title}</h4>
                <p className="text-gray-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
