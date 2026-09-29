import { Terminal, Globe, Brain, Rocket, ArrowRight, CheckCircle2 } from 'lucide-react';
import { LEARNING_JOURNEY } from '../data/portfolioData';

export default function LearningJourney() {
  const getIcon = (id: string) => {
    switch (id) {
      case 'python-dev':
        return Terminal;
      case 'web-dev':
        return Globe;
      case 'gen-ai':
        return Brain;
      case 'ai-eng':
        return Rocket;
      default:
        return Brain;
    }
  };

  return (
    <section id="learning" className="py-20 bg-white border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl">
          <span className="text-xs font-semibold text-blue-600 tracking-wider uppercase">
            Curriculum &amp; Self-Study Roadmap
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">
            Currently Learning
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            A structured breakdown of the areas I am studying each week to bridge foundational software engineering with future AI capabilities.
          </p>
          <div className="w-12 h-1 bg-blue-600 rounded-full mt-3"></div>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {LEARNING_JOURNEY.map((item, idx) => {
            const Icon = getIcon(item.id);
            return (
              <div
                key={item.id}
                className="bg-[#fafaf9] border border-slate-200 rounded-2xl p-6 sm:p-7 hover:border-slate-300 transition-colors flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-200/60">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-blue-600 shrink-0 shadow-xs">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">
                          {item.title}
                        </h3>
                        <span className="text-xs font-medium text-slate-500">
                          {item.focusArea}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-semibold text-blue-600">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Core Description */}
                  <p className="text-xs sm:text-sm text-slate-600 mt-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Syllabus / Focus Points */}
                  <div className="mt-5 pt-4 border-t border-slate-200/60">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-2">
                      Key Topics in Progress
                    </span>
                    <ul className="space-y-1.5">
                      {item.topics.map((topic, tIdx) => (
                        <li key={tIdx} className="flex items-center gap-2 text-xs text-slate-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-medium text-slate-700">Weekly progress:</span>
                  <span className="text-blue-600 font-semibold">Active Practice</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
