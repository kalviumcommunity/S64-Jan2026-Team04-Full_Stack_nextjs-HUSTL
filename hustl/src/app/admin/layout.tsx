import Link from "next/link";
import {
    LayoutDashboard,
    Users,
    Briefcase,
    FileCheck,
    UserCheck,
    BarChart,
    Settings,
    LogOut,
    Bell,
    Shield,
    Search
} from "lucide-react";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-slate-50 flex font-sans text-slate-900">
            {/* Sidebar */}
            <aside className="w-64 bg-slate-900 text-slate-300 fixed h-full hidden lg:flex flex-col z-20">
                <div className="p-6 border-b border-slate-800 flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/20">
                        <Shield className="w-5 h-5" />
                    </div>
                    <span className="text-xl font-bold text-white tracking-tight">
                        HUSTL <span className="text-blue-500 text-xs uppercase tracking-wider font-extrabold ml-1">Admin</span>
                    </span>
                </div>

                <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                    <div className="px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">
                        Platform
                    </div>
                    <Link href="/admin" className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-white rounded-lg transition-colors font-medium">
                        <LayoutDashboard className="w-5 h-5" />
                        Dashboard
                    </Link>
                    <Link href="/admin/reports" className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-white rounded-lg transition-colors font-medium">
                        <BarChart className="w-5 h-5" />
                        Analytics
                    </Link>

                    <div className="px-4 py-3 mt-6 text-xs font-bold text-slate-500 uppercase tracking-wider">
                        Management
                    </div>
                    <Link href="/admin/users" className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-white rounded-lg transition-colors font-medium">
                        <Users className="w-5 h-5" />
                        Users
                    </Link>
                    <Link href="/admin/internships" className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-white rounded-lg transition-colors font-medium">
                        <Briefcase className="w-5 h-5" />
                        Internships
                    </Link>
                    <Link href="/admin/tests" className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-white rounded-lg transition-colors font-medium">
                        <FileCheck className="w-5 h-5" />
                        Eligibility Tests
                    </Link>
                    <Link href="/admin/mentors" className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-white rounded-lg transition-colors font-medium">
                        <UserCheck className="w-5 h-5" />
                        Mentorship
                    </Link>

                    <div className="px-4 py-3 mt-6 text-xs font-bold text-slate-500 uppercase tracking-wider">
                        System
                    </div>
                    <Link href="/admin/settings" className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-white rounded-lg transition-colors font-medium">
                        <Settings className="w-5 h-5" />
                        Settings
                    </Link>
                </nav>

                <div className="p-4 border-t border-slate-800">
                    <button className="flex items-center gap-3 w-full px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-lg font-medium transition-colors">
                        <LogOut className="w-5 h-5" />
                        Sign Out
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 lg:ml-64 bg-slate-50 min-h-screen flex flex-col">
                {/* Top Header */}
                <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-30 shadow-sm">
                    {/* Search/Breadcrumb Placeholder */}
                    <div className="flex items-center gap-4">
                        <div className="relative hidden md:block">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Global search..."
                                className="pl-9 pr-4 py-2 bg-slate-100 border-transparent focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 rounded-lg text-sm w-64 transition-all outline-none"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-100">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                            <span className="text-xs font-bold uppercase tracking-wider">System Healthy</span>
                        </div>

                        <button className="relative text-slate-500 hover:text-blue-700 transition-colors">
                            <Bell className="w-5 h-5" />
                            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                        </button>

                        <div className="flex items-center gap-3 pl-6 border-l border-slate-200">
                            <div className="text-right hidden md:block">
                                <p className="text-sm font-bold text-slate-800">Admin User</p>
                                <p className="text-xs text-slate-500">Super Admin</p>
                            </div>
                            <div className="h-9 w-9 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold shadow-md">
                                A
                            </div>
                        </div>
                    </div>
                </header>

                <div className="p-8 max-w-[1600px] w-full mx-auto flex-1">
                    {children}
                </div>
            </main>
        </div>
    );
}
