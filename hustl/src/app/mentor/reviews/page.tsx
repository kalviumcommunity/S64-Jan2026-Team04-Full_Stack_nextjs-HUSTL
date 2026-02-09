import Link from "next/link";
import { Check, X, FileText, Download, AlertCircle, CheckCircle } from "lucide-react";

export default function ReviewsPage() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-slate-800">Eligibility Reviews</h2>
                    <p className="text-slate-500">Validate student test submissions and capabilities.</p>
                </div>
                <div className="flex gap-2">
                    <select className="px-4 py-2 border border-slate-200 rounded-xl text-sm font-medium bg-white text-slate-700">
                        <option>All Reviews</option>
                        <option>Pending</option>
                        <option>Completed</option>
                    </select>
                </div>
            </div>

            <div className="grid gap-6">
                {[
                    {
                        id: 1,
                        student: "Michael Chen",
                        test: "Backend Architecture Assessment",
                        score: "78/100",
                        status: "Pending",
                        submitted: "2 hours ago",
                        items: [
                            { q: "REST API Design", a: "Correct", type: "auto" },
                            { q: "Database Normalization", a: "Needs Review", type: "manual" },
                            { q: "System Scalability", a: "Correct", type: "auto" }
                        ]
                    },
                    {
                        id: 2,
                        student: "Emily Davis",
                        test: "React Component Patterns",
                        score: "92/100",
                        status: "Pending",
                        submitted: "5 hours ago",
                        items: [
                            { q: "Hooks Usage", a: "Excellent", type: "manual" },
                            { q: "State Management", a: "Correct", type: "auto" }
                        ]
                    }
                ].map((review) => (
                    <div key={review.id} className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                            <div className="flex gap-4 items-center">
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
                                    {review.student.charAt(0)}
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-800">{review.test}</h3>
                                    <p className="text-sm text-slate-600">Submitted by <span className="font-semibold">{review.student}</span> • {review.submitted}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-lg font-bold text-slate-700">{review.score}</span>
                                <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded-full uppercase tracking-wide">{review.status}</span>
                            </div>
                        </div>

                        <div className="p-6 grid md:grid-cols-3 gap-8">
                            <div className="md:col-span-2 space-y-4">
                                <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wide mb-2">Assessment Section</h4>
                                {review.items.map((item, i) => (
                                    <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100">
                                        <span className="text-sm font-medium text-slate-700">{item.q}</span>
                                        <div className="flex items-center gap-2">
                                            {item.type === 'manual' && <span className="text-xs bg-violet-100 text-violet-700 px-2 py-0.5 rounded font-bold">Review Needed</span>}
                                            <span className={`text-sm font-bold ${item.a === 'Correct' || item.a === 'Excellent' ? 'text-emerald-600' : 'text-slate-500'}`}>{item.a}</span>
                                        </div>
                                    </div>
                                ))}

                                <div className="mt-4">
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Mentor Feedback</label>
                                    <textarea className="w-full p-4 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none h-32" placeholder="Provide constructive feedback for the student..."></textarea>
                                </div>
                            </div>

                            <div className="border-l border-slate-100 pl-8 flex flex-col justify-center space-y-4">
                                <div className="p-4 bg-blue-50/50 rounded-xl border border-blue-100">
                                    <div className="flex gap-3 mb-2">
                                        <AlertCircle className="w-5 h-5 text-blue-600" />
                                        <p className="text-sm font-bold text-blue-900">Recommendation</p>
                                    </div>
                                    <p className="text-xs text-blue-700 leading-relaxed">
                                        Based on auto-grading, this student demonstrates strong understanding. Verify the manual answer section before approving.
                                    </p>
                                </div>

                                <button className="w-full py-3 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 shadow-sm">
                                    <CheckCircle className="w-5 h-5" /> Approve & Pass
                                </button>
                                <button className="w-full py-3 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold hover:bg-slate-50 transition-colors shadow-sm">
                                    Request Revision
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
