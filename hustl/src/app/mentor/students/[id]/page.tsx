"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, User, GraduationCap, Github, Linkedin, Mail, ExternalLink, Calendar } from "lucide-react";

export default function StudentProfilePage() {
    const [activeTab, setActiveTab] = useState('overview');

    return (
        <div className="space-y-8">
            {/* Actions Header */}
            <div className="flex items-center justify-between">
                <Link href="/mentor/students" className="flex items-center gap-2 text-slate-500 hover:text-slate-800 transition-colors font-medium">
                    <ArrowLeft className="w-4 h-4" /> Back to Students
                </Link>
                <div className="flex gap-3">
                    <Link href="/mentor/feedback/1" className="px-6 py-2.5 bg-blue-700 text-white font-bold rounded-xl hover:bg-blue-800 transition-colors shadow-sm">
                        Give Feedback
                    </Link>
                </div>
            </div>

            {/* Profile Details */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="h-32 bg-gradient-to-r from-slate-100 to-slate-200"></div>
                <div className="px-8 pb-8">
                    <div className="flex justify-between items-end -mt-12 mb-6">
                        <div className="flex items-end gap-6">
                            <div className="w-24 h-24 rounded-full border-4 border-white bg-orange-500 flex items-center justify-center text-white text-3xl font-bold shadow-md">
                                K
                            </div>
                            <div className="pb-1">
                                <h1 className="text-2xl font-bold text-slate-800">Kartik</h1>
                                <p className="text-slate-500 font-medium">Full Stack Developer • Class of 2027</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <button className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-600"><Github className="w-5 h-5" /></button>
                            <button className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-600"><Linkedin className="w-5 h-5" /></button>
                            <button className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-600"><Mail className="w-5 h-5" /></button>
                        </div>
                    </div>

                    <div className="flex gap-8 border-b border-slate-200">
                        {['Overview', 'Activity', 'Feedback History', 'Notes'].map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab.toLowerCase())}
                                className={`pb-4 px-2 font-medium text-sm transition-colors border-b-2 ${activeTab === tab.toLowerCase() ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500 hover:text-slate-800'}`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    <div className="py-8">
                        {/* Overview Content */}
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="md:col-span-2 space-y-8">
                                <section>
                                    <h3 className="font-bold text-slate-800 mb-4">About</h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        Passionate developer focused on React and Node.js ecosystems. Currently building a scalable internship platform. Strong problem-solving skills and eager to learn cloud native technologies.
                                    </p>
                                </section>

                                <section>
                                    <h3 className="font-bold text-slate-800 mb-4">Active Applications</h3>
                                    <div className="space-y-4">
                                        {[
                                            { role: "Backend Intern", company: "Stripe", status: "Interview", date: "2 days ago", color: "bg-indigo-600" },
                                            { role: "Frontend Intern", company: "Vercel", status: "Applied", date: "5 days ago", color: "bg-black" }
                                        ].map((app, i) => (
                                            <div key={i} className="flex items-center justify-between p-4 border border-slate-200 rounded-xl hover:border-blue-200 transition-colors">
                                                <div className="flex items-center gap-4">
                                                    <div className={`w-10 h-10 rounded-lg ${app.color} flex items-center justify-center text-white font-bold`}>
                                                        {app.company.charAt(0)}
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-slate-800">{app.role}</p>
                                                        <p className="text-sm text-slate-500">{app.company}</p>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${app.status === 'Interview' ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-700'}`}>
                                                        {app.status}
                                                    </span>
                                                    <p className="text-xs text-slate-400 mt-1">{app.date}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                    <h3 className="font-bold text-slate-800 mb-4">Skills & Capabilities</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'System Design'].map(skill => (
                                            <span key={skill} className="px-3 py-1 bg-white border border-slate-200 text-slate-700 rounded-lg text-xs font-medium">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                    <h3 className="font-bold text-slate-800 mb-4">Mentor Stats</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <div className="flex justify-between text-sm mb-1">
                                                <span className="text-slate-600">Avg. Test Score</span>
                                                <span className="font-bold text-slate-800">88%</span>
                                            </div>
                                            <div className="w-full bg-slate-200 rounded-full h-2">
                                                <div className="bg-emerald-500 h-2 rounded-full w-[88%]"></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between text-sm mb-1">
                                                <span className="text-slate-600">Application Success</span>
                                                <span className="font-bold text-slate-800">High</span>
                                            </div>
                                            <div className="w-full bg-slate-200 rounded-full h-2">
                                                <div className="bg-blue-500 h-2 rounded-full w-[75%]"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
