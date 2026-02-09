import { Download, Calendar, BarChart2, TrendingUp, Users, Target } from "lucide-react";

export default function ReportsPage() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold text-slate-900">Reports & Analytics</h2>
                    <p className="text-slate-500">Deep dive into platform performance and success metrics.</p>
                </div>
                <div className="flex gap-2">
                    <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 bg-white rounded-lg text-sm font-medium hover:bg-slate-50">
                        <Calendar className="w-4 h-4" /> This Month
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded-lg text-sm font-bold hover:bg-blue-800 shadow-sm">
                        <Download className="w-4 h-4" /> Export CSV
                    </button>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {/* Conversion Funnel */}
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                    <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
                        <Target className="w-5 h-5 text-blue-600" /> Internship Funnel
                    </h3>
                    <div className="space-y-6">
                        {[
                            { label: "Total Applications", value: "1,240", percent: 100, color: "bg-blue-100" },
                            { label: "Passed Eligibility Test", value: "850", percent: 68, color: "bg-blue-300" },
                            { label: "Interviewed", value: "320", percent: 25, color: "bg-blue-500" },
                            { label: "Offers Extended", value: "45", percent: 3.6, color: "bg-emerald-500" }
                        ].map((step, i) => (
                            <div key={i} className="relative">
                                <div className="flex justify-between text-sm mb-1 font-medium">
                                    <span className="text-slate-700">{step.label}</span>
                                    <span className="text-slate-900">{step.value}</span>
                                </div>
                                <div className="w-full bg-slate-100 rounded-full h-3">
                                    <div className={`h-3 rounded-full ${step.color}`} style={{ width: `${step.percent}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Student Engagement */}
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                    <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
                        <Users className="w-5 h-5 text-violet-600" /> User Engagement Stats
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-slate-50 rounded-lg">
                            <p className="text-xs text-slate-500 uppercase font-bold">Daily Active Users</p>
                            <p className="text-2xl font-bold text-slate-900 mt-1">1,402</p>
                            <p className="text-xs text-emerald-600 font-bold mt-1">+12% vs last week</p>
                        </div>
                        <div className="p-4 bg-slate-50 rounded-lg">
                            <p className="text-xs text-slate-500 uppercase font-bold">Avg. Session Time</p>
                            <p className="text-2xl font-bold text-slate-900 mt-1">18 min</p>
                            <p className="text-xs text-slate-500 font-bold mt-1">Stable</p>
                        </div>
                        <div className="p-4 bg-slate-50 rounded-lg">
                            <p className="text-xs text-slate-500 uppercase font-bold">Tests Completed</p>
                            <p className="text-2xl font-bold text-slate-900 mt-1">450</p>
                            <p className="text-xs text-emerald-600 font-bold mt-1">+24% vs last week</p>
                        </div>
                        <div className="p-4 bg-slate-50 rounded-lg">
                            <p className="text-xs text-slate-500 uppercase font-bold">Feedback Given</p>
                            <p className="text-2xl font-bold text-slate-900 mt-1">320</p>
                            <p className="text-xs text-slate-500 font-bold mt-1">100% Response Rate</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
