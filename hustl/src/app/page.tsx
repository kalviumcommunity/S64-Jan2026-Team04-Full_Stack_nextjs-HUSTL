import React from 'react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200/60 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                HUSTL
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/login" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">
                Sign In
              </Link>
              <Link href="/signup" className="px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100/60 rounded-full border border-blue-200/40">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-blue-700">
                  Your Career Journey, Unified
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Stop juggling tabs.
                <span className="block mt-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Start hustling smart.
                </span>
              </h1>

              <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                Track internships, manage mentor feedback, and convert insights into action—all from one powerful dashboard. Built for students who mean business.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/signup" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300 text-center">
                  Get Started
                </Link>
                <button className="px-8 py-4 bg-white text-slate-700 rounded-xl font-semibold text-lg border-2 border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                  View Dashboard
                </button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white"></div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 border-2 border-white"></div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white"></div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 border-2 border-white"></div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">500+ Students</p>
                  <p className="text-xs text-slate-600">Already hustling smart</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl shadow-blue-500/10 p-8 border border-slate-200/60">
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                    <h3 className="font-semibold text-slate-900">Application Pipeline</h3>
                    <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                      12 Active
                    </div>
                  </div>

                  <div className="space-y-3">
                    {['Applied', 'Interview', 'Offer'].map((status, i) => (
                      <div key={status} className="flex items-center gap-3 p-4 bg-gradient-to-r from-slate-50 to-blue-50/30 rounded-xl border border-slate-200/60">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${i === 0 ? 'bg-blue-100 text-blue-600' :
                            i === 1 ? 'bg-indigo-100 text-indigo-600' :
                              'bg-green-100 text-green-600'
                          }`}>
                          <span className="font-bold">{[8, 3, 1][i]}</span>
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-slate-900">{status}</p>
                          <div className="w-full bg-slate-200 rounded-full h-1.5 mt-2">
                            <div
                              className={`h-1.5 rounded-full ${i === 0 ? 'bg-blue-600 w-4/5' :
                                  i === 1 ? 'bg-indigo-600 w-1/2' :
                                    'bg-green-600 w-1/4'
                                }`}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600"></div>
                      <div>
                        <p className="text-xs text-slate-600">Mentor Feedback</p>
                        <p className="text-sm font-semibold text-slate-900">3 new insights</p>
                      </div>
                    </div>
                    <button className="text-blue-600 text-sm font-medium hover:text-blue-700">
                      View All →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6 lg:px-8 bg-white/60">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100/60 rounded-full border border-red-200/40 mb-6">
            <span className="text-sm font-medium text-red-700">The Problem</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Your internship journey shouldn't feel like chaos
          </h2>

          <p className="text-xl text-slate-600 leading-relaxed mb-12">
            Applications scattered across spreadsheets. Mentor feedback buried in emails. Progress invisible. Deadlines missed. Sound familiar?
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '📧', title: 'Scattered Feedback', desc: 'Mentor notes lost in email threads and chat apps' },
              { icon: '📊', title: 'No Visibility', desc: 'Can\'t track which applications are moving forward' },
              { icon: '⏰', title: 'Missed Deadlines', desc: 'Important follow-ups slip through the cracks' }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-gradient-to-br from-slate-50 to-red-50/30 rounded-xl border border-slate-200/60">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution / How HUSTL Works */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100/60 rounded-full border border-green-200/40 mb-6">
              <span className="text-sm font-medium text-green-700">The Solution</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              How HUSTL works
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Four simple steps to take control of your internship journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Track Applications',
                desc: 'Log every application in one place. No more spreadsheet gymnastics.',
                gradient: 'from-blue-500 to-blue-600'
              },
              {
                step: '02',
                title: 'Get Mentor Feedback',
                desc: 'Mentors provide structured feedback directly in the platform.',
                gradient: 'from-indigo-500 to-indigo-600'
              },
              {
                step: '03',
                title: 'Convert to Action',
                desc: 'Transform feedback into concrete improvement tasks automatically.',
                gradient: 'from-purple-500 to-purple-600'
              },
              {
                step: '04',
                title: 'Measure Progress',
                desc: 'Watch your pipeline move forward with real-time dashboard insights.',
                gradient: 'from-pink-500 to-pink-600'
              }
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="absolute top-0 left-0 w-12 h-12 bg-gradient-to-br from-slate-100 to-blue-100 rounded-full -ml-2 -mt-2 opacity-60"></div>
                <div className="relative bg-white rounded-xl p-6 shadow-lg shadow-blue-500/5 border border-slate-200/60 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 h-full">
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${item.gradient} text-white rounded-lg font-bold text-lg mb-4`}>
                    {item.step}
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-3">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-blue-50/40 to-indigo-50/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Everything you need in one platform
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Powerful features designed for students, mentors, and administrators
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '🎯',
                title: 'Internship Tracking',
                desc: 'Centralized hub for all your applications with smart filters and search'
              },
              {
                icon: '📈',
                title: 'Status Pipeline',
                desc: 'Visual pipeline from Applied → Interview → Offer with drag-and-drop'
              },
              {
                icon: '💬',
                title: 'Mentor Feedback System',
                desc: 'Structured feedback forms with ratings, comments, and action items'
              },
              {
                icon: '📊',
                title: 'Student Dashboard',
                desc: 'Real-time analytics, progress tracking, and personalized insights'
              },
              {
                icon: '🔐',
                title: 'Role-Based Access',
                desc: 'Secure permissions for students, mentors, and administrators'
              },
              {
                icon: '🔔',
                title: 'Smart Notifications',
                desc: 'Never miss a deadline or feedback response with intelligent alerts'
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-lg shadow-blue-500/5 border border-slate-200/60 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Built for every role in the journey
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Whether you're searching, mentoring, or managing—HUSTL adapts to you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                role: 'Students',
                gradient: 'from-blue-500 to-indigo-600',
                icon: '🎓',
                features: [
                  'Track unlimited applications',
                  'Receive structured mentor feedback',
                  'Convert feedback into action items',
                  'Monitor progress in real-time',
                  'Set and track career goals'
                ]
              },
              {
                role: 'Mentors',
                gradient: 'from-indigo-500 to-purple-600',
                icon: '👨‍🏫',
                features: [
                  'Review student applications',
                  'Provide structured feedback',
                  'Track mentee progress',
                  'Schedule check-ins',
                  'Share resources and insights'
                ]
              },
              {
                role: 'Admins',
                gradient: 'from-purple-500 to-pink-600',
                icon: '⚙️',
                features: [
                  'Manage users and permissions',
                  'Monitor platform analytics',
                  'Configure workflows',
                  'Generate reports',
                  'Oversee student outcomes'
                ]
              }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-xl shadow-blue-500/10 border border-slate-200/60 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-2">
                <div className={`bg-gradient-to-br ${item.gradient} p-8 text-white`}>
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{item.role}</h3>
                  <p className="text-white/80 text-sm">Tailored experience for your needs</p>
                </div>
                <div className="p-8">
                  <ul className="space-y-3">
                    {item.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Scalability */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Enterprise-grade. Student-friendly.
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Built with modern technology for security, speed, and scale
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🔒',
                title: 'Secure Authentication',
                desc: 'Bank-level encryption with role-based access control. Your data is protected at every layer.',
                tech: 'NextAuth.js + JWT'
              },
              {
                icon: '⚡',
                title: 'Scalable Architecture',
                desc: 'Built to grow with you. From 10 to 10,000 users without missing a beat.',
                tech: 'Next.js + Vercel'
              },
              {
                icon: '🚀',
                title: 'Modern Tech Stack',
                desc: 'Lightning-fast performance with the latest web technologies and best practices.',
                tech: 'React + TypeScript + Tailwind'
              }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-8 shadow-lg shadow-blue-500/5 border border-slate-200/60">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-slate-900 text-xl mb-3">{item.title}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">{item.desc}</p>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 rounded-full">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-xs font-medium text-blue-700">{item.tech}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg shadow-blue-500/5 border border-slate-200/60">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">99.9% Uptime</p>
                    <p className="text-sm text-slate-600">Always available</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">&lt;100ms Response</p>
                    <p className="text-sm text-slate-600">Lightning fast</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-600 text-sm">Trusted by</span>
                <span className="font-bold text-slate-900">500+ Students</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-12 lg:p-16 shadow-2xl shadow-blue-500/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>

            <div className="relative z-10">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to take control of your career journey?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join hundreds of students who are already tracking applications, getting feedback, and landing their dream internships—all in one place.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/signup" className="px-10 py-5 bg-white text-blue-600 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-2">
                  Start Hustling Smart
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <button className="px-10 py-5 bg-blue-700/50 text-white rounded-xl font-bold text-lg border-2 border-white/30 hover:bg-blue-700/70 hover:border-white/50 transition-all duration-300">
                  Schedule a Demo
                </button>
              </div>

              <p className="text-blue-200 text-sm mt-8">
                No credit card required • Free for students • Setup in under 5 minutes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">H</span>
                </div>
                <span className="text-xl font-bold">HUSTL</span>
              </div>
              <p className="text-slate-400 text-sm">
                Your unified internship and mentorship platform.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Demo</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © 2024 HUSTL. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}