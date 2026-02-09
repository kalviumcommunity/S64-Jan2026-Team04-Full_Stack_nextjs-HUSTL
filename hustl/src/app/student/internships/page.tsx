import Link from "next/link";
import { Search, Filter, ArrowUpRight, Lock, Unlock, Zap, ChevronDown } from "lucide-react";

export default function InternshipsPage() {
    return (
        <div className="space-y-6">
            {/* Header & Search */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-textPrimary">Explore Internships</h2>
                    <p className="text-textSecondary">Discover opportunities tailored to your skills.</p>
                </div>

                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-xl text-sm font-medium hover:bg-slate-50 transition-colors bg-white">
                        <Filter className="w-4 h-4 text-textSecondary" />
                        Filters
                    </button>
                    <div className="relative">
                        <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-xl text-sm font-medium hover:bg-slate-50 transition-colors bg-white min-w-[140px] justify-between">
                            <span>Sort by: Newest</span>
                            <ChevronDown className="w-4 h-4 text-textSecondary" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Search Bar */}
            <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
                <input
                    type="text"
                    placeholder="Search by role, company, or skills (e.g. 'Frontend', 'Google', 'React')"
                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 text-textPrimary placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm"
                />
            </div>

            {/* Internship Grid */}
            <div className="grid gap-4">
                {[
                    {
                        role: "Software Engineer Intern",
                        company: "Google",
                        logo: "G",
                        bg: "bg-red-500",
                        daysAgo: "2 days ago",
                        salary: "$50/hr",
                        tags: ["Python", "C++", "Algorithms"],
                        status: "Eligible",
                        statusColor: "bg-green-100 text-green-700",
                        icon: <Unlock className="w-3 h-3" />
                    },
                    {
                        role: "Frontend Developer Intern",
                        company: "Airbnb",
                        logo: "A",
                        bg: "bg-pink-500",
                        daysAgo: "5 hours ago",
                        salary: "$42/hr",
                        tags: ["React", "GraphQL", "Design Systems"],
                        status: "Test Required",
                        statusColor: "bg-yellow-100 text-yellow-700",
                        icon: <Zap className="w-3 h-3" />
                    },
                    {
                        role: "Product Management Intern",
                        company: "Spotify",
                        logo: "S",
                        bg: "bg-green-500",
                        daysAgo: "1 week ago",
                        salary: "$38/hr",
                        tags: ["Product Strategy", "Data Analysis", "SQL"],
                        status: "Locked",
                        statusColor: "bg-slate-100 text-slate-500",
                        icon: <Lock className="w-3 h-3" />
                    },
                    {
                        role: "Full Stack Engineer Intern",
                        company: "Meta",
                        logo: "M",
                        bg: "bg-blue-600",
                        daysAgo: "3 days ago",
                        salary: "$48/hr",
                        tags: ["React", "Hack", "PHP"],
                        status: "Eligible",
                        statusColor: "bg-green-100 text-green-700",
                        icon: <Unlock className="w-3 h-3" />
                    },
                    {
                        role: "Machine Learning Intern",
                        company: "OpenAI",
                        logo: "O",
                        bg: "bg-black",
                        daysAgo: "Just now",
                        salary: "$60/hr",
                        tags: ["PyTorch", "Transformers", "NLP"],
                        status: "Test Required",
                        statusColor: "bg-yellow-100 text-yellow-700",
                        icon: <Zap className="w-3 h-3" />
                    }
                ].map((job, i) => (
                    <div key={i} className={`bg-white p-6 rounded-2xl border ${job.status === 'Locked' ? 'border-slate-200/60 opacity-75' : 'border-slate-200 hover:border-primary/30 hover:shadow-lg shadow-sm'} transition-all group flex flex-col md:flex-row items-center gap-6`}>
                        <div className={`w-14 h-14 ${job.bg} text-white rounded-xl flex items-center justify-center font-bold text-2xl flex-shrink-0 shadow-md`}>
                            {job.logo}
                        </div>

                        <div className="flex-1 w-full text-center md:text-left">
                            <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                                <h3 className="font-bold text-lg text-textPrimary group-hover:text-primary transition-colors">{job.role}</h3>
                                <span className="hidden md:inline text-slate-300">•</span>
                                <p className="text-textSecondary font-medium">{job.company}</p>
                                {job.status === 'Locked' && (
                                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-500 md:ml-2">
                                        <Lock className="w-3 h-3" /> Locked
                                    </span>
                                )}
                            </div>

                            <div className="flex flex-wrap justify-center md:justify-start gap-2">
                                {job.tags.map(tag => (
                                    <span key={tag} className="px-2.5 py-1 bg-slate-50 border border-slate-100 text-textSecondary text-xs font-medium rounded-lg">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-row md:flex-col items-center md:items-end gap-3 w-full md:w-auto justify-between md:justify-center">
                            <div className="text-right hidden md:block">
                                <p className="font-bold text-textPrimary">{job.salary}</p>
                                <p className="text-xs text-muted">{job.daysAgo}</p>
                            </div>

                            {job.status === 'Locked' ? (
                                <button disabled className="px-6 py-2.5 bg-slate-100 text-slate-400 rounded-xl font-medium text-sm cursor-not-allowed w-full md:w-auto">
                                    Not Eligible
                                </button>
                            ) : job.status === 'Test Required' ? (
                                <button className="px-6 py-2.5 bg-yellow-50 text-yellow-700 hover:bg-yellow-100 border border-yellow-200 rounded-xl font-bold text-sm transition-colors flex items-center justify-center gap-2 w-full md:w-auto">
                                    Take Test <Zap className="w-4 h-4" />
                                </button>
                            ) : (
                                <button className="px-6 py-2.5 bg-primary text-white hover:bg-primaryHover hover:shadow-lg hover:shadow-primary/20 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 w-full md:w-auto">
                                    View Details <ArrowUpRight className="w-4 h-4" />
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
