"use client";
import Link from "next/link";
import { ArrowLeft, Save, Send } from "lucide-react";

export default function GiveFeedbackPage() {
    return (
        <div className="max-w-3xl mx-auto space-y-8 pb-20">
            <div className="flex items-center gap-4">
                <Link href="/mentor/students/1" className="p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors">
                    <ArrowLeft className="w-5 h-5" />
                </Link>
                <div>
                    <h2 className="text-2xl font-bold text-slate-800">Give Feedback</h2>
                    <p className="text-slate-500">Mentoring session for <span className="font-bold text-slate-800">Kartik</span></p>
                </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 space-y-8">
                {/* Rating Section */}
                <section>
                    <label className="block text-sm font-bold text-slate-800 mb-4">Overall Performance Rating</label>
                    <div className="flex gap-4">
                        {[1, 2, 3, 4, 5].map((num) => (
                            <button key={num} className={`w-12 h-12 rounded-xl border-2 flex items-center justify-center font-bold text-lg transition-all ${num === 4 ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-slate-100 hover:border-blue-200 text-slate-400'}`}>
                                {num}
                            </button>
                        ))}
                    </div>
                </section>

                <hr className="border-slate-100" />

                {/* Text Areas */}
                <section className="space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-slate-800 mb-2">Key Strengths</label>
                        <p className="text-xs text-slate-500 mb-3">What is the student doing really well?</p>
                        <textarea className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none h-32 transition-all" placeholder="e.g. Strong understanding of React hooks, great communication skills..."></textarea>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-slate-800 mb-2">Areas for Improvement</label>
                        <p className="text-xs text-slate-500 mb-3">Where can they focus their efforts next?</p>
                        <textarea className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none h-32 transition-all" placeholder="e.g. Needs to improve error handling, unit testing coverage..."></textarea>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-slate-800 mb-2">Actionable Next Steps</label>
                        <p className="text-xs text-slate-500 mb-3">Concrete tasks for the student to complete.</p>
                        <div className="space-y-3">
                            <div className="flex gap-2">
                                <input type="checkbox" className="mt-1.5 w-4 h-4 text-blue-600" />
                                <input type="text" className="full w-full border-b border-slate-200 pb-2 focus:border-blue-500 outline-none text-slate-800" placeholder="e.g. Complete the SQL Advanced Module" />
                            </div>
                            <div className="flex gap-2">
                                <input type="checkbox" className="mt-1.5 w-4 h-4 text-blue-600" />
                                <input type="text" className="full w-full border-b border-slate-200 pb-2 focus:border-blue-500 outline-none text-slate-800" placeholder="Add another step..." />
                            </div>
                        </div>
                    </div>
                </section>

                <div className="flex items-center justify-end gap-4 pt-6">
                    <button className="flex items-center gap-2 px-6 py-3 text-slate-600 font-medium hover:bg-slate-50 rounded-xl transition-colors">
                        <Save className="w-4 h-4" /> Save Draft
                    </button>
                    <button className="flex items-center gap-2 px-8 py-3 bg-blue-700 text-white font-bold rounded-xl hover:bg-blue-800 hover:shadow-lg hover:shadow-blue-900/20 transition-all">
                        Submit Feedback <Send className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}
