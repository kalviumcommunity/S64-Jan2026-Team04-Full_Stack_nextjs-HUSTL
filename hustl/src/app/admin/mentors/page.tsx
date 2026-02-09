import { Search, UserCheck, Star, Activity, MoreHorizontal } from "lucide-react";

export default function MentorManagementPage() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold text-slate-900">Mentor Oversight</h2>
                    <p className="text-slate-500">Monitor mentor performance and assignments.</p>
                </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-200 flex justify-between items-center bg-slate-50">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input type="text" placeholder="Find a mentor..." className="pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm w-72 focus:outline-none focus:border-blue-500" />
                    </div>
                </div>

                <table className="w-full text-left">
                    <thead className="bg-white border-b border-slate-200">
                        <tr>
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Mentor Profile</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Current Load</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Rating</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Reviews Given</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Status</th>
                            <th className="px-6 py-4 text-right"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {[
                            { name: "Sarah Wilson", role: "Senior Engineering Mentor", load: 24, max: 30, rating: 4.8, reviews: 142, status: "Active" },
                            { name: "James Carter", role: "Product Design Mentor", load: 15, max: 20, rating: 4.9, reviews: 98, status: "Active" },
                            { name: "Elena Rodriguez", role: "Data Science Mentor", load: 5, max: 15, rating: 4.5, reviews: 32, status: "On Leave" },
                        ].map((mentor, i) => (
                            <tr key={i} className="hover:bg-slate-50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold">
                                            {mentor.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900 text-sm">{mentor.name}</p>
                                            <p className="text-xs text-slate-500">{mentor.role}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-24 bg-slate-100 rounded-full h-2">
                                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${(mentor.load / mentor.max) * 100}%` }}></div>
                                        </div>
                                        <span className="text-xs font-medium text-slate-600">{mentor.load}/{mentor.max}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-1 text-sm font-bold text-slate-700">
                                        <Star className="w-4 h-4 text-amber-500 fill-amber-500" /> {mentor.rating}
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-slate-600 font-medium">
                                    {mentor.reviews}
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${mentor.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-600'
                                        }`}>
                                        {mentor.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100">
                                        <MoreHorizontal className="w-5 h-5" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
