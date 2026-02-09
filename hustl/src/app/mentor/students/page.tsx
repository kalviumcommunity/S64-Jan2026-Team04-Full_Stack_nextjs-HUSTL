import Link from "next/link";
import { Search, Filter, MoreHorizontal, User } from "lucide-react";

export default function StudentsPage() {
    const students = [
        { id: 1, name: "Kartik", role: "Full Stack Developer", status: "Active", progress: 85, lastActive: "2 hours ago", avatar: "K", color: "bg-orange-500" },
        { id: 2, name: "Sarah Miller", role: "UI/UX Designer", status: "Active", progress: 92, lastActive: "1 day ago", avatar: "S", color: "bg-purple-500" },
        { id: 3, name: "Michael Chen", role: "Backend Engineer", status: "At Risk", progress: 45, lastActive: "3 days ago", avatar: "M", color: "bg-blue-500" },
        { id: 4, name: "David Kim", role: "Mobile Developer", status: "Active", progress: 78, lastActive: "5 hours ago", avatar: "D", color: "bg-green-500" },
        { id: 5, name: "Emily Davis", role: "Frontend Developer", status: "Inactive", progress: 20, lastActive: "1 week ago", avatar: "E", color: "bg-red-500" },
    ];

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-slate-800">My Students</h2>
                    <p className="text-slate-500">Manage and track progress of your assigned mentees.</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search students..."
                            className="pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 w-64 shadow-sm"
                        />
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 transition-colors font-medium text-sm shadow-sm">
                        <Filter className="w-4 h-4" /> Filter
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-slate-50 border-b border-slate-200">
                        <tr>
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Student Name</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Target Role</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Overall Progress</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Last Active</th>
                            <th className="px-6 py-4 text-right"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {students.map((student) => (
                            <tr key={student.id} className="hover:bg-slate-50/50 transition-colors group">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-10 h-10 rounded-full ${student.color} flex items-center justify-center text-white font-bold shadow-sm`}>
                                            {student.avatar}
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-800 text-sm">{student.name}</p>
                                            <Link href={`/mentor/students/${student.id}`} className="text-xs text-blue-600 hover:underline">View Profile</Link>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-slate-600">
                                    {student.role}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="flex-1 w-24 bg-slate-100 rounded-full h-2">
                                            <div className={`h-2 rounded-full ${student.progress > 80 ? 'bg-emerald-500' : student.progress > 50 ? 'bg-blue-500' : 'bg-red-500'}`} style={{ width: `${student.progress}%` }}></div>
                                        </div>
                                        <span className="text-xs font-medium text-slate-600">{student.progress}%</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${student.status === 'Active' ? 'bg-emerald-100 text-emerald-700' :
                                            student.status === 'At Risk' ? 'bg-red-100 text-red-700' :
                                                'bg-slate-100 text-slate-600'
                                        }`}>
                                        {student.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-slate-500">
                                    {student.lastActive}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <Link href={`/mentor/students/${student.id}`} className="p-2 hover:bg-slate-100 rounded-full inline-flex text-slate-400 hover:text-blue-600 transition-colors">
                                        <MoreHorizontal className="w-5 h-5" />
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
