"use client";
import React, { useState } from 'react';

export default function SuperAI() {
  const [started, setStarted] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // --- 1. प्रीमियम लैंडिंग पेज (AI Fiesta Style) ---
  if (!started) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 text-center font-sans relative overflow-hidden">
        {/* बैकग्राउंड ग्लो */}
        <div className="absolute top-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black -z-10"></div>
        
        <h1 className="text-7xl md:text-9xl font-black italic tracking-tighter mb-6 bg-gradient-to-b from-white to-gray-800 bg-clip-text text-transparent uppercase">
          SUPER AI
        </h1>
        
        <p className="text-gray-400 max-w-xl text-xl mb-12 font-light italic leading-relaxed">
          One Window. 9+ Perspectives. Achieve Optimal Efficiency.
        </p>

        <button 
          onClick={() => setStarted(true)} 
          className="bg-white text-black px-12 py-5 rounded-full font-black text-xl hover:scale-110 transition-all shadow-[0_0_50px_rgba(255,255,255,0.3)] active:scale-95"
        >
          GET STARTED NOW
        </button>

        <div className="absolute bottom-10 w-full flex justify-center gap-10 text-[10px] uppercase tracking-[0.3em] text-gray-600 font-bold">
           <span>Features</span>
           <span>Pricing</span>
           <span>FAQs</span>
        </div>
      </div>
    );
  }

  // --- 2. कंपेयर AI डैशबोर्ड (Side-by-Side Cards) ---
  return (
    <main className="min-h-screen bg-[#050505] text-white flex flex-col relative overflow-hidden">
      
      {/* Three Dot Sidebar Trigger */}
      <button 
        onClick={() => setSidebarOpen(!isSidebarOpen)} 
        className="fixed top-8 left-8 z-[60] text-3xl hover:scale-110 transition-all text-white/50 hover:text-white"
      >
        {isSidebarOpen ? '✕' : '⋮'}
      </button>

      {/* Sidebar UI */}
      <div className={`fixed top-0 left-0 h-full w-80 bg-[#0d0d0d] border-r border-white/5 z-50 transition-transform duration-500 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} p-10 flex flex-col shadow-[20px_0_50px_rgba(0,0,0,0.5)]`}>
        <div className="flex items-center gap-2 mb-12">
           <div className="w-8 h-8 bg-blue-600 rounded-lg shadow-[0_0_15px_rgba(37,99,235,0.4)]"></div>
           <h3 className="text-2xl font-black italic tracking-tighter">SUPER AI</h3>
        </div>
        
        <nav className="flex flex-col gap-8 text-[11px] font-black tracking-[0.2em] text-gray-500 uppercase">
          <div className="bg-white/5 p-6 rounded-3xl border border-white/5 mb-4">
             <p className="text-white text-sm mb-1 tracking-normal">Bhavesh Kori ✅</p>
             <p className="text-blue-500">Free Plan</p>
          </div>
          <button className="text-left hover:text-white transition flex items-center gap-4"><span>●</span> Compare AI</button>
          <button className="text-left hover:text-white transition flex items-center gap-4"><span>●</span> Verify Story</button>
          <button className="text-left hover:text-white transition flex items-center gap-4"><span>●</span> Nano Banana</button>
          <button className="text-left hover:text-white transition flex items-center gap-4"><span>●</span> Student Tools</button>
          <button className="text-left hover:text-red-500 transition mt-auto pt-10 border-t border-white/5">Delete Account</button>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex overflow-x-auto p-12 gap-8 items-center no-scrollbar">
          {/* Active Card: Gemini */}
          <div className="min-w-[420px] h-[68vh] bg-[#0a0a0a] border border-white/10 rounded-[50px] p-10 flex flex-col shadow-2xl group hover:border-blue-500/20 transition-all">
            <div className="flex items-center justify-between mb-10">
               <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-2xl flex items-center justify-center border border-blue-500/20">
                     <img src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg" className="w-6 h-6" alt="gemini"/>
                  </div>
                  <h3 className="text-xl font-black italic tracking-tight">GEMINI</h3>
               </div>
               <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
            </div>
            <div className="flex-1 text-gray-600 italic text-sm font-medium leading-relaxed">
              Waiting for your creative prompt...
            </div>
          </div>

          {/* Locked Card: ChatGPT */}
          <div className="min-w-[420px] h-[68vh] bg-[#0a0a0a]/50 border border-white/5 rounded-[50px] p-10 flex flex-col opacity-30 grayscale relative">
            <div className="flex items-center gap-4 mb-10">
               <div className="w-10 h-10 bg-white/5 rounded-2xl border border-white/10"></div>
               <h3 className="text-xl font-black italic tracking-tight">CHATGPT 5</h3>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center gap-6">
               <div className="text-5xl">🔒</div>
               <button className="bg-white/10 text-[9px] font-black px-6 py-2 rounded-full tracking-widest uppercase border border-white/10">Upgrade</button>
            </div>
          </div>
      </div>

      {/* Question Box (Floating) */}
      <div className="px-10 pb-12 max-w-5xl mx-auto w-full">
        <div className="relative group bg-[#111]/80 backdrop-blur-3xl border border-white/5 rounded-[40px] flex items-center px-10 py-6 hover:border-blue-500/20 transition-all shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
          <button className="text-4xl text-gray-700 mr-8 hover:text-white transition active:scale-90">+</button>
          
          <input 
            type="text" 
            placeholder="Ask anything to all AIs..." 
            className="flex-1 bg-transparent outline-none text-xl font-medium placeholder:text-gray-800 tracking-tight" 
          />
          
          <button className="bg-white/5 text-white px-6 py-3 rounded-2xl text-[10px] font-black tracking-[0.2em] mx-6 hover:bg-blue-600 transition uppercase border border-white/5">
            Select Model
          </button>
          
          <button className="bg-white text-black h-16 w-16 rounded-3xl flex items-center justify-center font-bold text-2xl hover:scale-105 transition-all shadow-xl active:scale-95">
            ➔
          </button>
        </div>
        <p className="text-center text-[9px] text-gray-700 mt-6 font-black tracking-[0.4em] uppercase">Copyright © 2026 Super AI • Premium Intelligence</p>
      </div>
    </main>
  );
}
