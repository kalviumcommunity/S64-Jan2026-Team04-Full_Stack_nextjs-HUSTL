import Link from "next/link";
import { Search, Filter, MoreHorizontal, Download } from "lucide-react";

export default function ApplicationsPage() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-textPrimary">My Applications</h2>
                    <p className="text-textSecondary">Track the status of your ongoing applications.</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
                        <input
                            type="text"
                            placeholder="Search applications..."
                            className="pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary w-64"
                        />
                    </div>
                    <button className="p-2 border border-slate-200 rounded-xl hover:bg-slate-50 text-textSecondary">
                        <Filter className="w-5 h-5" />
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50 border-b border-slate-200">
                                <th className="px-6 py-4 text-xs font-semibold text-muted uppercase tracking-wider">Company / Role</th>
                                <th className="px-6 py-4 text-xs font-semibold text-muted uppercase tracking-wider">Date Applied</th>
                                <th className="px-6 py-4 text-xs font-semibold text-muted uppercase tracking-wider">Status</th>
                                <th className="px-6 py-4 text-xs font-semibold text-muted uppercase tracking-wider">Last Update</th>
                                <th className="px-6 py-4 text-xs font-semibold text-muted uppercase tracking-wider text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {[
                                {
                                    company: "Stripe",
                                    role: "Backend Developer Intern",
                                    logo: "S",
                                    bg: "bg-indigo-600",
                                    date: "Feb 2, 2026",
                                    status: "Interview",
                                    statusColor: "bg-blue-100 text-blue-700",
                                    update: "2 hours ago"
                                },
                                {
                                    company: "Vercel",
                                    role: "Frontend Engineer Intern",
                                    logo: "▲",
                                    bg: "bg-black",
                                    date: "Jan 28, 2026",
                                    status: "Applied",
                                    statusColor: "bg-slate-100 text-slate-600",
                                    update: "3 days ago"
                                },
                                {
                                    company: "Linear",
                                    role: "Product Design Intern",
                                    logo: "L",
                                    bg: "bg-purple-600",
                                    date: "Jan 15, 2026",
                                    status: "Offer",
                                    statusColor: "bg-green-100 text-green-700",
                                    update: "1 week ago"
                                }
                            ].map((app, i) => (
                                <tr key={i} className="hover:bg-slate-50/50 transition-colors group">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className={`w-10 h-10 ${app.bg} text-white rounded-lg flex items-center justify-center font-bold`}>
                                                {app.logo}
                                            </div>
                                            <div>
                                                <p className="font-bold text-textPrimary text-sm">{app.company}</p>
                                                <p className="text-xs text-textSecondary">{app.role}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-textSecondary font-medium">
                                        {app.date}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${app.statusColor}`}>
                                            {app.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-muted">
                                        {app.update}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-muted hover:text-primary transition-colors">
                                            <MoreHorizontal className="w-5 h-5" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Paginationish footer */}
                <div className="px-6 py-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between text-xs text-textSecondary">
                    <span>Showing 3 of 12 applications</span>
                    <div className="flex gap-2">
                        <button className="px-3 py-1 bg-white border border-slate-200 rounded hover:bg-slate-100 transition-colors">Previous</button>
                        <button className="px-3 py-1 bg-white border border-slate-200 rounded hover:bg-slate-100 transition-colors">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
