"use client";
import React, { useState } from 'react';

export default function SuperAI() {
  const [started, setStarted] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [prompt, setPrompt] = useState("");

  if (!started) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
        <h1 className="text-8xl font-black italic mb-6 bg-gradient-to-b from-white to-gray-800 bg-clip-text text-transparent uppercase">SUPER AI</h1>
        <p className="text-gray-400 max-w-xl text-xl mb-10">One Window. 9+ Perspectives. Achieve Optimal Efficiency.</p>
        <button onClick={() => setStarted(true)} className="bg-white text-black px-12 py-5 rounded-full font-black text-xl hover:scale-110 transition-all">GET STARTED NOW</button>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white flex flex-col relative">
      {/* 3-Dot Sidebar Icon */}
      <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="fixed top-6 left-6 z-50 text-3xl">⋮</button>

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-80 bg-[#0d0d0d] border-r border-white/10 z-40 transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} p-10`}>
        <h3 className="text-2xl font-black italic mb-10 text-blue-500">SUPER AI</h3>
        <nav className="flex flex-col gap-6">
          <button className="text-left text-white font-bold underline">COMPARE AI</button>
          <button className="text-left text-gray-400 hover:text-white transition">VERIFY YOUR STORY</button>
          <button className="text-left text-gray-400 hover:text-white transition">STUDENT TOOLS</button>
        </nav>
      </div>

      <nav className="p-6 border-b border-white/5 flex justify-center items-center bg-black/50 backdrop-blur-2xl">
        <h2 className="font-black italic text-2xl tracking-tighter">SUPER AI</h2>
      </nav>

      {/* Compare AI Layout (Side-by-Side Cards) */}
      <div className="flex-1 flex overflow-x-auto p-10 gap-8 items-center no-scrollbar">
          <div className="min-w-[400px] h-[65vh] bg-[#0a0a0a] border border-white/10 rounded-[48px] p-8 flex flex-col relative group">
            <h3 className="text-xl font-black italic flex items-center gap-2 mb-8">GEMINI</h3>
            <div className="flex-1 text-gray-500 text-sm italic">Ready to Compare...</div>
          </div>
          {/* ChatGPT Card */}
          <div className="min-w-[400px] h-[65vh] bg-[#0a0a0a] border border-white/10 rounded-[48px] p-8 flex flex-col opacity-50">
            <h3 className="text-xl font-black italic mb-8 uppercase">ChatGPT</h3>
            <div className="flex-1 flex items-center justify-center text-gray-600">Upgrade to Unlock</div>
          </div>
      </div>

      {/* Bottom Bar (AI Fiesta Style) */}
      <div className="p-10 max-w-5xl mx-auto w-full">
        <div className="relative group bg-[#111] border border-white/10 rounded-[35px] flex items-center px-6 py-4">
          <button className="text-2xl text-gray-500 mr-4 hover:text-white">+</button>
          <input type="text" placeholder="Ask anything to all AIs..." className="flex-1 bg-transparent outline-none text-lg" value={prompt} onChange={(e) => setPrompt(e.target.value)} />
          <button className="bg-white/10 text-white px-4 py-2 rounded-xl text-[10px] font-bold mx-4">SELECT MODEL</button>
          <button className="bg-white text-black h-12 w-12 rounded-[22px] font-bold">➔</button>
        </div>
      </div>
    </main>
  );
}
