
import React from 'react';
import { INTERESTS, REFLECTIONS, FLOKI_DETAILS, FOUNDER_NAME, FOUNDER_TAGLINE } from './constants';
import SectionHeader from './components/SectionHeader';
import InterestGrid from './components/InterestGrid';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 glass z-40 px-6 py-4 md:px-12 flex justify-between items-center border-b border-gray-100">
        <div className="text-xl font-bold tracking-tighter uppercase">{FOUNDER_NAME}</div>
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#about" className="hover:opacity-60 transition-opacity">About</a>
          <a href="#lifestyle" className="hover:opacity-60 transition-opacity">Lifestyle</a>
          <a href="#floki" className="hover:opacity-60 transition-opacity">Floki</a>
          <a href="mailto:hello@alexrivers.com" className="hover:opacity-60 transition-opacity">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="about" className="pt-40 pb-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-[1.1] tracking-tight gradient-text">
            Architecting <br /> the future, <br /> observing the now.
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed mb-10 max-w-2xl">
            {FOUNDER_TAGLINE}
          </p>
          <div className="flex gap-4">
            <button className="bg-black text-white px-8 py-4 rounded-full text-sm font-medium hover:opacity-80 transition-opacity">
              Download Manifesto
            </button>
            <button className="border border-black px-8 py-4 rounded-full text-sm font-medium hover:bg-black hover:text-white transition-all">
              Latest Work
            </button>
          </div>
        </div>
      </header>

      <main className="px-6 md:px-12 lg:px-24 space-y-32">
        {/* Lifestyle & Interests */}
        <section id="lifestyle">
          <SectionHeader 
            title="Lifestyle & Interests" 
            subtitle="A curation of experiences and artifacts that shape my perspective and fuel my creativity."
          />
          
          <div className="space-y-24">
            {/* Travel */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-8">01. Travel</h3>
              <InterestGrid items={INTERESTS} type="Travel" />
            </div>

            {/* Paintings */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-8">02. Paintings</h3>
              <InterestGrid items={INTERESTS} type="Paintings" />
            </div>

            {/* Reflections */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-8">03. Reflections</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {REFLECTIONS.map(ref => (
                  <div key={ref.id} className="p-8 border border-gray-100 bg-white rounded-3xl hover:shadow-xl transition-all duration-300 flex flex-col justify-between aspect-square">
                    <p className="text-xl font-serif italic leading-relaxed text-gray-800">"{ref.text}"</p>
                    <span className="text-xs text-gray-400 font-mono mt-4">{ref.date}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Readings & Movies */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-8">04. Readings</h3>
                <div className="space-y-6">
                  {INTERESTS.filter(i => i.type === 'Readings').map(book => (
                    <div key={book.id} className="flex gap-6 items-start p-4 hover:bg-white rounded-2xl transition-colors">
                      <img src={book.imageUrl} alt={book.title} className="w-20 aspect-[2/3] object-cover shadow-sm" />
                      <div>
                        <h4 className="font-semibold text-lg">{book.title}</h4>
                        <p className="text-xs text-gray-400 mb-2">{book.meta}</p>
                        <p className="text-sm text-gray-600 line-clamp-2">{book.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-8">05. Movies</h3>
                <div className="grid grid-cols-2 gap-4">
                  {INTERESTS.filter(i => i.type === 'Movies').map(movie => (
                    <div key={movie.id} className="group relative aspect-[2/3] overflow-hidden bg-gray-200 rounded-lg">
                      <img src={movie.imageUrl} alt={movie.title} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4 text-center">
                        <div>
                          <p className="text-white font-bold text-sm mb-1">{movie.title}</p>
                          <p className="text-gray-300 text-[10px] uppercase tracking-wider">{movie.meta}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Floki Section */}
        <section id="floki" className="py-20 bg-white rounded-[40px] px-8 md:px-16 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-1 bg-yellow-100 text-yellow-800 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full mb-4">
                The Chief Morale Officer
              </div>
              <h2 className="text-5xl font-bold mb-6 gradient-text">Meet {FLOKI_DETAILS.name}</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {FLOKI_DETAILS.personality}
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
                  </div>
                  <span className="font-medium text-gray-700">{FLOKI_DETAILS.breed}, {FLOKI_DETAILS.age}</span>
                </div>
              </div>
              <div className="p-6 bg-[#fafafa] rounded-2xl border-l-4 border-black italic text-gray-600">
                "{FLOKI_DETAILS.story}"
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src={FLOKI_DETAILS.images[0]} alt="Floki 1" className="w-full aspect-square object-cover rounded-2xl shadow-lg" />
                <img src={FLOKI_DETAILS.images[1]} alt="Floki 2" className="w-full aspect-[3/4] object-cover rounded-2xl shadow-lg" />
              </div>
              <div className="pt-8 space-y-4">
                <img src={FLOKI_DETAILS.images[2]} alt="Floki 3" className="w-full aspect-[3/4] object-cover rounded-2xl shadow-lg" />
                <div className="bg-black text-white p-6 rounded-2xl aspect-square flex flex-col justify-center items-center text-center">
                  <p className="text-3xl font-bold mb-1">15/10</p>
                  <p className="text-xs uppercase tracking-widest opacity-60">Goodest Boy Rating</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-20 px-6 md:px-12 text-center border-t border-gray-100 mt-32 bg-white">
        <p className="text-xs font-medium text-gray-400 tracking-widest uppercase mb-4">Crafted with intentionality &middot; 2024</p>
        <h2 className="text-4xl font-bold mb-8 gradient-text">Let's build something meaningful.</h2>
        <div className="flex justify-center gap-6">
          <a href="#" className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all">𝕏</a>
          <a href="#" className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all">in</a>
          <a href="#" className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all">ig</a>
        </div>
      </footer>

      {/* AI Chat Widget */}
      <ChatWidget />
    </div>
  );
};

export default App;
