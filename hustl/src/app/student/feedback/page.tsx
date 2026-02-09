import { MessageSquare, ThumbsUp, TrendingUp, Calendar, ChevronRight } from "lucide-react";

export default function FeedbackPage() {
    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-2xl font-bold text-textPrimary">Mentor Feedback</h2>
                <p className="text-textSecondary">Insights and reviews from your project mentors.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-6">
                    {[
                        {
                            mentor: "Sarah Drasner",
                            role: "VP of Engineering @ Netlify",
                            avatarColor: "bg-red-100 text-red-600",
                            date: "Feb 04, 2026",
                            project: "E-commerce Redesign",
                            rating: 4.8,
                            feedback: "Excellent work on the component architecture. The way you handled state management using Context API was clean and efficient. One area to improve would be adding more comprehensive unit tests for edge cases.",
                            strengths: ["Architecture", "Code Quality", "Communication"],
                            improvements: ["Testing Coverage"]
                        },
                        {
                            mentor: "Guillermo Rauch",
                            role: "CEO @ Vercel",
                            avatarColor: "bg-black text-white",
                            date: "Jan 28, 2026",
                            project: "Serverless Function Optimization",
                            rating: 5.0,
                            feedback: "Impressive understanding of edge computing principles. You significantly reduced the cold start times. Keep pushing on the documentation aspect, it helps the team extensively.",
                            strengths: ["Performance Tuning", "Problem Solving"],
                            improvements: ["Documentation"]
                        }
                    ].map((item, i) => (
                        <div key={i} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex gap-4">
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${item.avatarColor}`}>
                                        {item.mentor.charAt(0)}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-textPrimary text-lg">{item.mentor}</h3>
                                        <p className="text-xs text-textSecondary font-medium">{item.role}</p>
                                        <div className="flex items-center gap-2 mt-1 text-xs text-muted">
                                            <Calendar className="w-3 h-3" /> {item.date}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end">
                                    <div className="px-3 py-1 bg-yellow-50 text-yellow-700 rounded-full text-xs font-bold flex items-center gap-1">
                                        ★ {item.rating}
                                    </div>
                                </div>
                            </div>

                            <div className="mb-6">
                                <p className="text-xs font-bold text-muted uppercase tracking-wider mb-2">Project: {item.project}</p>
                                <p className="text-textSecondary leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
                                    "{item.feedback}"
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-xs font-bold text-green-600 mb-2 flex items-center gap-1"><ThumbsUp className="w-3 h-3" /> Strengths</p>
                                    <div className="flex flex-wrap gap-2">
                                        {item.strengths.map(tag => (
                                            <span key={tag} className="px-2 py-1 bg-green-50 text-green-700 rounded-md text-xs font-medium border border-green-100">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-blue-600 mb-2 flex items-center gap-1"><TrendingUp className="w-3 h-3" /> To Improve</p>
                                    <div className="flex flex-wrap gap-2">
                                        {item.improvements.map(tag => (
                                            <span key={tag} className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs font-medium border border-blue-100">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats Side */}
                <div className="space-y-6">
                    <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-6 text-white shadow-lg shadow-primary/20">
                        <h3 className="font-bold text-lg mb-1">Feedback Summary</h3>
                        <p className="text-white/80 text-sm mb-6">Your performance over the last 30 days.</p>

                        <div className="flex items-end gap-2 mb-2">
                            <span className="text-4xl font-bold">4.9</span>
                            <span className="text-lg text-white/80 mb-1">/ 5.0</span>
                        </div>
                        <div className="w-full bg-black/20 rounded-full h-1.5 mb-6">
                            <div className="bg-white rounded-full h-1.5 w-[98%]"></div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                            <div>
                                <p className="text-2xl font-bold">12</p>
                                <p className="text-xs text-white/70">Reviews</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold">8</p>
                                <p className="text-xs text-white/70">Mentors</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
                        <h3 className="font-bold text-textPrimary mb-4">Request Feedback</h3>
                        <p className="text-sm text-textSecondary mb-4">Completed a milestone? Ask your mentor for a review.</p>
                        <button className="w-full py-2.5 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all text-sm">
                            Request New Review
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
