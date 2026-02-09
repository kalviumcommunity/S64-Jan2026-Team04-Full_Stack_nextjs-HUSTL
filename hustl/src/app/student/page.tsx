import {
    CheckCircle,
    Clock,
    Briefcase,
    ChevronRight,
    Lock,
    Unlock
} from "lucide-react";

export default function StudentDashboardPage() {
    return (
        <div className="space-y-8">
            {/* Welcome Section */}
            <div>
                <h2 className="text-2xl font-bold text-textPrimary">Welcome back, Kartik! 👋</h2>
                <p className="text-textSecondary">Here's what's happening with your applications today.</p>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-primary">
                            <Briefcase className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-bold bg-blue-50 text-blue-700 px-2 py-1 rounded-full">+2 this week</span>
                    </div>
                    <h3 className="text-3xl font-bold text-textPrimary mb-1">12</h3>
                    <p className="text-textSecondary text-sm font-medium">Applied Internships</p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 bg-yellow-50 rounded-full flex items-center justify-center text-yellow-600">
                            <Clock className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-bold bg-yellow-50 text-yellow-700 px-2 py-1 rounded-full">Action Needed</span>
                    </div>
                    <h3 className="text-3xl font-bold text-textPrimary mb-1">3</h3>
                    <p className="text-textSecondary text-sm font-medium">Pending Assessments</p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-secondary">
                            <CheckCircle className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-bold bg-green-50 text-green-700 px-2 py-1 rounded-full">Top 5%</span>
                    </div>
                    <h3 className="text-3xl font-bold text-textPrimary mb-1">850</h3>
                    <p className="text-textSecondary text-sm font-medium">Skill Score</p>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Column - Internships */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center justify-between">
                        <h3 className="font-bold text-textPrimary text-lg">Recommended Internships</h3>
                        <button className="text-primary text-sm font-semibold hover:underline">View All</button>
                    </div>

                    {[
                        {
                            role: "Frontend Engineer Intern",
                            company: "Vercel",
                            logo: "▲",
                            bg: "bg-black",
                            salary: "$30/hr",
                            tags: ["React", "Next.js", "TypeScript"],
                            status: "Eligible",
                            statusColor: "text-green-600 bg-green-50"
                        },
                        {
                            role: "Product Design Intern",
                            company: "Linear",
                            logo: "L",
                            bg: "bg-purple-600",
                            salary: "$35/hr",
                            tags: ["Figma", "UI/UX", "Prototyping"],
                            status: "Eligible",
                            statusColor: "text-green-600 bg-green-50"
                        },
                        {
                            role: "Backend Developer Intern",
                            company: "Stripe",
                            logo: "S",
                            bg: "bg-indigo-600",
                            salary: "$40/hr",
                            tags: ["Go", "Ruby", "API Design"],
                            status: "Test Required",
                            statusColor: "text-yellow-600 bg-yellow-50"
                        }
                    ].map((job, i) => (
                        <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-primary/30 transition-all group">
                            <div className="flex items-start justify-between">
                                <div className="flex gap-4">
                                    <div className={`w-12 h-12 ${job.bg} text-white rounded-xl flex items-center justify-center font-bold text-xl`}>
                                        {job.logo}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-textPrimary text-lg group-hover:text-primary transition-colors">{job.role}</h4>
                                        <p className="text-textSecondary text-sm font-medium">{job.company} • {job.salary}</p>

                                        <div className="flex gap-2 mt-3">
                                            {job.tags.map(tag => (
                                                <span key={tag} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-md">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col items-end gap-3">
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 ${job.statusColor}`}>
                                        {job.status === "Eligible" ? <Unlock className="w-3 h-3" /> : <Lock className="w-3 h-3" />}
                                        {job.status}
                                    </span>
                                    <button className="px-5 py-2 bg-textPrimary text-white rounded-lg text-sm font-medium hover:bg-primary transition-colors">
                                        Apply Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Column - Mentor Feedback & Progress */}
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                        <h3 className="font-bold text-textPrimary mb-4">Mentor Feedback</h3>
                        <div className="space-y-4">
                            {[
                                {
                                    mentor: "Sarah Drasner",
                                    role: "VP of Engineering",
                                    feedback: "Your portfolio is looking sharp! Focus more on explaining the 'why' in your case studies.",
                                    time: "2h ago"
                                },
                                {
                                    mentor: "Guillermo Rauch",
                                    role: "CEO",
                                    feedback: "Great progress on the full-stack project. Consider optimizing the database queries.",
                                    time: "1d ago"
                                }
                            ].map((item, i) => (
                                <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <p className="font-bold text-textPrimary text-sm">{item.mentor}</p>
                                            <p className="text-xs text-textSecondary">{item.role}</p>
                                        </div>
                                        <span className="text-xs text-muted">{item.time}</span>
                                    </div>
                                    <p className="text-sm text-textSecondary leading-relaxed">"{item.feedback}"</p>
                                </div>
                            ))}
                        </div>
                        <button className="w-full mt-4 py-2 text-primary font-medium text-sm hover:bg-slate-50 rounded-lg transition-colors">
                            View All Feedback
                        </button>
                    </div>

                    <div className="bg-gradient-to-br from-primary to-blue-600 p-6 rounded-2xl text-white shadow-lg shadow-blue-500/20">
                        <h3 className="font-bold text-lg mb-2">Weekly Goal 🎯</h3>
                        <p className="text-blue-100 text-sm mb-4">Apply to 5 internships and complete the Advanced React Assessment.</p>

                        <div className="w-full bg-black/20 rounded-full h-2 mb-2">
                            <div className="bg-white rounded-full h-2 w-3/5"></div>
                        </div>
                        <div className="flex justify-between text-xs text-blue-100 font-medium">
                            <span>3/5 Applications</span>
                            <span>60%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
