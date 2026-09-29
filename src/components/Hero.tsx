import { useState } from 'react';
import { ArrowRight, Sparkles, Terminal, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import avatarUrl from '../assets/images/niharika_avatar_1790679178535.jpg';

export default function Hero() {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <section id="home" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introduction & Call-to-actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Greeting */}
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 mb-3 tracking-wide">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              <span>Hi, I'm {PERSONAL_INFO.name}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15] text-balance">
              An Aspiring AI Engineer Building, Learning &amp; Exploring AI
            </h1>

            {/* Supporting Text */}
            <p className="mt-4 text-base sm:text-lg font-medium text-slate-600 tracking-normal">
              {PERSONAL_INFO.tagline}
            </p>

            {/* Fresh Academic Positioning Statement */}
            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
              Currently in my 1st semester of B.Tech, laying strong foundations in programming fundamentals, problem solving, and hands-on software development while discovering real-world possibilities with AI.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 whitespace-nowrap"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 whitespace-nowrap shadow-sm"
              >
                <span>Connect With Me</span>
              </a>
            </div>

            {/* Quick unboxed trust points */}
            <div className="mt-10 pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>B.Tech 1st Semester</span>
              </div>
              <span className="text-slate-300">·</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Hackathon Participant</span>
              </div>
              <span className="text-slate-300">·</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Beginner Python &amp; Web Dev</span>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Student Developer Showcase Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
              
              {/* Profile Bar */}
              <div className="flex items-center gap-4 pb-5 border-b border-slate-100">
                <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shrink-0">
                  {!imgLoaded && !imgError && (
                    <div className="absolute inset-0 flex items-center justify-center bg-blue-50 text-blue-600 font-bold text-lg">
                      NR
                    </div>
                  )}
                  {!imgError ? (
                    <img
                      src={avatarUrl}
                      alt={PERSONAL_INFO.name}
                      className={`w-full h-full object-cover transition-opacity duration-300 ${
                        imgLoaded ? 'opacity-100' : 'opacity-0'
                      }`}
                      referrerPolicy="no-referrer"
                      onLoad={() => setImgLoaded(true)}
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-blue-50 text-blue-600 font-bold text-lg">
                      NR
                    </div>
                  )}
                </div>

                <div className="min-w-0">
                  <h2 className="text-base font-bold text-slate-900 truncate">
                    {PERSONAL_INFO.name}
                  </h2>
                  <p className="text-xs text-slate-500 truncate mt-0.5">
                    B.Tech 1st Semester Student
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-blue-600 font-medium mt-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Aspiring AI Engineer</span>
                  </div>
                </div>
              </div>

              {/* Minimal Clean Code Preview (Python Focus) */}
              <div className="mt-4">
                <div className="flex items-center justify-between px-3 py-2 bg-slate-900 text-slate-300 rounded-t-lg text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-blue-400" />
                    <span>student_journey.py</span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-sans">Python 3.12</span>
                </div>
                <div className="bg-slate-950 p-4 rounded-b-lg font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed border-t border-slate-800">
                  <div><span className="text-blue-400">class</span> <span className="text-amber-300">StudentEngineer</span>:</div>
                  <div className="pl-4 text-slate-400"># Building skills daily</div>
                  <div className="pl-4"><span className="text-blue-400">def</span> <span className="text-amber-300">__init__</span>(<span className="text-slate-300">self</span>):</div>
                  <div className="pl-8"><span className="text-slate-300">self</span>.name = <span className="text-emerald-400">"Niharika Ram Kathi"</span></div>
                  <div className="pl-8"><span className="text-slate-300">self</span>.status = <span className="text-emerald-400">"B.Tech Fresher"</span></div>
                  <div className="pl-8"><span className="text-slate-300">self</span>.goal = <span className="text-emerald-400">"AI Engineer"</span></div>
                  <div className="pl-8"><span className="text-slate-300">self</span>.focus = [<span className="text-emerald-400">"Python"</span>, <span className="text-emerald-400">"Web"</span>, <span className="text-emerald-400">"GenAI"</span>]</div>
                  <div className="pl-4 mt-1"><span className="text-blue-400">def</span> <span className="text-amber-300">build_everyday</span>(<span className="text-slate-300">self</span>):</div>
                  <div className="pl-8"><span className="text-purple-400">return</span> <span className="text-emerald-400">"Learning by doing &amp; participating"</span></div>
                </div>
              </div>

              {/* Status footer inside card */}
              <div className="mt-4 p-3 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-between text-xs text-slate-600">
                <span className="font-medium text-slate-700">Currently exploring:</span>
                <span className="text-blue-600 font-semibold">Generative AI &amp; Functions</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
