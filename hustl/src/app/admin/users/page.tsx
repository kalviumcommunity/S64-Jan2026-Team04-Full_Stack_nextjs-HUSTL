import { Search, Filter, MoreVertical, Shield, User, GraduationCap } from "lucide-react";

export default function UserManagementPage() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold text-slate-900">User Management</h2>
                    <p className="text-slate-500">Manage students, mentors, and administrators.</p>
                </div>
                <button className="px-5 py-2.5 bg-blue-700 text-white font-bold rounded-lg hover:bg-blue-800 shadow-sm transition-colors text-sm">
                    + Add New User
                </button>
            </div>

            {/* Tabs & Search */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="border-b border-slate-200 px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex gap-1 bg-slate-100 p-1 rounded-lg">
                        <button className="px-4 py-1.5 bg-white text-slate-900 shadow-sm rounded-md text-sm font-bold">All Users</button>
                        <button className="px-4 py-1.5 text-slate-500 hover:text-slate-900 rounded-md text-sm font-medium transition-colors">Students</button>
                        <button className="px-4 py-1.5 text-slate-500 hover:text-slate-900 rounded-md text-sm font-medium transition-colors">Mentors</button>
                        <button className="px-4 py-1.5 text-slate-500 hover:text-slate-900 rounded-md text-sm font-medium transition-colors">Admins</button>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input type="text" placeholder="Search users..." className="pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500" />
                        </div>
                        <button className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-500">
                            <Filter className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Users Table */}
                <table className="w-full text-left border-collapse">
                    <thead className="bg-slate-50 border-b border-slate-200">
                        <tr>
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">User</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Role</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Joined</th>
                            <th className="px-6 py-4 text-right"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {[
                            { name: "Kartik", email: "kartik@example.com", role: "Student", status: "Active", joined: "Jan 12, 2026" },
                            { name: "Sarah Wilson", email: "sarah@hustl.com", role: "Mentor", status: "Active", joined: "Dec 05, 2025" },
                            { name: "Admin User", email: "admin@hustl.com", role: "Admin", status: "Active", joined: "Nov 01, 2025" },
                            { name: "John Doe", email: "john@example.com", role: "Student", status: "Suspended", joined: "Feb 01, 2026" },
                        ].map((user, i) => (
                            <tr key={i} className="hover:bg-slate-50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 font-bold">
                                            {user.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900 text-sm">{user.name}</p>
                                            <p className="text-xs text-slate-500">{user.email}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        {user.role === 'Admin' && <Shield className="w-4 h-4 text-red-500" />}
                                        {user.role === 'Mentor' && <User className="w-4 h-4 text-blue-500" />}
                                        {user.role === 'Student' && <GraduationCap className="w-4 h-4 text-emerald-500" />}
                                        <span className="text-sm text-slate-700 font-medium">{user.role}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${user.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'
                                        }`}>
                                        {user.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-slate-500">
                                    {user.joined}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-slate-400 hover:text-slate-600 transition-colors">
                                        <MoreVertical className="w-5 h-5" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Pagination Footer */}
                <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex justify-between items-center text-xs text-slate-500">
                    <span>Showing 4 of 2,543 users</span>
                    <div className="flex gap-2">
                        <button className="px-3 py-1 bg-white border border-slate-200 rounded hover:bg-slate-100">Previous</button>
                        <button className="px-3 py-1 bg-white border border-slate-200 rounded hover:bg-slate-100">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
