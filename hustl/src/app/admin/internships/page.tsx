import { Search, Filter, Briefcase, Plus, Lock, Unlock, Eye } from "lucide-react";

export default function InternshipManagementPage() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold text-slate-900">Internship Management</h2>
                    <p className="text-slate-500">Create, edit, and monitor internship listings.</p>
                </div>
                <button className="px-5 py-2.5 bg-blue-700 text-white font-bold rounded-lg hover:bg-blue-800 shadow-sm transition-colors text-sm flex items-center gap-2">
                    <Plus className="w-4 h-4" /> Add Internship
                </button>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
                <div className="p-6 border-b border-slate-200 flex justify-between items-center gap-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input type="text" placeholder="Search roles or companies..." className="pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm w-80 focus:outline-none focus:border-blue-500" />
                    </div>

                    <div className="flex gap-2">
                        <select className="px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-700 bg-white">
                            <option>All Statuses</option>
                            <option>Active</option>
                            <option>Draft</option>
                            <option>Closed</option>
                        </select>
                    </div>
                </div>

                <table className="w-full text-left">
                    <thead className="bg-slate-50 border-b border-slate-200">
                        <tr>
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Role</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Company</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Applications</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Status</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Eligibility</th>
                            <th className="px-6 py-4 text-right text-xs font-bold text-slate-500 uppercase">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {[
                            { role: "Backend Developer Intern", company: "Stripe", apps: 142, status: "Active", test: "Required" },
                            { role: "Frontend Engineer Intern", company: "Vercel", apps: 89, status: "Active", test: "None" },
                            { role: "Product Design Intern", company: "Linear", apps: 56, status: "Closed", test: "Required" },
                            { role: "Data Science Intern", company: "Netflix", apps: 0, status: "Draft", test: "Pending" }
                        ].map((job, i) => (
                            <tr key={i} className="hover:bg-slate-50 transition-colors">
                                <td className="px-6 py-4 font-bold text-slate-900 text-sm">{job.role}</td>
                                <td className="px-6 py-4 text-slate-600 text-sm">{job.company}</td>
                                <td className="px-6 py-4 text-slate-600 text-sm">{job.apps}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold capitalize ${job.status === 'Active' ? 'bg-emerald-100 text-emerald-700' :
                                            job.status === 'Draft' ? 'bg-slate-100 text-slate-600' : 'bg-red-100 text-red-700'
                                        }`}>
                                        {job.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-1.5 text-sm text-slate-600 font-medium">
                                        {job.test === 'Required' ? <Lock className="w-3 h-3 text-amber-500" /> : <Unlock className="w-3 h-3 text-emerald-500" />}
                                        {job.test}
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Edit</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
