import Link from "next/link";
import {
    Users,
    Clock,
    CheckCircle,
    TrendingUp,
    MoreHorizontal,
    ArrowRight
} from "lucide-react";

export default function MentorDashboard() {
    return (
        <div className="space-y-8">
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                    { label: "Assigned Students", value: "24", icon: Users, color: "bg-blue-600", trend: "+3 this month" },
                    { label: "Pending Reviews", value: "5", icon: Clock, color: "bg-amber-500", trend: "Needs attention" },
                    { label: "Feedback Given", value: "142", icon: CheckCircle, color: "bg-emerald-500", trend: "Last 30 days" },
                    { label: "Avg. Student Score", value: "88%", icon: TrendingUp, color: "bg-violet-600", trend: "Top 10%" }
                ].map((stat, i) => (
                    <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-4">
                            <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center text-white shadow-lg shadow-black/5`}>
                                <stat.icon className="w-6 h-6" />
                            </div>
                            <span className="text-xs font-semibold text-slate-400">{stat.trend}</span>
                        </div>
                        <h3 className="text-3xl font-bold text-slate-800 mb-1">{stat.value}</h3>
                        <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
                    </div>
                ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Column - Tasks & Activity */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Pending Tasks */}
                    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                            <h3 className="font-bold text-slate-800">Pending Actions</h3>
                            <Link href="/mentor/reviews" className="text-sm font-medium text-blue-700 hover:underline">View all</Link>
                        </div>
                        <div className="divide-y divide-slate-100">
                            {[
                                { type: "Test Review", title: "Backend Architecture Assessment", student: "Michael Chen", time: "2 hours ago", status: "Urgent", statusColor: "text-amber-600 bg-amber-50" },
                                { type: "Feedback Request", title: "Portfolio Project: E-commerce", student: "Sarah Miller", time: "4 hours ago", status: "Normal", statusColor: "text-blue-600 bg-blue-50" },
                                { type: "Eligibility Check", title: "Full Stack Internship - Stripe", student: "David Kim", time: "1 day ago", status: "Review", statusColor: "text-violet-600 bg-violet-50" },
                            ].map((task, i) => (
                                <div key={i} className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors">
                                    <div className="flex gap-4 items-start">
                                        <div className="mt-1">
                                            <span className={`px-2 py-1 rounded text-xs font-bold uppercase tracking-wide ${task.statusColor}`}>
                                                {task.status}
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-800 text-sm">{task.title}</h4>
                                            <p className="text-slate-500 text-sm mt-0.5">Student: <span className="text-slate-700 font-medium">{task.student}</span></p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="text-xs text-slate-400 font-medium">{task.time}</span>
                                        <button className="px-4 py-2 bg-white border border-slate-200 text-slate-700 text-sm font-medium rounded-lg hover:bg-slate-50 transition-colors">
                                            Review
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Recent Students Layout */}
                    <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
                        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                            <h3 className="font-bold text-slate-800">Recent Student Activity</h3>
                        </div>
                        <div className="p-6">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                                        <th className="pb-4">Student</th>
                                        <th className="pb-4">Action</th>
                                        <th className="pb-4">Project/Role</th>
                                        <th className="pb-4 text-right">Date</th>
                                    </tr>
                                </thead>
                                <tbody className="space-y-4">
                                    {[
                                        { name: "Emily Davis", action: "Applied to", target: "Frontend Intern @ Vercel", date: "Today" },
                                        { name: "James Wilson", action: "Completed", target: "React Advanced Test", date: "Yesterday" },
                                        { name: "Lisa Wong", action: "Updated", target: "Resume v3.pdf", date: "Jan 24" },
                                    ].map((activity, i) => (
                                        <tr key={i} className="border-b border-slate-50 last:border-0 hover:bg-slate-50/50">
                                            <td className="py-3 font-medium text-slate-800">{activity.name}</td>
                                            <td className="py-3 text-slate-500 text-sm">{activity.action}</td>
                                            <td className="py-3 text-slate-800 text-sm font-medium">{activity.target}</td>
                                            <td className="py-3 text-slate-400 text-sm text-right">{activity.date}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Right Column - Quick Actions & Insights */}
                <div className="space-y-6">
                    <div className="bg-gradient-to-br from-blue-800 to-indigo-900 rounded-xl p-6 text-white shadow-lg shadow-blue-900/20">
                        <h3 className="font-bold text-lg mb-2">Weekly Insight 💡</h3>
                        <p className="text-blue-100 text-sm leading-relaxed mb-4">
                            Students who receive feedback within 24 hours are 40% more likely to clear technical screenings.
                        </p>
                        <div className="w-full bg-black/20 rounded-full h-1.5 mb-2">
                            <div className="bg-emerald-400 rounded-full h-1.5 w-3/4"></div>
                        </div>
                        <div className="flex justify-between text-xs text-blue-200 font-medium">
                            <span>Response Rate</span>
                            <span>75%</span>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                        <h3 className="font-bold text-slate-800 mb-4">Quick Actions</h3>
                        <div className="space-y-3">
                            <Link href="/mentor/reviews" className="flex items-center justify-between p-3 rounded-lg border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all group">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                        <CheckCircle className="w-4 h-4" />
                                    </div>
                                    <span className="text-sm font-medium text-slate-700">Review Test Results</span>
                                </div>
                                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
                            </Link>
                            <Link href="/mentor/students" className="flex items-center justify-between p-3 rounded-lg border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all group">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                                        <Users className="w-4 h-4" />
                                    </div>
                                    <span className="text-sm font-medium text-slate-700">View Student Progress</span>
                                </div>
                                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-violet-600" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
