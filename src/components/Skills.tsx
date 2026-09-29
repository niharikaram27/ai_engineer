import { BookOpen, CheckCircle, Flame, Layers, GitBranch, Globe, Cpu } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-[#fafaf9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl">
          <span className="text-xs font-semibold text-blue-600 tracking-wider uppercase">
            Technical Foundations
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">
            Current Tech Stack
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Transparently organized by my current learning phase. No inflated percentages — just dedicated time spent coding, understanding concepts, and experimenting.
          </p>
          <div className="w-12 h-1 bg-blue-600 rounded-full mt-3"></div>
        </div>

        {/* 2 Main Categorized Columns */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          
          {/* Category 1: Currently Learning (Active Focus) */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                  <Flame className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Currently Learning
                  </h3>
                  <p className="text-xs text-slate-500">
                    Primary daily study &amp; project development focus
                  </p>
                </div>
              </div>
              <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200/60">
                Active Focus
              </span>
            </div>

            <div className="mt-6 space-y-4">
              {SKILL_CATEGORIES.learning.map((skill, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/80 hover:border-blue-300 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-base font-semibold text-slate-900">
                      {skill.name}
                    </span>
                    <span className="text-xs font-mono text-blue-600 font-medium">
                      In Progress
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    {skill.context}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
              <BookOpen className="w-3.5 h-3.5 text-blue-600" />
              <span>Building coursework logic and hands-on beginner scripts</span>
            </div>
          </div>

          {/* Category 2: Familiar With */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Familiar With
                  </h3>
                  <p className="text-xs text-slate-500">
                    Foundational tools &amp; web building blocks practiced
                  </p>
                </div>
              </div>
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200/60">
                Foundational
              </span>
            </div>

            <div className="mt-6 space-y-3">
              {SKILL_CATEGORIES.familiar.map((skill, index) => (
                <div
                  key={index}
                  className="p-3.5 rounded-xl bg-slate-50/60 border border-slate-200/70 flex items-start justify-between gap-3 hover:bg-slate-50 transition-colors"
                >
                  <div className="min-w-0">
                    <span className="text-sm font-semibold text-slate-900 block">
                      {skill.name}
                    </span>
                    <span className="text-xs text-slate-500 block mt-0.5">
                      {skill.context}
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium shrink-0 pt-0.5">
                    Practiced
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
              <GitBranch className="w-3.5 h-3.5 text-emerald-600" />
              <span>Using Git &amp; GitHub for repository management and versioning</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
