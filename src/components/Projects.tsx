import { useState } from 'react';
import { ExternalLink, Terminal, Play, ArrowRight, Github } from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 bg-white border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold text-blue-600 tracking-wider uppercase">
              Featured Work
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">
              Projects
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Foundational Python programs demonstrating algorithmic logic, user input handling, and practical workflow implementation.
            </p>
            <div className="w-12 h-1 bg-blue-600 rounded-full mt-3"></div>
          </div>

          <div className="text-xs text-slate-500 font-medium">
            <span>Click &ldquo;View Project&rdquo; to test interactive logic live</span>
          </div>
        </div>

        {/* Projects Grid: 3 Clean Project Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between bg-[#fafaf9] border border-slate-200/90 rounded-2xl p-6 hover:border-blue-400 hover:shadow-md transition-all duration-200"
            >
              <div>
                {/* Header & Category */}
                <div className="flex items-center justify-between text-xs text-slate-500 pb-3 border-b border-slate-200/60">
                  <div className="flex items-center gap-1.5 font-mono text-blue-600">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>{project.category}</span>
                  </div>
                  <span className="text-slate-400">Python 3</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 mt-4 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                  {project.shortDescription}
                </p>

                {/* Highlights / Concepts (Unboxed clean metadata with typographic separators) */}
                <div className="mt-5 pt-4 border-t border-slate-200/60">
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-2">
                    Core Concepts
                  </span>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-700">
                    {project.highlights.map((h, i) => (
                      <span key={i} className="inline-flex items-center">
                        <span className="text-slate-700">{h}</span>
                        {i < project.highlights.length - 1 && (
                          <span className="text-slate-300 ml-2" aria-hidden="true">·</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mt-4 pt-3 border-t border-slate-200/40">
                  <span className="text-[11px] font-medium text-slate-400 block mb-1">
                    Technologies
                  </span>
                  <div className="flex flex-wrap gap-1.5 text-[11px] font-mono text-slate-600">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-white border border-slate-200 px-2 py-0.5 rounded text-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-4 border-t border-slate-200/80 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <Play className="w-3 h-3" />
                  <span>View Project</span>
                </button>

                <a
                  href={project.githubUrl}
                  title="View on GitHub"
                  className="inline-flex items-center gap-1.5 px-3 py-2 bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 text-xs font-medium rounded-lg transition-colors focus:outline-none"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
