import Link from "next/link";
import {
    Users,
    Briefcase,
    TrendingUp,
    AlertCircle,
    ArrowUpRight,
    Monitor,
    CheckCircle,
    FileText
} from "lucide-react";

export default function AdminDashboard() {
    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-2xl font-bold text-slate-900">Platform Overview</h2>
                <p className="text-slate-500">Welcome back. Here's what's happening on HUSTL today.</p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { label: "Total Students", value: "2,543", change: "+12% this month", icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
                    { label: "Active Internships", value: "186", change: "+5 new today", icon: Briefcase, color: "text-violet-600", bg: "bg-violet-50" },
                    { label: "Pending Applications", value: "482", change: "Requires attention", icon: FileText, color: "text-amber-600", bg: "bg-amber-50" },
                    { label: "System Uptime", value: "99.9%", change: "Last 30 days", icon: Monitor, color: "text-emerald-600", bg: "bg-emerald-50" },
                ].map((stat, i) => (
                    <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-4">
                            <div className={`w-12 h-12 ${stat.bg} rounded-xl flex items-center justify-center ${stat.color}`}>
                                <stat.icon className="w-6 h-6" />
                            </div>
                            {i === 3 ? <CheckCircle className="w-5 h-5 text-emerald-500" /> : <TrendingUp className="w-5 h-5 text-slate-300" />}
                        </div>
                        <h3 className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</h3>
                        <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                        <p className="text-xs font-semibold text-slate-400 mt-2">{stat.change}</p>
                    </div>
                ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Chart/Activity Area */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Growth Chart Placeholder */}
                    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h3 className="font-bold text-slate-900">User Growth</h3>
                                <p className="text-sm text-slate-500">Student and mentor registrations over time</p>
                            </div>
                            <select className="px-3 py-1.5 border border-slate-200 rounded-lg text-sm bg-slate-50 font-medium">
                                <option>Last 30 Days</option>
                                <option>Last Quarter</option>
                                <option>Year to Date</option>
                            </select>
                        </div>
                        <div className="h-64 flex items-end justify-between px-4 pb-4 border-b border-l border-slate-100 gap-2">
                            {[40, 65, 45, 80, 55, 90, 70, 85, 95, 75, 60, 100].map((h, i) => (
                                <div key={i} className="w-full bg-blue-600/10 rounded-t-sm relative group hover:bg-blue-600/20 transition-colors" style={{ height: `${h}%` }}>
                                    <div className="absolute top-0 w-full bg-blue-600 h-1 rounded-t-sm"></div>
                                    {/* Tooltip hint */}
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                        {h * 10} Users
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between mt-4 text-xs text-slate-400 font-medium uppercase tracking-wide">
                            <span>Jan 01</span>
                            <span>Jan 15</span>
                            <span>Feb 01</span>
                        </div>
                    </div>

                    {/* Recent System Alerts / Actions */}
                    <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
                        <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center">
                            <h3 className="font-bold text-slate-900">System Alerts & Logs</h3>
                            <button className="text-sm text-blue-600 hover:underline font-medium">View All Logs</button>
                        </div>
                        <div className="divide-y divide-slate-100">
                            {[
                                { msg: "New Mentor Application received from Dr. Sarah Wilson", type: "info", time: "12 min ago" },
                                { msg: "High traffic detected on Internship API", type: "warning", time: "45 min ago" },
                                { msg: "Database backup completed successfully", type: "success", time: "2 hours ago" },
                                { msg: "Failed login attempts blocked (IP: 192.168.x.x)", type: "danger", time: "4 hours ago" }
                            ].map((log, i) => (
                                <div key={i} className="p-4 flex items-start gap-4 hover:bg-slate-50 transition-colors">
                                    <div className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 ${log.type === 'info' ? 'bg-blue-500' :
                                            log.type === 'warning' ? 'bg-amber-500' :
                                                log.type === 'success' ? 'bg-emerald-500' : 'bg-red-500'
                                        }`}></div>
                                    <div className="flex-1">
                                        <p className="text-sm text-slate-700 font-medium">{log.msg}</p>
                                        <p className="text-xs text-slate-400 mt-1">{log.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column - Quick Stats & Actions */}
                <div className="space-y-6">
                    <div className="bg-slate-900 rounded-xl p-6 text-white shadow-lg shadow-slate-900/10">
                        <h3 className="font-bold mb-4 flex items-center gap-2">
                            <AlertCircle className="w-5 h-5 text-amber-500" /> Actions Required
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex justify-between items-center border-b border-white/10 pb-3 last:border-0 last:pb-0">
                                <span className="text-sm text-slate-300">New Company Approvals</span>
                                <span className="bg-amber-500/20 text-amber-400 px-2 py-1 rounded text-xs font-bold">3 Pending</span>
                            </li>
                            <li className="flex justify-between items-center border-b border-white/10 pb-3 last:border-0 last:pb-0">
                                <span className="text-sm text-slate-300">Flagged User Content</span>
                                <span className="bg-red-500/20 text-red-400 px-2 py-1 rounded text-xs font-bold">2 Reports</span>
                            </li>
                            <li className="flex justify-between items-center border-b border-white/10 pb-3 last:border-0 last:pb-0">
                                <span className="text-sm text-slate-300">Support Tickets</span>
                                <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs font-bold">12 Open</span>
                            </li>
                        </ul>
                        <button className="w-full mt-6 py-2 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-100 transition-colors text-sm">
                            Review All
                        </button>
                    </div>

                    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                        <h3 className="font-bold text-slate-900 mb-4">Quick Links</h3>
                        <div className="space-y-2">
                            {[
                                "Add New Internship",
                                "Create Eligibility Test",
                                "Invite Admin User",
                                "Export Monthly Report"
                            ].map((link, i) => (
                                <button key={i} className="flex items-center justify-between w-full p-3 rounded-lg border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all text-left group">
                                    <span className="text-sm text-slate-700 font-medium group-hover:text-blue-700">{link}</span>
                                    <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-blue-500" />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
