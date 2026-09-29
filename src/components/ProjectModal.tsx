import { useState, useEffect } from 'react';
import { X, Play, Code, Check, Copy, ExternalLink, RotateCcw } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  const [activeTab, setActiveTab] = useState<'demo' | 'code'>('demo');
  const [copied, setCopied] = useState(false);

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [onClose]);

  // Voter Demo States
  const [voterName, setVoterName] = useState('');
  const [voterAge, setVoterAge] = useState<number | ''>('');
  const [voterResult, setVoterResult] = useState<{ status: 'eligible' | 'ineligible' | 'invalid' | null; message: string }>({
    status: null,
    message: ''
  });

  const handleCheckVoter = (e: React.FormEvent) => {
    e.preventDefault();
    if (voterAge === '' || isNaN(Number(voterAge))) {
      setVoterResult({ status: 'invalid', message: 'Please enter a valid numerical age.' });
      return;
    }
    const age = Number(voterAge);
    const name = voterName.trim() || 'Citizen';

    if (age < 0 || age > 130) {
      setVoterResult({ status: 'invalid', message: 'Please enter a realistic age between 0 and 130.' });
    } else if (age >= 18) {
      setVoterResult({
        status: 'eligible',
        message: `Congratulations ${name}! At ${age} years old, you are legally eligible to vote.`
      });
    } else {
      const remaining = 18 - age;
      setVoterResult({
        status: 'ineligible',
        message: `Hello ${name}. At ${age} years old, you are not yet eligible to vote. You will be eligible in ${remaining} year${remaining > 1 ? 's' : ''}.`
      });
    }
  };

  // ATM Demo States
  const [atmPin, setAtmPin] = useState('');
  const [atmAuth, setAtmAuth] = useState(false);
  const [atmBalance, setAtmBalance] = useState(5000);
  const [atmAmount, setAtmAmount] = useState<number | ''>('');
  const [atmLogs, setAtmLogs] = useState<string[]>([
    'System ready. Default demo PIN is 1234.'
  ]);

  const handleAtmLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (atmPin === '1234') {
      setAtmAuth(true);
      setAtmLogs((prev) => [...prev, 'PIN verified successfully. Welcome to your account.']);
    } else {
      setAtmLogs((prev) => [...prev, 'Authentication failed: Incorrect PIN. Please try 1234.']);
    }
  };

  const handleAtmDeposit = () => {
    const amt = Number(atmAmount);
    if (!amt || amt <= 0) {
      setAtmLogs((prev) => [...prev, 'Deposit error: Amount must be greater than $0.']);
      return;
    }
    const newBal = atmBalance + amt;
    setAtmBalance(newBal);
    setAtmLogs((prev) => [...prev, `Deposited $${amt.toFixed(2)}. Current balance: $${newBal.toFixed(2)}`]);
    setAtmAmount('');
  };

  const handleAtmWithdraw = () => {
    const amt = Number(atmAmount);
    if (!amt || amt <= 0) {
      setAtmLogs((prev) => [...prev, 'Withdrawal error: Amount must be greater than $0.']);
      return;
    }
    if (amt > atmBalance) {
      setAtmLogs((prev) => [...prev, `Withdrawal declined: Insufficient funds. Requested: $${amt.toFixed(2)}, Available: $${atmBalance.toFixed(2)}`]);
      return;
    }
    const newBal = atmBalance - amt;
    setAtmBalance(newBal);
    setAtmLogs((prev) => [...prev, `Withdrew $${amt.toFixed(2)}. Current balance: $${newBal.toFixed(2)}`]);
    setAtmAmount('');
  };

  // Grade Demo States
  const [grades, setGrades] = useState<{ [subject: string]: number }>({
    Mathematics: 85,
    Programming: 92,
    Physics: 78,
    English: 88,
  });

  const calculateGradeSummary = () => {
    const scores = Object.values(grades);
    const total = scores.reduce((a, b) => a + b, 0);
    const average = total / scores.length;

    let letter = 'F';
    let remark = 'Needs improvement';

    if (average >= 90) {
      letter = 'A+';
      remark = 'Outstanding Performance';
    } else if (average >= 80) {
      letter = 'A';
      remark = 'Excellent Performance';
    } else if (average >= 70) {
      letter = 'B';
      remark = 'Good Performance';
    } else if (average >= 60) {
      letter = 'C';
      remark = 'Satisfactory';
    } else if (average >= 50) {
      letter = 'D';
      remark = 'Pass';
    }

    return { total, average, letter, remark };
  };

  const gradeSummary = calculateGradeSummary();

  const handleCopyCode = () => {
    navigator.clipboard.writeText(project.pythonCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        {/* Header Bar */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50/70">
          <div>
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
              {project.category}
            </span>
            <h3 id="modal-headline" className="text-lg font-bold text-slate-900">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 bg-white px-6 gap-2">
          <button
            onClick={() => setActiveTab('demo')}
            className={`py-3 px-4 text-xs font-semibold flex items-center gap-2 border-b-2 transition-colors ${
              activeTab === 'demo'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Play className="w-3.5 h-3.5" />
            <span>Interactive Simulator</span>
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`py-3 px-4 text-xs font-semibold flex items-center gap-2 border-b-2 transition-colors ${
              activeTab === 'code'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Code className="w-3.5 h-3.5" />
            <span>Python Source Code</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {activeTab === 'demo' ? (
            <div>
              {/* Project Description */}
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                {project.shortDescription}
              </p>

              {/* DEMO 1: Voter Eligibility */}
              {project.demoType === 'voter' && (
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                  <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <span>Test Eligibility Logic</span>
                  </h4>
                  <form onSubmit={handleCheckVoter} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="applicant-name" className="block text-xs font-medium text-slate-700 mb-1">
                          Applicant Name
                        </label>
                        <input
                          id="applicant-name"
                          type="text"
                          value={voterName}
                          onChange={(e) => setVoterName(e.target.value)}
                          placeholder="e.g. Alex"
                          className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                      </div>
                      <div>
                        <label htmlFor="applicant-age" className="block text-xs font-medium text-slate-700 mb-1">
                          Age (Years) *
                        </label>
                        <input
                          id="applicant-age"
                          type="number"
                          value={voterAge}
                          onChange={(e) => setVoterAge(e.target.value === '' ? '' : Number(e.target.value))}
                          placeholder="e.g. 19"
                          required
                          className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-600 text-white text-xs font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
                    >
                      Evaluate Age Condition
                    </button>
                  </form>

                  {/* Output Result */}
                  {voterResult.status && (
                    <div
                      className={`mt-4 p-4 rounded-lg border text-xs sm:text-sm font-medium ${
                        voterResult.status === 'eligible'
                          ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                          : voterResult.status === 'ineligible'
                          ? 'bg-amber-50 border-amber-200 text-amber-800'
                          : 'bg-red-50 border-red-200 text-red-800'
                      }`}
                    >
                      {voterResult.message}
                    </div>
                  )}
                </div>
              )}

              {/* DEMO 2: ATM System */}
              {project.demoType === 'atm' && (
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-4">
                  {!atmAuth ? (
                    <form onSubmit={handleAtmLogin} className="space-y-3">
                      <div>
                        <label htmlFor="atm-pin-input" className="block text-xs font-medium text-slate-700 mb-1">
                          Enter 4-Digit Security PIN (Demo PIN: 1234)
                        </label>
                        <input
                          id="atm-pin-input"
                          type="password"
                          maxLength={4}
                          value={atmPin}
                          onChange={(e) => setAtmPin(e.target.value)}
                          placeholder="1234"
                          className="w-48 px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg font-mono focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                      </div>
                      <button
                        type="submit"
                        className="px-4 py-2 bg-blue-600 text-white text-xs font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Authenticate PIN
                      </button>
                    </form>
                  ) : (
                    <div className="space-y-4">
                      {/* Authenticated Dashboard */}
                      <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-white border border-slate-200 rounded-lg">
                        <div>
                          <span className="text-xs text-slate-500">Current Balance</span>
                          <div className="text-2xl font-bold text-slate-900 font-mono">
                            ${atmBalance.toFixed(2)}
                          </div>
                        </div>
                        <button
                          onClick={() => {
                            setAtmAuth(false);
                            setAtmPin('');
                            setAtmLogs((prev) => [...prev, 'Session logged out.']);
                          }}
                          className="text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-md transition-colors"
                        >
                          End Session
                        </button>
                      </div>

                      {/* Operations */}
                      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                        <div className="sm:col-span-6">
                          <label htmlFor="atm-amount-input" className="sr-only">
                            Amount in dollars
                          </label>
                          <input
                            id="atm-amount-input"
                            type="number"
                            aria-label="Amount in dollars"
                            value={atmAmount}
                            onChange={(e) => setAtmAmount(e.target.value === '' ? '' : Number(e.target.value))}
                            placeholder="Amount ($)"
                            className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                          />
                        </div>
                        <div className="sm:col-span-3">
                          <button
                            type="button"
                            onClick={handleAtmDeposit}
                            className="w-full py-2 px-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg transition-colors"
                          >
                            Deposit
                          </button>
                        </div>
                        <div className="sm:col-span-3">
                          <button
                            type="button"
                            onClick={handleAtmWithdraw}
                            className="w-full py-2 px-3 bg-slate-800 hover:bg-slate-900 text-white text-xs font-semibold rounded-lg transition-colors"
                          >
                            Withdraw
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Terminal Log */}
                  <div className="mt-4">
                    <span className="text-xs font-medium text-slate-600 block mb-1">
                      Simulation Activity Feed:
                    </span>
                    <div className="p-3 bg-slate-900 text-emerald-400 font-mono text-xs rounded-lg max-h-32 overflow-y-auto space-y-1">
                      {atmLogs.map((log, i) => (
                        <div key={i} className="flex gap-2">
                          <span className="text-slate-500">&gt;</span>
                          <span>{log}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* DEMO 3: Grade Calculator */}
              {project.demoType === 'grade' && (
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {Object.entries(grades).map(([subject, score]) => (
                      <div key={subject} className="bg-white p-3 rounded-lg border border-slate-200">
                        <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                          <span>{subject}</span>
                          <span className="font-mono text-blue-600">{score}/100</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={score}
                          onChange={(e) =>
                            setGrades({ ...grades, [subject]: Number(e.target.value) })
                          }
                          className="w-full accent-blue-600 h-1.5 bg-slate-200 rounded-lg cursor-pointer"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Result Card */}
                  <div className="p-4 bg-white border border-slate-200 rounded-xl flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <span className="text-xs text-slate-500 block">Total Score</span>
                      <span className="text-lg font-bold text-slate-900 font-mono">
                        {gradeSummary.total} / 400
                      </span>
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 block">Average</span>
                      <span className="text-lg font-bold text-slate-900 font-mono">
                        {gradeSummary.average.toFixed(1)}%
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-slate-500 block">Grade Assigned</span>
                      <div className="inline-flex items-center gap-2">
                        <span className="text-2xl font-black text-blue-600 font-mono">
                          {gradeSummary.letter}
                        </span>
                        <span className="text-xs font-medium text-slate-600">
                          ({gradeSummary.remark})
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Core Learning Takeaways */}
              <div className="mt-6">
                <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-2">
                  Programming Concepts Demonstrated
                </h4>
                <div className="flex flex-wrap gap-2 text-xs text-slate-600">
                  {project.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-slate-100 rounded-md text-slate-700 font-medium"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div>
              {/* Code Viewer Tab */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-slate-500">
                  main.py
                </span>
                <button
                  onClick={handleCopyCode}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-2.5 py-1 rounded-md transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>
              </div>
              <div className="bg-slate-950 p-4 rounded-xl text-slate-200 font-mono text-xs overflow-x-auto leading-relaxed border border-slate-800">
                <pre>{project.pythonCode}</pre>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            <span>GitHub Repository</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-semibold rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
