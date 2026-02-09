import { Search, Plus, FileCheck, Brain, Code } from "lucide-react";

export default function TestsManagementPage() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold text-slate-900">Eligibility Tests</h2>
                    <p className="text-slate-500">Manage technical assessments and cutoff scores.</p>
                </div>
                <button className="px-5 py-2.5 bg-blue-700 text-white font-bold rounded-lg hover:bg-blue-800 shadow-sm transition-colors text-sm flex items-center gap-2">
                    <Plus className="w-4 h-4" /> Create New Test
                </button>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {[
                    { title: "Backend Architecture", type: "Technical", questions: 15, duration: "45 min", passing: "70%", active: true, assignments: 12 },
                    { title: "React Fundamentals", type: "Frontend", questions: 20, duration: "60 min", passing: "75%", active: true, assignments: 8 },
                    { title: "System Design Basics", type: "Architectural", questions: 5, duration: "30 min", passing: "60%", active: false, assignments: 0 },
                ].map((test, i) => (
                    <div key={i} className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-blue-50 text-blue-700 rounded-lg">
                                {test.type === 'Frontend' ? <Code className="w-6 h-6" /> : <Brain className="w-6 h-6" />}
                            </div>
                            <div className={`w-3 h-3 rounded-full ${test.active ? 'bg-emerald-500' : 'bg-slate-300'}`}></div>
                        </div>

                        <h3 className="text-lg font-bold text-slate-900 mb-1">{test.title}</h3>
                        <p className="text-sm text-slate-500 mb-6">{test.type} Assessment</p>

                        <div className="space-y-2 mb-6">
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-500">Duration</span>
                                <span className="font-medium text-slate-900">{test.duration}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-500">Passing Score</span>
                                <span className="font-medium text-slate-900">{test.passing}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-500">Questions</span>
                                <span className="font-medium text-slate-900">{test.questions}</span>
                            </div>
                        </div>

                        <div className="flex gap-2">
                            <button className="flex-1 py-2 border border-slate-200 rounded-lg text-slate-600 font-medium hover:bg-slate-50 text-sm">Edit</button>
                            <button className="flex-1 py-2 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 text-sm">Assign</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
