import Link from "next/link";
import { MessageSquare, ArrowUpRight, Search } from "lucide-react";

export default function FeedbackHistoryPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-slate-800">Feedback History</h2>
                    <p className="text-slate-500">Record of all mentorship sessions and reviews.</p>
                </div>
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input type="text" placeholder="Search feedback..." className="pl-9 pr-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500" />
                </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-slate-50 border-b border-slate-200">
                        <tr>
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Student</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Date</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Type</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Highlights</th>
                            <th className="px-6 py-4"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {[
                            { student: "Kartik", date: "Feb 02, 2026", type: "Weekly Sync", highlight: "Discussed system design patterns & React performance." },
                            { student: "Sarah Miller", date: "Jan 28, 2026", type: "Portfolio Review", highlight: "Suggested improvements for case study layout." },
                            { student: "Michael Chen", date: "Jan 25, 2026", type: "Code Review", highlight: "Refactored API endpoint structure." }
                        ].map((item, i) => (
                            <tr key={i} className="hover:bg-slate-50 transition-colors">
                                <td className="px-6 py-4 font-bold text-slate-800">{item.student}</td>
                                <td className="px-6 py-4 text-slate-500 text-sm">{item.date}</td>
                                <td className="px-6 py-4">
                                    <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs font-bold">{item.type}</span>
                                </td>
                                <td className="px-6 py-4 text-slate-600 text-sm truncate max-w-xs">{item.highlight}</td>
                                <td className="px-6 py-4 text-right">
                                    <Link href={`/mentor/feedback/1`} className="text-blue-600 hover:underline text-sm font-medium inline-flex items-center gap-1">
                                        View <ArrowUpRight className="w-3 h-3" />
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
